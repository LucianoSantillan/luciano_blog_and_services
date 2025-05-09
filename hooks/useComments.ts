import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const fetchComments = async (postId: number, pageParam = 1): Promise<Comment[]> => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments?_limit=3&_page=${pageParam}`
  )
  if (!res.ok) throw new Error("Error fetching comments");
  return res.json();
};

export const useComments = (postId: number) =>
  useInfiniteQuery<Comment[], Error>({
    queryKey: ["comments", postId],
    queryFn: ({ pageParam = 1 }) => fetchComments(postId, pageParam), // Pass pageParam to fetchComments
    getNextPageParam: (lastPage, allPages) => {
      // Check if the last page has data
      if (lastPage.length === 0) {
        return undefined; // No more pages
      }
      return allPages.length + 1; // Fetch the next page
    },
    staleTime: 60000, // 1 minute
    cacheTime: 300000, // 5 minutes
   });
