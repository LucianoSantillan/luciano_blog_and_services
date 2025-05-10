import { NextResponse } from "next/server";
import { posts } from "../../_data";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ postid: string }> }
) {
  const {postid} = await params;
  const post = posts.find((p) => p.id === Number(postid));
  return post
    ? NextResponse.json(post)
    : NextResponse.json({ message: "Not found" }, { status: 404 });
}
