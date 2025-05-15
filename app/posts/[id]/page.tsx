import { fetchPost } from "../../../hooks/usePost";
import Link from "next/link";
import { posts } from "@/app/api/_data";
import { CommentList } from "@/app/components/CommentList";
import Heading1 from "@/app/design_system/Headings/Heading1/Heading1";
import Heading2 from "@/app/design_system/Headings/Heading2/Heading2";

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
      <Heading1 className="text-3xl font-bold mt-4 mb-2">{post.title}</Heading1>
      <p className="mb-6">{post.body}</p>

      <Heading2 className="text-xl font-semibold mb-2">Comments</Heading2>
      {/* <NewCommentForm postId={Number(id)} /> */}
      <CommentList postId={Number(id)} />
    </main>
  );
}
