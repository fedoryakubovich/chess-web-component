import { intlKeys } from "../intl";

export const OBSERVED_ATTRS = ["username"];

export const DEFAULT_LOCALE = "en";

const TITLE_OPTIONS = {
  GM: "GM",
  WGM: "WGM",
  IM: "IM",
  WIM: "WIM",
  FM: "FM",
  WFM: "WFM",
  CM: "CM",
  WCM: "WCM",
};

export const TITLES = [
  { key: TITLE_OPTIONS.GM, labelKey: intlKeys.titleOptions.gm },
  { key: TITLE_OPTIONS.WGM, labelKey: intlKeys.titleOptions.wgm },
  { key: TITLE_OPTIONS.IM, labelKey: intlKeys.titleOptions.im },
  { key: TITLE_OPTIONS.WIM, labelKey: intlKeys.titleOptions.wim },
  { key: TITLE_OPTIONS.FM, labelKey: intlKeys.titleOptions.fm },
  { key: TITLE_OPTIONS.WFM, labelKey: intlKeys.titleOptions.wfm },
  { key: TITLE_OPTIONS.CM, labelKey: intlKeys.titleOptions.cm },
  { key: TITLE_OPTIONS.WCM, labelKey: intlKeys.titleOptions.wcm },
];
