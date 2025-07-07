import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

// 졸업요건 불러오기
export const fetchGraduationRequirement = async (majorName) => {
  const res = await axios.get(
    `${BASE_URL}/api/graduation/department?name=${encodeURIComponent(
      majorName
    )}`
  );
  return res.data;
};
