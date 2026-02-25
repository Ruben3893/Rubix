'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

export type CartItem = {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
};

type CartContextType = {
    items: CartItem[];
    addItem: (item: Omit<CartItem, 'quantity'>) => void;
    removeItem: (id: string) => void;
    updateQuantity: (id: string, delta: number) => void;
    isCartOpen: boolean;
    openCart: () => void;
    closeCart: () => void;
    cartTotal: number;
    cartCount: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const addItem = (newItem: Omit<CartItem, 'quantity'>) => {
        setItems((currentItems) => {
            const existingItem = currentItems.find((i) => i.id === newItem.id);
            if (existingItem) {
                return currentItems.map((i) =>
                    i.id === newItem.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            }
            return [...currentItems, { ...newItem, quantity: 1 }];
        });
        setIsCartOpen(true); // Open cart when adding item
    };

    const removeItem = (id: string) => {
        setItems((current) => current.filter((i) => i.id !== id));
    };

    const updateQuantity = (id: string, delta: number) => {
        setItems((current) =>
            current.map((item) => {
                if (item.id === id) {
                    const newQuantity = Math.max(0, item.quantity + delta);
                    return { ...item, quantity: newQuantity };
                }
                return item;
            }).filter((item) => item.quantity > 0)
        );
    };

    const cartTotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
    const cartCount = items.reduce((total, item) => total + item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                items,
                addItem,
                removeItem,
                updateQuantity,
                isCartOpen,
                openCart: () => setIsCartOpen(true),
                closeCart: () => setIsCartOpen(false),
                cartTotal,
                cartCount,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
