import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    background: string;
    boxShadow: string;
    transition: string;
    transitionLong: string;
    brakePoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    palette: {
      common: {
        black: string;
        white: string;
      };
      primary: string;
      secondary: string;
      text: {
        primary: string;
        secondary: string;
        active: string;
        hidden: string;
        inverse: string;
      };
    };
  }
}
