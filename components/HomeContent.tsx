"use client";
import { useState } from "react";
import { PostCard } from "@/components/PostCard";
import { Spinner } from "@/components/Spinner";
import { usePosts } from "@/hooks/usePosts";
import { Post } from "@/hooks/usePost";

export default function HomeContent() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, error } = usePosts(currentPage);

  const handleNextPage = () => setCurrentPage((prev) => prev + 1);
  const handlePreviousPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  if (isLoading) {
    return (
      <div className="flex justify-center mt-10">
        <Spinner size={32} />
      </div>
    );
  }

  if (error) {
    return <p className="text-center text-red-500">Error loading posts.</p>;
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 className="text-3xl font-bold mb-6">Blog Explorer</h1>
      </div>

      <div className="grid gap-4">
        {data?.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          className="px-4 py-2 bg-gray-200 rounded"
        >
          Next
        </button>
      </div>
    </main>
  );
}