import { useQuery } from "@tanstack/react-query";

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const fetchComments = async (postId: number): Promise<Comment[]> => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );
  if (!res.ok) throw new Error("Error fetching comments");
  return res.json();
};

export const useComments = (postId: number) =>
  useQuery<Comment[], Error>({
    queryKey: ["comments", postId],
    queryFn: () => fetchComments(postId),
  });
