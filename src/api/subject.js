import instance from "./axiosInstance";

// ���� ���/����
export const updateSubject = async (id, data, token) => {
  const res = await instance.patch(`/api/subject/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

// �б⺰ ���� ��ü ��ȸ
export const getSubjects = async (gradeLevel, semester, token) => {
  const res = await instance.get(`/api/subject`, {
    params: { gradeLevel, semester },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

// ��ü ����, ��� ���� ��ü ��ȸ
export const getSubjectStatistics = async (token) => {
  const res = await instance.get(`/api/subject/statistics`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
