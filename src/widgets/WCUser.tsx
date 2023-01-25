import React from 'react';

import WCLayout from '../components/WCLayout';
import UserContainer from '../modules/User';
import { WebComponentProps } from '../types';
import WCWrapper from '../WCWrapper';

const WCUser: React.FC<WebComponentProps> = ({ username }) => {
  return (
    <WCLayout>
      <UserContainer username={username} />
    </WCLayout>
  );
};

customElements.define('chess-widget', WCWrapper(WCUser));
