import JwtDecode from "jwt-decode";
import http from "./httpService";

const apiEndpoint = http.baseUrl + "users/login/";
const tokenKey= "token";

http.setJwt(getJwt())

export async function login(username, password){
  const {data:jwt}= await http.post(apiEndpoint, {username, password})
  localStorage.setItem(tokenKey, jwt)
}

export function loginWithJwt(jwt){
  localStorage.setItem(tokenKey, jwt)
}

export function logout(){
  localStorage.removeItem(tokenKey)
}

export function getCurrentUser(){
  try {
    const jwt = localStorage.getItem(tokenKey);
    return JwtDecode(jwt);
  } catch (ex) {
    return null
  }
}

export function getJwt(){
 return localStorage.getItem(tokenKey)
}
