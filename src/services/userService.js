import http from "./httpService";

const apiEndpoint = http.baseUrl + "users/";

export function register(user){
  return http.post(apiEndpoint, {
        username : user.username,
        email: user.email,
        password : user.password,
        first_name : user.firstName,
        last_name : user.lastName
    })
}