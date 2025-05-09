import { useQuery } from "@tanstack/react-query";
import { Post } from "@/hooks/usePost";

export const fetchPostsPage = async (page: number): Promise<Post[]> => {
  console.log("fetchPostsPage", page);
  const res = await fetch(`http://localhost:3000/api/posts?_limit=10&_page=${page}`);
  if (!res.ok) throw new Error("Error fetching posts");
  return res.json();
};

export const usePosts = (page: number) =>
  useQuery<Post[], Error>({
    queryKey: ["posts", page],
    queryFn: () => fetchPostsPage(page),
    staleTime: 70000, // 1 minute
    cacheTime: 50000, // 5 minutes
    keepPreviousData: true, // Keep previous data while fetching new data
  });
