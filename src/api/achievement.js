import instance from "./axiosInstance";

// 나의 성취도 데이터 조회
export const fetchAchievement = async () => {
  const res = await instance.get(`/api/achievement`);
  return res.data;
};

// 나의 성취도 데이터 등록 & 수정
export const postAchievement = async (totalSemester, takenSemester) => {
  const res = await instance.post(`/api/achievement`, {
    totalSemester,
    takenSemester,
  });
  return res.data;
};