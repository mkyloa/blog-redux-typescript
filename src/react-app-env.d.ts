/// <reference types="react-scripts" />

type State = {
  posts: Post[] | [],
  selectedPost: SelectedPost | null,
};

type Action = {
  type: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any,
};

type Post = {
  id: number,
  title: string,
  body: string,
};

interface SelectedPost extends Post {
  comments: PostComment[],
}

type PostComment = {
  postId: number,
  body: string,
}