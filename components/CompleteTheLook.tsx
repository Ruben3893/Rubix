"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { useCart } from "@/context/CartContext";

gsap.registerPlugin(ScrollTrigger);

const accessories = [
    {
        id: "card-holder",
        name: "Geometric Card Holder",
        material: "Italian Calfskin",
        price: 450,
        image: "/assets/accessory-cardholder.png",
    },
    {
        id: "vanguard-belt",
        name: "Vanguard Belt",
        material: "Gold-Plated Buckle",
        price: 620,
        image: "/assets/accessory-belt.png",
    },
    {
        id: "weekender-bag",
        name: "Weekender Bag",
        material: "Matte Grain Leather",
        price: 1850,
        image: "/assets/accessory-bag.png",
    },
];

export const CompleteTheLook = () => {
    const containerRef = useRef<HTMLElement>(null);
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
    const { addItem } = useCart();

    useGSAP(() => {
        gsap.from(itemsRef.current, {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                end: "bottom bottom",
                toggleActions: "play none none reverse",
            },
            y: 50,
            opacity: 0,
            stagger: 0.2,
            duration: 1,
            ease: "power3.out",
        });
    }, { scope: containerRef });

    return (
        <section id="complete-the-look" ref={containerRef} className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight mb-2 text-white">COMPLETE THE LOOK</h2>
                    <p className="text-stone-400 text-xs uppercase tracking-[0.2em]">Curated by Rubix AI Intelligence</p>
                </div>
                <a href="#complete-the-look" className="text-[10px] font-bold uppercase tracking-widest border-b border-rubix-gold pb-1 text-white hover:text-rubix-gold transition-colors">
                    View All Accessories
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5">
                {accessories.map((item, index) => (
                    <div
                        key={index}
                        ref={(el) => { itemsRef.current[index] = el }}
                        className="bg-rubix-dark group cursor-pointer overflow-hidden relative"
                    >
                        <div className="aspect-square relative overflow-hidden">
                            <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <button
                                onClick={() => addItem(item)}
                                className="absolute bottom-4 right-4 w-10 h-10 bg-rubix-gold flex items-center justify-center translate-y-12 group-hover:translate-y-0 transition-transform duration-300 hover:bg-white hover:text-black z-10"
                            >
                                <Plus className="text-rubix-dark" size={16} />
                            </button>
                        </div>
                        <div className="p-6">
                            <h4 className="text-xs font-bold uppercase tracking-widest mb-1 text-white">
                                {item.name}
                            </h4>
                            <p className="text-stone-500 text-[10px] mb-3 uppercase tracking-tighter">
                                {item.material}
                            </p>
                            <p className="text-sm font-bold text-white">${item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
