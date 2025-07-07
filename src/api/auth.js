import instance from "./axiosInstance";

// 로그인 함수
export const login = async (email, password) => {
  const response = await instance.post("/api/login", {
    email,
    password,
  });
  return response.data;
};
