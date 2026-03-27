import React from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { watchesData } from '../data/watchesData';

export default function WatchesTab() {
  // Use the newly added tech/minimal watches for the feature grid
  const featureWatches = watchesData.slice(24, 27); // 3 watches (UA-05, UA-06, UA-07)

  return (
    <div className="w-full font-mono bg-[#F9F9F9] text-[#111] border-t border-gray-200">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full pt-16 md:pt-24 lg:pt-32 pb-48 lg:pb-[350px] overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
            
            <h1 className="text-4xl md:text-5xl lg:text-[5.5rem] font-sans font-normal text-center leading-[1.1] tracking-tight uppercase mb-16">
              MEET THE UA-01: A NEW<br/>ERA IN INNOVATION
            </h1>
            
            <div className="flex flex-col md:flex-row items-center gap-6 max-w-lg mb-12">
               <div className="w-12 h-12 rounded-full bg-[#D84B3A] text-white flex items-center justify-center shrink-0">
                  <span className="font-sans font-light text-xl">V</span>
               </div>
               <p className="text-[10px] md:text-xs leading-relaxed uppercase tracking-widest text-gray-500 font-sans font-bold text-center md:text-left">
                 Our inspiration flows from the realms of engineering, motorsport, and the icons of contemporary design.
               </p>
            </div>
            
        </div>
        
        {/* Massive full width watch crop */}
        <div className="absolute bottom-0 left-0 w-full h-[60%] lg:h-[75%] z-0 flex items-end justify-center pointer-events-none">
           <img 
              src="https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80" 
              className="w-full lg:w-[120%] h-full object-cover object-top mix-blend-multiply opacity-90 contrast-125"
              alt="Watch bezel texture"
           />
        </div>
      </section>

      {/* 2. ASYMMETRIC DETAILS SECTION */}
      <section className="w-full bg-[#F3F3F3]">
         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row border-b border-gray-300">
            {/* Left Column */}
            <div className="lg:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-gray-300 bg-white">
               <div>
                 <div className="flex items-center gap-2 mb-4">
                    <span className="w-1.5 h-1.5 bg-[#D84B3A]"></span>
                    <span className="text-[9px] uppercase tracking-widest font-bold">Crafted for everyday explorers.</span>
                 </div>
                 <h2 className="text-xl md:text-2xl font-sans font-medium uppercase leading-relaxed mb-8 max-w-sm">
                   Expertly crafted for those who explore the world every day with precision and style in mind.
                 </h2>
                 <Link 
                    href="/watches"
                    className="bg-[#D84B3A] text-white text-[10px] uppercase tracking-widest px-8 py-3 w-fit flex items-center gap-4 hover:bg-black transition-colors inline-flex"
                 >
                    See Details
                    <ChevronRight size={14} />
                 </Link>
               </div>
               
               <div className="mt-20 lg:mt-32 aspect-square relative bg-gray-100 overflow-hidden group cursor-pointer">
                  <img src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&q=80" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" alt="Watch Gears" />
               </div>
            </div>

            {/* Right Column */}
            <div className="lg:w-1/2 p-8 md:p-16 flex flex-col overflow-hidden relative group">
               <h3 className="text-right text-[11px] font-bold tracking-[0.2em] mb-12 uppercase text-gray-500 z-10">Swiss Precision Engineering</h3>
               <div className="flex-1 min-h-[500px] flex items-center justify-center relative">
                   {/* Transparent/White Watch Concept */}
                   <img src="https://images.unsplash.com/photo-1623998021446-45cd9b269056?auto=format&fit=crop&q=80" className="absolute w-[130%] h-[130%] object-cover opacity-30 mix-blend-luminosity brightness-150 contrast-125 group-hover:scale-105 transition-transform duration-1000" alt="Transparent Watch" />
               </div>
            </div>
         </div>
      </section>

      {/* 3. PRODUCT GRID */}
      <section id="ua-series" className="w-full bg-white py-16 md:py-24 border-b border-gray-200">
         <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex items-center gap-2 mb-12">
               <span className="w-1 h-1 bg-black"></span>
               <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Introducing UA-0X Series</span>
               <div className="ml-auto flex shrink-0">
                  <Link 
                     href="/watches"
                     className="bg-[#D84B3A] text-white text-[9px] uppercase tracking-widest px-6 py-2 flex items-center gap-2 hover:bg-black transition-colors"
                  >
                     See Details <ChevronRight size={12} />
                  </Link>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8 border-t border-gray-200 pt-8">
               {featureWatches.map((item, i) => (
                  <div key={item.id} className="flex flex-col group cursor-pointer border-r border-transparent md:border-gray-200 last:border-0 pr-0 md:pr-4 lg:pr-8">
                     <div className="bg-[#F8F9F9] aspect-square flex items-center justify-center p-8 mb-6 relative overflow-hidden">
                        <img src={item.image} className="w-[70%] h-[70%] object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-700" alt={item.name} />
                     </div>
                     <div className="flex justify-between items-center mb-4 border-b border-gray-200 pb-2">
                         <span className="text-xs font-bold uppercase">{item.name}</span>
                         <button className="text-[8px] bg-gray-200 text-gray-700 px-3 py-1 font-bold tracking-widest uppercase group-hover:bg-black group-hover:text-white transition-colors flex items-center gap-1">
                            Book Now <ChevronRight size={10} />
                         </button>
                     </div>
                     <div className="flex flex-col gap-1 text-[8px] uppercase tracking-widest text-gray-500 font-bold">
                         <p>Type : {item.specs?.movement}</p>
                         <p className="text-black">Swiss Precision Redefined</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 4. DEVELOPMENT PROCESS */}
      <section className="w-full bg-[#fcfcfc] py-16 md:py-24">
         <div className="max-w-7xl mx-auto px-6 md:px-12">
            <h3 className="text-xl md:text-2xl font-sans font-medium uppercase tracking-tight mb-16">Development Process</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {/* Step 1 */}
               <div className="flex flex-col cursor-pointer group">
                  <div className="bg-[#EEEEEE] aspect-[4/3] flex items-center justify-center p-8 mb-6 overflow-hidden">
                     <img src="https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&q=80" className="w-full h-full object-cover mix-blend-multiply opacity-60 grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700" alt="Sketch" />
                  </div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest mb-3">Made for Explorer</h4>
                  <p className="text-[9px] text-gray-500 leading-relaxed uppercase tracking-widest font-bold pr-4">Rubix combines art and engineering, merging aesthetics with functionality.</p>
               </div>
               {/* Step 2 */}
               <div className="flex flex-col cursor-pointer group">
                  <div className="bg-[#EEEEEE] aspect-[4/3] flex items-center justify-center p-8 mb-6 overflow-hidden">
                     <img src="https://images.unsplash.com/photo-1548689816-c399f954f3dd?auto=format&fit=crop&q=80" className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-all duration-700" alt="Movement" />
                  </div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest mb-3">Built for Explorers</h4>
                  <p className="text-[9px] text-gray-500 leading-relaxed uppercase tracking-widest font-bold pr-4">Creating precise, innovative timepieces that celebrate life's moments.</p>
               </div>
               {/* Step 3 */}
               <div className="flex flex-col cursor-pointer group">
                  <div className="bg-[#EEEEEE] aspect-[4/3] flex items-center justify-center p-8 mb-6 overflow-hidden">
                     <img src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80" className="w-full h-full object-cover mix-blend-multiply opacity-80 filter contrast-125 group-hover:scale-105 transition-all duration-700" alt="Case" />
                  </div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest mb-3">Crafted for Comfort</h4>
                  <p className="text-[9px] text-gray-500 leading-relaxed uppercase tracking-widest font-bold pr-4">Comfort guides case size, curves, and wrist pressure design.</p>
               </div>
            </div>
         </div>
      </section>

      {/* 5. BLACK FOOTER BLOCK */}
      <footer className="w-full bg-[#050505] text-white py-16 md:py-24">
         <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center">
            
            <div className="mb-12 md:mb-0">
               <h2 className="text-3xl font-sans font-bold tracking-tighter">RUBIX</h2>
            </div>
            
            <div className="flex flex-col text-center md:text-left font-sans text-3xl md:text-4xl lg:text-5xl uppercase leading-[1.1] text-gray-400 font-light">
               <a href="#" className="hover:text-white transition-colors">Product</a>
               <a href="#" className="hover:text-white transition-colors">About</a>
               <a href="#" className="hover:text-white transition-colors">Process</a>
               <a href="#" className="hover:text-white transition-colors">Contacts</a>
            </div>

            <div className="flex flex-col gap-2 mt-12 md:mt-0 items-end">
               {['Newsletter', 'TikTok', 'Behance', 'LinkedIn', 'Instagram', 'Email'].map((link) => (
                  <a key={link} href="#" className="text-[8px] uppercase tracking-widest border border-white/20 px-4 py-1.5 rounded-full hover:bg-white hover:text-black transition-colors min-w-[100px] text-center">
                     {link}
                  </a>
               ))}
            </div>

         </div>
      </footer>

    </div>
  );
}
