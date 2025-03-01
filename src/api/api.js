import axios from "axios";

export const api = axios.create({
  //   baseURL: "https://e-pharmacy-franchise-back.onrender.com/api",
  baseURL: "http://localhost:7000",
});

export function setToken(token) {
  api.defaults.headers.authorization = `Bearer ${token}`;
}

export function clearToken() {
  api.defaults.headers.authorization = ``;
}
