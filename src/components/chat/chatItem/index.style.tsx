import styled from "styled-components";

export const ContainerChatItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 360px;
  align-self: ${(props) =>
    props.property !== "isMyMessage" ? "flex-start" : `flex-end`};
  align-items: ${(props) =>
    props.property !== "isMyMessage" ? "flex-start" : `flex-end`};
`;

export const OwnerContainer = styled.div`
  display: flex;
  transition: ${(props) => props.theme.transition};

  align-items: center;
  flex-direction: ${(props) =>
    props.property !== "isMyMessage" ? `row` : "row-reverse"};
  padding: 4px;
  background-color: transparent;
  border-radius: 999px;
  width: fit-content;
  background-color: ${(props) => props.theme.palette.text.inverse};
  &:hover {
    & .name-chat-item {
      font-size: 1rem;
      height: 1.25rem;
      padding: 0 12px;
    }

    & .email-chat-item {
      font-size: 0.75rem;
      height: 1rem;
      padding: 0 12px;
    }
  }
`;

export const OwnerTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: fit-content;
  transition: ${(props) => props.theme.transition};
`;

export const NameChatItem = styled.span`
  transition: ${(props) => props.theme.transition};
  font-size: 0;
  height: 0;
  font-weight: bold;
  text-align: ${(props) =>
    props.property !== "isMyMessage" ? `left` : "right"};
  color: ${(props) => props.theme.palette.text.primary};
  padding: 0;
  -webkit-user-select: text;
  -khtml-user-select: text;
  -moz-user-select: text;
  -o-user-select: text;
  user-select: text;
`;

export const EmailChatItem = styled.a`
  transition: ${(props) => props.theme.transition};
  text-decoration: none;
  color: ${(props) => props.theme.palette.text.hidden};
  text-align: ${(props) =>
    props.property === "isMyMessage" ? `right` : "left"};
  font-size: 0;
  height: 0;
  padding: 0;
`;

export const ContentChatItem = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: fit-content;
  overflow: hidden;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.palette.text.primary + "33"};
`;
export const TextContentChatItem = styled.span`
  color: ${(props) => props.theme.palette.text.primary};
  font-size: 0.8rem;
  padding: 8px;
  text-align: left;
  align-self: flex-end;
  -webkit-user-select: text;
  -khtml-user-select: text;
  -moz-user-select: text;
  -o-user-select: text;
  user-select: text;
`;

export const TimeChatItem = styled.span`
  color: ${(props) => props.theme.palette.text.hidden};
  font-size: 0.6rem;
`;
