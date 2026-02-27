'use client';

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { Navbar } from "@/components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ProductDetailPopup } from "@/components/ProductDetailPopup";

import { shoeData } from "@/data/shoeData";
import { accessoryData } from "@/data/accessoriesData";
import { clothingData } from "@/data/clothingData";
import { watchesData } from "@/data/watchesData";

// Mock Database with rich details for distinct modes
const mockDatabase = [
    ...watchesData,
    ...clothingData,
    ...shoeData,
    ...accessoryData
];

const CATEGORIES = ["Clothing", "Watches", "Shoes", "Accessories"] as const;
type Category = typeof CATEGORIES[number];

const fetchProductsByCategory = async (category: Category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockDatabase.filter(item => {
                if (category === "Clothing") {
                    return ["Clothing", "Outerwear", "Bottoms", "Tops", "Suits"].includes(item.category);
                }
                return item.category === category;
            }));
        }, 400);
    });
};

export default function MasterThemeController() {
    const { addItem } = useCart();
    const [activeCategory, setActiveCategory] = useState<Category>("Watches");
    const [products, setProducts] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedSize, setSelectedSize] = useState<Record<string, string>>({});
    const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [toastMessage, setToastMessage] = useState<string | null>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!isLoading && products.length > 0) {
            gsap.fromTo(
                ".gsap-product-card",
                { opacity: 0, y: 50, scale: 0.9, filter: "blur(10px)" },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    filter: "blur(0px)",
                    duration: 1.2,
                    stagger: 0.1,
                    ease: "power4.out",
                    clearProps: "all"
                }
            );
        }
    }, [isLoading, products]);

    useEffect(() => {
        let isMounted = true;
        setIsLoading(true);

        fetchProductsByCategory(activeCategory).then((data: any) => {
            if (isMounted) {
                setProducts(data);
                setIsLoading(false);
            }
        });

        return () => { isMounted = false; };
    }, [activeCategory]);

    const handleAddToCart = (item: any) => {
        if (item.sizes && item.sizes.length > 0 && !selectedSize[item.id]) {
            setToastMessage(`Please select a size for ${item.name}`);
            setTimeout(() => setToastMessage(null), 3000);
            return;
        }

        const size = selectedSize[item.id] || '';
        const nameSuffix = size ? ` (${size})` : '';
        addItem({
            id: `${item.id}${size ? `-${size}` : ''}`,
            name: `${item.name}${nameSuffix}`,
            price: item.price,
            image: item.image || '/watch_hero.svg'
        });

        setToastMessage(`${item.name} added to bag.`);
        setTimeout(() => setToastMessage(null), 3000);
    };

    // Theme Configuration Details
    const themes = {
        Clothing: {
            bg: "bg-[#F9FAF8]", // Sage Tint White
            text: "text-[#022C22]", // Forest Black
            cardStyle: "rounded-none border border-[#EDF1EC] bg-[#EDF1EC] hover:border-[#064E3B] shadow-sm hover:shadow-lg transition-all duration-300", // Soft Mint
            buttonStyle: "bg-[#064E3B] text-[#F9FAF8] rounded-none hover:bg-[#022C22] transition-colors duration-300", // Deep Emerald
            fontTitle: "font-sans font-black text-[#022C22]",
            fontBody: "font-sans text-[#022C22]",
        },
        Watches: {
            bg: "bg-zinc-950",
            text: "text-white",
            cardStyle: "rounded-3xl border border-white/5 hover:border-rubix-gold/50 shadow-[0_0_15px_rgba(212,175,55,0)] hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] bg-zinc-900/50", // Rounded with gold glows
            buttonStyle: "bg-rubix-gold text-zinc-950 rounded-full hover:bg-yellow-500",
            fontTitle: "font-serif", // Like Playfair Display
            fontBody: "font-sans font-light",
        },
        Shoes: {
            bg: "bg-[#F4F1EA]", // Paper-like white
            text: "text-[#3D2B1F]", // Dark brown
            cardStyle: "rounded-md border border-[#D2C5B3] bg-[#FAF8F5] shadow-sm hover:shadow-md",
            buttonStyle: "bg-[#8B5A2B] text-[#F4F1EA] rounded hover:bg-[#6B4423]", // Brown leather accents
            fontTitle: "font-sans font-bold italic tracking-tight", // Active lifestyle font
            fontBody: "font-sans",
        },
        Accessories: {
            bg: "bg-[#0F0F0F]", // Obsidian Black
            text: "text-white",
            cardStyle: "rounded-xl border border-[#1A1A1A] bg-[#1A1A1A]/30 backdrop-blur-2xl shadow-[0_15px_40px_rgba(0,0,0,0.8)] hover:border-[#A57164]/80 hover:shadow-[0_0_30px_rgba(165,113,100,0.15)]", // Rose copper hover
            buttonStyle: "bg-transparent border border-[#CD7F32] text-[#CD7F32] rounded-xl hover:bg-[#CD7F32] hover:text-[#0F0F0F] transition-all duration-500", // Bronze button
            fontTitle: "font-serif tracking-[0.3em] text-[#CD7F32]", // Bronze title text
            fontBody: "font-sans font-light text-[#f8f6f0]",
        }
    };

    const currentTheme = themes[activeCategory];

    return (
        <AnimatePresence mode="popLayout">
            <motion.main
                key={activeCategory + "-bg"} // Key changes force full unmount/mount wrapper animation
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className={`min-h-screen transition-colors duration-1000 ${currentTheme.bg} ${currentTheme.text} ${currentTheme.fontBody}`}
            >
                <Navbar />

                <div className="pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto relative z-10">

                    {/* Master Theme Controller Tab Bar */}
                    <div className="flex justify-center mb-16 relative z-20">
                        <div className="flex flex-wrap justify-center gap-6 md:gap-12 border-b border-current/20 pb-4">
                            {CATEGORIES.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`relative text-xs uppercase tracking-[0.2em] font-bold transition-opacity duration-300 ${activeCategory === category ? "opacity-100" : "opacity-40 hover:opacity-70"
                                        }`}
                                >
                                    {category}
                                    {activeCategory === category && (
                                        <motion.div
                                            layoutId="masterIndicator"
                                            className="absolute -bottom-[17px] left-0 right-0 h-1 bg-current"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Dynamic Hero Titles per Theme */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory + "-title"}
                            initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
                            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                            exit={{ y: -20, opacity: 0, filter: "blur(4px)" }}
                            transition={{ duration: 0.5 }}
                            className="text-center mb-16"
                        >
                            <h1 className={`text-5xl md:text-7xl uppercase mb-4 ${currentTheme.fontTitle}`}>
                                {activeCategory === "Watches" && "The Vault"}
                                {activeCategory === "Clothing" && "Atelier Street"}
                                {activeCategory === "Shoes" && "The Active Step"}
                                {activeCategory === "Accessories" && "Glass Artifacts"}
                            </h1>
                            <p className="text-sm tracking-[0.3em] uppercase opacity-70">
                                Curated for the Vanguard
                            </p>
                        </motion.div>
                    </AnimatePresence>

                    {/* Dynamic Products Grid */}
                    <div className="min-h-[500px]">
                        <AnimatePresence mode="wait">
                            {isLoading ? (
                                <motion.div
                                    key="loading"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex items-center justify-center h-64"
                                >
                                    <div className="text-xs tracking-widest uppercase animate-pulse opacity-70">Synthesizing Display...</div>
                                </motion.div>
                            ) : (
                                <div
                                    key={activeCategory + "-grid"}
                                    ref={gridRef}
                                    className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ${activeCategory === "Watches" ? "lg:grid-cols-2 max-w-5xl mx-auto" : "" // centered 2-col for watches
                                        }`}
                                >
                                    {products.map((item, i) => (
                                        <div
                                            key={item.id}
                                            onClick={() => { setSelectedProduct(item); setIsModalOpen(true); }}
                                            className={`gsap-product-card group flex flex-col overflow-hidden p-6 transition-colors duration-500 relative cursor-pointer ${currentTheme.cardStyle}`}
                                        >
                                            {/* Accessory Glassmorphism Glare */}
                                            {activeCategory === "Accessories" && (
                                                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
                                            )}

                                            {/* Image Concept */}
                                            <div className="relative aspect-square w-full mb-6 flex items-center justify-center overflow-hidden">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className={`w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-125 scale-110 ${activeCategory === "Watches" ? "drop-shadow-[0_20px_20px_rgba(0,0,0,0.8)]" : ""
                                                        }`}
                                                    onError={(e) => { (e.target as HTMLImageElement).src = '/watch_hero.svg' }}
                                                />
                                            </div>

                                            {/* Details & Action */}
                                            <div className="flex flex-col mt-auto pb-2 z-10">
                                                <h3 className={`text-xl mb-1 uppercase ${currentTheme.fontTitle}`}>
                                                    {item.name}
                                                </h3>
                                                <p className="text-lg opacity-80 mb-6 font-medium">
                                                    ${item.price.toLocaleString()}
                                                </p>

                                                {/* Specs rendering for Watches */}
                                                {activeCategory === "Watches" && item.specs && (
                                                    <div className="grid grid-cols-2 gap-2 mb-6 border-t border-white/10 pt-4">
                                                        <div>
                                                            <p className="text-[8px] uppercase tracking-widest opacity-50 mb-1">Movement</p>
                                                            <p className="text-[10px] uppercase">{item.specs?.movement}</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-[8px] uppercase tracking-widest opacity-50 mb-1">Resistance</p>
                                                            <p className="text-[10px] uppercase">{item.specs?.resistance}</p>
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Sizes rendering for Clothing/Shoes */}
                                                {(activeCategory === "Clothing" || activeCategory === "Shoes") && item.sizes && (
                                                    <div className="flex flex-wrap gap-2 mb-6">
                                                        {item.sizes.map((size: string) => (
                                                            <button
                                                                key={size}
                                                                onClick={() => setSelectedSize({ ...selectedSize, [item.id]: size })}
                                                                className={`w-8 h-8 flex items-center justify-center text-xs font-bold border transition-colors ${selectedSize[item.id] === size
                                                                    ? currentTheme.buttonStyle
                                                                    : `border-current/20 hover:border-current/80`
                                                                    }`}
                                                            >
                                                                {size}
                                                            </button>
                                                        ))}
                                                    </div>
                                                )}

                                                <button
                                                    onClick={(e) => { e.stopPropagation(); handleAddToCart(item); }}
                                                    className={`w-full py-4 text-xs tracking-widest uppercase font-bold transition-all duration-300 ${currentTheme.buttonStyle}`}
                                                >
                                                    {activeCategory === "Watches" ? "Acquire Theme" : "Add to Bag"}
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
                <ProductDetailPopup
                    item={selectedProduct}
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    currentTheme={currentTheme}
                    activeCategory={activeCategory}
                />

                {/* Global Toast Overlay */}
                <AnimatePresence>
                    {toastMessage && (
                        <motion.div
                            initial={{ opacity: 0, y: 50, x: "-50%" }}
                            animate={{ opacity: 1, y: 0, x: "-50%" }}
                            exit={{ opacity: 0, y: 50, x: "-50%" }}
                            className="fixed bottom-10 left-1/2 z-50 bg-black text-white px-8 py-4 text-xs tracking-widest uppercase font-bold border border-white/20 shadow-2xl"
                        >
                            {toastMessage}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.main >
        </AnimatePresence >
    );
}
