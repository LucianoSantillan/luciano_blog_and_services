import { useInfiniteQuery } from "@tanstack/react-query";
import { Post } from "@/hooks/usePost";

export const fetchPostsPage = async ({ pageParam = 1 }): Promise<Post[]> => {
  console.log("fetchPostsPage", pageParam);
  const res = await fetch(
    `http://localhost:3000/api/posts?_limit=10&_page=${pageParam}`
  );
  if (!res.ok) throw new Error("Error fetching posts");
  return res.json();
};

import { InfiniteData } from "@tanstack/react-query";

export const usePosts = ({ initialData = [] }: { initialData?: Post[] }) =>
  useInfiniteQuery<Post[], Error>({
    queryKey: ["posts"],
    queryFn: fetchPostsPage,
    getNextPageParam: (lastPage, allPages) => {
      // Check if the last page has data
      if (lastPage.length === 0) {
        return undefined; // No more pages
      }
      return allPages.length + 1; // Fetch the next page
    },
    staleTime: 70000,      // 1 minute
    cacheTime: 50000,  // 5 minutes
    initialData: {
      pages: [initialData],
      pageParams: [1],
    } as InfiniteData<Post[]>
    // enabled: false,
    // refetchInterval: 10000,
    // refetchOnMount: "always",
    // refetchOnWindowFocus: true,
    // refetchOnReconnect: true
  });
