"use client";
import { PostCard } from "@/components/PostCard";
import { Spinner } from "@/components/Spinner";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { usePosts } from "@/hooks/usePosts";
import { Post } from "@/hooks/usePost";

export default function HomeContent({posts}: {posts: Post[]}) {
  console.log("posts", posts);
  const { data, isLoading, fetchNextPage, hasNextPage } = usePosts({initialData: posts});
  const loaderRef = useInfiniteScroll({ hasNextPage: !!hasNextPage, fetchNextPage });
  console.log("has next page", hasNextPage);

  if (isLoading) {
    return (
      <div className="flex justify-center mt-10">
        <Spinner size={32} />
      </div>
    );
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 className="text-3xl font-bold mb-6">Blog Explorer</h1>
      </div>

      <div className="grid gap-4">
        {data?.pages.flat().map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {/* Sentinel element for the IntersectionObserver */}
      <div id="sentinel" ref={loaderRef} className="h-10" />

      {!hasNextPage && (
        <p className="text-center mt-4 text-gray-500">You’ve reached the end.</p>
      )}
    </main>
  );
}