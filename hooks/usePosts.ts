import { useInfiniteQuery } from "@tanstack/react-query";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const fetchPosts = async ({ pageParam = 1 }): Promise<Post[]> => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageParam}`
  );
  if (!res.ok) throw new Error("Error fetching posts");
  return res.json();
};

export const usePosts = () =>
  useInfiniteQuery<Post[], Error>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    getNextPageParam: (_, pages) => pages.length + 1,
  });