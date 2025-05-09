import { dehydrate, QueryClient } from "@tanstack/react-query";
// import { ReactQueryClientProvider } from "@/providers/ReactQueryClientProvider";
import { fetchPostsPage, 
  // usePosts 
} from "@/hooks/usePosts";
import HomeContent from "@/components/HomeContent";
import { ReactQueryClientProvider } from "@/providers/ReactQueryClientProvider";

export default async function Home() {
  // Create a QueryClient instance
  // const queryClient = new QueryClient();

  // Prefetch the first page of posts on the server
  // await queryClient.prefetchInfiniteQuery(["posts"], () => fetchPostsPage({}));
  // Serialize the query cache for hydration
  const initialData = await fetchPostsPage({});
  // const dehydratedState = dehydrate(queryClient);
console.log("initialData", initialData);
  return (
    // <ReactQueryClientProvider dehydratedState={dehydratedState}>
      <HomeContent posts={initialData}/>
    // </ReactQueryClientProvider>
  );
}