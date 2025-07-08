import instance from "./axiosInstance";

const semesterCodeMap = {
  "1학년 1학기": "FIRST_YEAR_FIRST",
  "1학년 2학기": "FIRST_YEAR_SECOND",
  "2학년 1학기": "SECOND_YEAR_FIRST",
  "2학년 2학기": "SECOND_YEAR_SECOND",
  "3학년 1학기": "THIRD_YEAR_FIRST",
  "3학년 2학기": "THIRD_YEAR_SECOND",
  "4학년 1학기": "FOURTH_YEAR_FIRST",
  "4학년 2학기": "FOURTH_YEAR_SECOND",
  "5학년 1학기": "FIFTH_YEAR_FIRST",
  "5학년 2학기": "FIFTH_YEAR_SECOND",
  "6학년 1학기": "SIXTH_YEAR_FIRST",
  "6학년 2학기": "SIXTH_YEAR_SECOND",
  "기타 학기": "OTHER_SEMESTER"
};

const getSemesterCode = (semester) => semesterCodeMap[semester] || semester;

// 플래너 계획 학기별 조회
export const getPlannerBySemester = async (semester) => {
  const semesterCode = getSemesterCode(semester);
  const res = await instance.get(
    `/api/planner/semester?semester=${semesterCode}`
  );
  return res.data;
};

// 플래너 계획 개별 조회
export const getPlannerById = async (id) => {
  const res = await instance.get(`/api/planner?id=${id}`);
  return res.data;
};

// 플래너 계획 등록
export const createPlanner = async (data) => {
  const res = await instance.post(`/api/planner`, data);
  return res.data;
};

// 플래너 계획 수정
export const updatePlanner = async (id, data) => {
  const res = await instance.put(`/api/planner/${id}`, data);
  return res.data;
};

// 플래너 계획 삭제
export const deletePlanner = async (id) => {
  const res = await instance.delete(`/api/planner/${id}`);
  return res.data;
};
