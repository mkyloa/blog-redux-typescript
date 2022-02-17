import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewComment } from '../../api/comments';
import { removePost } from '../../api/posts';
import { LoadSelectedPostAction } from '../../store/actions';
import { getSelectedPostSelector } from '../../store/selectors';
import { AddCommentForm } from '../AddCommentForm';
import './PostDetails.scss';

export const PostDetails: React.FC = () => {
  const dispatch = useDispatch();
  const selectedPost: SelectedPost | null = useSelector(getSelectedPostSelector);
  const [showCommentForm, setShowCommentForm] = useState(false);

  const onPostRemove = async () => {
    if (selectedPost?.id) {
      await removePost(selectedPost.id);
    }
  };

  const addComment = async (body: string) => {
    if (selectedPost) {
      await addNewComment(selectedPost.id, body);
      dispatch(LoadSelectedPostAction({
        ...selectedPost,
        comments: [...selectedPost.comments, {
          postId: selectedPost.id,
          body,
        }]
      }));
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
      {showCommentForm && <AddCommentForm addComment={addComment} />}
      <div className="buttons has-addons PostDetails__buttons">
        <button className="button is-warning">Edit</button>

        <button
          className="button is-info"
          onClick={() => setShowCommentForm(!showCommentForm)}
        >
          Comment
        </button>

        <button
          type="button"
          className="button is-danger"
          onClick={() => onPostRemove()}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
