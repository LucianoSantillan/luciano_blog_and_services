import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Comment } from "./useComments";

interface NewCommentInput {
  name: string;
  email: string;
  body: string;
}

const addComment = async (
  postId: number,
  data: NewCommentInput
): Promise<Comment> => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, postId }),
    }
  );
  if (!res.ok) throw new Error("Error adding comment");
  return res.json(); // JSONPlaceholder echoes the new comment
};

export const useAddComment = (postId: number) => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (data: NewCommentInput) => addComment(postId, data),

    // 🔄 optimistic update
    onMutate: async (data) => {
      await qc.cancelQueries({ queryKey: ["comments", postId] });
      const previous = qc.getQueryData<Comment[]>(["comments", postId]) || [];

      const optimistic: Comment = {
        id: Date.now(), // temp id
        postId,
        ...data,
      };
      qc.setQueryData<Comment[]>(["comments", postId], [
        ...previous,
        optimistic,
      ]);

      return { previous };
    },
    onError: (_err, _vars, ctx) => {
      if (ctx?.previous) qc.setQueryData(["comments", postId], ctx.previous);
    },
    onSettled: () => {
      qc.invalidateQueries({ queryKey: ["comments", postId] });
      qc.invalidateQueries({ queryKey: ["posts"] }); // keeps comment counts fresh
    },
  });
};
