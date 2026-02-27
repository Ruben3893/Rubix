'use client';

import React, { useState, useEffect } from 'react';

const drops = [
    { id: '1', name: 'Celestial Tourbillon', category: 'Watch', imageUrl: '/assets/watch-1.jpeg' },
    { id: '2', name: 'Velvet Crimson Tuxedo', category: 'Clothing', imageUrl: '/assets/clothes-7.webp' },
    { id: '3', name: 'Leather Band', category: 'Accessory', imageUrl: '/assets/accessory-19.webp' },
];

export const ProductDrop = () => {
    const [currentDropIndex, setCurrentDropIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState({ hours: 48, minutes: 0, seconds: 0 });

    useEffect(() => {
        // Logic 1: Switch the displayed product from the drops array every 24 hours based on the current date.
        const today = new Date();
        const startOfYear = new Date(today.getFullYear(), 0, 0);
        const diff = today.getTime() - startOfYear.getTime();
        const oneDay = 1000 * 60 * 60 * 24;
        const dayOfYear = Math.floor(diff / oneDay);

        setCurrentDropIndex(dayOfYear % drops.length);

        // Logic 2: Target Date: 48 hours from now
        const targetDate = new Date(today.getTime() + 48 * 60 * 60 * 1000).getTime();

        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                return { hours: 0, minutes: 0, seconds: 0 };
            }

            return {
                hours: Math.floor(distance / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            };
        };

        // Set initial time left to prevent 00:00:00 flash
        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            const newTimeLeft = calculateTimeLeft();
            setTimeLeft(newTimeLeft);

            if (newTimeLeft.hours === 0 && newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0) {
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [drops.length]);

    const currentDrop = drops[currentDropIndex];

    const formatTime = (time: number) => time.toString().padStart(2, '0');

    return (
        <div className="w-full min-h-screen bg-[#00172D] text-[#FFFFFF] flex items-center justify-center p-4 md:p-12">
            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Side: Large Product Image */}
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-white/5 group">
                    <img
                        src={currentDrop?.imageUrl || '/watch_hero.svg'}
                        alt={currentDrop?.name}
                        className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                        onError={(e) => { (e.target as HTMLImageElement).src = '/watch_hero.svg' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#00172D]/80 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Right Side: Product Details & Countdown */}
                <div className="flex flex-col justify-center space-y-10 pl-0 md:pl-8">
                    <div>
                        <p className="text-[#D4AF37] tracking-[0.3em] text-sm uppercase mb-4 font-bold">Limited Edition {currentDrop?.category}</p>
                        <h2 className="text-5xl lg:text-7xl font-serif text-white mb-6 leading-tight">{currentDrop?.name}</h2>
                        <p className="text-white/60 text-lg font-light leading-relaxed max-w-xl">
                            Experience unparalleled luxury and craftsmanship. Formulated strictly for the connoisseur, this exclusive drop vanishes when the timer strikes zero.
                        </p>
                    </div>

                    <div className="py-6 border-y border-white/10">
                        <p className="text-xs uppercase tracking-widest text-white/50 mb-6">Drop Closes In</p>
                        <div className="flex items-center space-x-4 text-[#D4AF37] font-serif text-6xl lg:text-7xl">
                            <div className="flex flex-col items-center">
                                <span>{formatTime(timeLeft.hours)}</span>
                            </div>
                            <span className="opacity-50 pb-2 text-white">:</span>
                            <div className="flex flex-col items-center">
                                <span>{formatTime(timeLeft.minutes)}</span>
                            </div>
                            <span className="opacity-50 pb-2 text-white">:</span>
                            <div className="flex flex-col items-center">
                                <span>{formatTime(timeLeft.seconds)}</span>
                            </div>
                        </div>
                    </div>

                    <button className="w-full md:w-auto px-12 py-5 text-sm tracking-[0.2em] uppercase font-bold bg-[#D4AF37] text-black hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]">
                        Register Interest
                    </button>
                </div>
            </div>
        </div>
    );
};
