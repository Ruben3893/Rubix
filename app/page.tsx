"use client";

import React from 'react';
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-[#f8f7f6] dark:bg-[#0a0a0a] text-white font-sans selection:bg-rubix-gold selection:text-black">
      <Navbar />

      {/* Cinematic Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img alt="Luxury Suit Collection Cinematic Shot" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd75NOYyWMAelTc_pJ6gh2xtDGVpCRGPzYOBiI3dd1yeVNdfpSUz1X18vE_qWrTc4QTc8go_S6N0sRaqhcvUsLb296Lq8OPt8o1n-pvMeeY1Zcp6pWFDd9izOzCJ2KJp0KFsXlmvrz1TCJA7OoJvRZUEeR0TUbHfLjaBCM_Lwp-Jgn8glqCK12zCBim-dWU2AAQxvnPeIZRaq0MmfgYgVgb-xRFHZksz3KoyFiXDjub6OjvKQfEXAzcrOuMbTK1c6-izXjsaDwJniw" />
        </div>
        <div className="relative z-20 text-center px-4">
          <h2 className="text-[10px] uppercase tracking-widest mb-4 text-rubix-gold font-semibold">Autumn Winter 2024</h2>
          <h1 className="text-5xl md:text-8xl font-thin tracking-tighter mb-8 leading-none">
            A NEW DIMENSION <br /> <span className="font-black italic">OF STYLE</span>
          </h1>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="px-10 py-4 bg-rubix-gold text-black font-bold text-xs uppercase tracking-widest hover:bg-white transition-all rounded">
              Explore Collection
            </button>
            <button className="px-10 py-4 border border-white/30 backdrop-blur-sm text-white font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all rounded">
              Watch Film
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 left-10 flex-col gap-10 hidden md:flex">
          <div className="h-20 w-[1px] bg-gradient-to-b from-rubix-gold to-transparent"></div>
          <span className="rotate-90 origin-left text-[8px] uppercase tracking-widest text-white/40">Scroll to Explore</span>
        </div>
      </section>

      {/* 'The Cube' Modular Carousel */}
      <section className="py-24 bg-[#0a0a0a] border-y border-white/5 relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, rgba(212, 175, 53, 0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(212, 175, 53, 0.5) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h3 className="text-4xl font-light tracking-tighter text-white">THE <span className="font-bold text-rubix-gold">CUBE</span></h3>
              <p className="text-white/40 text-[10px] uppercase tracking-widest mt-2">Modular Aesthetics & Architectural Forms</p>
            </div>
            <div className="flex gap-2 text-white">
              <button className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-rubix-gold/10 transition-colors">
                ←
              </button>
              <button className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-rubix-gold/10 transition-colors">
                →
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
            <div className="group relative aspect-square overflow-hidden bg-[#161616] border border-white/5">
              <img alt="Leather Goods Category" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGhRjUsO4hJIfXdQynv49f202ZI8kNYYw5zu94MetPlLi2BFRHvQyIik2dLlA4okVsY548XSnOfQ5JO2FGbOoa0aZ66v6GseT0SIwGGk6PMcHROYg2oQkOgf7sMmf5db_D8OLIYcFdWaQpuHqW0Icr-mziu2XuHwih7j3u8N9jLGaXYRcjJ-yIjW5M32MqMiSBH2RxZX4MpUQWJAXqClrgCV9FAng7yZG4tL3NaHxqWf1fwgbzhbVjILFJopAVIT89SsofZ704vV8-" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8 text-white">
                <span className="text-[10px] text-rubix-gold tracking-widest mb-2">01</span>
                <h4 className="text-xl font-bold tracking-tight">LEATHER GOODS</h4>
                <a className="mt-4 text-[10px] font-bold tracking-widest underline underline-offset-8 opacity-0 group-hover:opacity-100 transition-opacity" href="#">SHOP NOW</a>
              </div>
            </div>

            <div className="group relative aspect-square overflow-hidden bg-[#161616] border border-white/5 md:translate-y-8">
              <img alt="Apparel Category" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDhvrXbm0jyNAmI3h9Xekai5R7EyicRSAyInvZE9dLlMntgNqlydDnITdMRk5fDNeUrU2GdaLfClGQKLbT-g3N_BzQtXimTgIqh3G68rM1icYaMHWiZQWoir-vtJ1HsGV6B0zCCC0Ul-7Yqpk2mm0jci0wCPDvZCbPtQtsU06Ac80bMFo6-AU0eau0dUh6cbVRp0Z5uo163l25rAu98Xji-IbI2rEwQzHKIxR815S_SIYxqwJ1UNjqL1i6Or_lw-R8Kl7mTevh5ZpS" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8 text-white">
                <span className="text-[10px] text-rubix-gold tracking-widest mb-2">02</span>
                <h4 className="text-xl font-bold tracking-tight">READY-TO-WEAR</h4>
                <a className="mt-4 text-[10px] font-bold tracking-widest underline underline-offset-8 opacity-0 group-hover:opacity-100 transition-opacity" href="#">SHOP NOW</a>
              </div>
            </div>

            <div className="group relative aspect-square overflow-hidden bg-[#161616] border border-white/5">
              <img alt="Footwear Category" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtyU04bmmM186-KIvqa02LySFWyU21zaBFbJD9KSqI4kBcMY5niB9VhSTfmd4dGFUp9tf7afm5xNcC734raaO9eeZuLnpfvBENiLcw-a2iip0XCZo99KCFRyJjzbtK8hTvWQL6Su7kFJO_HarKpv0-3n-LucD5hLKhZCbDyrDlGki-jrBN7V9oj0YLmUsSNLY8rqijI5Yxlao_HWkCzEE2ZX9IkEWcIk4r1rki-DB0VEnl6LAF9p9iLJSjmhslO_yn1er2cY7PTaZQ" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8 text-white">
                <span className="text-[10px] text-rubix-gold tracking-widest mb-2">03</span>
                <h4 className="text-xl font-bold tracking-tight">FOOTWEAR</h4>
                <a className="mt-4 text-[10px] font-bold tracking-widest underline underline-offset-8 opacity-0 group-hover:opacity-100 transition-opacity" href="#">SHOP NOW</a>
              </div>
            </div>

            <div className="group relative aspect-square overflow-hidden bg-[#161616] border border-white/5 md:translate-y-8">
              <img alt="Accessories Category" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJPfVn1V1gaABxTXxv-7iAvjGeuL1IBjeMh_Nue1oxuqxaaUTB83aOh76tzfcGiHpTncn0kR8_5Y-kIf5RREE2JDLPZhaLA_pdtMAHquX0IASKFpYMLUgdmTRpMMC5mMpxLshPEe6akEiDHUUKArkffIS69a4RiEnaSj0E8FQAsw-sDXjaym8wJWMOYYGEbKhp_csYfmk5bjJvywneyu0WDMf-pXSuuPNwV8D_5_UAQlFkiaZf6c2x-cZLrS5SVQatAhftQ-aXpMP2" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8 text-white">
                <span className="text-[10px] text-rubix-gold tracking-widest mb-2">04</span>
                <h4 className="text-xl font-bold tracking-tight">ACCESSORIES</h4>
                <a className="mt-4 text-[10px] font-bold tracking-widest underline underline-offset-8 opacity-0 group-hover:opacity-100 transition-opacity" href="#">SHOP NOW</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Drop Feature */}
      <section className="relative py-32 overflow-hidden bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center text-white">
          <div className="relative group">
            <div className="absolute -top-10 -left-10 w-40 h-40 border-l border-t border-rubix-gold/30 z-0"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border-r border-b border-rubix-gold/30 z-0"></div>
            <div className="relative z-10 aspect-[4/5] bg-[#161616] overflow-hidden">
              <img alt="Exordium Chronograph" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDffsmj4_OIJ0_aQDFWmn38NjKDQ1lVpirgS1qY_x1-8-SdFy5vlXxViKnvaRSM9ScF1Y9yn9XGsYe7OSDaCMxX1DZmpQGcTJsNzwd1zc372yYPK_ofvFpfclplL9BbN9Es6mCFU3qFW7_80Pyy4klmc5UzkdZlSEbpt6u0rqnViPOCPrmywHFcrMk4OEuvg9B82V11W_ipi34sD5RBB4DVqZhAXKZqtSQPh22ZoMDAaT4y99ZsyMXGwv9pP1oYzZ2cclKoV3PL6vhh" />
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <span className="inline-block px-3 py-1 bg-rubix-gold text-black text-[10px] font-black uppercase tracking-widest mb-6">Daily Drop #42</span>
              <h2 className="text-5xl md:text-6xl font-light tracking-tighter leading-tight text-white">
                EXORDIUM <br /> <span className="font-black italic text-rubix-gold">CHRONOGRAPH</span>
              </h2>
            </div>
            <p className="text-white/60 text-lg font-light leading-relaxed max-w-md">
              A masterclass in horological minimalism. Precision movement encased in a seamless architectural block of surgical steel. Limited to 50 numbered pieces.
            </p>
            <div className="flex gap-8 items-center border-y border-white/10 py-8">
              <div className="text-center">
                <span className="block text-3xl font-mono font-bold tracking-tighter">04</span>
                <span className="text-[8px] uppercase tracking-widest text-white/40">Hours</span>
              </div>
              <span className="text-2xl text-rubix-gold font-mono">:</span>
              <div className="text-center">
                <span className="block text-3xl font-mono font-bold tracking-tighter">28</span>
                <span className="text-[8px] uppercase tracking-widest text-white/40">Mins</span>
              </div>
              <span className="text-2xl text-rubix-gold font-mono">:</span>
              <div className="text-center">
                <span className="block text-3xl font-mono font-bold tracking-tighter">14</span>
                <span className="text-[8px] uppercase tracking-widest text-white/40">Secs</span>
              </div>
            </div>
            <div className="pt-4">
              <button className="w-full md:w-auto px-12 py-5 bg-rubix-gold text-black font-bold text-xs uppercase tracking-widest hover:shadow-[0_0_30px_rgba(212,175,53,0.3)] transition-all rounded">
                Register Interest
              </button>
              <p className="text-[10px] text-white/30 uppercase tracking-widest mt-4 flex items-center gap-2">
                <span className="w-1 h-1 bg-rubix-gold rounded-full animate-pulse"></span>
                1,402 people currently viewing
              </p>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-20 -right-20 opacity-[0.02] text-[20vw] font-black italic select-none pointer-events-none text-white">
          CHRONO
        </div>
      </section>

      {/* Aesthetic Grid Section / Editorial */}
      <section className="py-24 border-t border-white/5 bg-[#0a0a0a] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <div className="h-1 w-12 bg-rubix-gold"></div>
              <h3 className="text-xl font-bold tracking-tight uppercase">Sartorial Precision</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Each garment in the Rubix collection is drafted using algorithmic proportions to ensure a silhouette that defies traditional constraints.
              </p>
            </div>
            <div className="space-y-6">
              <div className="h-1 w-12 bg-white/20"></div>
              <h3 className="text-xl font-bold tracking-tight uppercase">Sustainable Luxury</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                We prioritize ethically sourced materials and zero-waste production methods, ensuring the future of fashion is as clean as our aesthetic.
              </p>
            </div>
            <div className="space-y-6">
              <div className="h-1 w-12 bg-white/20"></div>
              <h3 className="text-xl font-bold tracking-tight uppercase">Global Presence</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                From London to Tokyo, Rubix architectural showrooms offer a physical manifestation of our digital dimension.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-[#161616] border-t border-white/5 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-thin tracking-widest mb-8 uppercase">Join the <span className="font-bold">Inner Circle</span></h2>
          <div className="relative">
            <input className="w-full bg-transparent border-b-2 border-white/10 py-4 px-2 text-center text-lg focus:outline-none focus:border-rubix-gold transition-colors tracking-widest uppercase font-light" placeholder="ENTER YOUR EMAIL" type="email" />
            <button className="mt-8 text-[10px] font-black text-rubix-gold tracking-[0.3em] uppercase hover:text-white transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-[8px] text-white/30 uppercase tracking-widest mt-12">
            By subscribing, you agree to our privacy policy and terms of service.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] py-20 border-t border-white/5 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-2">
              <div className="flex items-center mb-8">
                <div className="w-8 h-8 border border-rubix-gold flex items-center justify-center mr-3">
                  <span className="text-sm font-extrabold italic">R</span>
                </div>
                <span className="text-lg font-black tracking-[0.4em]">RUBIX</span>
              </div>
              <p className="text-white/40 text-xs leading-loose max-w-sm">
                High-end contemporary men's fashion. Architecturally designed in Paris, manufactured with precision globally.
              </p>
            </div>
            <div>
              <h4 className="text-[10px] font-black tracking-widest uppercase mb-8">Navigation</h4>
              <ul className="space-y-4 text-xs text-white/60">
                <li><a className="hover:text-rubix-gold transition-colors" href="#">Shop All</a></li>
                <li><a className="hover:text-rubix-gold transition-colors" href="#">Collections</a></li>
                <li><a className="hover:text-rubix-gold transition-colors" href="#">Lookbook</a></li>
                <li><a className="hover:text-rubix-gold transition-colors" href="#">Journal</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-black tracking-widest uppercase mb-8">Service</h4>
              <ul className="space-y-4 text-xs text-white/60">
                <li><a className="hover:text-rubix-gold transition-colors" href="#">Contact</a></li>
                <li><a className="hover:text-rubix-gold transition-colors" href="#">Shipping</a></li>
                <li><a className="hover:text-rubix-gold transition-colors" href="#">Returns</a></li>
                <li><a className="hover:text-rubix-gold transition-colors" href="#">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
            <div className="flex gap-8 text-white/30">
              <a className="hover:text-rubix-gold transition-colors" href="#">Fb</a>
              <a className="hover:text-rubix-gold transition-colors" href="#">Ig</a>
              <a className="hover:text-rubix-gold transition-colors" href="#">X</a>
            </div>
            <p className="text-[10px] text-white/30 uppercase tracking-widest">
              © 2024 RUBIX S.A. ALL RIGHTS RESERVED.
            </p>
            <div className="flex items-center gap-2 text-[10px] text-white/30 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-green-500/50"></span>
              Systems Operational
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
