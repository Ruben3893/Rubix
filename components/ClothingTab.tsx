import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { clothingData } from '../data/clothingData';

export default function ClothingTab() {
  const [itemsToShow, setItemsToShow] = useState(6);
  const topItems = clothingData.slice(1, 6); // 5 items for horizontal scroll row
  const trendingItems = clothingData.slice(6, 6 + itemsToShow); // Dynamic amount for trending grid

  return (
    <div className="w-full flex flex-col lg:flex-row font-sans selection:bg-black selection:text-white bg-white text-black border-t border-gray-100">
      
      {/* LEFT COLUMN - MASSIVE HERO AND BENTO PANELS */}
      <div className="lg:w-[40%] xl:w-[45%] flex flex-col border-r border-[#131112]">
        
        {/* UPPER BLUE SECTION */}
        <div className="bg-[#416972] text-white flex flex-col relative min-h-[70vh] overflow-hidden">
          
          <div className="px-6 lg:px-12 z-20 pt-16 lg:pt-24 lg:pb-[280px]">
             <span className="text-[10px] uppercase tracking-[0.2em] text-white/70 mb-5 block font-bold">Exclusive Brand</span>
             <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] font-sans font-medium leading-[1.05] mb-8 tracking-tight">
               EXCLUSIVE<br/>
               OFFERS FOR<br/>
               YOU
             </h1>
          </div>

          <div className="absolute top-[40%] right-6 lg:right-12 max-w-[200px] z-30 text-sm flex flex-col items-end text-right lg:items-start lg:text-left">
             <p className="mb-6 text-white/90 leading-relaxed text-xs drop-shadow-md lg:drop-shadow-none">
                Clothing is more than just a way to cover the body—it's a form of self-expression, culture, and identity.
             </p>
             <button 
                onClick={() => document.getElementById("trending-products")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-white text-black rounded-full pl-6 pr-2 py-2 flex items-center justify-between gap-6 text-xs font-bold w-fit hover:bg-gray-100 transition-colors shadow-lg"
             >
                Shop Now
                <div className="bg-black text-white w-7 h-7 rounded-full flex items-center justify-center">
                  <ArrowRight size={14} />
                </div>
             </button>
          </div>

          <img 
            src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80" 
            alt="Male Model in Yellow Hoodie" 
            className="absolute bottom-0 right-[-10%] sm:right-0 lg:right-[-15%] xl:right-0 w-[110%] sm:w-[85%] lg:w-[120%] xl:w-[95%] object-cover object-top z-10 block"
          />
        </div>

        {/* LOWER BLACK BENTO GRID SECTION */}
        <div className="bg-[#111111] text-white p-6 lg:p-12 pb-24">
           <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-16 gap-6 sm:gap-0">
             <h2 className="text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight">
               CREATIVE<br/>
               COLLECTION
             </h2>
             <div className="flex flex-col sm:items-end">
                <span className="text-xs text-white/50 mb-3 block font-mono">/2024</span>
                <p className="text-[9px] tracking-[0.15em] uppercase text-white/50 sm:max-w-[160px] sm:text-right leading-relaxed font-bold">
                  TIMELESS SILHOUETTES DESIGNED TO EMPOWER THE MODERN WOMAN
                </p>
             </div>
           </div>

           <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {/* Green Block */}
              <div className="bg-[#2B605A] aspect-[4/5] relative overflow-hidden flex items-end justify-center group cursor-pointer">
                 <img src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80" className="h-full w-full object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700" alt="Green Dress" />
              </div>
              
              {/* Stacked Right Blocks */}
              <div className="flex flex-col gap-4 lg:gap-6">
                 {/* Black Info Box */}
                 <div className="bg-[#191919] flex-1 p-5 md:p-8 flex flex-col justify-between border border-white/5 relative group cursor-pointer hover:border-white/20 transition-colors">
                    <div>
                      <span className="text-[10px] text-white/40 mb-4 block font-mono">/2024</span>
                      <h3 className="text-2xl md:text-3xl font-medium leading-tight mb-2 uppercase tracking-tight">LOOK GOOD,<br/>FEEL GOOD,<br/>DO GOOD</h3>
                      <p className="text-[8px] tracking-[0.2em] text-white/40 uppercase mt-4">CHIC & STYLISH<br/>LOOKS</p>
                    </div>
                    <button className="w-10 h-10 md:w-12 md:h-12 bg-white text-black rounded-full flex items-center justify-center mt-6 lg:mt-0 transition-transform group-hover:scale-110">
                       <ArrowRight size={18} />
                    </button>
                    <span className="absolute top-6 right-6 text-white/20 text-sm font-serif">&reg;</span>
                 </div>
                 
                 {/* Maroon Block */}
                 <div className="bg-[#904C5A] aspect-square relative overflow-hidden flex items-end justify-center group cursor-pointer">
                    <img src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80" className="h-full w-full object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700" alt="Maroon Dress" />
                 </div>
              </div>

              {/* Light Blue Block */}
              <div className="bg-[#8EACCD] aspect-[4/3] col-span-1 relative overflow-hidden p-6 group cursor-pointer">
                 <p className="absolute bottom-6 left-6 text-[9px] tracking-widest text-[#111111] uppercase font-bold z-20">HOT STYLISH FOR<br/>THIS SEASON</p>
                 <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] object-cover opacity-40 group-hover:opacity-100 transition-opacity duration-700" />
              </div>

              {/* Peach Block */}
              <div className="bg-[#D8B4A0] aspect-[4/3] col-span-1 relative overflow-hidden group cursor-pointer">
                <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover opacity-60 mix-blend-multiply group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700" />
              </div>
           </div>
        </div>
      </div>

      {/* RIGHT COLUMN - LIGHT EDITORIAL SECTION */}
      <div className="lg:w-[60%] xl:w-[55%] flex flex-col bg-[#F3F9FA]">
        
        {/* TOP CLOTHING HORIZONTAL SCROLL SECTION */}
        <div className="p-6 lg:p-14 xl:p-20 pt-16 lg:pt-24 border-b border-[#E1EFF1]">
           <h2 className="text-4xl lg:text-5xl font-medium text-center mb-14 tracking-tight">OUR TOP CLOTHING</h2>
           
           {/* Tab Navigation */}
           <div className="flex gap-8 overflow-x-auto no-scrollbar mb-12 text-[11px] font-bold uppercase pb-1 whitespace-nowrap lg:justify-center">
              <span className="cursor-pointer text-black border-b-[1.5px] border-black pb-1.5 flex items-start gap-1">Street Slick <sup className="font-medium text-[8px] mt-0.5">(15)</sup></span>
              <span className="cursor-pointer text-gray-400 hover:text-black transition-colors flex items-start gap-1">Festive Finery <sup className="font-medium text-[8px] mt-0.5">(28)</sup></span>
              <span className="cursor-pointer text-gray-400 hover:text-black transition-colors flex items-start gap-1">New arrivales <sup className="font-medium text-[8px] mt-0.5">(18)</sup></span>
              <span className="cursor-pointer text-gray-400 hover:text-black transition-colors">Accessory Ace</span>
              <span className="cursor-pointer text-gray-400 hover:text-black transition-colors">On-The Move Essentials</span>
           </div>

           {/* Horizontal Scroll Cards */}
           <div className="flex gap-6 overflow-x-auto no-scrollbar pb-10 snap-x lg:px-4">
             {topItems.map((item, i) => (
                <div key={item.id} className="min-w-[260px] lg:min-w-[280px] bg-white p-6 shadow-sm snap-center group cursor-pointer border border-[#EAEAEA] flex flex-col transition-all hover:-translate-y-1">
                   <div className="flex justify-between items-start mb-2">
                       <h3 className="font-semibold text-sm max-w-[70%] leading-tight text-gray-900 group-hover:text-black">{item.name}</h3>
                       <span className="font-semibold text-sm tracking-tight">${item.price.toFixed(2)}</span>
                   </div>
                   <p className="text-[9px] text-gray-400 mb-8 font-medium italic">100% cotton & pure</p>
                   
                   <div className="flex-1 flex items-center justify-center mb-10 overflow-hidden relative">
                       <img src={item.image} alt={item.name} className={`w-[85%] h-[180px] object-cover transition-transform duration-700 ease-out group-hover:scale-110 ${i % 2 === 0 ? 'mix-blend-multiply' : ''}`} />
                   </div>
                   
                   <div className="flex justify-between items-center mt-auto">
                       <span className="text-[10px] font-bold tracking-wide border-b border-transparent group-hover:border-black transition-colors">Checkout Now</span>
                       <button suppressHydrationWarning type="button" className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:border-black group-hover:text-black transition-all">
                          <ArrowRight size={14} />
                       </button>
                   </div>
                </div>
             ))}
           </div>
        </div>

        {/* MIDDLE EDITORIAL SPLIT SECTION */}
        <div className="p-6 lg:p-14 xl:p-20 bg-white border-b border-gray-100">
           <h2 className="text-4xl lg:text-5xl md:text-[3.5rem] font-medium mb-12 lg:mb-16 md:w-[90%] uppercase tracking-tight leading-[1.05]">
             WHERE STYLE<br/>MEETS COMFORT
           </h2>
           
           <div className="flex flex-col md:flex-row gap-6 md:h-[400px]">
              {/* Left Giant Image Card */}
              <div className="w-full md:w-[65%] h-[300px] md:h-full relative overflow-hidden bg-[#E2A64E] group cursor-pointer">
                 {/* Half-color effect behind image */}
                 <div className="absolute inset-y-0 right-0 w-[60%] bg-[#B5E1CD]" />
                 <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-[0.85] group-hover:scale-105 transition-transform duration-[1.5s] ease-out brightness-110 contrast-125" alt="Style Pink Jacket" />
                 <div className="absolute top-6 right-6 text-[#245D5D] group-hover:text-black transition-colors">
                    <ArrowRight size={24} />
                 </div>
                 {/* Faint overlay text */}
                 <div className="absolute bottom-6 left-6 text-white/40 text-[10rem] font-medium leading-[0.5] -tracking-[0.1em] pointer-events-none select-none">
                    p
                 </div>
              </div>
              
              {/* Right Stack */}
              <div className="w-full md:w-[35%] flex flex-col gap-6">
                 <div className="flex-1 min-h-[180px] overflow-hidden relative group cursor-pointer">
                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]" alt="Cozy Beans" />
                 </div>
                 <div className="h-auto md:h-[45%] flex flex-col justify-end pt-4">
                    <p className="text-[11px] text-gray-500 leading-relaxed mb-6 lg:w-[90%] font-medium">
                      Elegance, trends, and timeless fashion are the essence of what we offer
                    </p>
                    <Link href="/womens" className="bg-black text-white text-[10px] rounded-full pl-5 pr-1.5 py-1.5 font-bold w-fit flex items-center gap-4 hover:opacity-80 transition-opacity">
                      View Collection
                      <div className="bg-white text-black w-7 h-7 rounded-full flex items-center justify-center">
                         <ArrowRight size={14} />
                      </div>
                    </Link>
                 </div>
              </div>
           </div>
        </div>

        {/* TRENDING PRODUCTS GRID SECTION */}
        <div id="trending-products" className="p-6 lg:p-14 xl:p-20 bg-white pt-10">
           <h2 className="text-3xl lg:text-4xl font-medium text-center mb-16 tracking-tight">OUR TRENDING<br/>PRODUCTS</h2>
           
           <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
             {trendingItems.map((item) => (
                <div key={item.id} className="flex flex-col group cursor-pointer w-full">
                  <div className="bg-[#F8F9FA] aspect-[4/5] flex items-center justify-center p-6 relative overflow-hidden rounded-sm mb-4">
                     <img src={item.image} className="w-[85%] h-[85%] object-cover group-hover:scale-105 transition-transform duration-700 mix-blend-multiply" alt={item.name} />
                  </div>
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col">
                      <h4 className="text-[11px] font-bold text-gray-900 group-hover:underline w-[90%] truncate">{item.name}</h4>
                      <p className="text-[8px] text-gray-400 mt-1.5 uppercase font-medium tracking-wider">SKATE SHOES</p>
                      <p className="text-[8px] text-gray-400 mt-0.5 uppercase tracking-wider">1 COLOR</p>
                    </div>
                    <span className="text-[11px] font-bold text-gray-900">${parseFloat(item.price.toString()).toFixed(2)}</span>
                  </div>
                </div>
             ))}
           </div>
           
           <div className="mt-16 flex justify-center">
              {6 + itemsToShow < clothingData.length && (
                 <button 
                    onClick={() => setItemsToShow(prev => prev + 6)}
                    className="border border-black text-black px-12 py-3 text-xs font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-colors"
                 >
                    Load More
                 </button>
              )}
           </div>
        </div>

      </div>
    </div>
  );
}
