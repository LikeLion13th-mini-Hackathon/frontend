import axios from "axios";

export const updateSubject = async (id, data) => {
  const token = localStorage.getItem("token");
  return await axios.patch(`/api/subject/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
