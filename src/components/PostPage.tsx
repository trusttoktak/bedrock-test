import React from "react";
import { useQueryPosts, useQueryComment } from "../hooks/usePost";
import { useParams } from "react-router-dom";
import { Comment } from "./Commnet";

const PostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: postData,
    isLoading: postLoading,
    isError: postError,
  } = useQueryPosts(Number(id));

  const {
    data: commentData,
    isLoading: commentLoading,
    isError: commentError,
  } = useQueryComment(Number(id));

  if (postLoading || commentLoading) {
    return <div>Loading...</div>;
  }

  if (postError || commentError) {
    return <div>Error loading data</div>;
  }

  if (!postData || !commentData) {
    return null;
  }

  return (
    <div className="bg-gray-200 p-8 min-h-screen">
      <div className="bg-white max-w-screen-xl mx-auto rounded-xl pl-5 pt-3 pb-8">
        <h1 className="text-2xl font-bold mb-4">{postData.title}</h1>
        <p className="mb-8" style={{ maxWidth: "930px" }}>
          {postData.body}
        </p>
        {commentData.data.map((comment, i) => (
          <Comment
            key={comment.id}
            initials={{
              text: comment.email.substring(0, 2),
              bgColor: `bg-${["red", "blue", "green"][i % 3]}-400`,
            }}
            email={comment.email}
            content={comment.body}
          />
        ))}
        <div className="mr-4" style={{ marginTop: "50px" }}>
          <textarea
            className="w-full p-4 text-gray-700 leading-tight rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
            placeholder="Textarea"
          />
        </div>
      </div>
    </div>
  );
};

export default PostPage;
