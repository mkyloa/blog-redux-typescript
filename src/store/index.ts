import { createStore } from '@reduxjs/toolkit';
import { LOAD_POSTS, SELECT_POST } from './actions';

const initialState: State = {
  posts: [],
  selectedPost: null,
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        posts: [...action.payload],
      };
    
    case SELECT_POST:
      return {
        ...state,
        selectedPost: action.payload,
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;