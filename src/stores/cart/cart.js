import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],

  // addItemToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
  addItemToCart: (newItem) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === newItem.id);

      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.id === newItem.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                  totalPrice: newItem.price,
                }
              : item
          ),
        };
      } else {
        return {
          cart: [
            ...state.cart,
            { ...newItem, quantity: 1, totalPrice: newItem.price },
          ],
        };
      }
    }),

  removeItemFromCart: (itemId) =>
    set((state) => ({ cart: state.cart.filter((item) => item.id !== itemId) })),
  resetCart: () => set(() => ({ cart: [] })),
}));
