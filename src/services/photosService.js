import http from "./httpService";



export function getPhotos() {
    return http.get(apiEndpoint)
    
}

export function addPhoto(body) {
    return http.post(body, apiEndpoint)
    
}

