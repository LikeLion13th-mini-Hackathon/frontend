import instance from "./axiosInstance";

export const updateSubject = async (id, data) => {
  const token = localStorage.getItem("token");
  return await instance.patch(`/api/subject/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
