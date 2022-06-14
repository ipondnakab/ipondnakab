import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    background: string;
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
