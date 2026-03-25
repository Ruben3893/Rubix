"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Heart, ShoppingBag, User } from 'lucide-react';

const heroImages = [
  "https://images.unsplash.com/photo-1618886614638-80e3c103d31a?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1593030761757-71fae45fa0e5?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=2000&q=80",
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);
  return (
    <main className="min-h-screen bg-[#F6F5F2] text-[#1A1A1A] font-sans selection:bg-black selection:text-white">
      
      {/* Top Banner */}
      <div className="w-full bg-[#E5E0D8] text-xs py-2 px-6 flex justify-between items-center font-medium">
        <div className="flex-1"></div>
        <div className="text-center tracking-wider flex-1">
          FREE SHIPPING ON ORDERS $70+ <a href="#" className="underline ml-2">SEE DETAILS</a>
        </div>
        <div className="flex gap-4 justify-end flex-1 tracking-wider text-[10px] uppercase">
          <Link href="#">Find a Store</Link>
          <Link href="#">Help</Link>
          <Link href="#">Log in</Link>
          <Link href="#">Sign up</Link>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="w-full px-8 py-6 flex items-center justify-between sticky top-0 bg-[#F6F5F2]/90 backdrop-blur-md z-50">
        <div className="flex gap-8 text-xs font-semibold tracking-widest uppercase items-center flex-1">
          <Link href="/shop" className="hover:text-gray-500 transition-colors">NEW ARRIVALS</Link>
          <Link href="/sale" className="text-red-700 hover:text-red-900 transition-colors">SALE</Link>
        </div>
        
        <div className="flex-1 text-center">
          <Link href="/" className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight flex-1" style={{ letterSpacing: '-0.02em' }}>
            Rubix
          </Link>
        </div>

        <div className="flex gap-6 items-center flex-1 justify-end">
          <div className="relative hidden lg:block w-48">
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full bg-white border border-gray-300 rounded-full py-2 pl-4 pr-10 text-xs focus:outline-none focus:border-black"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          </div>
          <button className="hover:opacity-70 transition-opacity"><Heart className="w-5 h-5" strokeWidth={1.5} /></button>
          <Link href="/profile" className="hover:opacity-70 transition-opacity"><User className="w-5 h-5" strokeWidth={1.5} /></Link>
          <button className="hover:opacity-70 transition-opacity"><ShoppingBag className="w-5 h-5" strokeWidth={1.5} /></button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 pb-12">
        <div className="relative w-full h-[70vh] lg:h-[85vh] bg-[#2A2A2A] overflow-hidden flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.img 
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 0.8, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              src={heroImages[currentImageIndex]} 
              alt="Stylish Men's Collection" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/20" />
          
          <div className="relative z-10 w-full h-full flex flex-col justify-between items-center pb-12 pt-16">
            <h1 className="font-serif text-[10vw] font-black tracking-tighter text-[#F6F5F2]/90 leading-none">
              Fashionable
            </h1>
            
            <div className="flex flex-col items-center gap-6 mt-auto">
              <span className="text-white text-lg lg:text-xl font-medium tracking-wide drop-shadow-lg">
                Men's fall Winter 2024
              </span>
              <Link 
                href="/shop" 
                className="bg-white text-black px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors flex items-center gap-2"
              >
                EXPLORE THE COLLECTION <span className="text-[10px]">&gt;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Our Collection */}
      <section className="px-6 py-16 max-w-[1600px] mx-auto">
        <h2 className="text-4xl font-serif font-black mb-12 text-center text-[#1A1A1A]">
          Explore Our Collection
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Watches */}
          <div className="group relative aspect-[3/4] overflow-hidden bg-gray-200">
            <img 
              src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80" 
              alt="Watches" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white font-serif text-2xl font-bold mb-1">Watches</h3>
              <p className="text-white/80 text-xs tracking-wide mb-6">Explore timeless styles crafted for perfection.</p>
              <Link href="/watches" className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
                SHOP NOW <span>&gt;</span>
              </Link>
            </div>
          </div>

          {/* Shoes */}
          <div className="group relative aspect-[3/4] overflow-hidden bg-gray-200">
            <img 
              src="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80" 
              alt="Shoes" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white font-serif text-2xl font-bold mb-1">Shoes</h3>
              <p className="text-white/80 text-xs tracking-wide mb-6">Empowering style for modern, elegant walks.</p>
              <Link href="/shoes" className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
                SHOP NOW <span>&gt;</span>
              </Link>
            </div>
          </div>

          {/* Accessories */}
          <div className="group relative aspect-[3/4] overflow-hidden bg-gray-200">
            <img 
              src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&q=80" 
              alt="Accessories" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white font-serif text-2xl font-bold mb-1">Accessories</h3>
              <p className="text-white/80 text-xs tracking-wide mb-6">Discover playful, trendy add-ons for elite ones.</p>
              <Link href="/accessories" className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
                SHOP NOW <span>&gt;</span>
              </Link>
            </div>
          </div>

          {/* Clothes */}
          <div className="group relative aspect-[3/4] overflow-hidden bg-gray-200">
            <img 
              src="https://images.unsplash.com/photo-1620012253295-c15bc3e65909?auto=format&fit=crop&q=80" 
              alt="Clothes" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white font-serif text-2xl font-bold mb-1">Clothes</h3>
              <p className="text-white/80 text-xs tracking-wide mb-6">Elevate your wardrobe with premium apparel.</p>
              <Link href="/clothing" className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
                SHOP NOW <span>&gt;</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Two Banners Section */}
      <section className="px-6 py-12 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative aspect-[16/9] md:aspect-auto md:h-[500px] bg-gray-200 overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1558769132-cb1fac08b46a?auto=format&fit=crop&w=1200&q=80" 
              alt="AI Wardrobe" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute bottom-8 left-8">
              <h3 className="text-white font-serif text-3xl font-bold mb-2">AI Wardrobe</h3>
              <p className="text-white/90 text-sm tracking-wide mb-6">Shop our Tees, Sweatshirts & More.</p>
              <Link href="/shop" className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
                SHOP NOW <span>&gt;</span>
              </Link>
            </div>
          </div>
          <div className="relative aspect-[16/9] md:aspect-auto md:h-[500px] bg-gray-200 overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80" 
              alt="Choose Yourself" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute bottom-8 left-8">
              <h3 className="text-white font-serif text-3xl font-bold mb-2">AI Fit Check</h3>
              <p className="text-white/90 text-sm tracking-wide mb-6">Discounts Reaching 50% Available!</p>
              <Link href="/sale" className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
                SHOP NOW <span>&gt;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Classics */}
      <section className="px-6 py-20 bg-white max-w-[1600px] mx-auto my-12">
        <h2 className="text-4xl font-serif font-black mb-16 text-center text-[#1A1A1A]">
          Shop by Classics
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <div className="aspect-[4/5] bg-gray-100 mb-6 overflow-hidden group relative">
              <img 
                src="https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&q=80" 
                alt="Elliot Featherlight Polo"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex justify-between items-center px-2">
              <h4 className="font-bold text-sm">Elliot Featherlight Polo</h4>
              <span className="font-bold text-sm">$279.00</span>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="aspect-[4/5] bg-gray-100 mb-6 overflow-hidden group relative">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80" 
                alt="Martine Featherlight"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex justify-between items-center px-2">
              <h4 className="font-bold text-sm">Martine Featherlight</h4>
              <span className="font-bold text-sm">$189.00</span>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="aspect-[4/5] bg-gray-100 mb-6 overflow-hidden group relative">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80" 
                alt="Shane Cashmere"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex justify-between items-center px-2">
              <h4 className="font-bold text-sm">Shane Cashmere</h4>
              <span className="font-bold text-sm">$245.00</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable luxury banner */}
      <section className="px-6 pb-20 max-w-[1600px] mx-auto">
        <div className="relative w-full h-[500px] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1516826957135-700ed81f27ed?auto=format&fit=crop&w=2000&q=80" 
            alt="Sustainable luxury" 
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <h2 className="text-white font-serif text-5xl md:text-6xl font-black mb-4 tracking-tight">
              Sustainable luxury for all
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl text-sm md:text-base tracking-wide">
              Here's how we bring you high-quality products with minimal environmental impact.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
              OUR MISSION <span>&gt;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-16 px-8 text-sm">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="font-serif text-2xl font-black mb-6">RubixFable</h3>
            <p className="text-gray-400">Defining the future of elegant, sustainable fashion.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-widest text-xs py-1">Shop</h4>
            <div className="flex flex-col gap-3 text-gray-400">
              <Link href="#" className="hover:text-white transition-colors">Men</Link>
              <Link href="#" className="hover:text-white transition-colors">Women</Link>
              <Link href="#" className="hover:text-white transition-colors">Accessories</Link>
              <Link href="#" className="hover:text-white transition-colors">Sale</Link>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-widest text-xs py-1">Help</h4>
            <div className="flex flex-col gap-3 text-gray-400">
              <Link href="#" className="hover:text-white transition-colors">Customer Service</Link>
              <Link href="#" className="hover:text-white transition-colors">Returns & Exchanges</Link>
              <Link href="#" className="hover:text-white transition-colors">Shipping Info</Link>
              <Link href="#" className="hover:text-white transition-colors">Track Order</Link>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-widest text-xs py-1">About Us</h4>
            <div className="flex flex-col gap-3 text-gray-400">
              <Link href="#" className="hover:text-white transition-colors">Our Story</Link>
              <Link href="#" className="hover:text-white transition-colors">Careers</Link>
              <Link href="#" className="hover:text-white transition-colors">Sustainability</Link>
              <Link href="#" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
