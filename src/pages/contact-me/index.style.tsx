import styled from "styled-components";
import { InfoCircleOutlined } from "@ant-design/icons";
export const ContactMePageContainer = styled.div`
  display: flex;
  gap: 16px;
  flex: 1;
`;

export const CustomIcon = styled(InfoCircleOutlined)`
  font-size: 1.25rem;
  color: ${(props) => props.theme.palette.text.active};
`;
