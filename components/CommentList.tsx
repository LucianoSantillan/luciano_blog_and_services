import { useComments } from "../hooks/useComments";
import { useDeleteComment } from "../hooks/useDeleteComment";

export function CommentList({ postId }: { postId: number }) {
  const { data: comments, isLoading, error } = useComments(postId);
  const deleteComment = useDeleteComment(postId);

  if (isLoading) return <p className="text-sm text-gray-500">Loading comments…</p>;
  if (error) return <p className="text-red-500">Error loading comments.</p>;

  return (
    <ul className="space-y-4 mt-6">
      {comments?.map((c) => (
        <li key={c.id} className="bg-white rounded-xl p-4 shadow relative">
          <button
            aria-label="Delete comment"
            onClick={() => { console.log("onClick"); deleteComment.mutate(c.id) }}
            disabled={deleteComment.isLoading}
            className="absolute top-2 right-2 text-xs text-red-500 hover:underline"
          >
            ×
          </button>

          <p className="font-semibold">{c.name}</p>
          <p className="text-xs text-gray-500 mb-2">{c.email}</p>
          <p className="text-sm text-gray-700">{c.body}</p>
        </li>
      ))}
    </ul>
  );
}
