import http from "./httpService";

const apiEndpoint = "http://localhost:8000/posts/";

export function getPosts(user_id) {
  return http.get(apiEndpoint, {params: {user_id}});
}

export function getPost(postId) {
  return http.get(apiEndpoint + postId);
}

export function savePost(post) {
  if (post._id) {
    const body = { ...post };
    delete body._id;
    return http.put(apiEndpoint + post._id, body);
  }

  return http.post(apiEndpoint, post);
}

export function deletePost(postId) {
  return http.delete(apiEndpoint + postId);
}
