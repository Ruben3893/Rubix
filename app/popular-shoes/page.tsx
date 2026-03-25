'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Search, ShoppingBag, User } from 'lucide-react';
import { popularSneakersData } from '@/data/popularSneakersData';

export default function PopularShoes() {
  const categories = ["New Trend", "Lifestyle", "Running", "Tennis", "Basket"];
  const [activeCategory, setActiveCategory] = useState("New Trend");
  
  const filteredSneakers = popularSneakersData.filter(item => item.category === activeCategory);

  return (
    <div className="w-full min-h-screen font-sans bg-[#0c0c0c] text-white">
      {/* 
        HERO SPLIT SECTION 
        Left: Dark Hero
        Right: Dark Info (Top) & Light Gray Promo (Bottom)
      */}
      <div className="flex flex-col lg:flex-row w-full min-h-screen">
        
        {/* LEFT COLUMN - HERO (Dark) */}
        <div className="lg:w-1/2 w-full flex flex-col p-8 sm:p-12 lg:p-16 border-r border-[#222]">
           {/* Top Nav (Minimal) */}
           <div className="w-full flex justify-between items-center text-xs tracking-widest font-medium uppercase text-gray-400 mb-20 lg:mb-32">
              <Link href="/" className="font-bold text-white tracking-widest">Sneakers.</Link>
              <div className="hidden sm:flex space-x-8">
                 <span className="text-white">Collections</span>
                 <span className="hover:text-white cursor-pointer transition-colors">Product</span>
                 <span className="hover:text-white cursor-pointer transition-colors">Brand</span>
                 <span className="hover:text-white cursor-pointer transition-colors">Community</span>
                 <span className="hover:text-white cursor-pointer transition-colors">Flash Sale</span>
              </div>
              <div className="flex space-x-4">
                 <Search size={16} className="cursor-pointer hover:text-white" />
                 <ShoppingBag size={16} className="cursor-pointer hover:text-white" />
                 <User size={16} className="cursor-pointer hover:text-white" />
              </div>
           </div>

           {/* Big Typography */}
           <div className="relative mb-12 z-10">
              <h1 className="text-[4rem] sm:text-[5rem] lg:text-[6rem] xl:text-[7rem] font-medium leading-[1.05] tracking-tight text-white mb-2">
                 Stay Stylish <br /> With <span className="italic font-bold">Sneakers.</span>
              </h1>
              {/* Spinning star badge */}
              <div className="absolute top-0 right-10 hidden md:flex items-center justify-center w-24 h-24 border border-gray-700 rounded-full animate-[spin_10s_linear_infinite]">
                 <span className="absolute flex italic font-serif text-xs text-gray-400"><span className="text-xl">☆</span></span>
                 <svg viewBox="0 0 100 100" className="w-[85%] h-[85%]">
                    <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                    <text className="text-[10px] uppercase tracking-widest fill-gray-400 font-bold">
                       <textPath href="#circlePath">Summer Collection — Summer Collection —</textPath>
                    </text>
                 </svg>
              </div>
           </div>

           {/* Details Row */}
           <div className="flex flex-col sm:flex-row justify-between text-xs text-gray-400 mb-16 gap-8 z-10">
              <div className="flex w-full sm:w-[60%] justify-between pe-12">
                 <div className="flex flex-col">
                    <span className="uppercase text-white font-bold tracking-widest mb-2">Sneakers Type</span>
                    <span>DC12</span>
                 </div>
                 <p className="max-w-[180px] leading-relaxed">
                    Super Shoes Released Its Newest Shoes With 2 Colors, Namely White And, Gray With This Super Shoes Releasing The First Shoes In 2022.
                 </p>
              </div>
              <div className="flex flex-col">
                 <span className="uppercase text-white font-bold tracking-widest mb-3">Size Available</span>
                 <div className="flex gap-2">
                    {['38', '39', '40', '41', '42', '43'].map(size => (
                       <span key={size} className="w-8 h-8 rounded border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black cursor-pointer transition-colors">{size}</span>
                    ))}
                 </div>
              </div>
           </div>

           {/* Hero Floating Shoes Graphic */}
           <div className="relative w-full h-full min-h-[400px] mt-auto flex items-center justify-center group">
              {/* Light Glares */}
              <div className="absolute top-0 right-10 w-64 h-24 bg-white/20 blur-[50px] -rotate-45" />
              <div className="absolute bottom-10 left-10 w-64 h-24 bg-white/10 blur-[50px] rotate-45" />
              
              {/* Primary Shoes Imgs */}
              <div className="relative z-10 flex flex-col -space-y-16 items-center translate-x-12">
                 <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80" className="w-[280px] sm:w-[350px] -rotate-12 drop-shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700 delay-100" style={{ mixBlendMode: 'screen' }} alt="Floating Top Sneaker" />
                 <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&q=80" className="w-[300px] sm:w-[380px] -scale-x-100 rotate-6 drop-shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700" alt="Floating Bottom Sneaker" style={{ mixBlendMode: 'screen', filter: 'brightness(1.5)' }} />
              </div>

              {/* Slider Toggles */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-4">
                 <button className="w-6 h-12 border border-gray-600 rounded-full flex items-center justify-center text-gray-500 hover:text-white transition-colors cursor-pointer">
                    <span className="transform -rotate-90 text-[10px]">❮</span>
                 </button>
                 <button className="w-6 h-12 border border-gray-600 rounded-full flex items-center justify-center text-gray-500 hover:text-white transition-colors cursor-pointer">
                    <span className="transform -rotate-90 text-[10px]">❯</span>
                 </button>
              </div>
           </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:w-1/2 w-full flex flex-col h-full min-h-screen">
           
           {/* TOP HALF: Info Rows (Dark) */}
           <div className="flex-1 bg-[#0c0c0c] p-8 sm:p-12 lg:p-16 flex flex-col justify-center border-b border-[#222]">
              
              {[
                 { title: "Gift Rewards", text: "Every purchase of high-priced shoes or high-priced shoes will get a special hologram pack sticker from our outlet and every purchase of our products will be recorded by the admin for 5 future purchases will get a reward or gift from us." },
                 { title: "Giveaway", text: "Get a free shoe gift for those of you who have long subscribed to our outlets. For every product purchase, we will record your name and mobile." },
                 { title: "Box Package", text: "We always provide the best shipping package security for you so that the goods are not easily damaged. we always use bubble plastic to cover the shoe." },
                 { title: "Free Transfer", text: "For all customers who buy our products, we will not ask for any shipping costs even if you make a purchase of shoe or shoe accessories, we will cover it." }
              ].map((item, i) => (
                 <div key={item.title} className={`py-8 sm:py-10 flex flex-col sm:flex-row gap-6 sm:gap-12 w-full ${i !== 0 ? 'border-t border-[#222]' : ''}`}>
                    <h3 className="w-32 lg:w-40 text-lg sm:text-xl font-medium shrink-0">{item.title}</h3>
                    <div className="flex flex-col gap-4">
                       <p className="text-xs text-gray-400 leading-relaxed font-medium">{item.text}</p>
                       {i === 0 && <span className="text-xs font-bold uppercase tracking-widest cursor-pointer hover:underline mt-2">Learn More</span>}
                    </div>
                 </div>
              ))}

           </div>

           {/* BOTTOM HALF: Best Selling (Light) */}
           <div className="flex-1 bg-[#E4E3E1] text-[#111] p-8 sm:p-12 lg:p-16 relative overflow-hidden flex flex-col justify-center">
              {/* Star Badge */}
              <div className="absolute top-8 left-8 flex items-center justify-center w-20 h-20 text-[#111] animate-pulse">
                 <span className="absolute flex italic font-serif text-2xl">✦</span>
                 <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path id="circlePath2" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                    <text className="text-[11px] uppercase tracking-widest fill-[#111] font-bold">
                       <textPath href="#circlePath2">Summer Collection — Summer —</textPath>
                    </text>
                 </svg>
              </div>

              <div className="w-full h-full flex items-center justify-between pb-10">
                 <img src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80" className="w-[50%] lg:w-[45%] drop-shadow-2xl mix-blend-multiply hover:-translate-y-4 transition-transform duration-700" alt="Colorful best selling sneaker" />
                 
                 <div className="flex flex-col items-end text-right justify-center z-10 w-1/2">
                    <h2 className="text-[4rem] sm:text-[5rem] lg:text-[6rem] font-bold leading-[0.9] tracking-tighter mb-4">
                       Best <br/> Selling
                    </h2>
                    <p className="text-sm font-medium text-gray-600 max-w-[200px] mb-8">
                       Find various styles of shoes that everyone is looking for
                    </p>
                    <button className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 border-b border-black pb-1 hover:pr-2 transition-all">
                       Discovery Collections <ChevronRight size={14} />
                    </button>
                 </div>
              </div>
           </div>

        </div>
      </div>

      {/* 
        BOTTOM FULL-WIDTH SECTION 
        Collection Sub Nav & "Stock Now" Products
      */}
      <div className="w-full px-8 sm:px-12 lg:px-16 pb-24 bg-[#0c0c0c]">
         
         {/* Sub Nav Border Header */}
         <div className="w-full flex justify-between items-center text-[10px] font-bold tracking-widest uppercase text-gray-500 py-6 border-b border-[#222] mb-12">
            <span>Collection 2022</span>
            <div className="flex gap-6 sm:gap-10">
               {categories.map((cat) => (
                  <span 
                     key={cat}
                     onClick={() => setActiveCategory(cat)}
                     className={`cursor-pointer transition-colors block ${activeCategory === cat ? 'text-white border-b border-white pb-1' : 'hover:text-white'}`}
                  >
                     {cat}
                  </span>
               ))}
            </div>
         </div>

         {/* Left text + trending images alongside Stock Now */}
         <div className="flex flex-col lg:flex-row w-full gap-16">
            
            {/* Left promo section */}
            <div className="flex flex-col w-full lg:w-[40%]">
               <h3 className="text-3xl sm:text-4xl text-white font-medium max-w-[350px] leading-tight tracking-tight mb-8">
                  Find a variety oif shoes with the latest trending this year.
               </h3>
               <div className="flex gap-4 sm:gap-6 w-full h-[200px] sm:h-[250px] lg:h-[300px]">
                  <img src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80" className="w-1/2 h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700" alt="Trending orange sneaker" />
                  <img src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80" className="w-1/2 h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700" alt="Trending beige slip-on" />
               </div>
            </div>

            {/* Right "Stock Now" Slider (Mapping 20 popular sneakers generated in Node script) */}
            <div className="flex flex-col w-full lg:w-[60%] overflow-hidden">
               <div className="flex justify-between items-end w-full mb-8 pr-4">
                  <h3 className="text-2xl sm:text-3xl font-medium text-white">Stock Now</h3>
                  <Link href="/popular-shoes/all" className="text-xs uppercase font-bold tracking-widest text-gray-400 hover:text-white flex border-b border-gray-600 hover:border-white pb-1 transition-all cursor-pointer">
                     View All Stock <ChevronRight size={14} />
                  </Link>
               </div>
               
               {/* Horizontal flex scroll container */}
               <div className="flex overflow-x-auto gap-6 sm:gap-8 pb-8 no-scrollbar w-full min-h-[300px]">
                  {filteredSneakers.length > 0 ? filteredSneakers.map(sneaker => (
                     <div key={sneaker.id} className="min-w-[180px] sm:min-w-[220px] flex flex-col group cursor-pointer">
                        <div className="w-full flex items-center justify-center p-4 h-48 sm:h-56 mb-4">
                           <img 
                              src={sneaker.image} 
                              alt={sneaker.name} 
                              className="w-[90%] object-contain mix-blend-screen drop-shadow-lg group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500" 
                              style={{ filter: "brightness(2)" }} 
                              onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80" }}
                           />
                        </div>
                        <div className="flex justify-between items-start text-xs font-bold text-gray-300 w-full px-2">
                           <span className="max-w-[70%] group-hover:text-white transition-colors leading-tight">{sneaker.name}</span>
                           <span className="text-gray-500 group-hover:text-white transition-colors">${sneaker.price}</span>
                        </div>
                     </div>
                  )) : (
                     <div className="w-full flex items-center justify-center text-gray-500 font-medium">
                        No {activeCategory} stock found.
                     </div>
                  )}
               </div>
            </div>

         </div>

      </div>
    </div>
  );
}
