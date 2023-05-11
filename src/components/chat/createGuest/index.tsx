import React, { ReactNode } from "react";
import { collection, addDoc } from "firebase/firestore";
import {
  ChatContainer,
  CustomInput,
  HeaderChatContainer,
  InputGuestName,
  CustomButton,
  ControlChatContainer,
} from "../index.style";
import {
  IoVolumeMuteOutline,
  IoVolumeHighOutline,
  IoNotificationsOutline,
  IoNotificationsOffOutline,
} from "react-icons/io5";

import { db } from "../../../firebase";

import { getIpAddress } from "../../../services/ip-address";
import { GuestType } from "../../../interfaces/user";
import { Spin } from "antd";
import {
  FirebaseCollection,
  LocalStorageKey,
} from "../../../interfaces/database";

type CreateGuestType = {
  title?: ReactNode;
  setGuest: React.Dispatch<GuestType>;
  loading?: boolean;
};

const CreateGuest: React.FC<CreateGuestType> = ({
  title,
  setGuest,
  loading,
}) => {
  const guestRef = collection(db, FirebaseCollection.USERS);

  const [isTurnOnSound, setIsTurnOnSound] = React.useState(
    localStorage.getItem("turnOnSound") === "true"
  );
  const [isTurnOnNotification, setIsTurnOnNotification] = React.useState(
    localStorage.getItem("turnOnNotification]") === "true"
  );

  const handleCreateGuest = React.useCallback(
    async (data: any) => {
      const guestIpAddress = await getIpAddress();
      const doc = await addDoc(guestRef, {
        displayName: data.guestName,
        ipAddress: guestIpAddress,
      });
      setGuest({
        id: doc.id,
        displayName: data.guestName,
        ipAddress: guestIpAddress,
      });
      localStorage.setItem(LocalStorageKey.USER_ID, doc.id);
    },
    [guestRef, setGuest]
  );

  const toggleSound = React.useCallback(
    () =>
      setIsTurnOnSound((isTurnOnSound) => {
        localStorage.setItem("turnOnSound", !isTurnOnSound ? "true" : "false");
        return !isTurnOnSound;
      }),
    []
  );

  const toggleNotification = React.useCallback(
    () =>
      setIsTurnOnNotification((isTurnOnNotification) => {
        localStorage.setItem(
          "turnOnNotification",
          !isTurnOnNotification ? "true" : "false"
        );
        return !isTurnOnNotification;
      }),
    []
  );

  return (
    <ChatContainer>
      <HeaderChatContainer>
        {title || <h3>Leave a message to me</h3>}
        <ControlChatContainer>
          {isTurnOnNotification ? (
            <IoNotificationsOutline
              size={20}
              style={{ cursor: "pointer" }}
              onClick={toggleNotification}
            />
          ) : (
            <IoNotificationsOffOutline
              size={20}
              style={{ cursor: "pointer" }}
              onClick={toggleNotification}
            />
          )}
          {isTurnOnSound ? (
            <IoVolumeHighOutline
              size={24}
              style={{ cursor: "pointer" }}
              onClick={toggleSound}
            />
          ) : (
            <IoVolumeMuteOutline
              size={24}
              style={{ cursor: "pointer" }}
              onClick={toggleSound}
            />
          )}
        </ControlChatContainer>
      </HeaderChatContainer>
      {loading ? (
        <Spin spinning={loading} />
      ) : (
        <InputGuestName onFinish={handleCreateGuest}>
          <h3>Enter name</h3>
          <span>to use chat board</span>
          <InputGuestName.Item
            name="guestName"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <CustomInput name="guestName" />
          </InputGuestName.Item>
          <CustomButton type="primary" htmlType="submit">
            Start chat
          </CustomButton>
        </InputGuestName>
      )}
    </ChatContainer>
  );
};

export default CreateGuest;
