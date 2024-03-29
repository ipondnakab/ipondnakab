// import the original type declarations
import "react-i18next";
// import all namespaces (for the default language, only)
import en from "./assets/locales/en.json";
import th from "./assets/locales/th.json";

declare module "react-i18next" {
  // and extend them!
  interface CustomTypeOptions {
    // custom resources type
    resources: {
      en: typeof en;
      th: typeof th;
    };
  }
}
