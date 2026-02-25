'use client';

import Image from "next/image";
import { useCart } from "@/context/CartContext";

const products = [
    {
        id: "card-holder",
        name: "Geometric Card Holder",
        material: "Italian Calfskin",
        price: 450,
        image: "/card_holder.svg"
    },
    {
        id: "belt",
        name: "Vanguard Belt",
        material: "Gold-Plated Buckle",
        price: 620,
        image: "/belt.svg"
    },
    {
        id: "bag",
        name: "Weekender Bag",
        material: "Matte Grain Leather",
        price: 1850,
        image: "/bag.svg"
    }
];

export function RelatedProducts() {
    const { addItem } = useCart();

    return (
        <section className="py-24 px-6 md:px-12 bg-rubix-dark relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-16">
                    <h2 className="text-2xl text-white font-bold tracking-tighter uppercase">
                        Complete the Look
                    </h2>
                    <a href="#" className="text-rubix-gold text-xs uppercase tracking-widest hover:text-white transition-colors">
                        View All Accessories
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div
                            key={product.name}
                            className="group cursor-pointer"
                            onClick={() => addItem({
                                id: product.id,
                                name: product.name,
                                price: product.price,
                                image: product.image
                            })}
                        >
                            <div className="relative aspect-[4/5] bg-rubix-gray mb-6 overflow-hidden flex items-center justify-center p-8">
                                <div className="relative w-full h-full">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-contain group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="absolute bottom-4 right-4 bg-rubix-gold text-rubix-dark text-[10px] font-bold px-3 py-1 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                    Add to Cart
                                </div>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-white font-medium tracking-wide mb-1 group-hover:text-rubix-gold transition-colors">
                                        {product.name}
                                    </h3>
                                    <p className="text-white/40 text-xs uppercase tracking-widest">{product.material}</p>
                                </div>
                                <span className="text-white font-light tracking-wide">${product.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
