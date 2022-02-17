import React, { useState } from 'react';
import { addNewPost } from '../../api/posts';


export const AddPostForm: React.FC = () => {
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');

  const clearForm = () => {
    setPostTitle('');
    setPostBody('');
  };

  const addNewComment = async (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if(postTitle && postBody) {
      await addNewPost(postTitle, postBody);
      clearForm();
    }
  };

  return (
    <div className="content container">
      <input 
        type="text"
        className="input"
        placeholder="Title"
        value={postTitle}
        onChange={(event) => setPostTitle(event.target.value)}
      />
      <textarea
        className="textarea"
        placeholder="Write something..."
        value={postBody}
        onChange={(event) => setPostBody(event.target.value)}
      />
      <button 
        type="submit"
        className="button is-primary"
        onClick={(event) => addNewComment(event)}
      >
        Submit
      </button>
    </div>
  );
};