import React from 'react';

import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { ROUTES } from './constants';
import HomeContainer from './containers/HomeContainer';
import StatsContainer from './containers/StatsContainer';
import UserContainer from './containers/UserContainer';

type UserProps = {
  username: string;
};

const User: React.FC<UserProps> = ({ username }) => {
  return (
    <MemoryRouter initialEntries={[ROUTES.home]}>
      <Routes>
        <Route path={ROUTES.home} element={<HomeContainer />} />

        <Route path={ROUTES.user} element={<UserContainer username={username} />} />

        <Route path={ROUTES.stats} element={<StatsContainer />} />
      </Routes>
    </MemoryRouter>
  );
};

export default User;
