import instance from "./axiosInstance";

// 할 일 메모 조회
export const fetchGraduationMemo = async (categoryKey) => {
  try {
    const res = await instance.get(
      `/api/graduation-memo?category=${categoryKey}`
    );
    return res.data;
  } catch (err) {
    console.error("📛 졸업 메모 조회 실패:", err);
    throw err;
  }
};

// 할 일 메모 등록
export const createGraduationMemo = async (categoryKey, content) => {
  try {
    const res = await instance.post("/api/graduation-memo", {
      category: categoryKey,
      content,
    });
    return res.data;
  } catch (err) {
    console.error("📛 졸업 메모 생성 실패:", err);
    throw err;
  }
};

// 할 일 메모 수정
export const updateGraduationMemo = async (memoId, content) => {
  try {
    const res = await instance.patch(`/api/graduation-memo/${memoId}`, {
      content,
    });
    return res.data;
  } catch (err) {
    console.error("📛 졸업 메모 수정 실패:", err);
    throw err;
  }
};

// 할 일 메모 삭제
export const deleteGraduationMemo = async (memoId) => {
  try {
    const res = await instance.delete(`/api/graduation-memo/${memoId}`);
    return res.data;
  } catch (err) {
    console.error("📛 졸업 메모 삭제 실패:", err);
    throw err;
  }
};
