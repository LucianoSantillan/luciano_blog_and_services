"use client";

import { usePost } from "../../../hooks/usePost";
import { CommentList } from "../../../components/CommentList";
import { NewCommentForm } from "@/components/NewCommentForm";  // ← NEW
import Link from "next/link";
import { Spinner } from "@/components/Spinner";

export default function PostDetailPage({ params }: { params: { id: string } }) {
  const postId = Number(params.id);
  const { data: post, isLoading, error } = usePost(postId);

  if (isLoading) return <div className="flex justify-center mt-10">
  <Spinner size={32} />
</div>;
  if (error)     return <p className="text-center mt-10 text-red-600">Error loading post.</p>;
  if (!post)     return null;

  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      <Link href="/" className="text-sm text-blue-600 hover:underline">← Back to posts</Link>

      <h1 className="text-2xl font-bold mt-4 mb-2">{post.title}</h1>
      <p className="mb-6">{post.body}</p>

      <h2 className="text-xl font-semibold mb-2">Comments</h2>
      <NewCommentForm postId={postId} />
      <CommentList postId={postId} />
    </main>
  );
}
