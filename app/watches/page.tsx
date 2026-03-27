'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ShoppingBag, User, Menu, ChevronLeft, ChevronDown, SlidersHorizontal } from 'lucide-react';
import { watchesData } from '@/data/watchesData';

const FILTERS = [
  "CATEGORIES", "SHOP BY PRICE", "SALE & OFFERS", "TYPE", "MATERIAL", 
  "BRAND", "COLLECTIONS", "FEATURES"
];

export default function WatchesCollection() {
  const [showFilters, setShowFilters] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredWatches = watchesData.filter(watch => {
    if (activeCategory === "All") return true;
    return watch.category === activeCategory;
  });

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      
      {/* TOP NAVBAR */}
      <header className="w-full border-b border-gray-200 sticky top-0 bg-white z-50">
         <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
            {/* Left Nav */}
            <nav className="hidden md:flex gap-6 text-[10px] font-bold tracking-widest uppercase">
               <button onClick={() => setActiveCategory("Women")} className={`hover:text-gray-500 transition-colors pb-1 ${activeCategory === 'Women' ? 'text-red-600 border-b border-red-600' : ''}`}>Women</button>
               <button onClick={() => setActiveCategory("Men")} className={`hover:text-gray-500 transition-colors pb-1 ${activeCategory === 'Men' ? 'text-red-600 border-b border-red-600' : ''}`}>Men</button>
               <button onClick={() => setActiveCategory("Kids")} className={`hover:text-gray-500 transition-colors pb-1 ${activeCategory === 'Kids' ? 'text-red-600 border-b border-red-600' : ''}`}>Kids</button>
               <Link href="/shop" className="hover:text-gray-500 transition-colors pb-1">Life</Link>
               <button onClick={() => setActiveCategory("All")} className={`hover:text-gray-500 transition-colors pb-1 ${activeCategory === 'All' ? 'text-red-600 border-b border-red-600' : ''}`}>Watches</button>
            </nav>
            {/* Center Logo */}
            <Link href="/" className="font-serif text-3xl font-bold tracking-tighter absolute left-1/2 -translate-x-1/2">
               RUBIX
            </Link>
            {/* Right Icons */}
            <div className="flex items-center gap-4 md:gap-6">
               <Search size={18} className="cursor-pointer" />
               <ShoppingBag size={18} className="cursor-pointer" />
               <User size={18} className="cursor-pointer hidden md:block" />
               <div className="flex items-center gap-2 cursor-pointer">
                 <Menu size={18} />
                 <span className="text-[10px] font-bold uppercase hidden md:block tracking-widest">Menu</span>
               </div>
            </div>
         </div>
      </header>

      {/* BREADCRUMB */}
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 pt-8 pb-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-500">
          <Link href="/shop" className="flex items-center hover:text-black transition-colors">
            <ChevronLeft size={12} className="mr-1" /> Back
          </Link>
          <span className="text-gray-300">|</span>
          <Link href="/" className="hover:text-black transition-colors underline underline-offset-4">Home</Link>
          <span>/</span>
          <span className="text-black">Watches</span>
          <span>/</span>
          <span className="text-black">All Models</span>
      </div>

      {/* HEADER TITLE */}
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 mb-12">
         <h1 className="text-3xl md:text-4xl font-serif font-bold tracking-tight mb-4 uppercase">All Timepieces</h1>
         <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest leading-relaxed max-w-2xl text-gray-600">
            Explore the complete UA-0X Series and beyond. Precision-machined, high-performance Swiss engineering tailored for every explorer.
         </p>
      </div>

      {/* MAIN CONTENT LAYOUT */}
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 pb-32">
         {/* Controls Row */}
         <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-8 text-[10px] font-bold uppercase tracking-widest">
            <span className="text-gray-500">{filteredWatches.length} Result{filteredWatches.length !== 1 ? 's' : ''}</span>
            <div className="flex items-center gap-6">
               <button 
                  onClick={() => setShowFilters(!showFilters)} 
                  className="flex items-center gap-2 hover:text-gray-500 transition-colors"
               >
                  {showFilters ? 'Hide Filters' : 'Show Filters'} <SlidersHorizontal size={14} />
               </button>
               <button className="flex items-center gap-2 hover:text-gray-500 transition-colors">
                  Sort By <ChevronDown size={14} />
               </button>
            </div>
         </div>

         <div className="flex flex-col lg:flex-row gap-12">
            
            {/* LEFT SIDEBAR FILTERS */}
            {showFilters && (
               <aside className="hidden lg:flex w-[240px] shrink-0 flex-col gap-6">
                  {FILTERS.map((filter, i) => (
                     <div key={filter} className={`flex justify-between items-center pb-4 cursor-pointer hover:bg-gray-50 px-2 -mx-2 transition-colors ${i !== FILTERS.length - 1 ? 'border-b border-gray-100' : ''}`}>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{filter}</span>
                        <ChevronDown size={14} className="text-gray-400" />
                     </div>
                  ))}
               </aside>
            )}

            {/* PRODUCT GRID */}
            <div className={`grid grid-cols-2 ${showFilters ? 'md:grid-cols-3 xl:grid-cols-3' : 'md:grid-cols-3 xl:grid-cols-4'} gap-x-4 gap-y-12 md:gap-x-6 w-full transition-all duration-500`}>
               {filteredWatches.map((item, index) => (
                  <div key={item.id} className="flex flex-col group cursor-pointer">
                     
                     <div className="w-full aspect-square bg-[#F5F5F5] mb-4 relative overflow-hidden flex items-center justify-center p-8">
                        {/* Best Seller Tag */}
                        {(index === 0 || index === 2 || index === 7) && (
                           <span className="absolute top-3 right-3 bg-white text-[8px] font-bold uppercase tracking-widest px-2 py-1 shadow-sm z-10">Best Seller</span>
                        )}
                        <img 
                           src={item.image} 
                           alt={item.name} 
                           className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
                        />
                     </div>
                     
                     <div className="flex justify-between items-start gap-2 px-1">
                        <div className="flex flex-col w-[75%]">
                           <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-900 leading-tight group-hover:underline">
                              {item.name}
                           </h3>
                           <span className="text-[8px] text-gray-400 uppercase tracking-widest mt-1.5">{item.specs?.movement || 'Automatic'}</span>
                        </div>
                        <span className="text-[11px] font-bold">${item.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                     </div>

                  </div>
               ))}
            </div>

         </div>
      </div>
    </div>
  );
}
