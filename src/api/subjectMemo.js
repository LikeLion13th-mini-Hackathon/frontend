import instance from "./axiosInstance";

// 과목 메모 조회
export const getSubjectMemo = async (id) => {
  const res = await instance.get(`/api/memo/${id}`);
  return res.data;
};

// 과목 메모 등록/수정
export const updateSubjectMemo = async (id, content) => {
  return await instance.put(`/api/memo/${id}`, { memo: content });
};

// 과목 메모 삭제
export const deleteSubjectMemo = async (id) => {
  return await instance.delete(`/api/memo/${id}`);
};
