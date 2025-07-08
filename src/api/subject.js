import instance from "./axiosInstance";

// 과목 등록/수정
export const updateSubject = async (id, data, token) => {
  const res = await instance.patch(`/api/subject/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

// 학기별 과목 전체 조회
export const getSubjects = async (gradeLevel, semester, token) => {
  const res = await instance.get(`/api/subject`, {
    params: { gradeLevel, semester },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

// 전체 평점, 취득 학점 전체 조회
export const getSubjectStatistics = async (token) => {
  const res = await instance.get(`/api/subject/statistics`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
