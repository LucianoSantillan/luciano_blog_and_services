export interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
  }
  
  export interface Comment {
    id: number;
    postId: number;
    name: string;
    email: string;
    body: string;
  }
  
  let postIdSeq = 1;
  let commentIdSeq = 1;
  
  // 30 dummy posts
  export const posts: Post[] = Array.from({ length: 30 }, () => ({
    id: postIdSeq,
    userId: 1,
    title: `Post ${postIdSeq}`,
    body: `This is the body for post #${postIdSeq++}.`,
  }));
  
  // 3 comments per post
  export const comments: Comment[] = posts.flatMap((p) =>
    Array.from({ length: 3 }, () => ({
      id: commentIdSeq,
      postId: p.id,
      name: `User ${commentIdSeq}`,
      email: `user${commentIdSeq}@example.com`,
      body: `Comment ${commentIdSeq++} on post ${p.id}.`,
    }))
  );
  