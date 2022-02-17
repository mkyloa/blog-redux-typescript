import { AnyAction } from '@reduxjs/toolkit';

export const LOAD_POSTS = 'LOAD_POSTS';
export const SELECT_POST = 'SELECT_POST';

export const LoadPostsAction = (payload: Post[]): AnyAction => ({
  type: LOAD_POSTS,
  payload,
});

export const LoadSelectedPostAction = (payload: SelectedPost | null): AnyAction => ({
  type: SELECT_POST,
  payload,
});