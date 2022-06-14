import React from "react";
import { useLocation } from "react-router-dom";
import router from "../../router";
import {
  NavbarContainer,
  NavbarLinkContainer,
  NavbarLogo,
  NavbarLink,
  SocialLink,
  LineSpan,
} from "./index.style";
import useTheme from "../../providers/themes";
import Toggle from "../../components/toggleSwitch";
import { useTranslation } from "react-i18next";
import { AiFillMediumCircle } from "react-icons/ai";
import {
  TiSocialLinkedinCircular,
  TiSocialFacebookCircular,
} from "react-icons/ti";
import { VscGithub } from "react-icons/vsc";
import { TbLanguage } from "react-icons/tb";
import { Dropdown, Menu } from "antd";

type SocialLinkProps = {
  icon: React.ReactElement;
  href: string;
};

const socialLinks: SocialLinkProps[] = [
  {
    icon: <TiSocialFacebookCircular size={28} />,
    href: "https://www.facebook.com/",
  },
  {
    icon: <TiSocialLinkedinCircular size={28} />,
    href: "https://www.linkedin.com/",
  },
  {
    icon: <VscGithub size={22} />,
    href: "https://www.github.com/",
  },
  {
    icon: <AiFillMediumCircle size={24} />,
    href: "https://medium.com/",
  },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const { theme, toggleTheme } = useTheme();
  const {
    t,
    i18n: { changeLanguage },
  } = useTranslation();

  const getActiveLink = React.useCallback((path: string, pathname: string) => {
    if (path === "/" && pathname === path) return true;
    else if (path !== "/" && pathname.startsWith(path)) return true;
    else return false;
  }, []);

  const menu = React.useMemo(
    () => (
      <Menu
        items={[
          {
            key: "1",
            label: "EN",
            icon: <img src="./images/us.png" alt="us" width={16} height={16} />,
            onClick: () => changeLanguage("en"),
          },
          {
            key: "2",
            label: "TH",
            icon: <img src="./images/th.png" alt="th" width={16} height={16} />,
            onClick: () => changeLanguage("th"),
          },
        ]}
      />
    ),
    [changeLanguage]
  );

  return (
    <NavbarContainer>
      <NavbarLinkContainer>
        <NavbarLogo>
          {(t("global.firstName") as string).toUpperCase()}
        </NavbarLogo>
        {router.map((route) => (
          <NavbarLink
            key={route.name}
            className={getActiveLink(route.path, pathname) ? "active" : ""}
            to={route.path}
            title={route.title}
          >
            {route.title}
          </NavbarLink>
        ))}
      </NavbarLinkContainer>
      <NavbarLinkContainer>
        {socialLinks.map((socialLink) => (
          <SocialLink key={socialLink.href} href={socialLink.href}>
            {socialLink.icon}
          </SocialLink>
        ))}
        <LineSpan />
        <Dropdown overlay={menu} trigger={["click"]} placement="bottom">
          <SocialLink style={{ width: 24, height: 24 }}>
            <TbLanguage size={18} />
          </SocialLink>
        </Dropdown>
        <Toggle
          onChange={(val) => {
            console.log({ val });
            toggleTheme();
          }}
          value={theme === "dark"}
        />
      </NavbarLinkContainer>
    </NavbarContainer>
  );
};

export default Navbar;
