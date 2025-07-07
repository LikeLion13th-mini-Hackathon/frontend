import axios from "axios";

const BASE_URL = "http://34.227.53.193:8081";

// ������� ��ȸ
export const fetchGraduationRequirement = async (majorName) => {
  const res = await axios.get(
    `${BASE_URL}/api/graduation/department?name=${encodeURIComponent(
      majorName
    )}`
  );
  return res.data;
};
