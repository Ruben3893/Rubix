'use client';

import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { Navbar } from "@/components/Navbar";

const collectionItems = [
    {
        id: "watch-001",
        name: "Chrono-Geometric",
        material: "Titanium / 18k Gold",
        price: 12500,
        image: "/watch_hero.svg",
        tag: "Best Seller"
    },
    {
        id: "bag-001",
        name: "Weekender Bag",
        material: "Matte Grain Leather",
        price: 1850,
        image: "/bag.svg"
    },
    {
        id: "card-holder-001",
        name: "Geometric Card Holder",
        material: "Italian Calfskin",
        price: 450,
        image: "/card_holder.svg"
    },
    {
        id: "belt-001",
        name: "Vanguard Belt",
        material: "Gold-Plated Buckle",
        price: 620,
        image: "/belt.svg"
    },
    {
        id: "sunglasses-001",
        name: "Stealth Aviator",
        material: "Polarized / Acetate",
        price: 550,
        image: "/watch_hero.svg", // Reusing asset for demo
        tag: "New"
    },
    {
        id: "cufflinks-001",
        name: "Obsidian Cufflinks",
        material: "Black Onyx / Silver",
        price: 380,
        image: "/card_holder.svg" // Reusing asset for demo
    }
];

export default function CollectionsPage() {
    const { addItem } = useCart();

    return (
        <main className="min-h-screen bg-rubix-dark text-white">
            <Navbar />

            <div className="pt-32 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="mb-20 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
                        THE COLLECTION
                    </h1>
                    <p className="text-white/60 text-sm md:text-base tracking-widest uppercase max-w-2xl mx-auto">
                        Curated artifacts for the modern vanguard.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {collectionItems.map((item) => (
                        <div key={item.id} className="group cursor-pointer flex flex-col">
                            {/* Image Container */}
                            <div
                                className="relative aspect-square bg-rubix-gray mb-6 overflow-hidden flex items-center justify-center p-12"
                                onClick={() => addItem({
                                    id: item.id,
                                    name: item.name,
                                    price: item.price,
                                    image: item.image
                                })}
                            >
                                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {item.tag && (
                                    <span className="absolute top-4 left-4 bg-rubix-gold text-rubix-dark text-[10px] uppercase font-bold px-2 py-1 tracking-widest z-10">
                                        {item.tag}
                                    </span>
                                )}

                                <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-500">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-contain drop-shadow-lg"
                                    />
                                </div>

                                <button className="absolute bottom-6 bg-rubix-dark/90 backdrop-blur text-white px-6 py-3 text-xs uppercase tracking-widest font-bold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-rubix-gold hover:text-rubix-dark">
                                    Add to Cart
                                </button>
                            </div>

                            {/* Details */}
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg font-medium tracking-wide text-white group-hover:text-rubix-gold transition-colors">
                                        {item.name}
                                    </h3>
                                    <p className="text-white/40 text-xs uppercase tracking-widest mt-1">
                                        {item.material}
                                    </p>
                                </div>
                                <span className="text-lg font-light tracking-wide text-white">
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
