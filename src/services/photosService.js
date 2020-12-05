import http from "./httpService";

const apiEndpoint = "http://localhost:8000/images/";

export function getPhotos() {
    return http.get(apiEndpoint)
    
}

export function addPhoto(body) {
    return http.post(body, apiEndpoint)
    
}

