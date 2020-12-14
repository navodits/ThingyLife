import axios from "axios";
import { toast } from "react-toastify";


axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.stats < 500;

  if (!expectedError) {
    console.log("Logging the error", error);
    toast.error("An unexpected error has occured");
  }

  return Promise.reject(error);
});

function setJwt(jwt){
  axios.defaults.headers.common['x-auth-token'] = jwt;
}

//  const baseUrl = "http://localhost:8000/"
const baseUrl = "https://thingylife-backend.herokuapp.com/"
export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
  baseUrl
};
