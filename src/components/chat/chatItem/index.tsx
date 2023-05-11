import { Avatar, Image, Spin } from "antd";
import { Dayjs } from "dayjs";
import React from "react";
import { ChatType } from "../../../interfaces/chat";
import {
  ContainerChatItem,
  ContentChatItem,
  NameChatItem,
  TextContentChatItem,
  OwnerContainer,
  TimeChatItem,
  OwnerTextGroup,
  EmailChatItem,
} from "./index.style";

export type ChatItemProps = {
  isMyMessage?: boolean;
  timestamp: Dayjs;
  colorAvatar?: string;
  isGuest?: boolean;
  isPending?: boolean;
} & Omit<ChatType, "timestamp">;

const ChatItem: React.FC<ChatItemProps> = ({
  id,
  isMyMessage,
  message,
  timestamp,
  isRead,
  urlImages,
  urlVideo,
  urlAvatar,
  displayName,
  email,
  colorAvatar,
  isPending,
  uid,
  isGuest,
}) => {
  const isMy = isMyMessage === true ? "isMyMessage" : undefined;
  return (
    <ContainerChatItem property={isMy}>
      <OwnerContainer property={isMy} className="owner-contain">
        <Avatar
          size={36}
          src={urlAvatar || null}
          style={{ backgroundColor: colorAvatar }}
        >
          {displayName?.charAt(0)}
        </Avatar>
        <OwnerTextGroup className="owner-text-group">
          <NameChatItem className="name-chat-item" property={isMy}>
            {displayName}
          </NameChatItem>
          <EmailChatItem className="email-chat-item" property={isMy}>
            {isGuest ? `@${uid.slice(0, 6)}` : email}
          </EmailChatItem>
        </OwnerTextGroup>
      </OwnerContainer>
      <ContentChatItem property={isMy}>
        <Spin spinning={!!isPending || !id} size="small">
          <TextContentChatItem>{message}</TextContentChatItem>
          {urlImages && <Image src={urlImages} alt="chat-p" />}
        </Spin>
      </ContentChatItem>
      <TimeChatItem property={isMy}>
        {timestamp.format("HH:mm YYYY/MM/DD")}
      </TimeChatItem>
    </ContainerChatItem>
  );
};

export default ChatItem;
