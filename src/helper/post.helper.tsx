import axios from "axios";
import { Post, CommentData } from "../type/postType";

export const getPostsByPostId = async (postId: number): Promise<Post> => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  return response.data;
};

export const getCommentByPostId = async (
  postId: number
): Promise<CommentData> => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );
  return response;
};
