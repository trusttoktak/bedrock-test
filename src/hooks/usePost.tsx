import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { getPostsByPostId, getCommentByPostId } from "../helper/post.helper";
import { Post, CommentData } from "../type/postType";

export const useQueryPosts = (
  postId: number,
  options?: UseQueryOptions<Post>
) => {
  return useQuery<Post>({
    queryKey: ["post", postId],
    queryFn: () => getPostsByPostId(postId),
    retry: 0,
    refetchOnWindowFocus: false,
    ...options,
  });
};

export const useQueryComment = (
  postId: number,
  options?: UseQueryOptions<CommentData>
) => {
  return useQuery<CommentData>({
    queryKey: ["comments", postId],
    queryFn: () => getCommentByPostId(postId),
    retry: 0,
    refetchOnWindowFocus: false,
    ...options,
  });
};
