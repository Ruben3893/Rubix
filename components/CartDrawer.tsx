"use client";

import Image from "next/image";
import Link from "next/link";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

export function CartDrawer() {
    const { items, removeItem, updateQuantity, cartTotal, cartCount, isCartOpen, closeCart } = useCart();

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
                        onClick={closeCart}
                    />

                    {/* Drawer (Minimalist Editorial) */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween", duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed top-0 right-0 h-full w-full md:w-[420px] bg-white border-l border-gray-200 z-[70] flex flex-col shadow-2xl font-sans"
                    >
                        <div className="px-8 py-6 flex items-center justify-between border-b border-gray-100">
                            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-black flex items-center gap-2">
                                YOUR BAG
                                <span className="text-gray-400 font-normal">({cartCount})</span>
                            </h2>
                            <button onClick={closeCart} className="text-black hover:opacity-50 transition-opacity">
                                <X className="w-5 h-5" strokeWidth={1.5} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto px-8 py-6 space-y-8">
                            {items.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                                    <ShoppingBag className="w-8 h-8 text-gray-200" strokeWidth={1} />
                                    <p className="text-xs uppercase tracking-widest text-gray-400">Your bag is empty</p>
                                    <button 
                                        onClick={closeCart} 
                                        className="mt-4 border-b border-black text-xs font-bold uppercase tracking-widest pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors"
                                    >
                                        Continue Shopping
                                    </button>
                                </div>
                            ) : (
                                items.map((item) => (
                                    <div key={item.id} className="flex gap-6 group">
                                        <div className="w-24 h-24 bg-[#F8F9F9] flex items-center justify-center shrink-0 relative overflow-hidden">
                                            <Image
                                                src={item.image || '/watch_hero.svg'}
                                                alt={item.name}
                                                fill
                                                className="object-contain mix-blend-multiply p-2 transition-transform duration-700 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="flex-1 flex flex-col">
                                            <div className="flex justify-between items-start mb-1">
                                                <h3 className="text-xs font-bold uppercase tracking-wide text-black max-w-[75%]">{item.name}</h3>
                                                <button
                                                    onClick={() => removeItem(item.id)}
                                                    className="text-gray-400 hover:text-red-500 transition-colors"
                                                >
                                                    <X className="w-4 h-4" strokeWidth={2} />
                                                </button>
                                            </div>
                                            <span className="text-xs font-medium text-gray-500 mb-auto">${item.price.toLocaleString()}</span>
                                            
                                            <div className="flex items-center justify-between mt-4">
                                                <div className="flex items-center border border-gray-200">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, -1)}
                                                        className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors"
                                                    >
                                                        <Minus className="w-3 h-3" />
                                                    </button>
                                                    <span className="text-xs font-medium w-6 text-center text-black">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, 1)}
                                                        className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors"
                                                    >
                                                        <Plus className="w-3 h-3" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {items.length > 0 && (
                            <div className="p-8 border-t border-gray-100 bg-white shadow-[0_-10px_40px_rgba(0,0,0,0.03)] z-10">
                                <div className="flex justify-between items-end mb-6">
                                    <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Subtotal</span>
                                    <span className="text-2xl font-medium tracking-tight text-black">${cartTotal.toLocaleString()}</span>
                                </div>
                                
                                <p className="text-[10px] text-gray-400 mb-6 tracking-wide">Taxes and shipping calculated at checkout.</p>
                                
                                <Link href="/checkout" onClick={closeCart} className="block w-full text-center">
                                    <button className="w-full py-4 bg-black text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-gray-900 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300">
                                        Secure Checkout
                                    </button>
                                </Link>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
