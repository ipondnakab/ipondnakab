import React from "react";
import { LayoutProvider, useLayoutFeature } from "./layouts";
import { ThemeProvider as TProvider, useThemeFeature } from "./themes";
import { ThemeProvider } from "styled-components";
const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const layouts = useLayoutFeature();
  const themes = useThemeFeature();
  return (
    <ThemeProvider theme={themes.styleTheme}>
      <TProvider value={themes}>
        <LayoutProvider value={layouts}>
          <>{children}</>
        </LayoutProvider>
      </TProvider>
    </ThemeProvider>
  );
};

export default Providers;
