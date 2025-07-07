import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://34.227.53.193:8081",
  withCredentials: true,
});

export default instance;
