import { create } from "zustand";
import { pocemons } from "../../data/pocemons";

export const usePocemonsStore = create((set) => ({
  // pocemons,
  pocemons: pocemons.slice(0, 4),
  showMorePocemons: () => set((state) => ({ ...state.pocemons, pocemons })),
}));
