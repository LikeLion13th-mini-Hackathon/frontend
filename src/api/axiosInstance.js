import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://34.227.53.193:8081",
  withCredentials: true,
  timeout: 10000, // 타임아웃 설정
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
