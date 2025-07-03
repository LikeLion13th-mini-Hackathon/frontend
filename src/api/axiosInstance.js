import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:3000", // 나중에 서버 주소 나오면 여기만 수정
  withCredentials: true,
});

export default instance;
