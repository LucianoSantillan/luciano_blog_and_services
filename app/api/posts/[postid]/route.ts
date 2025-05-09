import { NextResponse } from "next/server";
import { posts } from "../../_data";

export async function GET(
  _req: Request,
  { params }: { params: { postId: string } }
) {
  const post = posts.find((p) => p.id === Number(params.postId));
  return post
    ? NextResponse.json(post)
    : NextResponse.json({ message: "Not found" }, { status: 404 });
}
