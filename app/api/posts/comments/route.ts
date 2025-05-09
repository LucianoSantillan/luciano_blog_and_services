import { NextResponse } from "next/server";
import { comments } from "../../_data";
import type { Comment } from "../../_data";

export async function GET(
  _req: Request,
  { params }: { params: { postId: string } }
) {
  const list = comments.filter((c) => c.postId === Number(params.postId));
  return NextResponse.json(list);
}

export async function POST(
  request: Request,
  { params }: { params: { postId: string } }
) {
  const data = (await request.json()) as Pick<
    Comment,
    "name" | "email" | "body"
  >;
  const newComment: Comment = {
    ...data,
    postId: Number(params.postId),
    id: comments.length ? Math.max(...comments.map((c) => c.id)) + 1 : 1,
  };
  comments.push(newComment);
  return NextResponse.json(newComment, { status: 201 });
}
