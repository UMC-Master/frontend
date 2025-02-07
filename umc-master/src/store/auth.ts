import { create } from 'zustand';

interface AuthState {
  auth: boolean;
  user: { email: string; name: string } | null;
  setAuth: (auth: boolean) => void;
  setUser: (user: { email: string; name: string }) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  auth: !!localStorage.getItem("accessToken"), // 로그인 상태를 localStorage에서 확인
  user: JSON.parse(localStorage.getItem("user") || "null"), // 사용자 정보도 localStorage에서 확인
  setAuth: (auth) => set({ auth }),
  setUser: (user) => {
    localStorage.setItem("user", JSON.stringify(user)); // 사용자 정보 로컬 스토리지에 저장
    set({ user });
  },
  clearAuth: () => {
    localStorage.removeItem("accessToken"); // 로그인 상태 초기화
    localStorage.removeItem("user"); // 사용자 정보 초기화
    set({ auth: false, user: null });
  },
}));
