import React from 'react';
import { removePost } from '../../api/posts';

type Props = {
  selectedPost: SelectedPost | null,
}

export const PostDetails: React.FC<Props> = ({ selectedPost }) => {

  const onPostRemove = async () => {
    if (selectedPost?.id) {
      await removePost(selectedPost.id);
    }
  };
  if (!selectedPost) {
    return (
      <div>No post</div>
    );
  }

  return (
    <div className="content card">
      <h1>Title: {selectedPost.title}</h1>
      <p>Body: {selectedPost.body}</p>
      <ul>
        <p>Comments: {selectedPost.comments.map((comment: PostComment) => (
          <li key={comment.body}>{comment.body}</li>
        ))}
        </p>
      </ul>
      <button
        type="button"
        className="button is-danger is-centered"
        onClick={() => onPostRemove()}
      >
        Delete this post
      </button>
    </div>
  );
};
