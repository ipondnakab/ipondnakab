import styled from "styled-components";

export const Label = styled.label`
  display: block;
  margin: auto; /* Centering for demo */
`;

export const ContainerSwitch = styled.div`
  height: 22px;
  width: 40px;
  background: var(--foreground);
  border-radius: 40px;
  padding: 4px;
  position: relative;
  transition: background var(--transition);
  cursor: pointer;

  &::before {
    content: "";
    display: block;
    height: 14px;
    width: 14px;
    border-radius: 30px;
    background: var(--background);
    position: absolute;
    z-index: 2;
    transform: translate(0);
    transition: transform var(--transition), background var(--transition);
  }

  &.enabled::before {
    transform: translateX(18px);
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  gap: 4px;

  & svg {
    fill: ${(props) => props.theme.palette.text.inverse};
    height: 30px;
    width: 30px;
    z-index: 0;
  }
`;

export const Input = styled.input`
  opacity: 0;
  position: absolute;
  top: 0;
`;

export const Point = styled.span`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
