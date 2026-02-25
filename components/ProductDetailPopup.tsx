'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import { X } from 'lucide-react';

interface ProductPopupProps {
    item: any | null;
    isOpen: boolean;
    onClose: () => void;
    currentTheme: any;
    activeCategory: string;
}

export const ProductDetailPopup = ({ item, isOpen, onClose, currentTheme, activeCategory }: ProductPopupProps) => {
    const { addItem } = useCart();
    const [selectedSize, setSelectedSize] = useState<string>('');

    const handleAddToCart = () => {
        if (!item) return;
        const size = selectedSize || item.sizes?.[0] || '';
        const nameSuffix = size ? ` (${size})` : '';
        addItem({
            id: `${item.id}${size ? `-${size}` : ''}`,
            name: `${item.name}${nameSuffix}`,
            price: item.price,
            image: item.image || '/watch_hero.svg'
        });
        onClose(); // Optional: close after adding to cart
    };

    return (
        <AnimatePresence>
            {isOpen && item && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/40 backdrop-blur-md"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row shadow-2xl ${currentTheme?.bg || 'bg-white'} ${currentTheme?.text || 'text-black'} ${currentTheme?.cardStyle || 'rounded-none'}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={onClose}
                            className={`absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition-colors ${currentTheme?.text || 'text-black'}`}
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="w-full md:w-1/2 p-8 flex items-center justify-center bg-black/5 overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.name}
                                className={`w-full max-h-[400px] object-contain transition-transform duration-1000 ${activeCategory === "Watches" ? "drop-shadow-[0_20px_20px_rgba(0,0,0,0.8)] hover:scale-110" : "hover:scale-105"
                                    }`}
                                onError={(e) => { (e.target as HTMLImageElement).src = '/watch_hero.svg' }}
                            />
                        </div>

                        <div className="w-full md:w-1/2 p-8 md:p-12 border-l border-current/10 flex flex-col">
                            <span className="text-[10px] uppercase tracking-[0.3em] opacity-60 mb-2">
                                {item.category}
                            </span>
                            <h2 className={`text-3xl md:text-5xl uppercase leading-none mb-4 ${currentTheme?.fontTitle || 'font-sans font-black'}`}>
                                {item.name}
                            </h2>
                            <p className="text-xl font-medium mb-8 opacity-90">${item.price.toLocaleString()}</p>

                            {item.description && (
                                <div className="mb-8">
                                    <h3 className="text-xs uppercase tracking-widest font-bold mb-3 border-b border-current/20 pb-2">Description</h3>
                                    <p className="text-sm opacity-80 leading-relaxed font-light">{item.description}</p>
                                </div>
                            )}

                            {/* Watches Specs */}
                            {activeCategory === "Watches" && item.specs && (
                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <div className="border border-white/10 p-4 rounded-xl">
                                        <p className="text-[10px] uppercase tracking-widest opacity-50 mb-1">Movement</p>
                                        <p className="text-xs uppercase">{item.specs?.movement || 'N/A'}</p>
                                    </div>
                                    <div className="border border-white/10 p-4 rounded-xl">
                                        <p className="text-[10px] uppercase tracking-widest opacity-50 mb-1">Resistance</p>
                                        <p className="text-xs uppercase">{item.specs?.resistance || 'N/A'}</p>
                                    </div>
                                </div>
                            )}

                            {/* Size Selector */}
                            {(item.sizes && item.sizes.length > 0) && (
                                <div className="mb-8 mt-auto">
                                    <h3 className="text-xs uppercase tracking-widest font-bold mb-3">Select Size</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {item.sizes.map((size: string) => (
                                            <button
                                                key={size}
                                                onClick={() => setSelectedSize(size)}
                                                className={`px-4 py-2 text-xs font-bold border transition-colors ${selectedSize === size || (!selectedSize && item.sizes[0] === size)
                                                        ? currentTheme?.buttonStyle || 'bg-black text-white'
                                                        : 'border-current/20 hover:border-current/80 bg-transparent'
                                                    } ${activeCategory === 'Clothing' ? 'rounded-none' : activeCategory === 'Watches' ? 'rounded-full' : activeCategory === 'Accessories' ? 'rounded-xl text-white' : 'rounded'}`}
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <button
                                onClick={handleAddToCart}
                                className={`w-full py-4 text-xs tracking-widest uppercase font-bold transition-all duration-300 ${!item.sizes || item.sizes.length === 0 ? 'mt-auto' : ''} ${currentTheme?.buttonStyle || 'bg-black text-white'}`}
                            >
                                Add to Bag
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
