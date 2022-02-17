const API_URL = 'https://bloggy-api.herokuapp.com';

export async function getPosts() {
  const response = await fetch(`${API_URL}/posts`);

  return response.json();
}

export async function getPostWithComments(postId: number) {
  const response = await fetch(`${API_URL}/posts/${postId}?_embed=comments`);

  return response.json();
}