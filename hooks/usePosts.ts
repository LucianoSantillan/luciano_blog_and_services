import { useInfiniteQuery } from "@tanstack/react-query";
import { Post } from "./usePost";

const fetchPostsPage = async ({ pageParam = 1 }): Promise<Post[]> => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageParam}`
  );
  if (!res.ok) throw new Error("Error fetching posts");
  return res.json();
};

export const usePosts = () =>
  useInfiniteQuery<Post[], Error>({
    queryKey: ["posts"],
    queryFn: fetchPostsPage,
    getNextPageParam: (_, pages) => pages.length + 1,
    staleTime: 60_000,      // 1 minute
    cacheTime: 5 * 60_000,  // 5 minutes
  });
