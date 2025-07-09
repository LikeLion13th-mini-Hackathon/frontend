// 전역 상태 관리 스토어 (zustand)
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      user: null, // 현재 로그인한 사용자 정보
      accessToken: null, // JWT/accessToken

      login: ({ user, token }) => set({ user, accessToken: token }), // 로그인 함수: 사용자 정보와 토큰을 상태에 저장
      logout: () => set({ user: null, accessToken: null }), // 로그아웃 함수: 상태 초기화
    }),
    {
      name: "auth-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useAuthStore;
