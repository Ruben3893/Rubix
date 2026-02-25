"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu, Search, ShoppingBag, User } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { useCart } from "@/context/CartContext";

gsap.registerPlugin(ScrollTrigger);

export const Navbar = () => {
    const containerRef = useRef<HTMLElement>(null);
    const logoRef = useRef<HTMLHeadingElement>(null);
    const { cartCount, openCart } = useCart();

    useGSAP(() => {
        // Initial entrance animation
        gsap.from(containerRef.current, {
            y: -100,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        });

        // Scroll animation: Reduce height and increase blur
        gsap.to(containerRef.current, {
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "100px top",
                scrub: true,
            },
            height: "64px", // Shrink from h-20 (80px) to 64px
            backgroundColor: "rgba(10, 10, 10, 0.85)", // Darker glass
            backdropFilter: "blur(16px)",
            borderBottomColor: "rgba(255, 255, 255, 0.05)",
        });

        // Logo slight scale down on scroll
        gsap.to(logoRef.current, {
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "100px top",
                scrub: true,
            },
            scale: 0.9,
        });
    }, { scope: containerRef });

    return (
        <header
            ref={containerRef}
            className="fixed top-0 w-full z-50 h-24 flex items-center border-b border-transparent transition-all bg-transparent"
        >
            <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
                {/* Left: Mobile Menu & Nav */}
                <div className="flex items-center gap-8">
                    <button className="text-stone-400 hover:text-rubix-gold transition-colors md:hidden">
                        <Menu strokeWidth={1.5} size={24} />
                    </button>
                    <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-medium text-stone-300">
                        {[
                            { name: "Collections", href: "/shop" },
                            { name: "Bespeak", href: "#bespeak" },
                            { name: "Journal", href: "#journal" }
                        ].map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="hover:text-rubix-gold transition-colors relative group"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-rubix-gold transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Center: Logo */}
                <div className="absolute left-1/2 -translate-x-1/2">
                    <Link href="/">
                        <h1 ref={logoRef} className="text-2xl font-bold tracking-[0.3em] uppercase text-white">
                            Rubix
                        </h1>
                    </Link>
                </div>

                {/* Right: Icons */}
                <div className="flex items-center gap-6 text-white">
                    <button className="hover:text-rubix-gold transition-colors">
                        <Search strokeWidth={1.5} size={20} />
                    </button>
                    <button className="hover:text-rubix-gold transition-colors hidden sm:block">
                        <User strokeWidth={1.5} size={20} />
                    </button>
                    <button
                        onClick={openCart}
                        className="hover:text-rubix-gold transition-colors relative group"
                    >
                        <ShoppingBag strokeWidth={1.5} size={20} />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-rubix-gold text-[8px] font-bold text-rubix-dark w-3 h-3 flex items-center justify-center rounded-full group-hover:scale-110 transition-transform">
                                {cartCount}
                            </span>
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
};
