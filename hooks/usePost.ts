// import { useQuery } from "@tanstack/react-query";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const fetchPost = async (postId: number): Promise<Post> => {
  const res = await fetch(
    `http://localhost:3000/posts/${postId}`
  );
  if (!res.ok) throw new Error("Error fetching post");
  return res.json();
};

// export const usePost = (postId: number) =>
//   useQuery<Post, Error>({
//     queryKey: ["post", postId],
//     queryFn: () => fetchPost(postId),
//   });
