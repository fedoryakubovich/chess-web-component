import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export const withQueryCacheProvider =
  <T extends object>(WrappedComponent: React.FC<T>): React.FC<T> =>
  ({ ...props }) => {
    const queryClient = new QueryClient();

    return (
      <QueryClientProvider client={queryClient}>
        <WrappedComponent {...props} />
      </QueryClientProvider>
    );
  };
