"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactNode, useState } from "react";

export function ReactQueryClientProvider({
  children,
}: {
  children: ReactNode;
}) {
  // Create a single instance of QueryClient using useState to ensure it persists across renders
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 5, // Data is considered fresh for 5 minutes (no refetch during this time)
            retry: 3, // Retry failed queries up to 2 times before throwing an error
            refetchOnWindowFocus: true, // Automatically refetch data when the window regains focus
            // retryDelay: (attempt) => attempt * 1000, // Custom retry delay: 1s, 2s, 3s, etc.
          },
        },
      })
  );

  return (
    // Provide the QueryClient instance to the React Query context
    <QueryClientProvider client={queryClient}>
      {children}
      {/* Add React Query Devtools for debugging purposes */}
      <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
    </QueryClientProvider>
  );
}