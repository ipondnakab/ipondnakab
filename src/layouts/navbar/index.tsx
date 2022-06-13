import React from "react";
import { useLocation } from "react-router-dom";
import router from "../../router";
import {
  NavbarContainer,
  NavbarLinkContainer,
  NavbarLogo,
  NavbarLink,
} from "./index.style";

const Navbar = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    console.log({ pathname });
  }, [pathname]);

  const getActiveLink = React.useCallback((path: string, pathname: string) => {
    if (path === "/" && pathname === path) return true;
    else if (path !== "/" && pathname.startsWith(path)) return true;
    else return false;
  }, []);
  return (
    <NavbarContainer>
      <NavbarLogo>KITTIPAT</NavbarLogo>
      <NavbarLinkContainer>
        {router.map((route) => (
          <NavbarLink
            className={getActiveLink(route.path, pathname) ? "active" : ""}
            to={route.path}
            title={route.title}
          >
            {route.title}
          </NavbarLink>
        ))}
      </NavbarLinkContainer>
    </NavbarContainer>
  );
};

export default Navbar;
