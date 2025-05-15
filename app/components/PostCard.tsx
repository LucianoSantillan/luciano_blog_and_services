"use client";

import Link from "next/link";
import { Post } from "../../hooks/usePost";
// import { useCommentCount } from "../hooks/useCommentCount";
import { useQueryClient } from "@tanstack/react-query";
import Head from "next/head";
import { Heading } from "lucide-react";
import Heading2 from "../design_system/Headings/Heading2/Heading2";

export function PostCard({ post }: { post: Post }) {
  // const { count, isLoading } = useCommentCount(post.id);
  const qc = useQueryClient();

  // Prefetch the post + comments on hover for snappy navigation
  const prefetch = () => {
    qc.prefetchQuery(["post", post.id], {
      queryFn: () => fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`).then(r => r.json()),
      staleTime: 60_000,
    });
    qc.prefetchQuery(["comments", post.id], {
      queryFn: () => fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`).then(r => r.json()),
      staleTime: 60_000,
    });
  };

  return (
    <Link
      href={`/posts/${post.id}`}
      onMouseEnter={prefetch}
      className="block bg-white rounded-xl p-6 shadow hover:shadow-md transition"
    >
      <Heading2 className="text-xl font-semibold mb-2">{post.title}</Heading2>
      <p className="text-sm text-gray-700 line-clamp-3">{post.body}</p>

      {/* <span className="text-xs text-gray-500 mt-3 inline-block">
        {isLoading ? "…" : `${count} comment${count === 1 ? "" : "s"}`}
      </span> */}
    </Link>
  );
}
