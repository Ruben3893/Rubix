"use client";

import Image from "next/image";
import Link from "next/link";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
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
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
                        onClick={closeCart}
                    />

                    {/* Drawer (Jewelry Box Effect) */}
                    <motion.div
                        initial={{ opacity: 0, rotateX: -90, y: -20 }}
                        animate={{ opacity: 1, rotateX: 0, y: 0 }}
                        exit={{ opacity: 0, rotateX: -90, y: -20 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        style={{ transformOrigin: "top center", perspective: 1200 }}
                        className="fixed top-0 right-0 h-full w-full md:w-[400px] bg-[#00172D] border-l border-[#D4AF37]/30 z-[70] flex flex-col"
                    >
                        <div className="p-6 border-b border-[#D4AF37]/20 flex items-center justify-between">
                            <h2 className="text-xl font-bold tracking-tighter text-white flex items-center gap-2">
                                <ShoppingBag className="w-5 h-5 text-[#D4AF37]" />
                                CART ({cartCount})
                            </h2>
                            <button onClick={closeCart} className="text-white/60 hover:text-[#D4AF37] transition-colors">
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {items.map((item) => (
                                <div key={item.id} className="flex gap-4">
                                    <div className="w-20 h-20 bg-white/5 rounded-sm flex items-center justify-center shrink-0 relative p-2 shadow-inner">
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
                                            <span className="text-sm text-[#D4AF37]">${item.price.toLocaleString()}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <button
                                                onClick={() => updateQuantity(item.id, -1)}
                                                className="w-6 h-6 flex items-center justify-center border border-white/10 text-white/60 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
                                            >
                                                <Minus className="w-3 h-3" />
                                            </button>
                                            <span className="text-sm text-white">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, 1)}
                                                className="w-6 h-6 flex items-center justify-center border border-white/10 text-white/60 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
                                            >
                                                <Plus className="w-3 h-3" />
                                            </button>
                                        </div>
                                        <button
                                            onClick={() => removeItem(item.id)}
                                            className="text-[10px] uppercase tracking-widest text-[#D4AF37]/60 hover:text-red-400 mt-2 transition-colors"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                            {items.length === 0 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                    className="text-center py-12 text-[#D4AF37]/60 text-sm uppercase tracking-widest"
                                >
                                    Your cart is empty
                                </motion.div>
                            )}
                        </div>

                        <div className="p-6 border-t border-[#D4AF37]/20 bg-[#000E1C]">
                            <div className="flex justify-between items-center mb-6 text-white">
                                <span className="text-xs uppercase tracking-widest text-white/60">Total</span>
                                <span className="text-xl font-light">${cartTotal.toLocaleString()}</span>
                            </div>
                            <Link href="/checkout" onClick={closeCart} className="block w-full">
                                <motion.button
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                    className="relative overflow-hidden w-full py-4 bg-gradient-to-r from-[#D4AF37] to-[#CD7F32] border border-[#D4AF37] text-[#00172D] drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)] font-bold uppercase tracking-wider hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                                    disabled={items.length === 0}
                                    style={{ color: '#D4AF37', textShadow: "0px 1px 2px rgba(0,23,45,0.9)" }}
                                >
                                    <span className="relative z-10">Checkout</span>
                                    {/* Subtle Shine Animation */}
                                    <motion.div
                                        animate={{ x: ["-100%", "250%"] }}
                                        transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 1.5, ease: "easeInOut" }}
                                        className="absolute top-0 bottom-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 z-0"
                                    />
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
