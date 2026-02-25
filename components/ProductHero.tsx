"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { View, Ruler, Droplets, Layers } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const ProductHero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const textContainerRef = useRef<HTMLDivElement>(null);
    const arButtonRef = useRef<HTMLButtonElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // Image reveal
        tl.fromTo(
            imageRef.current,
            { scale: 1.1, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1.5 }
        );

        // Text stagger
        tl.fromTo(
            textContainerRef.current?.children || [],
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.1, duration: 1 },
            "-=1"
        );

        // AR Button pop in
        tl.fromTo(
            arButtonRef.current,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" },
            "-=0.5"
        );

        // AR Button Magnetic/Hover Effect
        const btn = arButtonRef.current;
        if (btn) {
            btn.addEventListener("mousemove", (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                gsap.to(btn, { x: x * 0.2, y: y * 0.2, duration: 0.3 });
            });
            btn.addEventListener("mouseleave", () => {
                gsap.to(btn, { x: 0, y: 0, duration: 0.3 });
            });
        }

        // Parallax Effect for Image
        gsap.to(imageRef.current, {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
            y: 100, // Move image down slightly faster than scroll
        });

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="grid grid-cols-1 lg:grid-cols-12 min-h-screen pt-20">
            {/* Left: Editorial Image */}
            <div className="lg:col-span-8 relative group overflow-hidden bg-stone-900 border-r border-white/5">
                <div className="absolute inset-0 z-0">
                    <Image
                        ref={imageRef}
                        src="/assets/hero-watch.png"
                        alt="Chrono-Geometric Watch"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                </div>

                {/* Geometric Overlay */}
                <div className="absolute top-8 left-8 border-l border-t border-rubix-gold/40 w-16 h-16 pointer-events-none" />
                <div className="absolute bottom-8 right-8 border-r border-b border-rubix-gold/40 w-16 h-16 pointer-events-none" />

                {/* AR Button */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
                    <button
                        ref={arButtonRef}
                        className="flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full hover:border-rubix-gold/50 transition-colors group/btn"
                    >
                        <View className="text-rubix-gold group-hover/btn:scale-110 transition-transform" size={20} />
                        <span className="text-xs font-bold uppercase tracking-widest text-white">
                            AR Virtual Try-On
                        </span>
                    </button>
                </div>
            </div>

            {/* Right: Product Info */}
            <div className="lg:col-span-4 p-8 lg:p-16 flex flex-col justify-center geometric-bg bg-rubix-dark relative z-10">
                <div ref={textContainerRef} className="space-y-8">
                    <div>
                        <span className="text-[10px] uppercase tracking-[0.4em] text-rubix-gold font-bold">
                            Heritage Series
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-2 leading-tight text-white">
                            CHRONO<br />GEOMETRIC
                        </h2>
                        <p className="text-stone-400 text-sm font-light leading-relaxed max-w-sm">
                            SKU: RX-2024-MTC | Limited Edition 01/50
                        </p>
                    </div>

                    <div className="h-px w-12 bg-rubix-gold" />

                    <div className="space-y-6">
                        <h3 className="text-xs uppercase tracking-widest font-bold text-white">The Story</h3>
                        <p className="text-sm font-light leading-relaxed text-stone-300">
                            Engineered for the modern vanguard. The Chrono-Geometric combines aerospace-grade titanium with a matte charcoal finish and hand-applied 18k gold indices. A testament to architectural precision.
                        </p>
                    </div>

                    {/* Specs Grid */}
                    <div className="grid grid-cols-2 gap-y-8 pt-8 border-t border-white/5">
                        {[
                            { icon: View, label: "Movement", value: "Automatic Calibre" },
                            { icon: Ruler, label: "Case Diameter", value: "42.5mm" },
                            { icon: Droplets, label: "Resistance", value: "10 ATM / 100M" },
                            { icon: Layers, label: "Crystal", value: "Sapphire Arc" },
                        ].map((spec, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <spec.icon className="text-rubix-gold" size={16} />
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-stone-500">
                                        {spec.label}
                                    </p>
                                    <p className="text-xs font-bold mt-1 uppercase text-white">
                                        {spec.value}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
