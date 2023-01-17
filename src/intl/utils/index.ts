import { DEFAULT_LOCALE } from "../../constants";
import { locales } from "../index";

export const getLocale = () => {
  const browserLocale = navigator.language.split(/[-_]/)[0];
  const messages = locales[browserLocale || DEFAULT_LOCALE];

  return { locale: browserLocale, defaultLocale: DEFAULT_LOCALE, messages };
};
