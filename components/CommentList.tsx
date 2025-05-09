'use client'
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { useComments } from "../hooks/useComments";
import { useDeleteComment } from "../hooks/useDeleteComment";

export function CommentList({ postId }: { postId: number }) {
  const { data: comments, isLoading, error, hasNextPage, fetchNextPage } = useComments(postId);
  const deleteComment = useDeleteComment(postId);
  console.log("has next page", hasNextPage);
  const loaderRef = useInfiniteScroll({ hasNextPage: !!hasNextPage, fetchNextPage });

  if (isLoading) return <p className="text-sm text-gray-500">Loading comments…</p>;
  if (error) return <p className="text-red-500">Error loading comments.</p>;

  return (
    <div>
      <ul className="space-y-4 mt-6">
        {comments?.pages.flat().map((c) => (
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
      {/* Sentinel element for the IntersectionObserver */}
      <div id="sentinel" ref={loaderRef} className="h-10" />

      {!hasNextPage && (
        <p className="text-center mt-4 text-gray-500">You’ve reached the end.</p>
      )}
    </div>
  );
}
