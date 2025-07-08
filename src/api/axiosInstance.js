import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
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
