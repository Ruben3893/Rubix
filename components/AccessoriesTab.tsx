import React from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';
import { accessoryData } from '../data/accessoriesData';

interface AccessoriesTabProps {
  onProductSelect?: (item: any) => void;
}

export default function AccessoriesTab({ onProductSelect }: AccessoriesTabProps) {
  return (
    <div className="w-full font-sans bg-white border-t border-gray-100 text-black max-w-[1800px] mx-auto overflow-hidden">
      
      {/* 2x2 MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 p-2">
        
        {/* TOP LEFT: Brand Intro */}
        <div className="bg-[#f2f2f2] relative min-h-[500px] lg:min-h-[600px] flex flex-col p-8 sm:p-12 overflow-hidden group">
           <h1 className="text-[12vw] lg:text-[7rem] xl:text-[9rem] font-black tracking-tighter leading-none z-10 w-full flex justify-between">
              <span>Blu</span>
              <span>Nile</span>
           </h1>
           
           <img 
              src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80" 
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] md:w-[70%] lg:w-[85%] object-cover object-top z-0 drop-shadow-2xl"
              alt="Model with jewelry"
              style={{ clipPath: 'inset(0 0 0 0)' }}
           />

           <div className="mt-auto relative z-10 flex flex-col sm:flex-row justify-between items-end">
              <span className="text-xl sm:text-2xl font-medium tracking-tight bg-white/50 backdrop-blur-sm px-4 py-2 rounded-lg">[ Since 2017 ]</span>
              <p className="text-xs sm:text-sm max-w-[280px] text-gray-700 font-medium leading-relaxed bg-white/50 backdrop-blur-sm p-4 rounded-lg mt-4 sm:mt-0">
                 Each design reflects the dialogue between craftsmanship and feeling, exploring what it means to express oneself with elegance and depth.
              </p>
           </div>
        </div>

        {/* TOP RIGHT: 2x2 Product Grid */}
        <div className="bg-[#f2f2f2] p-4 sm:p-8 lg:p-12 min-h-[500px] lg:min-h-[600px] flex items-center justify-center">
           <div className="grid grid-cols-2 gap-4 w-full h-full">
              
              {/* Card 1: Spark */}
              <div className="bg-[#FAF9F6] p-4 sm:p-6 flex flex-col justify-between relative group cursor-pointer">
                 <div>
                    <h3 className="text-lg font-bold">Spark</h3>
                    <p className="text-[10px] text-gray-500">18K yellow</p>
                 </div>
                 <img src="https://images.unsplash.com/photo-1605100804763-247f67b2548e?auto=format&fit=crop&q=80" className="w-[80%] mx-auto my-4 object-contain mix-blend-multiply group-hover:scale-105 transition-transform" alt="Spark ring" />
                 <div className="flex justify-between items-center w-full text-gray-400 mt-auto">
                    <div className="flex gap-1">
                       <span className="w-1.5 h-1.5 bg-black rotate-45"></span>
                       <span className="w-1.5 h-1.5 bg-gray-300 rotate-45"></span>
                       <span className="w-1.5 h-1.5 bg-gray-300 rotate-45"></span>
                    </div>
                    <div className="flex gap-2">
                       <ChevronLeft size={14} className="hover:text-black transition-colors" />
                       <ChevronRight size={14} className="hover:text-black transition-colors" />
                    </div>
                 </div>
              </div>

              {/* Card 2: Luna */}
              <div className="bg-[#FAF9F6] p-4 sm:p-6 flex flex-col justify-between relative group cursor-pointer overflow-hidden">
                 <div className="z-10 bg-white/70 backdrop-blur-sm w-fit pr-4 pb-2 rounded-br-lg">
                    <h3 className="text-lg font-bold">Luna</h3>
                    <p className="text-[10px] text-gray-500">18K rose</p>
                 </div>
                 <img src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Luna earrings model" />
                 <div className="flex justify-between items-center w-full text-gray-400 mt-auto z-10 bg-white/70 backdrop-blur-sm rounded-t-lg pt-2 px-2 -mx-2 -mb-2">
                    <div className="flex gap-1">
                       <span className="w-1.5 h-1.5 bg-gray-300 rotate-45"></span>
                       <span className="w-1.5 h-1.5 bg-black rotate-45"></span>
                       <span className="w-1.5 h-1.5 bg-gray-300 rotate-45"></span>
                    </div>
                    <div className="flex gap-2">
                       <ChevronLeft size={14} className="hover:text-black transition-colors" />
                       <ChevronRight size={14} className="hover:text-black transition-colors" />
                    </div>
                 </div>
              </div>

              {/* Card 3: Maya */}
              <div className="bg-[#FAF9F6] p-4 sm:p-6 flex flex-col justify-between relative group cursor-pointer overflow-hidden">
                 <div className="z-10 bg-white/70 backdrop-blur-sm w-fit pr-4 pb-2 rounded-br-lg">
                    <h3 className="text-lg font-bold">Maya</h3>
                    <p className="text-[10px] text-gray-500">18K rose</p>
                 </div>
                 <img src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Maya model" />
                 <div className="flex justify-between items-center w-full text-gray-400 mt-auto z-10 bg-white/70 backdrop-blur-sm rounded-t-lg pt-2 px-2 -mx-2 -mb-2">
                    <div className="flex gap-1">
                       <span className="w-1.5 h-1.5 bg-black rotate-45"></span>
                       <span className="w-1.5 h-1.5 bg-gray-300 rotate-45"></span>
                       <span className="w-1.5 h-1.5 bg-gray-300 rotate-45"></span>
                    </div>
                    <div className="flex gap-2">
                       <ChevronLeft size={14} className="hover:text-black transition-colors" />
                       <ChevronRight size={14} className="hover:text-black transition-colors" />
                    </div>
                 </div>
              </div>

              {/* Card 4: Love knot */}
              <div className="bg-[#FAF9F6] p-4 sm:p-6 flex flex-col justify-between relative group cursor-pointer">
                 <div>
                    <h3 className="text-lg font-bold">Love knot</h3>
                    <p className="text-[10px] text-gray-500">18K yellow</p>
                 </div>
                 <img src="https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&q=80" className="w-[60%] mx-auto my-4 object-contain mix-blend-multiply group-hover:scale-105 transition-transform filter brightness-110" alt="Love knot earrings" />
                 <div className="flex justify-between items-center w-full text-gray-400 mt-auto">
                    <div className="flex gap-1">
                       <span className="w-1.5 h-1.5 bg-gray-300 rotate-45"></span>
                       <span className="w-1.5 h-1.5 bg-gray-300 rotate-45"></span>
                       <span className="w-1.5 h-1.5 bg-black rotate-45"></span>
                    </div>
                    <div className="flex gap-2">
                       <ChevronLeft size={14} className="hover:text-black transition-colors" />
                       <ChevronRight size={14} className="hover:text-black transition-colors" />
                    </div>
                 </div>
              </div>

           </div>
        </div>

        {/* BOTTOM LEFT: Hero Product */}
        <div className="bg-[#D8D8D8] p-8 sm:p-16 lg:p-24 min-h-[500px] lg:min-h-[600px] flex items-center justify-center">
           <div className="bg-[#FAF9F6] w-full max-w-lg h-full max-h-[450px] p-8 sm:p-12 flex flex-col justify-between relative group cursor-pointer items-start shadow-xl">
              <div>
                 <h2 className="text-2xl sm:text-3xl font-black mb-1 tracking-tight">Coco Crush ring</h2>
                 <p className="text-sm text-gray-500">18K yellow</p>
              </div>
              
              <img src="https://images.unsplash.com/photo-1605100804763-247f67b2548e?auto=format&fit=crop&q=80" className="w-[75%] mx-auto my-8 object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700" alt="Coco Crush Ring" />
              
              <div className="flex flex-col">
                 <span className="text-xs text-gray-500">From</span>
                 <span className="text-3xl font-bold tracking-tight">$25,550</span>
              </div>
              
              {/* Action Button */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-black text-white flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                 <ArrowUpRight size={24} className="group-hover:scale-110 transition-transform" />
              </div>
           </div>
        </div>

        {/* BOTTOM RIGHT: Model Portrait */}
        <div className="bg-[#f2f2f2] relative min-h-[500px] lg:min-h-[600px] overflow-hidden group">
           <img 
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80" 
              className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-[1.5s]" 
              alt="Model with earrings" 
           />
           <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent z-10"></div>
           
           <div className="absolute top-8 left-8 sm:top-12 sm:left-12 z-20">
              <span className="text-4xl sm:text-6xl font-black tracking-tighter bg-white/70 backdrop-blur-sm px-4 py-2 rounded-xl">[ 17 ]</span>
           </div>

           <div className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12 z-20">
              <h2 className="text-3xl sm:text-4xl text-gray-700 font-medium leading-tight max-w-[200px] mix-blend-multiply bg-white/80 p-4 rounded-xl backdrop-blur-sm">
                 Jewelry Design Awwards
              </h2>
           </div>
        </div>

      </div>

      {/* ALL PRODUCTS GRID */}
      <section className="w-full bg-white px-8 sm:px-12 py-16 lg:py-24 border-t border-gray-200 mt-8">
         <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
               <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">Complete Collection</h2>
               <p className="text-gray-500 font-medium max-w-lg">Explore our entire catalogue of meticulously crafted accessories and hardware pieces.</p>
            </div>
            <span className="text-sm font-bold tracking-widest uppercase bg-gray-100 px-4 py-2 rounded-full">{accessoryData.length} Items</span>
         </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12">
            {accessoryData.map((item) => (
               <div key={item.id} onClick={() => onProductSelect?.(item)} className="group cursor-pointer flex flex-col">
                  <div className="bg-[#FAF9F6] aspect-[4/5] flex items-center justify-center p-8 mb-6 relative overflow-hidden transition-colors group-hover:bg-[#f2f2f2]">
                     <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-[85%] h-[85%] object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-[1s]"
                        onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1599643478514-4a4e5abaed74?auto=format&fit=crop&q=80' }}
                     />
                     <div className="absolute bottom-4 right-4 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <ShoppingBag size={16} />
                     </div>
                  </div>
                  <div className="flex justify-between items-start">
                     <div className="flex flex-col">
                        <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                        <p className="text-xs text-gray-500 max-w-[200px] truncate">{item.description}</p>
                     </div>
                     <span className="font-medium text-lg">${item.price}</span>
                  </div>
               </div>
            ))}
         </div>
      </section>

    </div>
  );
}
