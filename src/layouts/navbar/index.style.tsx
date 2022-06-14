import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.nav`
  position: sticky;
  display: flex;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  top: 0;
  z-index: 1000;
  right: 0px;
  left: 0px;
  color: ${(props) => props.theme.palette.text.primary};
  justify-content: space-between;
  padding: 8px 16px;
  align-items: center;
`;

export const NavbarLogo = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 2px;
  color: ${(props) => props.theme.palette.text.primary};
  cursor: pointer;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  gap: 8px 12px;
  align-items: center;
`;

export const NavbarLink = styled(Link)`
  color: ${(props) => props.theme.palette.text.primary};
  text-decoration: none;
  font-size: 1rem;
  display: block;
  position: relative;
  padding: 0.2em 0;
  line-height: 16px;

  &.active {
    color: ${(props) => props.theme.palette.text.primary};
    font-weight: bold;
    &::after {
      transform: scale(1);
    }
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1em;
    background-color: ${(props) => props.theme.palette.text.primary};
    opacity: 0;
    transition: opacity 300ms, transform 300ms;
  }

  &::after {
    opacity: 1;
    transform: scale(0);
    transform-origin: center;
  }

  &:focus::after {
    transform: scale(1);
  }

  &:hover::after {
    transform: scale(1);
  }
`;

export const SocialLink = styled.a`
  color: ${(props) => props.theme.palette.text.secondary};
  text-decoration: none;
  display: block;
  position: relative;
  line-height: 20px;
  width: 30px;
  height: 30px;
  border-radius: 999px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  -webkit-transition: -webkit-transform ease-out 0.1s, background 0.2s;
  -moz-transition: -moz-transform ease-out 0.1s, background 0.2s;
  transition: transform ease-out 0.1s, background 0.2s;

  &::after {
    top: 0;
    left: 0;
    padding: 0;
    z-index: -1;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2);
    opacity: 0;
    -webkit-transform: scale(0.9);
    -moz-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }

  &:hover {
    transition: all 0.3s ease;
    color: ${(props) => props.theme.palette.text.inverse};
    background-color: ${(props) => props.theme.palette.text.active + "6"};
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

export const LineSpan = styled.span`
  height: 24px;
  width: 1.2px;
  background-color: ${(props) => props.theme.palette.text.primary};
  border-radius: 999px;
  overflow: hidden;
`;
