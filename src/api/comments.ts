const API_URL = 'https://bloggy-api.herokuapp.com';

export async function addNewComment(postId: number, body: string) {
  const newComment = await fetch(`${API_URL}/comments`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      postId,
      body,
    }),
  });

  return newComment.json();
}