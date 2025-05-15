"use client";

import { useState } from "react";
import { useAddComment } from "../../hooks/useAddComment";

export function NewCommentForm({ postId }: { postId: number }) {
  const [name, setName]   = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody]   = useState("");
  const addComment = useAddComment(postId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addComment.mutate({ name, email, body }, { onSuccess: () => {
      setName(""); setEmail(""); setBody("");
    }});
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 mt-6">
      <h3 className="font-semibold">Add a comment</h3>

      <input
        className="w-full border rounded p-2"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className="w-full border rounded p-2"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <textarea
        className="w-full border rounded p-2"
        placeholder="Comment"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      />

      <button
        type="submit"
        disabled={addComment.isLoading}
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-40"
      >
        {addComment.isLoading ? "Posting…" : "Post comment"}
      </button>

      {addComment.isError && (
        <p className="text-sm text-red-600">Couldn’t add comment – try again.</p>
      )}
    </form>
  );
}
