import { NextResponse } from "next/server";
import { posts } from "../_data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = Number(searchParams.get("_limit") ?? 10);
  const page  = Number(searchParams.get("_page")  ?? 1);

  const start = (page - 1) * limit;
  const paginatedPosts = posts.slice(start, start + limit);
  const totalPages = Math.ceil(posts.length / limit);

  return NextResponse.json({
    data: paginatedPosts,
    totalPages,
  });
}