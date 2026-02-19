// we are going to do two things 
// 1. describe what items in the carts looks like and 
// 2. describe what to do with it probably a functiion

import { MenuItem } from "@/data/menu";
import { create } from "zustand";
// 1. whaat the cart item looks like it is a menu with an added quantity 
interface CartItem extends MenuItem {
    quantity: number;
};

// stores interface what the store looks like it will contain cart
// a function to add or remove item and in the future a function to buy or checkout

interface StoreCart {
    items: CartItem[]
    totalPrice: number
    addItem: (product: MenuItem) => void
    removeItem: (productId: string) => void 
    clearCart: () => void
}

export const useCart = create<StoreCart>((set, get) => ({
    items: [],
    get totalPrice() {
        return get().items.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
    addItem: (product) => set((state) => {
        const existingItem = state.items.find(item => item.id === product.id);
        if (existingItem) {
            return {
                items: state.items.map(item => 
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            };
        } else {
            return { items: [...state.items, { ...product, quantity: 1 }] };
        }
    }),
    removeItem: (productId) => set((state) => ({
        items: state.items.filter(item => item.id !== productId)
    })),
    clearCart: () => set({ items: [] })
}));