import instance from "./axiosInstance";

// 플래너 계획 학기별 조회
export const getPlannerBySemester = async (semester) => {
  const res = await instance.get(
    `/api/planner/semester?semester=${semester}`
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
