import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { IUser } from "types";

import User from "../components/User";
import { ROUTES } from "../constants";
import { useUser } from "../hooks";

type UserContainerProps = {
  username: string;
};

const UserContainer: React.FC<UserContainerProps> = ({ username }) => {
  const { data: user, isLoading } = useUser({ username });
  const navigate = useNavigate();

  const handleGoToStats = useCallback(() => {
    navigate(ROUTES.stats, { state: { username } });
  }, []);

  return (
    <User
      user={user as IUser}
      isLoading={isLoading}
      handleGoToStats={handleGoToStats}
    />
  );
};

export default UserContainer;
