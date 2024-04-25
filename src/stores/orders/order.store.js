import { create } from "zustand";

export const useOrderCartStore = create((set) => ({
  orders: [],
  // addItemToOrderCart: (newItem) =>
  //   set((state) => ({ orders: [...state.orders, newItem] })), // Append the new item to the cart array
  addItemToOrderCart: (newItem) =>
    set((state) => {
      const existingItem = state.orders.find((item) => item.id === newItem.id);

      if (existingItem) {
        return {
          orders: state.orders.map((item) =>
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
          orders: [
            ...state.orders,
            { ...newItem, quantity: 1, totalPrice: newItem.price },
          ],
        };
      }
    }), // Append the new item to the cart array

  removeItemFromOrderCart: (itemId) =>
    set((state) => ({
      orders: state.orders.filter((item) => item.id !== itemId),
    })), // Remove the item from the cart array by filtering out the item with the given ID
  clearOrderCart: () => set({ orders: [] }),

  increaseItemQuantity: (itemId) =>
    set((state) => ({
      orders: state.orders.map((item) =>
        item.id === itemId
          ? {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: item.price * (item.quantity + 1),
            }
          : item
      ),
    })),

  decreaseItemQuantity: (itemId) =>
    set((state) => ({
      orders: state.orders.map((item) =>
        item.id === itemId && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1,
              totalPrice: item.price * (item.quantity - 1),
            }
          : item
      ),
    })),
}));
