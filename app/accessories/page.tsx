'use client';

import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { Navbar } from "@/components/Navbar";
import { accessoriesData } from "@/data/accessoriesData";

export default function AccessoriesPage() {
    const { addItem } = useCart();

    const handleAddToCart = (item: any) => {
        addItem({
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image || '/assets/orbit-key.png'
        });
    };

    return (
        <main className="min-h-screen bg-rubix-dark text-white font-sans selection:bg-rubix-gold selection:text-rubix-dark">
            <Navbar />

            <div className="pt-32 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
                {/* Header Title utilizing Digital Atelier Aesthetic */}
                <div className="mb-24 text-center">
                    <h1 className="text-4xl md:text-7xl font-light tracking-[0.8em] mb-4 text-stroke font-serif uppercase">
                        Accessories
                    </h1>
                    <p className="text-white/60 text-xs md:text-sm tracking-[0.2em] font-light max-w-2xl mx-auto uppercase">
                        The Details That Define The Vanguard.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {accessoriesData.map((item) => (
                        <div key={item.id} className="group cursor-pointer flex flex-col relative overflow-hidden bg-[#0A0A0A] border border-white/5 transition-colors hover:border-rubix-gold/20 p-8 pb-12 justify-between">

                            <div className="flex justify-between w-full mb-12">
                                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-rubix-gold z-10">
                                    {item.category}
                                </span>
                                <span className="text-xl font-light tracking-wide text-white z-10">
                                    ${item.price}
                                </span>
                            </div>

                            {/* Macro-View Img Effect */}
                            <div className="relative aspect-square mb-12 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] z-0">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-contain drop-shadow-2xl"
                                    onError={(e) => { (e.target as HTMLImageElement).src = '/watch_hero.svg' }}
                                />
                            </div>

                            <div className="flex flex-col z-10 bg-[#0A0A0A]/80 backdrop-blur-md p-4 mt-auto">
                                <h3 className="text-2xl font-light tracking-widest text-white uppercase group-hover:text-rubix-gold transition-colors">
                                    {item.name}
                                </h3>
                                <p className="text-stone-400 text-xs tracking-wider mt-4 font-light leading-relaxed max-w-md">
                                    {item.description}
                                </p>

                                <button
                                    onClick={() => handleAddToCart(item)}
                                    className="mt-8 border border-white/30 text-white px-8 py-3 text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 w-fit"
                                >
                                    Add Artifact
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
