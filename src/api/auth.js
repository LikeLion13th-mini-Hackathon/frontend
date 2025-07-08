import axios from "axios";

// 로그인 요청
export const login = async ({ email, password }) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_URL}/api/login`,
    { email, password },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

// 회원가입 요청
export const signup = async ({ email, password, nickname }) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_URL}/api/signup`,
    { email, password, nickname },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};
