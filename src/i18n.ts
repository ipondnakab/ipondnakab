// import the original type declarations
import "react-i18next";
// import all namespaces (for the default language, only)
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./assets/locales/en.json";
import thTranslation from "./assets/locales/th.json";

export const resources = {
  en: {
    translation: enTranslation,
  },
  th: {
    translation: thTranslation,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: "en",
  resources,
});
