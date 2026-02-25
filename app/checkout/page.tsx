'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { Navbar } from '@/components/Navbar';
import { checkoutSteps, calculateTotal } from '@/data/checkoutData';
import { motion, AnimatePresence } from 'framer-motion';

export default function CheckoutPage() {
    const { items, cartTotal } = useCart();
    const router = useRouter();

    const [currentStep, setCurrentStep] = useState(1);
    const [isConfirmed, setIsConfirmed] = useState(false);

    const taxRate = 0.08;
    const finalTotal = calculateTotal(items, taxRate);

    // Redirect Logic after Confirmation
    useEffect(() => {
        if (isConfirmed) {
            const timer = setTimeout(() => {
                router.push('/');
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [isConfirmed, router]);

    const handleNext = () => {
        if (currentStep < 3) setCurrentStep(currentStep + 1);
        else setIsConfirmed(true);
    };

    const handleBack = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    if (isConfirmed) {
        return (
            <div className="h-screen w-full flex items-center justify-center text-center bg-black text-white font-serif">
                <div className="max-w-md px-6">
                    <div className="text-6xl text-rubix-gold mb-6 animate-pulse">✦</div>
                    <h1 className="text-4xl font-light tracking-[0.2em] uppercase mb-4">Order Confirmed</h1>
                    <p className="font-sans font-light tracking-wide text-gray-300 mb-6 leading-relaxed">
                        Thank you for choosing excellence. Your curated collection is being prepared.
                    </p>
                    <p className="font-sans italic opacity-70 mb-8 text-sm">
                        Redirecting to the main gallery in 5 seconds...
                    </p>
                    <button
                        onClick={() => router.push('/')}
                        className="font-sans uppercase tracking-[2px] font-semibold text-rubix-gold border border-rubix-gold px-8 py-4 hover:bg-rubix-gold hover:text-black transition-colors duration-300"
                    >
                        Return Now
                    </button>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-[#fafafa] text-[#1a1a1a] font-serif">
            <Navbar />

            <div className="pt-32 pb-16 px-6 md:px-12 max-w-[1200px] mx-auto">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-light tracking-[0.2em] uppercase mb-4 text-black">
                        Checkout
                    </h1>
                </div>

                {/* Elegant Progress Bar (stepper-minimal) */}
                <div className="flex justify-center mb-16 space-x-12">
                    {[1, 2, 3].map((step) => {
                        const isActive = currentStep >= step;
                        return (
                            <div
                                key={step}
                                className={`flex flex-col items-center transition-colors duration-500 pb-2 border-b-2 ${isActive ? 'text-rubix-gold border-rubix-gold' : 'text-gray-300 border-transparent'
                                    }`}
                            >
                                <span className="font-sans text-xl font-bold tracking-widest">0{step}</span>
                            </div>
                        );
                    })}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mt-16 font-sans">
                    {/* Left Side: Form Steps */}
                    <div className="lg:col-span-2 min-h-[400px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentStep}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="mb-8 border-b border-gray-200 pb-4">
                                    <h2 className="text-2xl font-black uppercase tracking-widest">{checkoutSteps[currentStep - 1].label}</h2>
                                    <p className="text-xs text-gray-500 tracking-wider mt-2">{checkoutSteps[currentStep - 1].description}</p>
                                </div>

                                {currentStep === 1 && (
                                    <div className="flex flex-col gap-6 w-full">
                                        <input type="text" placeholder="FULL NAME" className="p-4 w-full bg-transparent border-b border-gray-300 focus:border-rubix-gold outline-none text-xs tracking-widest uppercase transition-colors" />
                                        <input type="text" placeholder="ADDRESS LINE" className="p-4 w-full bg-transparent border-b border-gray-300 focus:border-rubix-gold outline-none text-xs tracking-widest uppercase transition-colors" />
                                        <div className="grid grid-cols-2 gap-6 w-full">
                                            <input type="text" placeholder="CITY" className="p-4 w-full bg-transparent border-b border-gray-300 focus:border-rubix-gold outline-none text-xs tracking-widest uppercase transition-colors" />
                                            <input type="text" placeholder="ZIP CODE" className="p-4 w-full bg-transparent border-b border-gray-300 focus:border-rubix-gold outline-none text-xs tracking-widest uppercase transition-colors" />
                                        </div>
                                    </div>
                                )}

                                {currentStep === 2 && (
                                    <div className="flex flex-col gap-6 w-full">
                                        <div className="flex gap-4">
                                            {['Credit Card', 'PayPal', 'Stripe'].map((method) => (
                                                <button key={method} className="flex-1 py-4 border border-[#1a1a1a] text-xs font-bold uppercase tracking-widest hover:bg-[#1a1a1a] hover:text-white transition-colors">
                                                    {method}
                                                </button>
                                            ))}
                                        </div>
                                        <input type="text" placeholder="CARD NUMBER" className="p-4 mt-4 w-full bg-transparent border-b border-gray-300 focus:border-rubix-gold outline-none text-xs tracking-widest uppercase transition-colors" />
                                        <div className="grid grid-cols-2 gap-6 w-full">
                                            <input type="text" placeholder="MM/YY" className="p-4 w-full bg-transparent border-b border-gray-300 focus:border-rubix-gold outline-none text-xs tracking-widest uppercase transition-colors" />
                                            <input type="text" placeholder="CVC" className="p-4 w-full bg-transparent border-b border-gray-300 focus:border-rubix-gold outline-none text-xs tracking-widest uppercase transition-colors" />
                                        </div>
                                    </div>
                                )}

                                {currentStep === 3 && (
                                    <div className="flex flex-col gap-6 text-sm tracking-wider w-full">
                                        <p>Please review your shipping and payment information carefully.</p>
                                        <div className="p-6 bg-white border border-gray-200">
                                            <h3 className="text-xs font-bold uppercase tracking-widest mb-4 border-b pb-2">Order Integrity Check</h3>
                                            <p className="text-rubix-gold font-medium text-xs uppercase tracking-widest">✦ All Items Confirmed in Stock</p>
                                            <p className="text-rubix-gold font-medium text-xs uppercase tracking-widest mt-2">✦ Shipping Destination Validated</p>
                                        </div>
                                    </div>
                                )}

                                {/* Navigation Buttons */}
                                <div className="flex justify-between items-center mt-12 w-full">
                                    {currentStep > 1 ? (
                                        <button onClick={handleBack} className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-[#1a1a1a] transition-colors">
                                            Back
                                        </button>
                                    ) : <div></div>}

                                    <button
                                        onClick={handleNext}
                                        className="bg-[#000] text-[#fff] border-none px-10 py-[18px] uppercase tracking-[2px] font-semibold transition-all duration-300 cursor-pointer w-full max-w-sm ml-auto hover:bg-[#d4af37]"
                                    >
                                        {currentStep === 3 ? 'Complete Purchase' : 'Continue to Next Step'}
                                    </button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Side: Order Summary */}
                    <div className="bg-white p-8 border border-gray-200 h-fit shadow-sm">
                        <h3 className="text-lg font-black uppercase tracking-widest mb-8 pb-4 border-b border-gray-200">Order Summary</h3>

                        <div className="space-y-6 mb-8 max-h-[300px] overflow-y-auto no-scrollbar">
                            {items.length === 0 ? (
                                <p className="text-xs text-gray-500 tracking-wider uppercase">Your cart is empty.</p>
                            ) : (
                                items.map((item) => (
                                    <div key={item.id} className="flex gap-4 items-center">
                                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover bg-gray-50" />
                                        <div className="flex-1">
                                            <p className="text-xs font-bold uppercase tracking-widest">{item.name}</p>
                                            <p className="text-[10px] text-gray-500 uppercase tracking-widest">Qty: {item.quantity}</p>
                                        </div>
                                        <p className="text-sm font-bold">${(item.price * item.quantity).toLocaleString()}</p>
                                    </div>
                                ))
                            )}
                        </div>

                        <div className="space-y-4 pt-6 border-t border-gray-200 text-xs tracking-widest uppercase font-medium text-gray-600">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>${cartTotal.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Estimated Tax (8%)</span>
                                <span>${(cartTotal * taxRate).toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-base font-black text-[#1a1a1a] pt-4 border-t border-gray-200">
                                <span>Total</span>
                                <span>${finalTotal.toLocaleString()}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
