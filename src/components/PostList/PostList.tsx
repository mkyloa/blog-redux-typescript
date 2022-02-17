import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, getPostWithComments } from '../../api/posts';
import { LoadPostsAction, LoadSelectedPostAction } from '../../store/actions';
import { getPostsSelector } from '../../store/selectors';

export const PostList = () => {
  const [selectedPostId, setSelectedPostId] = useState(0);
  const dispatch = useDispatch();
  const posts: Post[] = useSelector(getPostsSelector);

  useEffect(() => {
    const loadPosts = async () => {
      const postsFromServer = await getPosts();
      dispatch(LoadPostsAction(postsFromServer));
    };

    loadPosts();
  });

  const loadSelectedPost = async (postId: number) => {
    if (postId !== selectedPostId) {
      const selectedPostFromServer = await getPostWithComments(postId);
      console.log(selectedPostFromServer);
      setSelectedPostId(postId);
      dispatch(LoadSelectedPostAction(selectedPostFromServer));
    }
  };


  return (
    <div className="content list">
      <ul>
        {posts.map(post => (
          <div key={post.id} className="list-item">
            <li>
              <h1>{post.title}</h1>
              {post.body}
              <button
                className="button"
                onClick={() => loadSelectedPost(post.id)}
              >
                Open post
              </button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};