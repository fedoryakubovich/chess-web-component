import { useQuery, UseQueryResult } from "react-query";

import { IUser } from "../../../types";
import { apiInstance } from "../../../utils";

type UseUserProps = {
  username: string;
};

export const useUser = ({ username }: UseUserProps): UseQueryResult<IUser> => {
  return useQuery(
    [username],
    async () => {
      const result = await apiInstance({
        url: `/player/${username}`,
      });

      return result.data;
    },
    { refetchOnWindowFocus: false, refetchOnMount: false, retry: false }
  );
};
