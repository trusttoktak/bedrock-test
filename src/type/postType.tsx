export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface CommentData {
  data: Comment[];
}

export type CommentProps = {
  initials: {
    text: string;
    bgColor: string;
  };
  email: string;
  content: string;
};
