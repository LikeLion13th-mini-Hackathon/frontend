// ���� ���� ���� ����� (zustand)
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      user: null, // ���� �α����� ����� ����
      accessToken: null, // JWT/accessToken

      login: ({ user, token }) => set({ user, accessToken: token }), // �α��� �Լ�: ����� ������ ��ū�� ���¿� ����
      logout: () => set({ user: null, accessToken: null }), // �α׾ƿ� �Լ�: ���� �ʱ�ȭ
    }),
    {
      name: "auth-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useAuthStore;
