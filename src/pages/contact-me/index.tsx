import React from "react";
import { StyledFirebaseAuth } from "react-firebaseui";
import firebase from "firebase/compat/app";
import { Spin, message } from "antd";
import useAuthContext from "../../providers/auth";
import { CustomIcon, ContactMePageContainer } from "./index.style";
import "firebase/compat/auth";
import ProfileCard from "../../components/privateChatPage/profileCard";
import Chat from "../../components/chat";
import useLayout from "../../providers/layouts";
import { collection } from "firebase/firestore";
import { db } from "../../firebase";
import { FirebaseCollection } from "../../interfaces/database";
import { ChatBoardTypeEnum } from "../../interfaces/chat";

const ContactMePage: React.FC = () => {
  const { auth, user, isLoadingUser, ipAddress } = useAuthContext();
  const [hideCardContactMe, setHideCardContactMe] = React.useState(false);
  const { appLoading, appLoaded } = useLayout();

  const collectionRef = collection(
    db,
    `${FirebaseCollection.CHATS}/private/${user?.email?.toLocaleLowerCase()}`
  );

  // Configure FirebaseUI.
  const uiConfig: firebaseui.auth.Config = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: (auth) => {
        return false;
      },
      signInFailure: (error: firebaseui.auth.AuthUIError) => {
        console.error({ error });
        message.error(error.message);
      },
    },
  };

  React.useEffect(
    () => (isLoadingUser ? appLoading() : appLoaded()),
    [isLoadingUser, appLoading, appLoaded]
  );

  if (!user) {
    return (
      <Spin spinning={isLoadingUser}>
        <div style={{ flex: 1 }}>
          <p>Please sign-in:</p>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
        </div>
      </Spin>
    );
  }

  return (
    <ContactMePageContainer>
      <Chat
        collectionRef={collectionRef}
        extraHeader={
          <CustomIcon onClick={() => setHideCardContactMe((old) => !old)} />
        }
        user={{
          ...user,
          id: user.uid,
          displayName: user?.displayName || "DISPLAY_NAME",
          email: user.email || `EMAIL@${ipAddress}.WRONG`,
          photoURL: user.photoURL,
          ipAddress: ipAddress,
          phoneNumber: user.phoneNumber,
        }}
        boardType={ChatBoardTypeEnum.PRIVATE}
      />
      <ProfileCard hide={hideCardContactMe} />
    </ContactMePageContainer>
  );
};

export default ContactMePage;
