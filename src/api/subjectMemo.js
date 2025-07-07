import instance from "./axiosInstance";

// ���� �޸� ��ȸ
export const getSubjectMemo = async (id) => {
  const res = await instance.get(`/api/memo/${id}`);
  return res.data;
};

// ���� �޸� ���/����
export const updateSubjectMemo = async (id, content) => {
  return await instance.put(`/api/memo/${id}`, { memo: content });
};

// ���� �޸� ����
export const deleteSubjectMemo = async (id) => {
  return await instance.delete(`/api/memo/${id}`);
};
