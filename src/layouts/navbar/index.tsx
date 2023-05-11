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
  CustomMenu,
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
import { Dropdown } from "antd";
import { MdBrokenImage, MdHideImage } from "react-icons/md";

type SocialLinkProps = {
  icon: React.ReactElement;
  href: string;
};

const socialLinks: SocialLinkProps[] = [
  {
    icon: <TiSocialFacebookCircular size={28} />,
    href: "https://www.facebook.com/ipondnakab",
  },
  {
    icon: <TiSocialLinkedinCircular size={28} />,
    href: "https://www.linkedin.com/in/kittipat-dd/",
  },
  {
    icon: <VscGithub size={22} />,
    href: "https://github.com/ipondnakab",
  },
  {
    icon: <AiFillMediumCircle size={24} />,
    href: "https://medium.com/@kittipat_dd",
  },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const { theme, toggleTheme, toggleAnimation, animation } = useTheme();
  const {
    t,
    // i18n: { changeLanguage, language },
  } = useTranslation();

  const getActiveLink = React.useCallback((path: string, pathname: string) => {
    if (path === "/" && pathname === path) return true;
    else if (path !== "/" && pathname.startsWith(path)) return true;
    else return false;
  }, []);

  const menu = React.useMemo(
    () => (
      <CustomMenu
        items={[
          {
            key: "1",
            label: "EN",
            icon: (
              <img
                src="./images/us.png"
                alt="us"
                width={16}
                height={16}
                style={
                  {
                    // filter: language === "en" ? "grayscale(100%)" : undefined,
                    // opacity: language === "en" ? 0.5 : 1,
                  }
                }
              />
            ),
            // onClick: () => changeLanguage("en"),
            // disabled: language === "en",
            style: { backgroundColor: "#DDD" },
          },
          // {
          //   key: "2",
          //   label: "TH",
          //   icon: (
          //     <img
          //       src="./images/th.png"
          //       alt="th"
          //       width={16}
          //       height={16}
          //       style={{
          //         filter: language === "th" ? "grayscale(100%)" : undefined,
          //         opacity: language === "th" ? 0.5 : 1,
          //       }}
          //     />
          //   ),
          //   onClick: () => changeLanguage("th"),
          //   disabled: language === "th",
          // },
        ]}
      />
    ),
    [
      // changeLanguage, language
    ]
  );

  return (
    <NavbarContainer>
      <NavbarLinkContainer>
        <NavbarLogo>
          {(t("global.firstName") as string).toUpperCase()}
        </NavbarLogo>
        {router.map(
          (route) =>
            !route.isMenuHidden && (
              <NavbarLink
                key={route.name}
                className={getActiveLink(route.path, pathname) ? "active" : ""}
                to={route.path}
                title={route.title}
              >
                {route.title}
              </NavbarLink>
            )
        )}
      </NavbarLinkContainer>
      <NavbarLinkContainer>
        {socialLinks.map((socialLink) => (
          <SocialLink
            key={socialLink.href}
            target="_blank"
            href={socialLink.href}
          >
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
          name="theme"
          onChange={() => toggleTheme()}
          value={theme === "dark"}
        />
        <Toggle
          name="animation"
          onChange={() => toggleAnimation()}
          value={animation}
          icons={[<MdHideImage size={18} />, <MdBrokenImage size={18} />]}
        />
      </NavbarLinkContainer>
    </NavbarContainer>
  );
};

export default Navbar;
