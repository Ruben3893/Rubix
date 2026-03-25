import React from 'react';
import { ArrowRight, ChevronRight, ChevronLeft, Heart, ShoppingCart } from 'lucide-react';
import { shoeData } from '../data/shoeData';

export default function ShoesTab() {
  const newArrivals = shoeData.slice(0, 4);
  const products = shoeData;

  return (
    <div className="w-full font-sans bg-white text-gray-900 border-t border-gray-100">
      
      {/* 1. HERO SECTION */}
      <section className="w-full px-4 md:px-8 pt-4 pb-8">
        <div className="max-w-[1600px] mx-auto bg-gradient-to-r from-gray-200 to-gray-300 rounded-[2rem] overflow-hidden relative flex flex-col pt-16 md:pt-24 min-h-[500px] lg:min-h-[600px]">
           
           <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end pointer-events-none pb-4 lg:pb-0 z-0 opacity-20">
              <h1 className="text-[12vw] font-bold tracking-tighter text-white leading-[0.85] text-center w-full select-none">
                NEW COLLECTION
              </h1>
           </div>

           <div className="relative z-10 flex flex-col lg:flex-row w-full h-full px-8 md:px-16 lg:px-24">
              <div className="w-full lg:w-[45%] flex flex-col justify-center pb-24 lg:pb-40">
                 <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-[1.1] mb-6 text-[#1E4E4F]">
                    Bold Style.<br/>Steady Stride.
                 </h2>
                 <p className="text-sm md:text-base font-medium text-gray-600 mb-8 max-w-md leading-relaxed">
                    Make an impact. Step out in confidence and comfort. Versatile footwear featuring innovative design, crafted for modern looks wherever life takes you.
                 </p>
                 <div className="flex gap-4 items-center">
                    <button className="bg-[#3EE6E6] text-white px-8 py-3 rounded-full text-sm font-bold shadow-lg hover:shadow-xl hover:bg-[#2DD5D5] transition-all">
                       Buy Now
                    </button>
                    <button className="bg-transparent border-2 border-white text-gray-700 bg-white/50 backdrop-blur-sm px-8 py-3 rounded-full text-sm font-bold hover:bg-white transition-all">
                       View Detail
                    </button>
                 </div>
              </div>

              <div className="hidden lg:flex flex-1 relative items-center justify-center">
                 <img 
                    src={shoeData[0].image} 
                    className="w-[120%] h-[120%] object-contain scale-[1.3] translate-x-12 -translate-y-8 drop-shadow-2xl mix-blend-multiply filter contrast-125" 
                    alt="Hero Shoe" 
                 />
              </div>
           </div>

           {/* Features Bar */}
           <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[95%] lg:w-[85%] bg-white/90 backdrop-blur-md rounded-full py-4 px-8 flex flex-wrap lg:flex-nowrap items-center justify-between gap-4 z-20 shadow-md">
              {[
                 { title: "Performance First", sub: "Built for speed and endurance" },
                 { title: "Premium Materials", sub: "Quality craftsmanship that lasts" },
                 { title: "Fits Any Lifestyle", sub: "Optimized design capabilities" },
                 { title: "Fast Shipping", sub: "Hassle-free delivery worldwide" }
              ].map((feat, i) => (
                 <div key={i} className="flex items-center gap-3 w-[45%] lg:w-auto">
                    <div className="w-8 h-8 rounded-full bg-[#E6FAFA] flex items-center justify-center text-[#3EE6E6] shrink-0">
                       <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <div className="flex flex-col">
                       <span className="text-xs font-bold whitespace-nowrap">{feat.title}</span>
                       <span className="text-[9px] text-gray-500 whitespace-nowrap">{feat.sub}</span>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* 2. NEW ARRIVAL */}
      <section className="w-full bg-[#E6FAFA] py-16 px-4 md:px-8">
         <div className="max-w-[1600px] mx-auto">
            <div className="flex justify-between items-center mb-8">
               <h2 className="text-3xl md:text-4xl font-black text-[#1E4E4F] tracking-tight">New Arrival</h2>
               <div className="flex gap-2">
                  <button className="w-8 h-8 rounded-full bg-white text-[#3EE6E6] flex items-center justify-center hover:bg-[#3EE6E6] hover:text-white transition-colors border border-[#3EE6E6]/20">
                     <ChevronLeft size={16} />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-[#3EE6E6] text-white flex items-center justify-center hover:bg-[#2DD5D5] transition-colors shadow-sm">
                     <ChevronRight size={16} />
                  </button>
               </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
               {newArrivals.map((shoe) => (
                  <div key={shoe.id} className="bg-white rounded-[2rem] p-6 shadow-sm group cursor-pointer relative flex flex-col">
                     <span className="absolute top-6 left-6 bg-[#3EE6E6] text-white text-[8px] font-black uppercase px-2 py-0.5 rounded-sm z-10 tracking-wider">New</span>
                     <div className="w-full aspect-[4/3] flex items-center justify-center mb-4 relative overflow-hidden bg-gray-50 rounded-2xl">
                        <img 
                           src={shoe.image} 
                           className="w-[85%] h-[85%] object-cover mix-blend-multiply group-hover:-translate-y-2 group-hover:scale-105 transition-all duration-500" 
                           alt={shoe.name} 
                           onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80' }}
                        />
                     </div>
                     <div className="flex justify-between items-end mt-auto">
                        <div className="flex flex-col">
                           <h3 className="font-bold text-sm text-[#1E4E4F] max-w-[140px] truncate">{shoe.name}</h3>
                           <p className="text-[10px] text-gray-400 font-medium">Rp{parseFloat(shoe.price.toString()).toLocaleString()}</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-[#E6FAFA] text-[#3EE6E6] flex items-center justify-center group-hover:bg-[#3EE6E6] group-hover:text-white transition-colors shrink-0">
                           <ShoppingCart size={14} fill="currentColor" />
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 3. BENTO POSTERS */}
      <section className="max-w-[1600px] mx-auto px-4 md:px-8 py-16 flex flex-col gap-6">
         <div className="flex flex-col md:flex-row gap-6">
            {/* Banner 1 */}
            <div className="w-full md:w-[60%] bg-[#214D4C] rounded-3xl p-8 md:p-12 text-white relative flex flex-col justify-center overflow-hidden min-h-[250px] group">
               <span className="text-[9px] uppercase tracking-[0.2em] font-medium bg-white/10 w-fit px-3 py-1 rounded-full mb-4">Innovation</span>
               <h3 className="text-3xl font-black tracking-tight mb-2">Performance Meets Comfort</h3>
               <p className="text-xs text-white/70 max-w-xs mb-8">Excellence in footwear ensures unrestricted speed and balance.</p>
               <button className="bg-[#3EE6E6] text-[#214D4C] text-[10px] font-black py-2.5 px-6 rounded-full w-fit hover:scale-105 transition-transform z-10">Shop Now</button>
               <img src={shoeData[5].image} className="absolute right-[-10%] sm:right-0 bottom-[-20%] w-[60%] sm:w-[50%] lg:w-[45%] opacity-90 group-hover:scale-110 transition-transform duration-700 mix-blend-screen" alt="Shoe Poster" />
            </div>
            {/* Banner 2 */}
            <div className="w-full md:w-[40%] bg-[#E6FAFA] rounded-3xl p-8 md:p-12 relative flex flex-col justify-center overflow-hidden min-h-[250px]">
               <span className="text-[9px] uppercase tracking-[0.2em] font-medium bg-[#1E4E4F]/10 text-[#1E4E4F] w-fit px-3 py-1 rounded-full mb-4">Accessories</span>
               <h3 className="text-3xl font-black tracking-tight mb-4 text-[#1E4E4F]">Finish Strong with Style</h3>
               <button className="bg-[#3EE6E6] text-white text-[10px] font-black py-2.5 px-6 rounded-full w-fit hover:scale-105 transition-transform z-10 shadow-sm">View More</button>
            </div>
         </div>
         
         <div className="flex flex-col md:flex-row gap-6">
            {/* Banner 3 */}
            <div className="w-full md:w-[40%] bg-[#E6FAFA] rounded-3xl p-8 md:p-12 relative flex flex-col justify-center min-h-[250px]">
               <h3 className="text-3xl font-black tracking-tight mb-4 text-[#1E4E4F]">Train Like a Pro</h3>
               <p className="text-xs text-[#1E4E4F]/60 max-w-xs mb-8">Find everything you need to build the ultimate athletic experience.</p>
               <button className="bg-[#3EE6E6] text-white text-[10px] font-black py-2.5 px-6 rounded-full w-fit hover:scale-105 transition-transform shadow-sm">Shop Now</button>
            </div>
            {/* Banner 4 */}
            <div className="w-full md:w-[60%] bg-[#1A3837] rounded-3xl p-8 md:p-12 text-white relative flex flex-col justify-center overflow-hidden min-h-[250px] group cursor-pointer">
               <span className="text-[9px] uppercase tracking-[0.2em] font-medium bg-white/10 w-fit px-3 py-1 rounded-full mb-4">Apparel</span>
               <h3 className="text-3xl font-black tracking-tight mb-2">Move Freely. Train Hard</h3>
               <p className="text-xs text-white/70 max-w-xs mb-8">Elevating comfort allowing focus exclusively on the journey ahead.</p>
               <button className="bg-[#3EE6E6] text-[#1A3837] text-[10px] font-black py-2.5 px-6 rounded-full w-fit hover:scale-105 transition-transform z-10">View More</button>
            </div>
         </div>
      </section>

      {/* 4. OUR PRODUCT GRID */}
      <section className="max-w-[1600px] mx-auto px-4 md:px-8 py-8">
         <div className="flex justify-between items-end border-b border-gray-200 pb-4 mb-8">
            <h2 className="text-3xl md:text-4xl font-black text-[#1E4E4F] tracking-tight">Our Product</h2>
            <div className="flex gap-6 text-[11px] font-bold">
               <span className="text-[#3EE6E6] border-b-2 border-[#3EE6E6] pb-4 -mb-[18px] cursor-pointer">For You</span>
               <span className="text-gray-400 hover:text-[#1E4E4F] transition-colors pb-4 -mb-[18px] cursor-pointer">B.S Sale Festival</span>
            </div>
         </div>

         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map((item) => (
               <div key={item.id} className="bg-white rounded-2xl md:rounded-[2rem] p-4 md:p-6 shadow-sm border border-gray-100 group cursor-pointer flex flex-col">
                  <div className="w-full aspect-square bg-[#F8F9F9] rounded-xl flex items-center justify-center relative mb-4 overflow-hidden">
                     <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-white flex items-center justify-center text-gray-300 hover:text-red-500 hover:bg-red-50 transition-colors z-10 shadow-sm">
                        <Heart size={12} fill="currentColor" />
                     </div>
                     <img 
                        src={item.image} 
                        className="w-[80%] h-[80%] object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-700" 
                        alt={item.name} 
                        onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80' }}
                     />
                  </div>
                  <h4 className="font-bold text-[#1E4E4F] text-sm md:text-base mb-1 truncate">{item.name}</h4>
                  <div className="flex items-center gap-1 mb-3">
                     <span className="text-[10px] text-yellow-400">★</span>
                     <span className="text-[9px] font-bold text-gray-700">4.8</span>
                     <span className="text-[9px] text-gray-400">| 7.1k+ Sold</span>
                  </div>
                  <span className="font-bold text-sm text-[#1E4E4F] mt-auto">Rp{parseFloat((item.price * 10).toString()).toLocaleString()}</span>
               </div>
            ))}
         </div>
      </section>

      {/* 5. FEATURED DEALS */}
      <section className="max-w-[1600px] mx-auto px-4 md:px-8 py-16">
         <h2 className="text-3xl md:text-4xl font-black text-[#1E4E4F] tracking-tight mb-8">Featured Deals</h2>
         <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2 bg-[#262C36] rounded-[2rem] p-8 md:p-12 text-white flex flex-col justify-center min-h-[220px] relative overflow-hidden group">
               <h3 className="text-2xl lg:text-3xl font-black mb-2 leading-tight">Gear Up for<br/>Greatness</h3>
               <p className="text-[10px] text-white/50 max-w-[200px] mb-8">Make every movement count with exclusive deals ending soon</p>
               <button className="bg-[#3EE6E6] text-[#262C36] text-[9px] font-black py-2 px-6 rounded-full w-fit hover:scale-105 transition-transform z-10">Buy Now</button>
               <img src={shoeData[1].image} className="absolute right-[-15%] sm:right-0 top-1/2 -translate-y-1/2 w-[70%] sm:w-[50%] opacity-90 group-hover:scale-110 transition-transform duration-700 mix-blend-screen" alt="Promo" />
            </div>
            <div className="w-full md:w-1/2 bg-[#C2F5F5] rounded-[2rem] p-8 md:p-12 flex flex-col justify-center min-h-[220px] relative overflow-hidden group">
               <h3 className="text-2xl lg:text-3xl font-black mb-2 leading-tight text-[#1E4E4F]">Welcome Offer<br/>Just for You</h3>
               <p className="text-[10px] text-[#1E4E4F]/50 max-w-[200px] mb-8">Begin greatness taking advantage of exclusive low prices</p>
               <button className="bg-[#3EE6E6] text-white text-[9px] font-black py-2 px-6 rounded-full w-fit hover:shadow-lg transition-shadow z-10">Get Reward</button>
            </div>
         </div>
      </section>

      {/* 6. BOTTOM HERO CTA */}
      <section className="max-w-[1600px] mx-auto px-4 md:px-8 pb-32">
         <div className="w-full rounded-[2rem] overflow-hidden relative min-h-[300px] lg:min-h-[400px] flex items-center p-8 md:p-16">
            <img src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&q=80" className="absolute inset-0 w-full h-full object-cover filter brightness-[0.6]" alt="Tying shoe" />
            <div className="relative z-10 flex flex-col">
               <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4">
                  Unleash Your <span className="text-[#3EE6E6]">Potential.</span>
               </h2>
               <p className="text-xs text-gray-300 md:text-sm mb-8 font-medium">Shop sport-assured footwear built for speed, style and comfort.</p>
               <button className="bg-[#3EE6E6] text-gray-900 border-2 border-[#3EE6E6] font-black text-xs px-8 py-3 rounded-full w-fit hover:bg-transparent hover:text-[#3EE6E6] transition-colors shadow-lg">
                  Shop Now
               </button>
            </div>
         </div>
      </section>

      {/* 7. FOOTER OVERRIDE MATCHING UI */}
      <footer className="w-full bg-[#1E4E4F] text-white py-16 px-4 md:px-8 border-t border-[#133A3A]">
         <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row justify-between gap-12 text-sm">
            <div className="flex flex-col max-w-xs">
               <h2 className="text-3xl font-black text-[#3EE6E6] italic tracking-tighter mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#3EE6E6]/20 flex items-center justify-center rotate-45">
                     <svg className="w-5 h-5 text-[#3EE6E6]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2z"></path></svg>
                  </div>
                  SPORT
               </h2>
               <p className="text-[10px] text-white/50 leading-relaxed mb-6">Revolutionary fitness gear built to withstand time giving power directly to athletes globally.</p>
            </div>
            
            <div className="flex flex-wrap lg:flex-nowrap gap-12 lg:gap-24">
               <div className="flex flex-col gap-3 text-[10px]">
                  <h4 className="font-bold mb-2">Quick Links</h4>
                  <a href="#" className="text-white/60 hover:text-white">Home</a>
                  <a href="#" className="text-white/60 hover:text-white">Shop</a>
                  <a href="#" className="text-white/60 hover:text-white">About Us</a>
                  <a href="#" className="text-white/60 hover:text-white">Sale</a>
                  <a href="#" className="text-white/60 hover:text-white">Blog</a>
               </div>
               <div className="flex flex-col gap-3 text-[10px]">
                  <h4 className="font-bold mb-2">Support</h4>
                  <a href="#" className="text-white/60 hover:text-white">FAQs</a>
                  <a href="#" className="text-white/60 hover:text-white">Shipping & Returns</a>
                  <a href="#" className="text-white/60 hover:text-white">Track Order</a>
                  <a href="#" className="text-white/60 hover:text-white">Terms & Conditions</a>
                  <a href="#" className="text-white/60 hover:text-white">Privacy Policy</a>
               </div>
               <div className="flex flex-col gap-3 text-[10px]">
                  <h4 className="font-bold mb-2">Follow Us</h4>
                  <a href="#" className="text-white/60 hover:text-white">Youtube</a>
                  <a href="#" className="text-white/60 hover:text-white">TikTok</a>
                  <a href="#" className="text-white/60 hover:text-white">Instagram</a>
                  <a href="#" className="text-white/60 hover:text-white">X</a>
                  <a href="#" className="text-white/60 hover:text-white">Facebook</a>
               </div>
            </div>

            <div className="flex flex-col gap-4 max-w-sm">
               <h4 className="font-bold text-[10px]">Subscribe for our newsletter</h4>
               <p className="text-[9px] text-white/50 mb-2">Do not miss out our latest offers and new arrival news.</p>
               <div className="flex">
                  <input type="text" placeholder="Your email..." className="w-full text-[10px] px-4 py-2 bg-white text-black outline-none rounded-l-md" />
                  <button className="bg-[#3EE6E6] text-[#1E4E4F] text-[10px] font-black px-6 py-2 rounded-r-md hover:bg-white transition-colors">Subscribe</button>
               </div>
            </div>
         </div>
      </footer>
    </div>
  );
}
