import React from "react";
import { LayoutProvider, useLayoutFeature } from "./layouts";
import { ThemeProvider as TProvider, useThemeFeature } from "./themes";
import { AuthProvider, useAuthFeature } from "./auth";
import { ThemeProvider } from "styled-components";
const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const layouts = useLayoutFeature();
  const themes = useThemeFeature();
  const auth = useAuthFeature();
  return (
    <AuthProvider value={auth}>
      <ThemeProvider theme={themes.styleTheme}>
        <TProvider value={themes}>
          <LayoutProvider value={layouts}>
            <>{children}</>
          </LayoutProvider>
        </TProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default Providers;
