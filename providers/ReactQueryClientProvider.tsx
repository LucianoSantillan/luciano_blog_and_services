"use client";

import { QueryClient, QueryClientProvider, Hydrate } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactNode, useState } from "react";

export function ReactQueryClientProvider({
  children,
  dehydratedState,
}: {
  children: ReactNode;
  dehydratedState?: unknown; // Accept the dehydrated state from the server
}) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 5, // Data is considered fresh for 5 seconds
            retry: 3, // Retry failed queries up to 2 times before throwing an error
            refetchOnWindowFocus: true, // Automatically refetch data when the window regains focus
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {/* <Hydrate state={dehydratedState}> */}
        {children}
        {/* </Hydrate> */}
      <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
    </QueryClientProvider>
  );
}