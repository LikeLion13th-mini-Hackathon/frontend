import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://34.227.53.193:8081",
  withCredentials: true,
  timeout: 10000, // Ÿ�Ӿƿ� ����
});

// ���� ���� ó��
instance.interceptors.response.use(
  (res) => res,
  (err) => {
    console.error("API ��û ����:", err);
    return Promise.reject(err);
  }
);

export default instance;
