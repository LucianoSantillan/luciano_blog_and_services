import { fetchPost } from "../../../hooks/usePost";
import Link from "next/link";
import {posts} from "@/app/api/_data";
import { CommentList } from "@/components/CommentList";

export async function generateStaticParams() {
  return posts.map((post: { id: number }) => ({
    id: post.id.toString(), // ✅ MUST match [id] in route
  }));
}

export default async function PostDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; // ✅ No await here
  console.log("id", id); // 🔁 Should log once now
  const post = posts.find((p) => p.id === Number(id));
  if (!post) { throw new Error("Post not found"); }
  console.log("post", post);

  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      <Link href="/" className="text-sm text-blue-600 hover:underline">
        ← Back to posts
      </Link>
      <h1 className="text-2xl font-bold mt-4 mb-2">{post.title}</h1>
      <p className="mb-6">{post.body}</p>

      <h2 className="text-xl font-semibold mb-2">Comments</h2>
      {/* <NewCommentForm postId={Number(id)} /> */}
      <CommentList postId={Number(id)} />
    </main>
  );
}
