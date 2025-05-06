import { useComments } from "./useComments";

/**
 * Lightweight helper that just returns the current number of comments
 * for a post. It shares the same cache entry as useComments, so no extra
 * network request is fired if the list has already been fetched.
 */
export const useCommentCount = (postId: number) => {
  const { data, isLoading } = useComments(postId);
  return { count: data?.length ?? 0, isLoading };
};
