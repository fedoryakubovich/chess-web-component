import React from "react";

import Card from "../../../components/Card";
import { USER_BREADCRUMBS } from "../constants";
import { IUser } from "../../../types";
import dayjs from "dayjs";
import { useIntl } from "react-intl";
import { intlKeys } from "../../../intl";

type UserProps = {
  user: IUser;
  isLoading: boolean;
  handleGoToStats: () => void;
};

const User: React.FC<UserProps> = ({ user, isLoading, handleGoToStats }) => {
  const { formatMessage } = useIntl();
  return (
    <Card breadcrumbs={USER_BREADCRUMBS} isLoading={isLoading}>
      <>
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={user?.avatar}
          alt={`${user?.name} image`}
        />

        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {user?.name}
        </h5>

        <span className="text-sm text-gray-500 dark:text-gray-400">
          {user?.title}
        </span>

        <section className="w-full">
          <section className="w-full pt-4">
            <section className="my-2 w-full flex justify-between">
              <span className="text-gray-900 dark:text-white">
                {formatMessage({ id: intlKeys.player.labels.location })}
              </span>
              <span className="text-gray-500 dark:text-gray-400">
                {user?.location}
              </span>
            </section>
          </section>

          <section className="w-full pt-4">
            <section className="my-2 w-full flex justify-between">
              <span className="text-gray-900 dark:text-white">
                {formatMessage({ id: intlKeys.player.labels.joined })}
              </span>
              <span className="text-gray-500 dark:text-gray-400">
                {dayjs(user?.joined * 1000).format("MMMM D, YYYY")}
              </span>
            </section>
          </section>

          <section className="w-full pt-4">
            <section className="my-2 w-full flex justify-between">
              <span className="text-gray-900 dark:text-white">
                {formatMessage({ id: intlKeys.player.labels.followers })}
              </span>
              <span className="text-gray-500 dark:text-gray-400">
                {new Intl.NumberFormat("en-GB", {
                  notation: "compact",
                  compactDisplay: "short",
                }).format(user?.followers)}
              </span>
            </section>
          </section>

          <section className="w-full pt-4">
            <section className="my-2 w-full flex justify-between">
              <span className="text-gray-900 dark:text-white">
                {formatMessage({ id: intlKeys.player.labels.website })}
              </span>
              <span className="text-gray-500 dark:text-gray-400">
                <a href={user?.url}>
                  {formatMessage({ id: intlKeys.player.labels.link })}
                </a>
              </span>
            </section>
          </section>

          <section className="w-full text-center mt-4">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={handleGoToStats}
            >
              Go To Stats
            </button>
          </section>
        </section>
      </>
    </Card>
  );
};

export default User;
