import instance from "./axiosInstance";

// 단과대학 목록 조회
export const fetchColleges = async () => {
  const res = await instance.get("/api/colleges");
  return res.data.data;
};

// 학과 목록 조회
export const fetchMajorsByCollegeId = async (collegeId) => {
  const res = await instance.get(
    `/api/departments/by-college?collegeId=${collegeId}`
  );
  return res.data;
};

// 졸업요건 조회
export const fetchGraduationRequirement = async (departmentName) => {
  const res = await instance.get(
    `/api/graduation/department?name=${departmentName}`
  );
  return res.data;
};

// 할 일 메모 조회
export const fetchGraduationMemo = async (categoryKey) => {
  const res = await instance.get(
    `/api/graduation-memo?category=${categoryKey}`
  );
  return res.data;
};
