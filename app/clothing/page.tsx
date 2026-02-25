'use client';

import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { Navbar } from "@/components/Navbar";
import { clothingData } from "@/data/clothingData";
import { useState } from "react";

export default function ClothingPage() {
    const { addItem } = useCart();
    const [selectedSize, setSelectedSize] = useState<Record<string, string>>({});

    const handleAddToCart = (item: any) => {
        const size = selectedSize[item.id] || item.sizes?.[0] || 'OS';
        addItem({
            id: `${item.id}-${size}`,
            name: `${item.name} (${size})`,
            price: item.price,
            image: item.image || '/assets/rose-gold-exec.png'
        });
    };

    return (
        <main className="min-h-screen bg-rubix-dark text-white">
            <Navbar />

            <div className="pt-32 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="mb-20 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-widest mb-4 font-serif uppercase text-stroke selection:bg-rubix-gold selection:text-rubix-dark">
                        The Atelier Collection
                    </h1>
                    <p className="text-white/60 text-sm md:text-base tracking-[0.8em] uppercase max-w-2xl mx-auto font-light">
                        Tailored pieces for the modern vanguard.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {clothingData.map((item) => (
                        <div key={item.id} className="group flex flex-col">
                            {/* Image Container */}
                            <div className="relative aspect-[3/4] bg-stone-900 mb-6 overflow-hidden flex flex-col justify-end p-6 border border-white/5 transition-colors duration-500 hover:border-rubix-gold/30">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                                <div className="relative w-full h-full absolute inset-0 transform group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)] flex items-center justify-center p-8">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        onError={(e) => { (e.target as HTMLImageElement).src = '/watch_hero.svg' }}
                                        className="object-contain drop-shadow-2xl"
                                        style={{ width: '100%', height: '100%' }}
                                    />
                                </div>

                                <div className="relative z-20 flex flex-col items-center gap-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
                                    {item.sizes && item.sizes.length > 0 && (
                                        <div className="flex gap-2">
                                            {item.sizes.map(size => (
                                                <button
                                                    key={size}
                                                    onClick={() => setSelectedSize({ ...selectedSize, [item.id]: size })}
                                                    className={`w-8 h-8 text-[10px] uppercase font-bold tracking-widest border transition-colors ${selectedSize[item.id] === size ? 'bg-white text-black border-white' : 'bg-transparent text-white border-white/30 hover:border-white'}`}
                                                >
                                                    {size}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                    <button
                                        onClick={() => handleAddToCart(item)}
                                        className="w-full bg-white text-black px-6 py-3 text-xs uppercase tracking-widest font-bold hover:bg-rubix-gold transition-colors duration-300"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>

                            {/* Details */}
                            <div className="flex flex-col items-center text-center">
                                <span className="text-[8px] uppercase tracking-[0.2em] text-rubix-gold mb-2">{item.category}</span>
                                <h3 className="text-lg font-light tracking-widest text-white group-hover:text-rubix-gold transition-colors uppercase">
                                    {item.name}
                                </h3>
                                <p className="text-white/40 text-xs tracking-wider mt-2 max-w-xs leading-relaxed">
                                    {item.description}
                                </p>
                                <span className="text-md font-bold tracking-widest text-white mt-4">
                                    ${item.price.toLocaleString()}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
