import { intlKeys } from "../intl";

export const OBSERVED_ATTRS = ["username"];

export const DEFAULT_LOCALE = "en";

const TITLE = {
  GM: "GM",
  WGM: "WGM",
  IM: "IM",
  WIM: "WIM",
  FM: "FM",
  WFM: "WFM",
  CM: "CM",
  WCM: "WCM",
};

export const TITLE_OPTIONS = [
  { key: TITLE.GM, labelKey: intlKeys.titleOptions.gm },
  { key: TITLE.WGM, labelKey: intlKeys.titleOptions.wgm },
  { key: TITLE.IM, labelKey: intlKeys.titleOptions.im },
  { key: TITLE.WIM, labelKey: intlKeys.titleOptions.wim },
  { key: TITLE.FM, labelKey: intlKeys.titleOptions.fm },
  { key: TITLE.WFM, labelKey: intlKeys.titleOptions.wfm },
  { key: TITLE.CM, labelKey: intlKeys.titleOptions.cm },
  { key: TITLE.WCM, labelKey: intlKeys.titleOptions.wcm },
];

const LANGUAGE = { EN: "EN", DE: "DE" };

export const LANGUAGE_OPTIONS = [
  { key: LANGUAGE.EN, labelKey: intlKeys.languageOptions.en },
  { key: LANGUAGE.DE, labelKey: intlKeys.languageOptions.de },
];
