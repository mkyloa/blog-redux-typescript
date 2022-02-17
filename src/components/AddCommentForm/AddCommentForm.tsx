import React, { useState } from 'react';
import './AddCommentForm.scss';

type Props = {
  addComment: (body: string) => Promise<void>,
};

export const AddCommentForm: React.FC<Props> = ({ addComment }) => {
  const [commentBody, setCommentBody] = useState('');

  const addNewComment = () => {
    if (commentBody) {
      addComment(commentBody);
      setCommentBody('');
    }
  };

  return (
    <div className="AddCommentForm">
      <input
        className="input"
        type="text"
        placeholder="Type your comment..."
        value={commentBody}
        onChange={(event) => setCommentBody(event.target.value)}
      />

      <button
        className="button AddCommentForm__button"
        onClick={addNewComment}
      >
        Submit comment
      </button>
    </div>
  );
};