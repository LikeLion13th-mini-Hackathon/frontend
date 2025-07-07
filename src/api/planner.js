import axios from "axios";

const BASE_URL = "http://34.227.53.193:8081";

// 1. �÷��� ��ȹ �б⺰ ��ȸ
export const getPlannerBySemester = async (semester) => {
  const res = await axios.get(
    `${BASE_URL}/api/planner/semester?semester=${semester}`
  );
  return res.data;
};

// 2. �÷��� ��ȹ ���� ��ȸ
export const getPlannerById = async (id) => {
  const res = await axios.get(`${BASE_URL}/api/planner?id=${id}`);
  return res.data;
};

// 3. �÷��� ��ȹ ���
export const createPlanner = async (data) => {
  const res = await axios.post(`${BASE_URL}/api/planner`, data);
  return res.data;
};

// 4. �÷��� ��ȹ ����
export const updatePlanner = async (id, data) => {
  const res = await axios.put(`${BASE_URL}/api/planner/${id}`, data);
  return res.data;
};

// 5. �÷��� ��ȹ ����
export const deletePlanner = async (id) => {
  const res = await axios.delete(`${BASE_URL}/api/planner/${id}`);
  return res.data;
};
