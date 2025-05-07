"use client";

import { usePosts } from "../hooks/usePosts";
import { PostCard } from "../components/PostCard";
import { useRef, useEffect } from "react";
import { Spinner } from "@/components/Spinner";

export default function Home() {
  const { data, isLoading, fetchNextPage, hasNextPage } = usePosts();
  const loaderRef = useRef<HTMLDivElement | null>(null);

  // Infinite scroll – load next page when the sentinel div comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { rootMargin: "200px" }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [fetchNextPage, hasNextPage]);

  if (isLoading) {
    return <div className="flex justify-center mt-10">
    <Spinner size={32} />
  </div>;
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Blog Explorer</h1>

      <div className="grid gap-4">
        {data?.pages.flat().map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {/* Sentinel element for the IntersectionObserver */}
      <div ref={loaderRef} className="h-10" />

      {!hasNextPage && (
        <p className="text-center mt-4 text-gray-500">You’ve reached the end.</p>
      )}
    </main>
  );
}