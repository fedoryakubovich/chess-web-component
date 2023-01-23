import React from "react";
import { HOME_BREADCRUMBS } from "../constants";
import Card from "../../../components/Card";
import InfiniteScroll from "react-infinite-scroll-component";
import { HiUser } from "react-icons/hi";
import { BiLoaderAlt } from "react-icons/bi";
import Select from "../../../components/Select";
import { intlKeys } from "../../../intl";
import { useIntl } from "react-intl";

type HomeProps = {
  users: any;
  handleLoadMore: () => void;
  handleGoToInfo: () => void;
};

const Home: React.FC<HomeProps> = ({
  users,
  handleLoadMore,
  handleGoToInfo,
}) => {
  const { formatMessage } = useIntl();

  return (
    <Card breadcrumbs={HOME_BREADCRUMBS}>
      <Select labelKey={intlKeys.home.labels.playersBy} />

      <div className="w-full mt-4">
        <InfiniteScroll
          dataLength={users?.length}
          next={handleLoadMore}
          hasMore={true}
          height={380}
          loader={
            <div role="status" className="w-full flex justify-center">
              <BiLoaderAlt className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" />

              <span className="sr-only">Loading...</span>
            </div>
          }
        >
          {users.map((user, index) => {
            return (
              <section
                key={`${index}-${user?.data?.username}`}
                className="w-full py-2 px-1 flex justify-between"
              >
                <section className="flex">
                  {user?.data?.avatar ? (
                    <img
                      className="w-10 h-10 rounded-full"
                      src={user?.data?.avatar}
                      alt="Rounded avatar"
                    />
                  ) : (
                    <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                      <HiUser className="absolute w-12 h-12 text-gray-400 -left-1" />
                    </div>
                  )}

                  <section className="ml-2">
                    <section className="text-sm font-medium text-gray-900 dark:text-white">
                      {user?.data?.name ?? "N/A"}
                    </section>
                    <section className="text-xs text-gray-500 dark:text-gray-400 text-left">
                      <a href={user?.data?.url} target="_blank">
                        @{user?.data?.username}
                      </a>
                    </section>
                  </section>
                </section>

                <button
                  type="button"
                  className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  onClick={() => handleGoToInfo(user)}
                >
                  {formatMessage({ id: intlKeys.home.buttons.moreInfo })}
                </button>
              </section>
            );
          })}
        </InfiniteScroll>
      </div>
    </Card>
  );
};

export default Home;
