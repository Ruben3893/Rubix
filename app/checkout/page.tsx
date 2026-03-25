'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { Navbar } from '@/components/Navbar';
import { calculateTotal } from '@/data/checkoutData';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus } from 'lucide-react';

export default function CheckoutPage() {
    const { items, updateQuantity, cartTotal, clearCart } = useCart();
    const router = useRouter();

    const [currentStep, setCurrentStep] = useState(1);
    const [isConfirmed, setIsConfirmed] = useState(false);
    
    // For payment selection
    const [paymentMethod, setPaymentMethod] = useState('credit');

    const taxRate = 0.08; // Just as an example, though in image it's constant
    // In image, shipping is $5.00, let's hardcode it for match
    const shippingCost: number = 5.00;
    const finalTotal = cartTotal + shippingCost; // calculateTotal could be used here but keeping simple

    const handleNext = () => {
        if (currentStep === 1) {
            setCurrentStep(2);
        } else if (currentStep === 2) {
            // Confirm purchase
            clearCart();
            setIsConfirmed(true);
        }
    };

    return (
        <main className="min-h-screen bg-white text-black font-sans">
            <Navbar />

            {/* Top black banner from image if desired, but we have Navbar. 
                Assuming Navbar is already handled, let's just make the main content container. */}
            
            <div className="pt-24 pb-16 px-6 md:px-12 max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-8">
                    
                    {/* Left Side: Form Steps */}
                    <div className="flex flex-col">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentStep}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10 }}
                                transition={{ duration: 0.3 }}
                                className="w-full max-w-lg"
                            >
                                <h2 className="text-3xl font-medium tracking-tight mb-8">
                                    {currentStep === 1 ? 'Shipping Information' : 'Payment Method'}
                                </h2>

                                {currentStep === 1 && (
                                    <div className="space-y-6">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium mb-2">First Name</label>
                                                <input type="text" placeholder="Enter your first name" className="w-full px-5 py-3 border border-gray-200 rounded-full text-sm outline-none focus:border-black transition-colors" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium mb-2">Last Name</label>
                                                <input type="text" placeholder="Enter your last name" className="w-full px-5 py-3 border border-gray-200 rounded-full text-sm outline-none focus:border-black transition-colors" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium mb-2">Email</label>
                                                <input type="email" placeholder="Enter your email" className="w-full px-5 py-3 border border-gray-200 rounded-full text-sm outline-none focus:border-black transition-colors" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium mb-2">Phone Number</label>
                                                <input type="tel" placeholder="Enter your phone number" className="w-full px-5 py-3 border border-gray-200 rounded-full text-sm outline-none focus:border-black transition-colors" />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium mb-2">Detail Address</label>
                                            <textarea rows={4} placeholder="Enter your detail address" className="w-full px-5 py-4 border border-gray-200 rounded-3xl text-sm outline-none focus:border-black transition-colors resize-none"></textarea>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium mb-2">Country</label>
                                                <select className="w-full px-5 py-3 border border-gray-200 rounded-full text-sm outline-none focus:border-black transition-colors appearance-none bg-transparent">
                                                    <option>Country</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium mb-2">Province</label>
                                                <select className="w-full px-5 py-3 border border-gray-200 rounded-full text-sm outline-none focus:border-black transition-colors appearance-none bg-transparent">
                                                    <option>Province</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium mb-2">City</label>
                                                <select className="w-full px-5 py-3 border border-gray-200 rounded-full text-sm outline-none focus:border-black transition-colors appearance-none bg-transparent">
                                                    <option>City</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium mb-2">Postal Code</label>
                                                <select className="w-full px-5 py-3 border border-gray-200 rounded-full text-sm outline-none focus:border-black transition-colors appearance-none bg-transparent">
                                                    <option>Postal code</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="pt-4">
                                            <button onClick={handleNext} className="w-full bg-black text-white py-4 rounded-full font-medium hover:bg-gray-800 transition-colors">
                                                Continue
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {currentStep === 2 && (
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-center mb-6">
                                            <button 
                                                className="flex items-center gap-2"
                                                onClick={() => setPaymentMethod('paypal')}
                                            >
                                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'paypal' ? 'border-black' : 'border-gray-300'}`}>
                                                    {paymentMethod === 'paypal' && <div className="w-2.5 h-2.5 bg-black rounded-full" />}
                                                </div>
                                                <span className="font-semibold text-[#003087]">Paypal</span>
                                            </button>
                                            
                                            <button 
                                                className="flex items-center gap-2"
                                                onClick={() => setPaymentMethod('credit')}
                                            >
                                                <div className={`w-5 flex items-center justify-center`}>
                                                    {paymentMethod === 'credit' ? (
                                                        <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
                                                            <div className="text-white text-[10px]">✓</div>
                                                        </div>
                                                    ) : (
                                                        <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
                                                    )}
                                                </div>
                                                <span className="font-medium text-gray-800">Credit Card</span>
                                            </button>

                                            <button 
                                                className="flex items-center gap-2"
                                                onClick={() => setPaymentMethod('venmo')}
                                            >
                                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'venmo' ? 'border-black' : 'border-gray-300'}`}>
                                                    {paymentMethod === 'venmo' && <div className="w-2.5 h-2.5 bg-black rounded-full" />}
                                                </div>
                                                <span className="font-semibold text-[#008CFF]">Venmo</span>
                                            </button>
                                        </div>

                                        <hr className="border-t border-gray-100 mb-6" />

                                        <div>
                                            <label className="block text-sm font-medium mb-2">Card Number</label>
                                            <input type="text" placeholder="Enter your card number" className="w-full px-5 py-3 border border-gray-200 rounded-full text-sm outline-none focus:border-black transition-colors" />
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium mb-2">Expiration Date</label>
                                                <input type="text" placeholder="MM/YY" className="w-full px-5 py-3 border border-gray-200 rounded-full text-sm outline-none focus:border-black transition-colors" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium mb-2">CVV</label>
                                                <input type="text" placeholder="XXX" className="w-full px-5 py-3 border border-gray-200 rounded-full text-sm outline-none focus:border-black transition-colors" />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium mb-2">Name On Card</label>
                                            <input type="text" placeholder="Enter your name" className="w-full px-5 py-3 border border-gray-200 rounded-full text-sm outline-none focus:border-black transition-colors" />
                                        </div>

                                        <div className="pt-4">
                                            <button onClick={handleNext} className="w-full bg-black text-white py-4 rounded-full font-medium hover:bg-gray-800 transition-colors">
                                                Continue
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Side: Order Summary */}
                    <div className="flex flex-col">
                        <h2 className="text-3xl font-medium tracking-tight mb-8">
                            {currentStep === 1 ? 'Your Order' : 'Summary'}
                        </h2>

                        <div className="space-y-4 mb-10 max-h-[400px] overflow-y-auto no-scrollbar">
                            {items.length === 0 ? (
                                <div className="p-6 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-500">
                                    Your cart is empty.
                                </div>
                            ) : (
                                items.map((item) => (
                                    <div key={item.id} className="flex gap-6 p-4 rounded-3xl border border-gray-50 bg-[#FAFAFA]">
                                        <div className="w-32 h-32 bg-[#EBEBEB] rounded-2xl p-2 flex items-center justify-center overflow-hidden mix-blend-multiply">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover mix-blend-multiply" />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between py-1">
                                            <div>
                                                <div className="text-sm text-gray-400 mb-1">Rubix / Collection</div>
                                                <h3 className="text-xl font-medium text-black leading-tight">{item.name}</h3>
                                            </div>
                                            <div className="text-sm text-gray-500 space-y-0.5 mt-2">
                                                <p>Size : <span className="text-black">L</span></p>
                                                <p>Qty : <span className="text-black">{item.quantity}</span></p>
                                                <p>Color : <span className="text-black">Default</span></p>
                                            </div>
                                            <div className="flex items-center justify-between mt-3">
                                                <div className="flex items-center gap-4 text-black">
                                                    <button 
                                                        onClick={() => updateQuantity(item.id, -1)}
                                                        className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                                                    >
                                                        <Minus className="w-3 h-3" />
                                                    </button>
                                                    <span className="font-semibold">{item.quantity}</span>
                                                    <button 
                                                        onClick={() => updateQuantity(item.id, 1)}
                                                        className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
                                                    >
                                                        <Plus className="w-3 h-3" />
                                                    </button>
                                                </div>
                                                <span className="text-2xl font-medium">${item.price.toFixed(2)}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {items.length > 0 && (
                            <div className="mt-auto">
                                <h3 className="text-2xl font-medium mb-6">Order Summary</h3>
                                <div className="space-y-4 mb-6 text-gray-500">
                                    <div className="flex justify-between items-center">
                                        <span>Subtotal ({items.reduce((acc, i) => acc + i.quantity, 0)})</span>
                                        <span className="text-black font-medium">${cartTotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-gray-50 py-3 px-4 rounded-xl -mx-4 group">
                                        <div className="flex items-center gap-2">
                                            <span className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center">?</span>
                                            <span>Promo Code</span>
                                        </div>
                                        <span className="text-sm">Apply &gt;</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span>Shipping</span>
                                        {shippingCost === 0 ? (
                                            <span className="text-black font-medium text-sm">Free</span>
                                        ) : (
                                            <span className="text-black font-medium text-sm">${shippingCost.toFixed(2)}</span>
                                        )}
                                    </div>
                                </div>
                                <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                                    <span className="text-gray-500">Total</span>
                                    <span className="text-3xl font-medium">${finalTotal.toFixed(2)}</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Success Modal Overlay */}
            <AnimatePresence>
                {isConfirmed && (
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        exit={{ opacity: 0 }} 
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
                    >
                        <motion.div 
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-w-4xl w-full h-[600px]"
                        >
                            {/* Left Image Side */}
                            <div className="hidden md:block md:w-1/2 relative h-full">
                                <img 
                                    src="https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&q=80" 
                                    alt="Success" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            
                            {/* Right Content Side */}
                            <div className="w-full md:w-1/2 p-12 flex flex-col items-center justify-center relative">
                                <button 
                                    onClick={() => router.push('/')}
                                    className="absolute top-8 right-8 text-gray-400 hover:text-black transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                <div className="text-center space-y-6 max-w-sm">
                                    <h2 className="text-4xl font-medium tracking-tight mb-8">Congratulations</h2>
                                    <h3 className="text-xl font-medium">Your purchase was a success!</h3>
                                    <p className="text-gray-500 leading-relaxed text-sm px-4">
                                        Thank you for entrusting your care to us. Please be patient as we process your items as quickly as possible.
                                    </p>
                                    
                                    <button 
                                        onClick={() => router.push('/')}
                                        className="mt-8 bg-black text-white px-10 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors inline-block w-full max-w-[240px]"
                                    >
                                        Back to Homepage
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </main>
    );
}
