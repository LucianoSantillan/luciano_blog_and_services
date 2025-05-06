import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Comment } from "./useComments";

// Function to delete a comment by its ID
const deleteComment = async (commentId: number) => {
  console.log(`Attempting to delete comment with ID: ${commentId}`); // Log the comment ID being deleted
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments/${commentId}`,
    { method: "DELETE" }
  );
  if (!res.ok) {
    console.error(`Failed to delete comment with ID: ${commentId}`); // Log an error if the deletion fails
    throw new Error("Error deleting comment");
  }
  console.log(`Successfully deleted comment with ID: ${commentId}`); // Log success if the deletion is successful
};

// Custom hook to handle deleting a comment for a specific post
export const useDeleteComment = (postId: number) => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: deleteComment,

    // Optimistic update: modify the cache before the mutation is completed
    onMutate: async (commentId) => {
      console.log(`Starting mutation for comment ID: ${commentId}`); // Log the start of the mutation
      await qc.cancelQueries({ queryKey: ["comments", postId] });
      console.log(`Cancelled ongoing queries for comments of post ID: ${postId}`); // Log query cancellation

      // Fetch the current state of the comments for the post
      const previous = qc.getQueryData<Comment[]>(["comments", postId]) || [];
      console.log("Previous comments data:", previous); // Log the previous comments data

      // Optimistically update the cache by removing the comment
      qc.setQueryData<Comment[]>(["comments", postId], (old) =>
        (old || []).filter((c) => c.id !== commentId)
      );
      console.log(`Optimistically removed comment ID: ${commentId} from cache`); // Log the optimistic update

      // Return the previous state so it can be restored in case of an error
      return { previous };
    },

    // Handle errors by restoring the previous state
    onError: (_e, _id, ctx) => {
      console.error("Error occurred during mutation:", _e); // Log the error
      if (ctx?.previous) {
        qc.setQueryData(["comments", postId], ctx.previous);
        console.log("Restored previous comments data to cache"); // Log the restoration of the previous state
      }
    },

    // Invalidate queries to ensure the data is refetched after the mutation
    onSettled: () => {
      console.log(`Mutation settled for post ID: ${postId}`); // Log when the mutation is settled
      qc.invalidateQueries({ queryKey: ["comments", postId] });
      console.log(`Invalidated queries for comments of post ID: ${postId}`); // Log query invalidation for comments
      qc.invalidateQueries({ queryKey: ["posts"] });
      console.log("Invalidated queries for posts"); // Log query invalidation for posts
    },
  });
};