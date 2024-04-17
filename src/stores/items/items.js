import { create } from "zustand";
import { items } from "../../Data/items";

export const useItemStore = create((set) => ({
  items: items,
}));
