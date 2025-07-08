import axios from "axios";

const token = localStorage.getItem("token");

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 10000,
  headers: {
    ...(token && { Authorization: `Bearer ${token}` }),
  },
});

// 공통 에러 처리
instance.interceptors.response.use(
  (res) => res,
  (err) => {
    console.error("API 요청 에러:", err);
    return Promise.reject(err);
  }
);

export default instance;
