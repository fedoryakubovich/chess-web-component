import { FC } from "react";

export interface WebComponentProps {
  username: string;
}

export type Component = FC<WebComponentProps>;

export type IBreadcrumb = {
  id: number;
  isHome?: boolean;
  title: string;
  link?: string;
  isHover?: boolean;
};

export type IUser = {
  avatar: string;
  player_id: string;
  // @id: string
  url: string;
  name: string;
  username: string;
  title: string;
  followers: number;
  country: string;
  location: string;
  last_online: Date;
  joined: number;
  status: string;
  is_streamer: boolean;
  verified: boolean;
};
