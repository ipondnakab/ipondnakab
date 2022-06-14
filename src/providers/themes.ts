import React from "react";
import { DefaultTheme } from "styled-components";

export const ThemeContext = React.createContext<
  ReturnType<typeof useThemeFeature>
>({} as ReturnType<typeof useThemeFeature>);

export const ThemeProvider = ThemeContext.Provider;

export const lightTheme: DefaultTheme = {
  borderRadius: "8px",
  background: "linear-gradient( 89.7deg,  #e0e4f3 -10.7%, #b4cae0 88.8% )",
  palette: {
    common: {
      black: "#2f2f2f",
      white: "#f2f2f2",
    },
    primary: "#f44336",
    secondary: "#f44336",
    text: {
      active: "#000",
      primary: "#333",
      secondary: "#111",
      hidden: "#fff",
      inverse: "#fff",
    },
  },
};

export const darkTheme: DefaultTheme = {
  borderRadius: "8px",
  background: "linear-gradient( 89.7deg,  #0c161f -10.7%, #1f374b 88.8% )",
  palette: {
    common: {
      black: "#f2f2f2",
      white: "#2f2f2f",
    },
    primary: "#f44336",
    secondary: "#f44336",
    text: {
      active: "#fff",
      primary: "#e9e9e9",
      secondary: "#eee",
      hidden: "#ddd",
      inverse: "#222",
    },
  },
};

export const useThemeFeature = () => {
  const [theme, setTheme] = React.useState<"light" | "dark">("dark");
  const [styleTheme, setStyleTheme] = React.useState<DefaultTheme>(darkTheme);
  const styles = getComputedStyle(document.body);
  const black = styles.getPropertyValue("--black");
  const white = styles.getPropertyValue("--white");
  const docEl = document.documentElement;

  const setBackground = React.useCallback(
    (theme: "light" | "dark") => {
      if (theme === "light") {
        docEl.style.setProperty("--background", white);
        docEl.style.setProperty("--foreground", black);
        document?.querySelector("html")?.classList.remove("dark-mode");
        document?.querySelector("html")?.classList.add("light-mode");
      } else {
        docEl.style.setProperty("--background", black);
        docEl.style.setProperty("--foreground", white);
        document?.querySelector("html")?.classList.add("dark-mode");
        document?.querySelector("html")?.classList.remove("light-mode");
      }
    },
    [black, docEl.style, white]
  );

  const toggleTheme = React.useCallback(
    (customTheme?: "light" | "dark") => {
      const t = customTheme || theme === "light" ? "dark" : "light";
      setTheme(t);
      setBackground(t);
      setStyleTheme(t === "light" ? lightTheme : darkTheme);
      window.localStorage.setItem("theme", t);
    },
    [setBackground, theme]
  );

  React.useEffect(() => {
    const localTheme =
      (window.localStorage.getItem("theme") as "light" | "dark") || "dark";
    setTheme(localTheme);
    setBackground(localTheme);
    setStyleTheme(localTheme === "light" ? lightTheme : darkTheme);
    if (!localTheme) window.localStorage.setItem("theme", "dark");
  }, [setBackground]);

  return { toggleTheme, theme, styleTheme };
};

const useContext = () => React.useContext(ThemeContext);

export default useContext;
