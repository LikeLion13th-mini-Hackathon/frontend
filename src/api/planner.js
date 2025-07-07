import axios from "axios";

const BASE_URL = "http://34.227.53.193:8081";

// 1. 플래너 계획 학기별 조회
export const getPlannerBySemester = async (semester) => {
  const res = await axios.get(
    `${BASE_URL}/api/planner/semester?semester=${semester}`
  );
  return res.data;
};

// 2. 플래너 계획 개별 조회
export const getPlannerById = async (id) => {
  const res = await axios.get(`${BASE_URL}/api/planner?id=${id}`);
  return res.data;
};

// 3. 플래너 계획 등록
export const createPlanner = async (data) => {
  const res = await axios.post(`${BASE_URL}/api/planner`, data);
  return res.data;
};

// 4. 플래너 계획 수정
export const updatePlanner = async (id, data) => {
  const res = await axios.put(`${BASE_URL}/api/planner/${id}`, data);
  return res.data;
};

// 5. 플래너 계획 삭제
export const deletePlanner = async (id) => {
  const res = await axios.delete(`${BASE_URL}/api/planner/${id}`);
  return res.data;
};
