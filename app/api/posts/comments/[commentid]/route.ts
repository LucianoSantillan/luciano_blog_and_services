import { NextResponse } from "next/server";
import { comments } from "../../../_data";

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ commentid: string }> }
) {
  const { commentid } = await params;
  const idx = comments.findIndex((c) => c.id === Number(commentid));
  if (idx === -1)
    return NextResponse.json({ message: "Not found" }, { status: 404 });

  comments.splice(idx, 1);
  return new NextResponse(null, { status: 204 });
}
