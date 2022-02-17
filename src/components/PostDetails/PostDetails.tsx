import React from 'react';

type Props = {
  selectedPost: SelectedPost | null,
}

export const PostDetails: React.FC<Props> = ({ selectedPost }) => (
  <div className="content card">
    <h1>Title: {selectedPost?.title}</h1>
    <p>Body: {selectedPost?.body}</p>
    <p>Comments: {selectedPost?.comments}</p>
  </div>
);
