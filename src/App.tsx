import React from 'react';
import { useSelector } from 'react-redux';
import './App.scss';
import { AddPostForm } from './components/AddPostForm/AddPostForm';
import { PostDetails } from './components/PostDetails/PostDetails';
import { PostList } from './components/PostList';
import { getSelectedPostSelector } from './store/selectors';

function App() {
  const selectedPost: SelectedPost | null = useSelector(getSelectedPostSelector);

  return (
    <div className="App">
      <div className="columns">
        <div className="column">
          <PostList />
        </div>
        <div className="column is-3">
          <PostDetails selectedPost={selectedPost} />
          <AddPostForm />
        </div>
      </div>
    </div>
  );
}

export default App;
