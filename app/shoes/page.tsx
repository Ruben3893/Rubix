'use client';

import { useCart } from "@/context/CartContext";
import { shoeData } from "@/data/shoeData";
import { useState } from "react";
import Link from "next/link";
import { Search, Heart, ShoppingBag, User } from 'lucide-react';

export default function ShoesPage() {
    const { addItem } = useCart();

    const handleAddToCart = (item: any) => {
        addItem({
            id: item.id.toString(),
            name: item.name,
            price: item.price,
            image: item.image || item.images?.[0] || ''
        });
    };

    return (
        <main className="min-h-screen bg-[#F6F5F2] text-[#1A1A1A] font-sans selection:bg-black selection:text-white">
            {/* Minimal Header */}
            <nav className="w-full px-8 py-6 flex items-center justify-between sticky top-0 bg-[#F6F5F2]/90 backdrop-blur-md z-50">
                <div className="flex gap-8 text-xs font-semibold tracking-widest uppercase items-center flex-1">
                    <Link href="/shop" className="hover:text-gray-500 transition-colors">NEW ARRIVALS</Link>
                    <Link href="/sale" className="text-red-700 hover:text-red-900 transition-colors">SALE</Link>
                </div>
                <div className="flex-1 text-center">
                    <Link href="/" className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight flex-1" style={{ letterSpacing: '-0.02em' }}>
                        Rubix
                    </Link>
                </div>
                <div className="flex gap-6 items-center flex-1 justify-end">
                    <div className="relative hidden lg:block w-48">
                        <input type="text" placeholder="Search" className="w-full bg-white border border-gray-300 rounded-full py-2 pl-4 pr-10 text-xs focus:outline-none focus:border-black" />
                        <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    </div>
                    <button className="hover:opacity-70 transition-opacity"><Heart className="w-5 h-5" strokeWidth={1.5} /></button>
                    <Link href="/profile" className="hover:opacity-70 transition-opacity"><User className="w-5 h-5" strokeWidth={1.5} /></Link>
                    <button className="hover:opacity-70 transition-opacity"><ShoppingBag className="w-5 h-5" strokeWidth={1.5} /></button>
                </div>
            </nav>

            <div className="pt-20 pb-12 px-6 md:px-12 max-w-[1600px] mx-auto">
                <div className="mb-20 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif text-[#1A1A1A]">
                        Footwear
                    </h1>
                    <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
                        Empowering style for modern, elegant walks.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
                    {shoeData.map((item: any) => (
                        <div key={item.id} className="group flex flex-col">
                            <div className="relative aspect-[4/5] bg-gray-200 mb-6 overflow-hidden flex flex-col justify-end p-6 transition-colors duration-500">
                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                <div className="relative w-full h-full absolute inset-0 transform group-hover:scale-105 transition-transform duration-700 flex items-center justify-center p-8">
                                    <img src={item.image || item.images?.[0]} alt={item.name} className="object-contain drop-shadow-xl" style={{ width: '100%', height: '100%' }} />
                                </div>
                                <div className="relative z-20 flex flex-col items-center gap-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                    <button onClick={() => handleAddToCart(item)} className="w-full bg-black text-white px-6 py-3 text-xs uppercase tracking-widest font-bold hover:bg-gray-800 transition-colors duration-300">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <h3 className="text-lg font-serif font-bold text-[#1A1A1A] transition-colors">{item.name}</h3>
                                <p className="text-gray-500 text-xs tracking-wide mt-2 max-w-xs leading-relaxed line-clamp-2">{item.description}</p>
                                <span className="text-sm font-bold tracking-widest text-[#1A1A1A] mt-4">${item.price.toLocaleString()}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
