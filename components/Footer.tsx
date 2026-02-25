"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const Footer = () => {
    const footerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.from(footerRef.current, {
            scrollTrigger: {
                trigger: "body",
                start: "100px top", // Show after scrolling down a bit
                toggleActions: "play none none reverse",
            },
            y: 100,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
        });
    }, { scope: footerRef });

    return (
        <footer
            ref={footerRef}
            className="fixed bottom-0 left-0 w-full z-[60] bg-rubix-surface border-t border-white/5 px-6 py-4 shadow-2xl"
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="hidden sm:flex items-center gap-4">
                    <div className="w-12 h-12 border border-white/10 p-1 relative">
                        <Image
                            src="/assets/watch-thumb.png"
                            alt="Thumbnail"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h5 className="text-xs font-bold uppercase tracking-widest text-white">Chrono-Geometric</h5>
                        <p className="text-[10px] text-stone-500 uppercase">Available in 2 Finishes</p>
                    </div>
                </div>

                <div className="flex items-center gap-8 w-full sm:w-auto justify-end">
                    <div className="flex flex-col items-end">
                        <span className="text-[10px] text-stone-500 uppercase tracking-widest">Price</span>
                        <span className="text-xl font-bold tracking-tight text-rubix-gold">$12,400.00</span>
                    </div>
                    <button className="px-8 py-3 bg-rubix-gold hover:bg-[#c29d2b] text-rubix-dark font-bold text-xs uppercase tracking-[0.2em] transition-all transform active:scale-95">
                        Quick Buy
                    </button>
                    <button className="flex items-center justify-center w-10 h-10 border border-white/10 hover:border-rubix-gold transition-colors text-white">
                        <Heart size={16} />
                    </button>
                </div>
            </div>
        </footer>
    );
};
