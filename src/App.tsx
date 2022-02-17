import React from 'react';
import './App.scss';
import { AddPostForm } from './components/AddPostForm/AddPostForm';
import { PostDetails } from './components/PostDetails/PostDetails';
import { PostList } from './components/PostList';

function App() {
  return (
    <div className="App">
      <div className="columns">
        <div className="column">
          <PostList />
        </div>
        <div className="column is-3">
          <PostDetails />
          <AddPostForm />
        </div>
      </div>
    </div>
  );
}

export default App;
