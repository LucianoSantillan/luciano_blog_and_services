import { NextResponse } from "next/server";
import { comments } from "../../_data";
import type { Comment } from "../../_data";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ postid: string }> }
) {
  const { postid } = await params;
  const list = comments.filter((c) => c.postId === Number(postid));
  return NextResponse.json(list);
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ postid: string }> }
) {
  const data = (await request.json()) as Pick<
    Comment,
    "name" | "email" | "body"
  >;
  const { postid } = await params;
  const newComment: Comment = {
    ...data,
    postId: Number(postid),
    id: comments.length ? Math.max(...comments.map((c) => c.id)) + 1 : 1,
  };
  comments.push(newComment);
  return NextResponse.json(newComment, { status: 201 });
}
