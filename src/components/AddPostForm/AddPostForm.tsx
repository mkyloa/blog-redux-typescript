import React from 'react';


export const AddPostForm: React.FC = () => {
  return (
    <div>
      <input type="text" placeholder="Title" />
      <input type="text" placeholder="Write something..." />
      <button type="submit">Submit</button>
    </div>
  );
};