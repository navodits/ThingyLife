import http from "./httpService";

const apiEndpoint = http.baseUrl + "images/";

export function getPhotos(user_id) {
  return http.get(apiEndpoint, {params: {user_id}});
}

export function addPhoto(body, config) {
  return http.post(apiEndpoint, body, config);
}
