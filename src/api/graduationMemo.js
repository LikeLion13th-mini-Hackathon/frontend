import axios from "axios";

const BASE_URL = "http://34.227.53.193:8081/api";

// 할 일 메모 조회
export const fetchGraduationMemo = async (categoryKey) => {
  const res = await axios.get(
    `${BASE_URL}/graduation-memo?category=${categoryKey}`
  );
  return res.data;
};

// 할 일 메모 등록
export const createGraduationMemo = async (categoryKey, content) => {
  const res = await axios.post(`${BASE_URL}/graduation-memo`, {
    category: categoryKey,
    content,
  });
  return res.data;
};

// 할 일 메모 수정
export const updateGraduationMemo = async (id, content) => {
  const res = await axios.put(`${BASE_URL}/graduation-memo/${id}`, {
    content,
  });
  return res.data;
};

// 할 일 메모 삭제
export const deleteGraduationMemo = async (id) => {
  const res = await axios.delete(`${BASE_URL}/graduation-memo/${id}`);
  return res.data;
};
