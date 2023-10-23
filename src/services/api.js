import axios from "axios";
// import { destroyUserSession, getAccessToken, LOGIN_URL } from "./AuthService";
// const baseUrl = `${process.env.REACT_APP_API_BASE_URL}/api`;
const baseUrl = `${process.env.REACT_APP_API_BASE_URL}/api`;
console.log(baseUrl);

const api = axios.create({
  baseURL: baseUrl,
});

// api.interceptors.request.use(
//   (config) => {
//     const accessToken = getAccessToken();

//     if (accessToken) {
//       config.headers.Authorization = `Bearer ${accessToken}`;
//     }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// api.interceptors.response.use(
//   (config) => {
//     return config;
//   },
//   async (error) => {
//     if (error.response?.status === 401 && error.config.url !== LOGIN_URL) {
//       await destroyUserSession();
//     }

//     return Promise.reject(error);
//   }
// );

export function setApiToken(token) {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export default api;
