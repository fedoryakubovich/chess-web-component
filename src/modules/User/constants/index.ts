import { IBreadcrumb } from "types";

export const ROUTES = {
  home: "/",
  user: "/user",
  stats: "/user-statistics",
};

export const HOME_BREADCRUMBS: IBreadcrumb[] = [
  { id: 0, isHome: true, title: "Home" },
];

export const USER_BREADCRUMBS: IBreadcrumb[] = [
  { id: 0, isHome: true, title: ROUTES.home, link: ROUTES.home, isHover: true },
  { id: 1, title: "User" },
];

export const STATS_BREADCRUMBS: IBreadcrumb[] = [
  { id: 0, isHome: true, title: ROUTES.home, link: ROUTES.home, isHover: true },
  { id: 1, title: "User", link: ROUTES.user, isHover: true },
  { id: 2, title: "Stats" },
];
