import React from "react";

import { WebComponentProps } from "../types";
import WCWrapper from "../WCWrapper";
import UserContainer from "../modules/User";
import WCLayout from "../components/WCLayout";

const WCUser: React.FC<WebComponentProps> = ({ username }) => {
  return (
    <WCLayout>
      <UserContainer username={username} />
    </WCLayout>
  );
};

customElements.define("chess-widget", WCWrapper(WCUser));
