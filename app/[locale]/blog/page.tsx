import { PostCard } from "@/app/[locale]/components/PostCard/PostCard";
import { Post } from "@/app/api/_data";
import Heading1 from "@/app/design_system/Headings/Heading1/Heading1";
import Link from "@/app/design_system/Link/Link";

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

export default async function BlogPage({ searchParams }: { searchParams: { page?: string } }) {
  const currentPage = parseInt(searchParams.page || "1", 10);
  const { data: posts, totalPages } = await fetchPostsPage(currentPage);
  const hasMorePages = currentPage < totalPages;
  const hasLessPages = currentPage > 1;

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Heading1 className="text-3xl font-bold mb-6">Blog</Heading1>

      {posts.length === 0 ? (
        <p className="text-center text-gray-500">No posts available.</p>
      ) : (
        <div className="grid gap-4">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}

      <div className="flex justify-between mt-6">
        <Link
          href={`/blog?page=${currentPage - 1}`}
          className={`px-4 py-2 bg-gray-200 rounded ${!hasLessPages ? "opacity-50 pointer-events-none" : ""}`}
          aria-disabled={!hasLessPages}
        >
          Previous
        </Link>
        <Link
          href={`/blog?page=${currentPage + 1}`}
          className={`px-4 py-2 bg-gray-200 rounded ${!hasMorePages ? "opacity-50 pointer-events-none" : ""}`}
          aria-disabled={!hasMorePages}
        >
          Next
        </Link>
      </div>
    </main>
  );
}