import instance from "./axiosInstance";

// 나의 성취도 데이터 조회
export const fetchAchievement = async () => {
  const token = localStorage.getItem("token");

  const res = await instance.get(`/api/achievement`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

// 나의 성취도 데이터 등록 & 수정
export const postAchievement = async (totalSemester, takenSemester) => {
  const token = localStorage.getItem("token");

  const res = await instance.post(
    `/api/achievement`,
    {
      totalSemester,
      takenSemester,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};
