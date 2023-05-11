import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../firebase";
import { ChatBoardPageContainer, DetailContainer } from "./index.style";
import { getIpAddress } from "../../services/ip-address";
import { GuestType, GuestTypeKey } from "../../interfaces/user";
import { FirebaseCollection, LocalStorageKey } from "../../interfaces/database";
import CreateGuest from "../../components/chat/createGuest";
import Chat from "../../components/chat";
import dayjs from "dayjs";
const ChatBoardPage: React.FC<{}> = () => {
  const collectionRef = collection(
    db,
    `${FirebaseCollection.CHATS}/public/${dayjs().format("YYYY_MM_DD")}`
  );
  const [guest, setGuest] = useState<GuestType>();
  const [loadingGuestData, setLoadingGuestData] = React.useState<boolean>(true);
  const guestRef = collection(db, FirebaseCollection.USERS);
  const setGuestData = React.useCallback(async () => {
    const ipAddress = await getIpAddress();
    try {
      setLoadingGuestData(true);
      const localStorageId = localStorage.getItem(LocalStorageKey.USER_ID);
      if (localStorageId) {
        const docRef = doc(guestRef, localStorageId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const guest = docSnap.data();
          setGuest({
            id: docSnap.id,
            displayName: guest?.displayName,
            ipAddress: guest?.ipAddress,
          });
          if (guest?.ipAddress !== ipAddress) {
            setDoc(docRef, { ...guest, ipAddress });
          }
          return;
        }
      } else {
        const q = query(
          guestRef,
          where(GuestTypeKey.IP_ADDRESS, "==", ipAddress)
        );
        const data = await getDocs(q);
        const guestData = data.docs[0];
        if (!guestData) return;
        setGuest({
          id: guestData.id,
          displayName: guestData.data()?.displayName,
          ipAddress: ipAddress,
        });
        localStorage.setItem(LocalStorageKey.USER_ID, guestData.id);
      }
    } catch (error) {
      console.log({ error });
    } finally {
      setLoadingGuestData(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Get Guest Name
  React.useEffect(() => {
    setGuestData();
  }, [setGuestData]);

  return (
    <ChatBoardPageContainer>
      {guest ? (
        <Chat
          title="Public Chat Board"
          collectionRef={collectionRef}
          user={{
            id: guest.id,
            displayName: guest.displayName || guest.displayName,
            email:
              guest.email ||
              `${guest.id ? guest.id.slice(0, 5) : "Guest"}@${guest.ipAddress}`,
            ipAddress: guest.ipAddress,
          }}
        />
      ) : (
        <CreateGuest
          setGuest={setGuest}
          loading={loadingGuestData}
          title="Public Chat Board"
        />
      )}

      <DetailContainer>
        <div>
          <h1>Chat Board</h1>
          <h3>This is Demo Chat board with React & Firebase</h3>
          <ul>
            <li>Board will be reset every day</li>
            <li>Board will create your account with your IP Address</li>
          </ul>
        </div>
      </DetailContainer>
    </ChatBoardPageContainer>
  );
};

export default ChatBoardPage;
