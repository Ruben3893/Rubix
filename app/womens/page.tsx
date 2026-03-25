'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ShoppingBag, User, Menu, ChevronLeft, ChevronDown, SlidersHorizontal } from 'lucide-react';
import { womensData } from '@/data/womensData';

const FILTERS = [
  "CATEGORIES", "SHOP BY PRICE", "SALE & OFFERS", "SIZE", "COLOUR", 
  "SPORTS", "BRAND", "FIT", "COLLECTIONS", "FEATURES"
];

export default function WomensCollection() {
  const [showFilters, setShowFilters] = useState(true);

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      
      {/* TOP NAVBAR */}
      <header className="w-full border-b border-gray-200 sticky top-0 bg-white z-50">
         <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
            {/* Left Nav */}
            <nav className="hidden md:flex gap-6 text-[10px] font-bold tracking-widest uppercase">
               <Link href="/womens" className="text-red-600 border-b border-red-600 pb-1">Women</Link>
               <Link href="/shop" className="hover:text-gray-500 transition-colors pb-1">Men</Link>
               <Link href="#" className="hover:text-gray-500 transition-colors pb-1">Kids</Link>
               <Link href="#" className="hover:text-gray-500 transition-colors pb-1">Life</Link>
            </nav>
            {/* Center Logo */}
            <Link href="/" className="font-serif text-3xl font-bold tracking-tighter absolute left-1/2 -translate-x-1/2">
               Rubix
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
         {/* Sub Header Promo */}
         <div className="w-full bg-[#f4f3ef] text-center py-2 text-[9px] uppercase tracking-[0.2em] font-medium text-gray-600">
            Shop All New Arrivals <Link href="/shop" className="underline decoration-1 underline-offset-4 font-bold text-black border-l border-gray-300 ml-2 pl-2">Shop</Link>
         </div>
      </header>

      {/* BREADCRUMB */}
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 pt-8 pb-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-500">
          <Link href="/" className="flex items-center hover:text-black transition-colors">
            <ChevronLeft size={12} className="mr-1" /> Back
          </Link>
          <span className="text-gray-300">|</span>
          <Link href="/" className="hover:text-black transition-colors underline underline-offset-4">Home</Link>
          <span>/</span>
          <span className="text-black">Women</span>
          <span>/</span>
          <span className="text-black">Clothing</span>
      </div>

      {/* HEADER TITLE */}
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 mb-12">
         <h1 className="text-3xl md:text-4xl font-serif font-bold tracking-tight mb-4 uppercase">Women's Clothes</h1>
         <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest leading-relaxed max-w-2xl text-gray-600">
            Gear up and go in women's clothes from Rubix. Choose from the latest tees, tanks, jackets, shorts, skirts and pants for sport or an everyday athletic look.
         </p>
      </div>

      {/* MAIN CONTENT LAYOUT */}
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 pb-32">
         {/* Controls Row */}
         <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-8 text-[10px] font-bold uppercase tracking-widest">
            <span className="text-gray-500">{womensData.length} Result{womensData.length !== 1 ? 's' : ''}</span>
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
               {womensData.map((item, index) => (
                  <div key={item.id} className="flex flex-col group cursor-pointer">
                     
                     <div className="w-full aspect-[4/5] bg-[#F5F5F5] mb-4 relative overflow-hidden flex items-center justify-center p-4">
                        {/* Best Seller Tag */}
                        {(index === 0 || index === 4 || index === 7) && (
                           <span className="absolute top-3 right-3 bg-white text-[8px] font-bold uppercase tracking-widest px-2 py-1 shadow-sm z-10">Best Seller</span>
                        )}
                        <img 
                           src={item.image} 
                           alt={item.name} 
                           className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
                           onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80' }} // Fallback for local assets that might not exist
                        />
                     </div>
                     
                     <div className="flex justify-between items-start gap-2 px-1">
                        <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-900 leading-tight group-hover:underline w-[75%]">
                           {item.name}
                        </h3>
                        <span className="text-[11px] font-bold">${item.price.toFixed(2)}</span>
                     </div>
                     <p className="text-[8px] text-gray-400 uppercase tracking-widest mt-2 px-1">
                        {item.sizes.length} Colours
                     </p>

                  </div>
               ))}
            </div>

         </div>
      </div>
    </div>
  );
}
