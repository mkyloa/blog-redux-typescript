const API_URL = 'https://bloggy-api.herokuapp.com';

export async function getPosts() {
  const response = await fetch(`${API_URL}/posts`);

  return response.json();
}

export async function getPostWithComments(postId: number) {
  const response = await fetch(`${API_URL}/posts/${postId}?_embed=comments`);

  return response.json();
}

export async function addNewPost(title: string, body: string) {
  const newPost = await fetch(`${API_URL}/posts`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      id: Math.floor(Math.random() * 1000),
      title,
      body,
    }),
  });

  return newPost.json();
}

export async function removePost(postId: number) {
  const response = await fetch(`${API_URL}/posts/${postId}`, {
    method: 'DELETE',
  });

  return response.json();
}
