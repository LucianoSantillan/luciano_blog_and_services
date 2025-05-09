import { dehydrate, QueryClient } from "@tanstack/react-query";
import { ReactQueryClientProvider } from "@/providers/ReactQueryClientProvider";
import { fetchPostsPage, usePosts } from "@/hooks/usePosts";
import HomeContent from "@/components/HomeContent";

export default async function Home() {
  // Create a QueryClient instance
  const queryClient = new QueryClient();

  // Prefetch the first page of posts on the server
  await queryClient.prefetchInfiniteQuery(["posts"], () => fetchPostsPage({}));
  // Serialize the query cache for hydration
  const dehydratedState = dehydrate(queryClient);

  return (
    <ReactQueryClientProvider dehydratedState={dehydratedState}>
      <HomeContent />
    </ReactQueryClientProvider>
  );
}