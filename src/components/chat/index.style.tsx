import { Button, Form, Input } from "antd";
import styled from "styled-components";

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  color: ${(props) => props.theme.palette.text.primary} !important;
  box-shadow: ${(props) => props.theme.boxShadow};
  backdrop-filter: blur(5px);
  border-radius: 8px;
  transition: ${(props) => props.theme.transition};
  max-height: calc(100vh - 56px - 32px);
  min-height: calc(100vh - 200px);
  position: relative;
  overflow: hidden;
`;

export const HeaderChatContainer = styled.div`
  display: flex;
  padding: 16px 32px;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.palette.text.primary + "33"};
  & h3 {
    color: ${(props) => props.theme.palette.text.primary};
    font-size: 1.25rem;
    margin: 0;
  }
`;

export const ControlChatContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

export const ChatRoomContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 32px;
  overflow-y: scroll;
  max-height: max-content;
  gap: 32px;
`;

export const ChatInputContainer = styled(Form)`
  display: flex;
  padding: 8px;
  gap: 8px;
  border-top: 1px solid ${(props) => props.theme.palette.text.primary + "33"};
  & .ant-form-item {
    margin-bottom: 0;
    flex: 1;
  }
`;

export const CustomInput = styled(Input)`
  flex: 1;
  border-radius: 8px;
  background-color: ${(props) => props.theme.palette.text.primary + "33"};
  border: none;
`;

export const CustomButton = styled(Button)`
  border-radius: ${(props) => props.theme.borderRadius};
`;

export const InputGuestName = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => props.theme.palette.text.inverse + "F0"};
  backdrop-filter: blur(5px);

  & h3 {
    color: ${(props) => props.theme.palette.text.primary};
    font-size: 1.25rem;
    margin: 0;
  }

  & span {
    color: ${(props) => props.theme.palette.text.primary};
    font-size: 0.75rem;
    margin-bottom: 1rem;
  }
`;

export const NoDataContainer = styled.div`
  color: ${(props) => props.theme.palette.text.primary};
  opacity: 0.5;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 8px;
`;
