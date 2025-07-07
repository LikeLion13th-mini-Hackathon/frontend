import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

// �� �� �޸� ��ȸ
export const fetchGraduationMemo = async (categoryKey) => {
  const res = await axios.get(
    `${BASE_URL}/graduation-memo?category=${categoryKey}`
  );
  return res.data;
};

// �� �� �޸� ���
export const createGraduationMemo = async (categoryKey, content) => {
  const res = await axios.post(`${BASE_URL}/graduation-memo`, {
    category: categoryKey,
    content,
  });
  return res.data;
};

// �� �� �޸� ����
export const updateGraduationMemo = async (id, content) => {
  const res = await axios.put(`${BASE_URL}/graduation-memo/${id}`, {
    content,
  });
  return res.data;
};

// �� �� �޸� ����
export const deleteGraduationMemo = async (id) => {
  const res = await axios.delete(`${BASE_URL}/graduation-memo/${id}`);
  return res.data;
};
