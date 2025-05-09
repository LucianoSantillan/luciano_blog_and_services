import { useEffect, useRef } from "react";

interface UseInfiniteScrollOptions {
  hasNextPage: boolean;
  fetchNextPage: () => void;
  rootMargin?: string;
}

export const useInfiniteScroll = ({
  hasNextPage,
  fetchNextPage,
  rootMargin = "200px",
}: UseInfiniteScrollOptions) => {
  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          console.log("Fetching next page...");
          fetchNextPage();
        }
      },
      { rootMargin }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [fetchNextPage, hasNextPage, rootMargin]);

  return loaderRef;
};