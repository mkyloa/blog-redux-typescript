import React, { useState } from 'react';


export const AddPostForm: React.FC = () => {
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');

  return (
    <div>
      <input 
        type="text" 
        placeholder="Title"
        value={postTitle}
        onChange={(event) => setPostTitle(event.target.value)}
      />
      <input 
        type="text" 
        placeholder="Write something..."
        value={postBody}
        onChange={(event) => setPostBody(event.target.value)}
      />
      <button 
        type="submit"
      >
        Submit
      </button>
    </div>
  );
};