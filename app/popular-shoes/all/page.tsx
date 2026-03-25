'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Search, ShoppingBag, User } from 'lucide-react';
import { popularSneakersData } from '@/data/popularSneakersData';

export default function AllPopularShoes() {
  return (
    <div className="w-full min-h-screen font-sans bg-[#0c0c0c] text-white">
      
      {/* Top Navbar */}
      <div className="w-full flex justify-between items-center text-xs tracking-widest font-medium uppercase text-gray-400 p-8 sm:p-12 border-b border-[#222]">
         <Link href="/popular-shoes" className="flex items-center gap-2 font-bold text-white hover:text-gray-300 transition-colors">
            <ArrowLeft size={16} /> Back to Showcase
         </Link>
         <div className="flex space-x-4">
            <Search size={16} className="cursor-pointer hover:text-white" />
            <ShoppingBag size={16} className="cursor-pointer hover:text-white" />
            <User size={16} className="cursor-pointer hover:text-white" />
         </div>
      </div>

      {/* Hero Header */}
      <div className="px-8 sm:px-12 lg:px-16 py-16 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-[#222]">
         <div>
            <span className="text-gray-500 font-bold tracking-widest uppercase text-[10px] mb-4 block">Complete Collection</span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-none mb-4">
               All Stock.
            </h1>
            <p className="text-gray-400 max-w-md leading-relaxed text-sm">
               Explore the full spectrum of our highly sought-after famous sneakers. Unique silhouettes, unparalleled comfort, zero compromises.
            </p>
         </div>
         <div className="mt-8 md:mt-0">
            <span className="bg-white text-black px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase">{popularSneakersData.length} Styles Available</span>
         </div>
      </div>

      {/* Massive Dark Mode Grid */}
      <div className="p-8 sm:p-12 lg:p-16">
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
            {popularSneakersData.map(sneaker => (
               <div key={sneaker.id} className="flex flex-col group cursor-pointer relative">
                  
                  {/* Image Container */}
                  <div className="w-full aspect-square bg-[#111] rounded-2xl flex items-center justify-center p-8 mb-6 relative overflow-hidden transition-colors border border-[#222] group-hover:bg-[#1a1a1a] group-hover:border-[#333]">
                     <img 
                        src={sneaker.image} 
                        alt={sneaker.name} 
                        className="w-[90%] object-contain mix-blend-screen drop-shadow-2xl group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-700" 
                        style={{ filter: "brightness(2)" }} 
                        onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80" }}
                     />
                     <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full">
                        {sneaker.id.includes('pop2') || sneaker.id.includes('pop3') || sneaker.id.includes('pop4') ? 'Unique Edition' : 'Classic Style'}
                     </div>
                  </div>

                  {/* Product Details */}
                  <div className="flex justify-between items-start w-full px-2">
                     <div className="flex flex-col">
                        <span className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors leading-tight mb-1">{sneaker.name}</span>
                        <span className="text-xs text-gray-500 uppercase tracking-widest">Sneakers</span>
                     </div>
                     <span className="text-sm text-gray-400 group-hover:text-white transition-colors font-medium">${sneaker.price}</span>
                  </div>
               </div>
            ))}
         </div>
      </div>

    </div>
  );
}
