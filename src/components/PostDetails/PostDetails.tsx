import React from 'react';
import { removePost } from '../../api/posts';
import './PostDetails.scss';

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
      <div 
        className="content has-text-centered"
      >
        <h3>No post selected</h3>
      </div>
    );
  }

  return (
    <div className="content card PostDetails">
      <h1>Title: {selectedPost.title}</h1>
      <p>Body: {selectedPost.body}</p>
      <ul>
        <p>
          Comments ({selectedPost.comments.length})
        </p>
        {selectedPost.comments.map((comment: PostComment) => (
          <li key={comment.body}>{comment.body}</li>
        ))}
      </ul>
      <button
        type="button"
        className="button is-danger PostDetails__button"
        onClick={() => onPostRemove()}
      >
        Delete this post
      </button>
    </div>
  );
};
