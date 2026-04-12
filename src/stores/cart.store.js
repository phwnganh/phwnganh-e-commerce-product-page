import {create} from "zustand";
import {persist} from "zustand/middleware";

export const useCartStore = create(
    persist(
        (set) => ({
            cartItems: [],
            total: 0,

            addToCart: (product, quantity) =>
                set((state) => {
                    if (quantity === 0) return state;

                    const existingItem = state.cartItems.find(
                        (item) => item.id === product.id
                    );

                    let updatedCartItems;

                    if (existingItem) {
                        updatedCartItems = state.cartItems.map((item) =>
                            item.id === product.id
                                ? {
                                    ...item,
                                    quantity: item.quantity + quantity,
                                }
                                : item
                        );
                    } else {
                        updatedCartItems = [
                            ...state.cartItems,
                            { ...product, quantity },
                        ];
                    }

                    const total = updatedCartItems.reduce(
                        (sum, item) => sum + item.price * item.quantity,
                        0
                    );

                    return {
                        cartItems: updatedCartItems,
                        total,
                    };
                }),

            clearCartItems: () =>
                set({
                    cartItems: [],
                    total: 0,
                }),
        }),
        {
            name: "cart-storage",
        }
    )
);