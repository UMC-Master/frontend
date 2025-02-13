import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface Tip {
  id: string;
  image: string;
  text: string;
  likes?: number;
  bookmarks?: number;
  date?: string;
}

interface UserState {
  recentTips: Tip[];
  addRecentTip: (tip: Tip) => void;
  clearRecentTips: () => void;
}

export const recentStore = create<UserState>()(
  persist(
    (set) => ({
      recentTips: [],
      addRecentTip: (tip) => {
        set((state) => {
          const newTips = [...state.recentTips];
          const existingTipIndex = newTips.findIndex((t) => t.id === tip.id);
          
          if (existingTipIndex !== -1) {
            // 이미 있는 팁은 최신으로 업데이트
            newTips[existingTipIndex] = tip;
          } else {
            // 새로운 팁은 리스트의 맨 앞에 추가
            newTips.unshift(tip);
          }

          // 최대 3개만 저장
          if (newTips.length > 3) {
            newTips.pop();
          }

          return { recentTips: newTips };
        });
      },
      clearRecentTips: () => set({ recentTips: [] }),
    }),
    {
      name: 'recent-tips-storage', // 로컬스토리지 키 이름
      storage: createJSONStorage(() => localStorage),
    }
  )
);
