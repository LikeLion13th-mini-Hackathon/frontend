import instance from "./axiosInstance";

// 회원가입
export const signup = async (payload) => {
  const response = await instance.post("/api/signup", payload);
  return response.data;
};

// 로그인
export const login = async (email, password) => {
  const response = await instance.post("/api/login", { email, password });
  return response.data;
};
