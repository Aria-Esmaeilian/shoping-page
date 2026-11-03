import { create } from "zustand";

type LikeStore = {
  count: number;
  increase: () => void;
};

export const useLike = create<LikeStore>()((set) => ({
  count: 0,

  increase: () => {
    set((state) => ({
      count: state.count + 1,
    }));
  },
}));
