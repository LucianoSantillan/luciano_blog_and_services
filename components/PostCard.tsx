import Link from "next/link";
import { Post } from "../hooks/usePosts";

export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/posts/${post.id}`}
      className="block p-4 bg-white rounded-2xl shadow hover:shadow-md transition"
    >
      <h2 className="font-semibold text-lg mb-1">{post.title}</h2>
      <p className="text-sm text-gray-600">{post.body.slice(0, 80)}...</p>
    </Link>
  );
}