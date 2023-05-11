import styled from "styled-components";

export const ChatBoardPageContainer = styled.div`
  display: flex;
  gap: 16px;
  flex: 1;
  @media (max-width: ${(props) => props.theme.brakePoints.md}) {
    flex-direction: column-reverse;
  }
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  & * {
    color: ${(props) => props.theme.palette.text.primary};
  }

  & h1 {
    font-size: 3rem;
  }
  @media (max-width: ${(props) => props.theme.brakePoints.md}) {
    min-height: calc(100vh - 32px - 56px);
    & > div {
      display: flex;
      flex-direction: column;
      flex: 1;
      align-items: center;
      justify-content: center;
      padding: 16px;
    }
  }
`;
