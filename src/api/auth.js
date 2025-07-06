import instance from "./axiosInstance";

// 로그인 함수
export const login = async (email, password) => {
  console.log("모의 로그인 시도됨:", email, password);

  // 임의 테스트 (더미데이터)
  if (email === "test" && password === "1234") {
    return {
      token: "fake_token_123",
      user: {
        name: "임상현",
        university: "인천대학교",
        major: "영어영문학과",
        grade: "3",
        status: "재학생",
      },
    };
  } else {
    throw new Error("Invalid credentials");
  }
};
// 나중에 백 연결되면
// import instance from "./axiosInstance";

// export const login = async (email, password) => {
//   const res = await instance.post("/api/login", { email, password });
//   return res.data.token;
// };
