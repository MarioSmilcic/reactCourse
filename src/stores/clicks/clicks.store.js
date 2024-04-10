import { create } from "zustand";

export const useClicksStore = create((set) => ({
  clicks: 0,
  incrementNumberOfClicks: () => set((state) => ({ clicks: state.clicks + 1 })),
  decrementNumberOfClicks: () => set((state) => ({ clicks: state.clicks - 1 })),
  addMultiNumberToClicks: (numberToAdd) =>
    set((state) => ({ clicks: state.clicks + numberToAdd })),
  resetClicksCount: () => set({ clicks: 0 }),
}));
