"use client";

import React from 'react';
import Link from 'next/link';
import { Search, ShoppingBag, ArrowUpRight, Heart } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#1A1A1A] font-sans selection:bg-black selection:text-white pb-20">
      
      {/* Header */}
      <header className="w-full px-6 py-4 border-b border-gray-100 bg-white sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-4">
          
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-1 font-bold text-xl tracking-tight">
              <div className="w-4 h-4 bg-black rounded-sm skew-x-12 mr-1"></div>
              Rubix
            </Link>

            {/* Search */}
            <div className="hidden md:flex flex-1 max-w-md mx-8 relative">
              <input 
                type="text" 
                placeholder="Search" 
                className="w-full bg-gray-50 border border-gray-200 rounded-full py-2 pl-6 pr-10 text-sm focus:outline-none focus:border-gray-300"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>

            {/* Actions */}
            <div className="flex items-center gap-6">
              <div className="relative cursor-pointer">
                <ShoppingBag className="w-5 h-5 text-gray-700 hover:text-black transition-colors" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
                  <img src="https://i.pravatar.cc/150?img=33" alt="Morgan" className="w-full h-full object-cover" />
                </div>
                <span className="text-sm font-medium hidden sm:block">Morgan</span>
              </div>
            </div>
          </div>

          <nav className="flex items-center justify-between md:justify-center md:gap-8 lg:gap-12 overflow-x-auto no-scrollbar py-2 text-xs font-bold uppercase tracking-wider text-gray-600">
            <Link href="/shop" className="hover:text-black flex-shrink-0">NEW ARRIVAL</Link>
            <Link href="#" className="hover:text-black flex-shrink-0">MOST PICK</Link>
            <Link href="/sale" className="text-red-500 hover:text-red-600 flex-shrink-0">SALE</Link>
            <Link href="/womens" className="hover:text-black flex-shrink-0">WOMEN</Link>
            <Link href="/shop" className="hover:text-black flex-shrink-0">MEN</Link>
            <Link href="/shoes" className="hover:text-black flex-shrink-0">SNEAKERS</Link>
            <div className="md:flex-1 hidden md:block"></div>
            <Link href="#" className="hover:text-black flex-shrink-0">STORE LOCATION</Link>
            <Link href="#" className="hover:text-black flex-shrink-0">CONTACT US</Link>
          </nav>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-6 pt-8 space-y-16">
        
        {/* Hero Bento Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column (Main Card + Sub Cards) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Main Red Hoodie Card */}
            <div className="bg-[#A4B6A6] rounded-[2rem] overflow-hidden relative flex flex-col md:flex-row h-[400px]">
              <div className="p-10 flex flex-col justify-center z-20 md:w-1/2">
                <h1 className="text-white text-5xl md:text-6xl font-medium leading-[1.1] mb-4">
                  Summer<br/>Arrival of<br/>Outfit
                </h1>
                <p className="text-white/90 text-sm mb-8 max-w-[250px] font-medium leading-relaxed">
                  Discover quality fashion that reflects your style and makes everyday enjoyable.
                </p>
                <Link href="/shop" className="mt-auto bg-[#1A1A1A] text-white rounded-full px-6 py-3 text-xs font-bold w-fit flex items-center gap-2 hover:bg-black transition-colors">
                  EXPLORE PRODUCT <span>&rarr;</span>
                </Link>
              </div>
              <div className="absolute top-10 right-10 z-20 text-white text-right">
                <span className="text-5xl font-light">50%</span><br/>
                <span className="text-xl font-bold tracking-widest">OFF</span>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80" 
                alt="Red Hoodie" 
                className="absolute right-0 bottom-0 h-full w-[60%] object-cover object-left mask-image-gradient z-10 hidden md:block" 
              />
            </div>

            {/* Sub Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-[200px]">
              <Link href="/trendy-sunglasses" className="bg-[#E4E5E4] rounded-[2rem] p-8 relative flex items-center overflow-hidden cursor-pointer group hover:opacity-95 transition-opacity">
                <h2 className="text-2xl font-medium z-20 w-1/2">Trendy<br/>Sunglass</h2>
                <img src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80" alt="Sunglasses" className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[70%] object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-black/10 flex items-center justify-center text-gray-700">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </Link>
              <Link href="/popular-shoes" className="bg-[#E0D0C1] rounded-[2rem] p-8 relative flex items-center overflow-hidden cursor-pointer group hover:opacity-95 transition-opacity">
                <h2 className="text-2xl font-medium z-20 w-1/2 text-[#4A3D36]">Popular<br/>Shoes</h2>
                <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80" alt="Shoes" className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[80%] object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-black/10 flex items-center justify-center text-gray-700">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </Link>
            </div>
          </div>

          {/* Right Column (Tall Card) */}
          <div className="bg-[#F0EEEB] rounded-[2rem] p-10 relative flex flex-col h-[400px] lg:h-full overflow-hidden cursor-pointer group hover:opacity-95 transition-opacity">
            <h2 className="text-4xl font-medium z-20 text-[#1A1A1A]">Fashion<br/>Style</h2>
            <img 
              src="https://images.unsplash.com/photo-1620059551460-e8810c9d9d20?auto=format&fit=crop&q=80" 
              alt="Fashion Style" 
              className="absolute right-0 bottom-0 max-h-[85%] object-cover object-top right-0 z-10 transition-transform duration-500 group-hover:scale-105" 
            />
            <div className="absolute right-6 bottom-6 w-12 h-12 rounded-full bg-black/10 flex items-center justify-center text-gray-700 z-30">
              <ArrowUpRight className="w-6 h-6" />
            </div>
          </div>

        </section>

        {/* Browse by categories */}
        <section className="space-y-6">
          <div className="flex justify-between items-center sm:items-end flex-col sm:flex-row gap-4 sm:gap-0">
            <h2 className="text-3xl font-medium text-[#1A1A1A]">Browse by categories</h2>
            <div className="flex gap-2">
              <button suppressHydrationWarning type="button" className="bg-[#1A1A1A] text-white text-[10px] uppercase font-bold px-5 py-2 rounded-full tracking-wider">ALL</button>
              <button suppressHydrationWarning type="button" className="bg-white border border-gray-200 text-gray-600 hover:text-black text-[10px] uppercase font-bold px-5 py-2 rounded-full tracking-wider transition-colors">WOMAN</button>
              <button suppressHydrationWarning type="button" className="bg-white border border-gray-200 text-gray-600 hover:text-black text-[10px] uppercase font-bold px-5 py-2 rounded-full tracking-wider transition-colors">CHILDREN</button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-[#EAEBEA] rounded-3xl p-6 relative aspect-[5/4] flex items-center justify-center cursor-pointer group">
              <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80" alt="Shoes" className="w-[80%] object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2" />
              <div className="absolute bottom-4 left-4 bg-white text-xs font-bold px-4 py-1.5 rounded-full z-10">SHOES</div>
            </div>
            <div className="bg-[#E2DEE0] rounded-3xl p-6 relative aspect-[5/4] flex items-center justify-center cursor-pointer group">
              <img src="https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80" alt="Brush/Accessory" className="w-[60%] object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2" />
              <div className="absolute bottom-4 left-4 bg-white text-xs font-bold px-4 py-1.5 rounded-full z-10">BRASH</div>
            </div>
            <div className="bg-[#EAEBEA] rounded-3xl p-6 relative aspect-[5/4] flex items-center justify-center cursor-pointer group">
              <img src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80" alt="Bag" className="w-[70%] object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2" />
              <div className="absolute bottom-4 left-4 bg-white text-xs font-bold px-4 py-1.5 rounded-full z-10">BAG</div>
            </div>
            <div className="bg-[#E6E4DD] rounded-3xl p-6 relative aspect-[5/4] flex items-center justify-center cursor-pointer group">
              <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80" alt="T-Shirt" className="w-[70%] object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2" />
              <div className="absolute bottom-4 left-4 bg-white text-xs font-bold px-4 py-1.5 rounded-full z-10">T-SHIRT</div>
            </div>
          </div>
        </section>

        {/* New Collection */}
        <section className="space-y-6 pt-4">
          <div className="flex justify-between items-center sm:items-end flex-col sm:flex-row gap-4 sm:gap-0">
            <h2 className="text-3xl font-medium text-[#1A1A1A]">New Collection</h2>
            <div className="flex flex-wrap gap-2 justify-center">
              <button suppressHydrationWarning type="button" className="bg-[#1A1A1A] text-white text-[10px] uppercase font-bold px-5 py-2 rounded-full tracking-wider">ALL</button>
              <button suppressHydrationWarning type="button" className="bg-white border border-gray-200 text-gray-600 hover:text-black text-[10px] uppercase font-bold px-5 py-2 rounded-full tracking-wider transition-colors">SHORTS</button>
              <button suppressHydrationWarning type="button" className="bg-white border border-gray-200 text-gray-600 hover:text-black text-[10px] uppercase font-bold px-5 py-2 rounded-full tracking-wider transition-colors">JACKETS</button>
              <button suppressHydrationWarning type="button" className="bg-white border border-gray-200 text-gray-600 hover:text-black text-[10px] uppercase font-bold px-5 py-2 rounded-full tracking-wider transition-colors">SHOES</button>
              <button suppressHydrationWarning type="button" className="bg-white border border-gray-200 text-gray-600 hover:text-black text-[10px] uppercase font-bold px-5 py-2 rounded-full tracking-wider transition-colors">T-SHIRT</button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8">
            
            {/* Item 1 */}
            <div className="flex flex-col gap-3 group cursor-pointer">
              <div className="bg-[#B2B9A1]/30 rounded-[2rem] aspect-square relative p-6 flex items-center justify-center overflow-hidden">
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white text-gray-400 flex items-center justify-center shadow-sm z-20 hover:text-red-500 transition-colors"><Heart className="w-4 h-4" /></div>
                <img src="https://images.unsplash.com/photo-1559551409-dadc959f76b8?auto=format&fit=crop&q=80" alt="Jacket" className="w-[90%] object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-black/10 text-gray-700 flex items-center justify-center backdrop-blur-sm z-20 hover:bg-black/20 transition-colors"><ArrowUpRight className="w-5 h-5" /></div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 group-hover:underline">Gray-Shirt</h3>
                <p className="text-gray-500 text-sm">$125</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col gap-3 group cursor-pointer">
              <div className="bg-[#B4BDC2]/30 rounded-[2rem] aspect-square relative p-6 flex items-center justify-center overflow-hidden">
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center shadow-sm z-20"><Heart className="w-4 h-4 fill-current" /></div>
                <img src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80" alt="Blue Bag" className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 group-hover:underline">Woman Bage</h3>
                <p className="text-gray-500 text-sm">$125</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col gap-3 group cursor-pointer">
              <div className="bg-[#EAEBEA] rounded-[2rem] aspect-square relative p-6 flex items-center justify-center overflow-hidden">
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white text-gray-400 flex items-center justify-center shadow-sm z-20 hover:text-red-500 transition-colors"><Heart className="w-4 h-4" /></div>
                <img src="https://images.unsplash.com/photo-1503342394128-c104d54dba01?auto=format&fit=crop&q=80" alt="Kids Top" className="w-[80%] object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 group-hover:underline">Kids Top</h3>
                <p className="text-gray-500 text-sm">$125</p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex flex-col gap-3 group cursor-pointer">
              <div className="bg-[#D2DCE6] rounded-[2rem] aspect-square relative p-6 flex items-center justify-center overflow-hidden">
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white text-gray-400 flex items-center justify-center shadow-sm z-20 hover:text-red-500 transition-colors"><Heart className="w-4 h-4" /></div>
                <img src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80" alt="Headphones" className="w-[80%] object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 group-hover:underline">Smart Headpone</h3>
                <p className="text-gray-500 text-sm">$125</p>
              </div>
            </div>

          </div>
        </section>

        {/* Banner */}
        <section className="bg-[#6B7966] text-white rounded-[2rem] overflow-hidden relative flex items-center justify-center min-h-[300px] mt-12 p-8 text-center group">
          <div className="relative z-20 space-y-6">
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/80">Last Chance</span>
            <h2 className="text-3xl md:text-5xl font-medium max-w-2xl mx-auto leading-tight">EXPLORE OUR RANGE OF STYLISH DRESSES</h2>
            <Link href="/shop" className="inline-block bg-white text-[#6B7966] text-[10px] font-bold uppercase tracking-widest px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
              CHECK IT NOW
            </Link>
          </div>
          <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80" className="absolute left-0 top-0 h-full w-1/3 object-cover opacity-60 mix-blend-overlay" alt="style background" />
        </section>

        {/* Editorial Layout */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-8">
          <div className="space-y-6 max-w-lg">
            <h2 className="text-4xl md:text-5xl font-medium leading-tight text-[#1A1A1A]">
              We said<br/>your order on<br/>the way.
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed pb-4">
              Explore the latest fashion trends and accessories at Rubix where high-quality style meets quality. Whether you're looking to update your wardrobe or find that perfect accessory to complete your look, we've got you covered.
            </p>
          </div>
          <div className="relative">
            <div className="bg-[#E7EDEB] aspect-[4/3] rounded-[2rem] overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&q=80" alt="Man in Beanie" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </section>

        {/* Bottom Split */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-12 pb-12 border-t border-gray-100">
          <div className="flex gap-4 h-[250px]">
             <div className="w-1/3 bg-gray-100 rounded-2xl overflow-hidden">
               <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Rack" />
             </div>
             <div className="flex-1 bg-gray-100 rounded-2xl p-6 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Woman with bag" />
             </div>
          </div>
          <div className="space-y-6 max-w-md pl-4">
            <h2 className="text-4xl font-medium text-[#1A1A1A] leading-tight">
              Shop now & discover<br/>why is our brand for<br/>your best deal.
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              We believe that style shouldn't compromise quality. That's why we source our products from trusted manufacturers who prioritize durability and craftsmanship.
            </p>
            <button suppressHydrationWarning type="button" className="bg-transparent border border-gray-300 text-black text-[10px] uppercase font-bold px-8 py-3 rounded-full hover:bg-black hover:text-white transition-colors">
              READ MORE
            </button>
          </div>
        </section>

      </div>
    </main>
  );
}
