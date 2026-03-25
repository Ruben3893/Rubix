'use client';

import React from 'react';
import Link from 'next/link';
import { Search, ShoppingBag, User, ChevronLeft, ChevronRight, Lock, Truck, Tag } from 'lucide-react';
import { trendySunglassesData } from '@/data/trendySunglassesData';

export default function TrendySunglasses() {
  return (
    <div className="w-full min-h-screen font-serif bg-white text-gray-900 flex flex-col overflow-x-hidden">
      
      {/* HEADER NAV */}
      <nav className="w-full flex justify-between items-center px-8 lg:px-16 py-6 bg-[#FBEFF2] text-sm uppercase tracking-widest font-sans font-medium">
         <Link href="/" className="font-serif font-black text-2xl tracking-tighter normal-case">Hongo.</Link>
         <div className="hidden md:flex space-x-8 text-gray-600">
            <span className="hover:text-black cursor-pointer">Women</span>
            <span className="hover:text-black cursor-pointer">Men</span>
            <span className="hover:text-black cursor-pointer">About</span>
            <span className="hover:text-black cursor-pointer">Blog</span>
            <span className="hover:text-black cursor-pointer">Contact</span>
         </div>
         <div className="flex space-x-5">
            <Search size={18} className="cursor-pointer" />
            <User size={18} className="cursor-pointer" />
            <ShoppingBag size={18} className="cursor-pointer" />
         </div>
      </nav>

      {/* HERO SECTION - Blush Pink */}
      <section className="w-full bg-[#FBEFF2] flex flex-col lg:flex-row items-center justify-between px-8 lg:px-24 pt-12 pb-24 relative">
         <div className="lg:w-1/2 flex flex-col z-10">
            <h1 className="text-[4rem] sm:text-[5rem] lg:text-[6rem] font-bold leading-[0.9] text-[#33181D] mb-6">
               Own Your <br/> Moment
            </h1>
            <p className="text-gray-600 max-w-sm mb-10 font-sans text-sm leading-relaxed">
               Fusce scelerisque tellus eget nisl vulputate, et eleifend sapien tempor nulla tristique.
            </p>
            <button className="border border-black text-xs uppercase font-sans font-bold px-8 py-3 w-fit hover:bg-black hover:text-white transition-colors">
               Shop now
            </button>
         </div>
         <div className="lg:w-1/2 relative mt-16 lg:mt-0 flex justify-end">
            <img 
               src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80" 
               className="w-full lg:w-[120%] object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.15)] mix-blend-multiply" 
               alt="Red Frame Sun Glasses" 
            />
            {/* Top Right Award/Rating */}
            <div className="absolute top-0 right-0 lg:-right-10 flex flex-col items-center">
               <div className="w-24 h-24 rounded-full bg-[#E5B55C] flex items-center justify-center text-white font-bold text-center leading-tight text-xs p-4 -rotate-12 shadow-lg mb-4">
                  100%<br/>AUTHENTIC
               </div>
            </div>
         </div>
      </section>

      {/* NEW COLLECTION SPLIT */}
      <section className="w-full px-8 lg:px-24 py-24 flex flex-col lg:flex-row gap-16 items-center">
         <div className="lg:w-1/2 flex gap-4 w-full h-[400px]">
            <img src="https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80" className="w-1/2 h-full object-cover" alt="Model 1" />
            <img src="https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&q=80" className="w-1/2 h-full object-cover mt-8" alt="Model 2" />
         </div>
         <div className="lg:w-1/2 flex flex-col lg:pl-16">
            <h2 className="text-[3rem] sm:text-[4rem] font-bold text-[#33181D] leading-[0.9] mb-6">
               The Spring<br/>Summer Cool<br/>Collection
            </h2>
            <p className="text-gray-500 font-sans mb-10 max-w-sm">
               Fusce scelerisque tellus eget nisl vulputate, et eleifend sapien tempor dolor tristique.
            </p>
            <button className="bg-[#461D24] text-white text-xs uppercase font-sans font-semibold px-8 py-4 w-fit hover:bg-black transition-colors">
               Discover
            </button>
         </div>
      </section>

      {/* BE DIFFERENT ROW - Gradient Pink/Red */}
      <section className="w-full bg-gradient-to-r from-[#F08080] to-[#E24E6B] px-8 lg:px-24 py-20 flex flex-col lg:flex-row items-center justify-between text-white overflow-hidden">
         <div className="lg:w-[40%] flex flex-col z-10">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 drop-shadow-sm">
               Be different in<br/>your own way!
            </h2>
            <p className="font-sans mb-10 text-white/90 max-w-sm">
               Fusce scelerisque tellus eget nisl vulputate, et eleifend sapien tempor nulla tristique.
            </p>
            <button className="border border-white py-3 px-8 text-xs font-sans font-bold uppercase w-fit hover:bg-white hover:text-[#E24E6B] transition-colors">
               Shop now
            </button>
         </div>
         <div className="lg:w-[60%] relative h-[300px] w-full mt-10 lg:mt-0 flex items-center justify-center">
            <img src="https://images.unsplash.com/photo-1555009893-f111e1141444?auto=format&fit=crop&q=80" className="w-[80%] lg:w-[70%] object-contain mix-blend-multiply drop-shadow-2xl absolute" alt="Floating red shades" />
         </div>
      </section>

      {/* PRODUCT SPOTLIGHT ROW */}
      <section className="w-full px-8 lg:px-24 py-24 flex flex-col lg:flex-row gap-16 items-center">
         <div className="lg:w-1/2 w-full h-[500px] bg-gray-100 flex items-center justify-center relative">
             <button className="absolute left-4 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm"><ChevronLeft size={16}/></button>
             <img src="https://images.unsplash.com/photo-1582143419997-2a4c2847a9ff?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Model spotlight" />
             <button className="absolute right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm"><ChevronRight size={16}/></button>
         </div>
         <div className="lg:w-1/2 flex flex-col justify-center">
            <div className="w-[120px] aspect-[2/1] bg-gray-100 flex items-center justify-center mb-8 px-4">
               <img src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80" className="w-[80%] mix-blend-multiply" alt="Specs" />
            </div>
            <h2 className="text-4xl font-bold text-[#33181D] leading-tight mb-6 max-w-[300px]">
               Round small ladies<br/>frames £39
            </h2>
            <ul className="list-disc pl-5 font-sans text-gray-600 text-sm space-y-2 mb-10">
               <li>Available in 37 frames</li>
               <li>Rough pop</li>
               <li>Resin & bio frame and strong base</li>
               <li>Spring hinge</li>
               <li>Metal elements, direct mold bits</li>
               <li>Power adjustment available</li>
            </ul>
            <div className="flex items-center gap-6">
               <span className="font-bold font-sans line-through text-gray-400">£115.00</span>
               <button className="bg-[#33181D] text-white px-8 py-3 font-sans text-xs uppercase font-bold hover:bg-black transition-colors">Add to cart</button>
            </div>
         </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="w-full bg-white px-8 lg:px-24 py-16 flex flex-col items-center">
         <span className="font-sans text-gray-500 italic mb-2">Hongo fans</span>
         <h2 className="text-4xl md:text-5xl font-bold text-[#33181D] mb-16">Testimonials</h2>
         
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
            {[1, 2, 3, 4].map((i) => (
               <div key={i} className="bg-[#461D24] text-white p-8">
                  <h3 className="font-bold text-xl mb-4 italic">"The best decision we made!"</h3>
                  <p className="font-sans text-sm text-white/80 leading-relaxed mb-6">
                     Hongo is a clean, beyond products, I love its perfectly smooth! I'm sure that will continue to receive updates and features in the coming months and years. — Read more
                  </p>
                  <div className="flex items-center gap-4">
                     <img src={`https://i.pravatar.cc/150?img=${i+10}`} className="w-10 h-10 rounded-full grayscale" alt="Reviewer" />
                     <div className="flex flex-col font-sans">
                        <span className="font-bold text-sm">David Mason</span>
                        <span className="text-[10px] text-white/50 uppercase tracking-widest">Founder of Wellness Flow Inc</span>
                     </div>
                  </div>
               </div>
            ))}
         </div>
         <button className="mt-12 border border-[#33181D] text-[#33181D] font-sans text-xs uppercase px-8 py-3 font-bold hover:bg-[#33181D] hover:text-white transition-colors">
            Read More
         </button>
      </section>

      {/* TAKE CARE & TRENDING GRID */}
      <section className="w-full bg-[#f9f9f9] px-8 lg:px-24 py-24 flex flex-col items-center">
         <div className="flex flex-col lg:flex-row items-center w-full max-w-6xl gap-16 mb-24">
             <div className="lg:w-1/2">
                <h2 className="text-4xl sm:text-5xl font-bold text-[#33181D] leading-[1.1] mb-6">
                   How to take care<br/>of your eyewear
                </h2>
                <p className="font-sans text-gray-600 mb-8 max-w-sm">
                   Fusce scelerisque tellus eget nisl vulputate, et eleifend sapien tempor nulla tristique.
                </p>
                <button className="bg-[#33181D] text-white text-xs uppercase font-sans font-bold px-8 py-3 hover:bg-black transition-colors">
                   Read More
                </button>
             </div>
             <div className="lg:w-1/2 w-full h-[300px]">
                <img src="https://images.unsplash.com/photo-1563903530908-afdd155d057a?auto=format&fit=crop&q=80" className="w-full h-full object-cover shadow-xl" alt="Sunset Sunglasses" />
             </div>
         </div>

         {/* TRENDING NOW (MAPPING NEW DATA) */}
         <div className="flex flex-col items-center w-full max-w-[1400px]">
             <span className="font-sans text-gray-500 italic mb-2">Popular Products</span>
             <h2 className="text-4xl md:text-5xl font-bold text-[#33181D] mb-16">Trending now</h2>
             
             {/* Map exactly 40 trendy sunglasses items into a responsive grid */}
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12 w-full">
                 {trendySunglassesData.map((glass, index) => (
                    <div key={glass.id} className="flex flex-col items-center text-center group cursor-pointer w-full">
                       <div className="w-full aspect-[4/3] bg-[#eef0f1] flex items-center justify-center mb-6 overflow-hidden relative">
                          <img 
                            src={glass.image} 
                            alt={glass.name} 
                            className="w-[85%] object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" 
                            style={{ filter: `hue-rotate(${index * 35}deg) saturate(1.5)` }}
                            onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80' }}
                          />
                       </div>
                       <h3 className="font-bold text-[#33181D] mb-1 group-hover:underline decoration-2 underline-offset-4">{glass.name}</h3>
                       <span className="font-sans text-gray-500 text-sm">${glass.price}</span>
                    </div>
                 ))}
             </div>
         </div>
      </section>

      {/* MAKE IT YOURS COLLAGE */}
      <section className="w-full relative h-[400px] overflow-hidden flex items-center justify-center bg-black">
         <div className="absolute inset-0 grid grid-cols-4 grid-rows-2 opacity-50">
            {[...Array(8)].map((_, i) => (
               <img key={i} src={`https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&sig=${i}`} className="w-full h-full object-cover filter hue-rotate-[180deg] saturate-200" style={{ filter: `hue-rotate(${i*45}deg) saturate(1.5)` }} alt="Tinted sunglass" />
            ))}
         </div>
         <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-white text-5xl md:text-6xl font-black tracking-widest mb-8 drop-shadow-md">MAKE IT YOURS</h2>
            <button className="bg-white text-black font-sans text-xs uppercase font-bold px-10 py-4 hover:bg-gray-200 transition-colors">
               Our Customizing
            </button>
         </div>
      </section>

      {/* VALUE PROPS */}
      <section className="w-full bg-white px-8 lg:px-24 py-16 flex flex-col md:flex-row justify-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
          <div className="md:w-1/3 flex flex-col items-center text-center p-8">
             <Tag size={40} strokeWidth={1} className="text-[#33181D] mb-4" />
             <h3 className="font-bold text-[#33181D] mb-2 uppercase tracking-wide">Big discounts</h3>
             <p className="font-sans text-gray-500 text-xs leading-relaxed">Integer euismod sapien nunc sit amet commodo. Phasellus sint varius.</p>
          </div>
          <div className="md:w-1/3 flex flex-col items-center text-center p-8">
             <Truck size={40} strokeWidth={1} className="text-[#33181D] mb-4" />
             <h3 className="font-bold text-[#33181D] mb-2 uppercase tracking-wide">Free Shipping</h3>
             <p className="font-sans text-gray-500 text-xs leading-relaxed">Integer euismod sapien nunc sit amet commodo. Phasellus sint varius.</p>
          </div>
          <div className="md:w-1/3 flex flex-col items-center text-center p-8">
             <Lock size={40} strokeWidth={1} className="text-[#33181D] mb-4" />
             <h3 className="font-bold text-[#33181D] mb-2 uppercase tracking-wide">Secure payments</h3>
             <p className="font-sans text-gray-500 text-xs leading-relaxed">Integer euismod sapien nunc sit amet commodo. Phasellus sint varius.</p>
          </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full flex flex-col">
         {/* Newsletter */}
         <div className="bg-[#FBEFF2] w-full px-8 lg:px-24 py-16 flex flex-col md:flex-row justify-between items-center gap-8">
            <h2 className="text-2xl font-bold text-[#33181D] max-w-sm">Subscribe and keep up with the latest news!</h2>
            <div className="flex w-full max-w-md shadow-sm">
               <input type="email" placeholder="Enter your email" className="w-full flex-1 px-4 py-3 font-sans text-sm focus:outline-none" />
               <button className="bg-[#33181D] text-white font-sans text-xs uppercase font-bold px-8 hover:bg-black transition-colors tracking-widest">Subscribe</button>
            </div>
         </div>
         {/* Deep Footer */}
         <div className="bg-[#33181D] text-white px-8 lg:px-24 py-20 flex flex-col lg:flex-row justify-between gap-12 font-sans font-light">
            <div className="flex flex-col lg:w-1/4">
               <span className="font-serif font-black text-3xl tracking-tighter mb-6">Hongo.</span>
               <p className="text-white/60 text-sm leading-relaxed pr-8">
                  The latest fashion is fundamentally a way of looking radically different from earlier versions.
               </p>
               <div className="flex space-x-4 mt-8">
                  {/* Social Mock Icons */}
                  <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#33181D] transition-colors"><Lock size={12}/></span>
                  <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#33181D] transition-colors"><Search size={12}/></span>
                  <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#33181D] transition-colors"><User size={12}/></span>
               </div>
            </div>
            
            {/* Links Columns */}
            <div className="flex flex-wrap w-full lg:w-3/4 justify-between gap-8 text-sm text-white/70">
               <div className="flex flex-col space-y-3">
                  <h4 className="text-white font-bold uppercase tracking-wider mb-2">Shop</h4>
                  <span className="hover:text-white cursor-pointer transition-colors">All Sunglasses</span>
                  <span className="hover:text-white cursor-pointer transition-colors">Men's Polarized Sunglasses</span>
                  <span className="hover:text-white cursor-pointer transition-colors">Women's Polarized Sunglasses</span>
                  <span className="hover:text-white cursor-pointer transition-colors">Polarized Driving Sunglasses</span>
                  <span className="hover:text-white cursor-pointer transition-colors">Square UV Sunglasses</span>
               </div>
               <div className="flex flex-col space-y-3">
                  <h4 className="text-white font-bold uppercase tracking-wider mb-2">Hongo</h4>
                  <span className="hover:text-white cursor-pointer transition-colors">Contact Us</span>
                  <span className="hover:text-white cursor-pointer transition-colors">About Us</span>
                  <span className="hover:text-white cursor-pointer transition-colors">Careers</span>
                  <span className="hover:text-white cursor-pointer transition-colors">Find a Retailer</span>
                  <span className="hover:text-white cursor-pointer transition-colors">Corporate Gifts</span>
               </div>
               <div className="flex flex-col space-y-3">
                  <h4 className="text-white font-bold uppercase tracking-wider mb-2">Legal</h4>
                  <span className="hover:text-white cursor-pointer transition-colors">Terms of Use</span>
                  <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
                  <span className="hover:text-white cursor-pointer transition-colors">Cookie Policy</span>
                  <span className="hover:text-white cursor-pointer transition-colors">Accessibility</span>
                  <span className="hover:text-white cursor-pointer transition-colors">Sitemap</span>
               </div>
               <div className="flex flex-col space-y-3">
                  <h4 className="text-white font-bold uppercase tracking-wider mb-2">Contact Us</h4>
                  <span className="hover:text-white cursor-pointer transition-colors">+ 1 123 456 7890</span>
                  <span className="hover:text-white cursor-pointer transition-colors">info@hongo.com</span>
               </div>
            </div>
         </div>
      </footer>

    </div>
  );
}
