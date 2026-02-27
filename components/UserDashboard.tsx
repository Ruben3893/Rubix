"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Package, Truck, CheckCircle, ChevronRight, X } from 'lucide-react';

export function UserDashboard() {
    const [selectedOrder, setSelectedOrder] = useState<any>(null);
    const [history, setHistory] = useState<any[]>([]);

    useEffect(() => {
        const storedOrders = localStorage.getItem('rubix_orders');
        if (storedOrders) {
            setHistory(JSON.parse(storedOrders));
        }
    }, []);

    return (
        <div className="min-h-screen bg-[#00172D] text-white font-sans p-6 md:p-12 mb-20 mt-20">
            <div className="max-w-6xl mx-auto space-y-16">
                {/* Header */}
                <header className="border-b border-white/10 pb-8">
                    <h1 className="text-4xl md:text-5xl font-serif mb-2">Your Collection</h1>
                    <p className="text-[#D4AF37] tracking-[0.2em] text-xs uppercase">Welcome back, Connoisseur</p>
                </header>

                {/* Active Order Tracking */}
                <section className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 shadow-xl">
                    <h2 className="text-2xl font-serif mb-12">Active Consignment</h2>

                    <div className="relative flex justify-between items-center max-w-4xl mx-auto mt-8">
                        {/* Progress Line */}
                        <div className="absolute left-0 right-0 top-6 -translate-y-1/2 h-[2px] bg-white/10 z-0" />
                        <div className="absolute left-0 w-1/2 top-6 -translate-y-1/2 h-[2px] bg-[#D4AF37] z-0" />

                        {/* Status Points */}
                        <div className="relative z-10 flex flex-col items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-[#00172D] border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                                <Package className="w-5 h-5" />
                            </div>
                            <span className="text-[10px] md:text-xs uppercase tracking-widest text-[#D4AF37] font-bold text-center">Order Placed</span>
                        </div>

                        <div className="relative z-10 flex flex-col items-center gap-4">
                            {/* Pulsing Glow Effect for Current Status */}
                            <div className="relative w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#00172D]">
                                <motion.div
                                    animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
                                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                    className="absolute inset-0 rounded-full bg-[#D4AF37]"
                                />
                                <Truck className="w-5 h-5 relative z-10" />
                            </div>
                            <span className="text-[10px] md:text-xs uppercase tracking-widest text-[#D4AF37] font-bold text-center">Processing</span>
                        </div>

                        <div className="relative z-10 flex flex-col items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-[#00172D] border-2 border-white/20 flex items-center justify-center text-white/50">
                                <CheckCircle className="w-5 h-5" />
                            </div>
                            <span className="text-[10px] md:text-xs uppercase tracking-widest text-white/50 text-center">Out for Delivery</span>
                        </div>
                    </div>
                </section>

                {/* Order History */}
                <section>
                    <h2 className="text-2xl font-serif mb-8">Acquisition History</h2>

                    {history.length > 0 ? (
                        <div className="space-y-4">
                            {history.map((order, index) => {
                                const firstItem = order.items && order.items.length > 0 ? order.items[0] : { name: 'Unknown Item', image: '' };
                                const moreCount = order.items && order.items.length > 1 ? order.items.length - 1 : 0;

                                return (
                                    <motion.div
                                        key={order.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
                                        className="flex items-center gap-6 bg-white/5 border border-white/5 border-l-4 border-l-[#D4AF37] p-4 rounded-r-xl hover:bg-white/10 transition-colors cursor-pointer group"
                                    >
                                        <div className="w-20 h-20 bg-black/30 rounded-lg overflow-hidden shrink-0 flex items-center justify-center p-2">
                                            <img src={firstItem.image} alt={firstItem.name} className="w-full h-full object-contain" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-serif mb-1 group-hover:text-[#D4AF37] transition-colors">
                                                {firstItem.name} {moreCount > 0 && <span className="text-sm font-sans text-white/50">(+{moreCount} more)</span>}
                                            </h3>
                                            <div className="flex gap-4 text-xs font-sans text-white/60 tracking-wider">
                                                <span>{order.date}</span>
                                                <span className="hidden md:inline">•</span>
                                                <span className="hidden md:inline">{order.id}</span>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => setSelectedOrder(order)}
                                            className="flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-widest text-[#D4AF37] hover:text-white transition-colors group"
                                        >
                                            View Details
                                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </motion.div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="py-20 text-center border border-white/10 border-dashed rounded-3xl bg-white/5">
                            <p className="text-[#D4AF37] font-serif text-xl italic tracking-wide">Your collection is currently empty</p>
                        </div>
                    )}
                </section>
            </div>

            {/* Order Details Modal */}
            <AnimatePresence>
                {selectedOrder && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                            onClick={() => setSelectedOrder(null)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-lg bg-[#00172D] border border-[#D4AF37]/30 rounded-2xl shadow-2xl p-8 z-10"
                        >
                            <button
                                onClick={() => setSelectedOrder(null)}
                                className="absolute top-4 right-4 text-white/50 hover:text-[#D4AF37] transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <h3 className="text-2xl font-serif text-[#D4AF37] mb-2">Order Details</h3>
                            <p className="text-sm font-sans text-white/60 mb-8 tracking-widest uppercase">ID: {selectedOrder.id}</p>

                            <div className="flex flex-col gap-4 mb-8 max-h-[250px] overflow-y-auto no-scrollbar pr-2">
                                {selectedOrder.items ? selectedOrder.items.map((cartItem: any) => (
                                    <div key={cartItem.id} className="flex gap-4 items-center bg-white/5 p-3 rounded-xl border border-white/10">
                                        <div className="w-16 h-16 bg-black/30 rounded-lg overflow-hidden shrink-0 flex items-center justify-center p-2">
                                            <img src={cartItem.image} alt={cartItem.name} className="w-full h-full object-contain" />
                                        </div>
                                        <div className="flex flex-col flex-1">
                                            <h4 className="text-sm font-serif text-white">{cartItem.name}</h4>
                                            <p className="text-xs font-sans text-white/50">Qty: {cartItem.quantity || 1}</p>
                                        </div>
                                        <p className="text-sm font-bold text-[#D4AF37]">${((cartItem.price || 0) * (cartItem.quantity || 1)).toLocaleString()}</p>
                                    </div>
                                )) : (
                                    <div className="flex gap-6 mb-8">
                                        <div className="w-32 h-32 bg-white/5 rounded-xl flex items-center justify-center p-4 shrink-0">
                                            <img src={selectedOrder.image} alt={selectedOrder.item} className="w-full h-full object-contain drop-shadow-lg" />
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <h4 className="text-xl font-serif text-white mb-2">{selectedOrder.item}</h4>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="border-t border-white/10 pt-4">
                                <div className="flex justify-between text-sm font-sans mb-2 text-white/60">
                                    <span>Purchased On</span>
                                    <span className="text-[#D4AF37]">{selectedOrder.date}</span>
                                </div>
                                <div className="flex justify-between text-sm font-sans mb-2 text-white/60">
                                    <span>Status</span>
                                    <span className="text-green-400">{selectedOrder.status}</span>
                                </div>
                                <div className="flex justify-between text-sm font-sans mb-2 text-white/60">
                                    <span>Shipping</span>
                                    <span>Complimentary</span>
                                </div>
                                <div className="flex justify-between text-lg font-serif mt-4 pt-4 border-t border-white/10 text-[#D4AF37]">
                                    <span>Total Secured</span>
                                    <span>${selectedOrder.total?.toLocaleString() ?? 'Paid in Full'}</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
