// app/page.tsx
import { PostCard } from "@/app/[locale]/components/PostCard/PostCard";
import { Post } from "@/hooks/usePost";
import { Metadata } from "next";
import Link from "next/link";
import Heading1 from "../design_system/Headings/Heading1/Heading1";

interface Props {
  searchParams: Promise<{ page?: string }>;
}

export const revalidate = 60; // ISR

export const metadata: Metadata = {
  title: "Blog Explorer",
};

interface Pagination<Data> {
  data: Data[];
  totalPages: number;
}

async function fetchPostsPage(page: number = 1): Promise<Pagination<Post>> {
  const res = await fetch(
    `http://localhost:3000/api/posts?_limit=10&_page=${page}`,
    { next: { revalidate: 60 } }
  );
  const data = await res.json();
  if (!res.ok) throw new Error("Error fetching posts");
  return data;
}


export default async function Home({ searchParams }: Props) {
  const { page } = await searchParams;
  const currentPage = parseInt(page || "1", 10);
  const { data: posts, totalPages } = await fetchPostsPage(currentPage);
  const hasMorePages = currentPage < totalPages;
  const hasLessPages = currentPage > 1;

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center">
        <Heading1 className="text-3xl font-bold mb-6">Blog Explorer</Heading1>
      </div>

      {posts.length === 0 ? (
        <p className="text-center text-gray-500">No more posts to show.</p>
      ) : (
        <div className="grid gap-4">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}

      <div className="flex justify-between mt-6">
        <Link
          href={`/?page=${currentPage - 1}`}
          className={`px-4 py-2 bg-gray-200 rounded ${!hasLessPages ? "opacity-50 pointer-events-none" : ""
            }`}
          // scroll={false}
          aria-disabled={!hasLessPages}
          tabIndex={-1}
        >
          Previous
        </Link>
        <Link
          href={`/?page=${currentPage + 1}`}
          className={`px-4 py-2 bg-gray-200 rounded ${!hasMorePages ? "opacity-50 pointer-events-none" : ""
            }`}
          // scroll={false}
          aria-disabled={!hasMorePages}
          tabIndex={-1}
        >
          Next
        </Link>
      </div>
    </main>
  );
}
