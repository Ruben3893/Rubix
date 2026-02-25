"use client";

import Image from "next/image";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";


export function CartDrawer() {
    const { items, removeItem, updateQuantity, cartTotal, cartCount, isCartOpen, closeCart } = useCart();

    return (
        <>
            {/* Backdrop */}
            <div
                className={cn(
                    "fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] transition-opacity duration-300",
                    isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
                onClick={closeCart}
            />

            {/* Drawer */}
            <div className={cn(
                "fixed top-0 right-0 h-full w-full md:w-[400px] bg-[#0a0a0a] border-l border-white/10 z-[70] transform transition-transform duration-300 flex flex-col",
                isCartOpen ? "translate-x-0" : "translate-x-full"
            )}>
                <div className="p-6 border-b border-white/10 flex items-center justify-between">
                    <h2 className="text-xl font-bold tracking-tighter text-white flex items-center gap-2">
                        <ShoppingBag className="w-5 h-5 text-rubix-gold" />
                        CART ({cartCount})
                    </h2>
                    <button onClick={closeCart} className="text-white/60 hover:text-white transition-colors">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {items.map((item) => (
                        <div key={item.id} className="flex gap-4">
                            <div className="w-20 h-20 bg-white/5 rounded-sm flex items-center justify-center shrink-0 relative p-2">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-sm font-medium text-white">{item.name}</h3>
                                    <span className="text-sm text-rubix-gold">${item.price.toLocaleString()}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => updateQuantity(item.id, -1)}
                                        className="w-6 h-6 flex items-center justify-center border border-white/10 text-white/60 hover:border-rubix-gold hover:text-rubix-gold transition-colors"
                                    >
                                        <Minus className="w-3 h-3" />
                                    </button>
                                    <span className="text-sm text-white">{item.quantity}</span>
                                    <button
                                        onClick={() => updateQuantity(item.id, 1)}
                                        className="w-6 h-6 flex items-center justify-center border border-white/10 text-white/60 hover:border-rubix-gold hover:text-rubix-gold transition-colors"
                                    >
                                        <Plus className="w-3 h-3" />
                                    </button>
                                </div>
                                <button
                                    onClick={() => removeItem(item.id)}
                                    className="text-[10px] uppercase tracking-widest text-white/40 hover:text-red-500 mt-2"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                    {items.length === 0 && (
                        <div className="text-center py-12 text-white/40 text-sm uppercase tracking-widest">
                            Your cart is empty
                        </div>
                    )}
                </div>

                <div className="p-6 border-t border-white/10 bg-[#0f0f0f]">
                    <div className="flex justify-between items-center mb-6 text-white">
                        <span className="text-xs uppercase tracking-widest text-white/60">Total</span>
                        <span className="text-xl font-light">${cartTotal.toLocaleString()}</span>
                    </div>
                    <button className="w-full py-4 bg-rubix-gold text-[#0a0a0a] font-bold uppercase tracking-wider hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled={items.length === 0}>
                        Checkout
                    </button>
                </div>
            </div>
        </>
    );
}
