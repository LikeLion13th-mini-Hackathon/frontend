import instance from "./axiosInstance";

// 나의 프로필 정보 조회
export const getUserProfile = async () => {
  const res = await instance.get(`/api/user/profile`);
  return res.data;
};

// 마이페이지 프로필 정보 조회
export const fetchMyProfile = async () => {
  const res = await instance.get(`/api/user/mypage`);
  return res.data;
};

// 마이페이지 프로필 정보 수정
export const updateMyProfile = async (formData) => {
  const payload = {
    ...formData,
    birthdate: formData.birthdate.replace(/\./g, "-"),
  };

  const res = await instance.patch(`/api/user/mypage`, payload);
  return res.data;
};
