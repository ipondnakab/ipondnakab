import styled from "styled-components";
import { Timeline as AntTimeline, Tag as AntTag } from "antd";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 16px;
`;

export const HomeSector = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  padding: 32px;
  box-shadow: ${(props) => props.theme.boxShadow};
  backdrop-filter: blur(5px);
  border-radius: 8px;
  @media (max-width: ${(props) => props.theme.brakePoints.md}) {
    flex-direction: column;
  }
`;

export const InformationDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (max-width: ${(props) => props.theme.brakePoints.md}) {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const Timeline = styled(AntTimeline)`
  & .ant-timeline-item-tail {
    border-left-color: ${(props) => props.theme.palette.text.primary + "33"};
  }

  & .ant-timeline-item-head {
    background-color: transparent;
    border-color: ${(props) => props.theme.palette.text.primary + "33"};
  }
  & .ant-timeline-item-content {
    margin-left: 32px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  color: ${(props) => props.theme.palette.text.primary};
  font-size: 2rem;
`;

export const Tag = styled(AntTag)`
  background-color: ${(props) => props.theme.palette.text.primary};
  box-shadow: ${(props) => props.theme.boxShadow};
  backdrop-filter: blur(5px);
  border-radius: 8px;
  border-color: ${(props) => props.theme.palette.text.primary};
  color: ${(props) => props.theme.palette.text.inverse};
  font-size: 12px;
  padding: 4px;
  line-height: 8px;
  width: 110px;
  text-align: center;
`;
