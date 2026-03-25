"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Heart, ShoppingBag, MapPin, User, LogOut, ChevronRight, FileText, ChevronDown } from 'lucide-react';

// Dummy data to match the screenshot layout
const dummyOrders = [
  {
    id: "ORD-001",
    date: "2024/03/25",
    time: "12:38 am",
    status: "Pending",
    total: 12.05,
    items: [
      { name: "the blue mug", qty: 1, image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=150&h=150&fit=crop" },
      { name: "the blue mug designed...", qty: 3, image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=150&h=150&fit=crop" },
      { name: "the blue mug", qty: 1, image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=150&h=150&fit=crop" },
    ]
  },
  {
    id: "ORD-002",
    date: "2024/03/24",
    time: "12:38 am",
    status: "Pending",
    total: 12.05,
    items: [
      { name: "the blue mug", qty: 1, image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=150&h=150&fit=crop" },
      { name: "the blue mug designed...", qty: 3, image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=150&h=150&fit=crop" },
      { name: "the blue mug", qty: 1, image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=150&h=150&fit=crop" },
      { name: "the black cap", qty: 1, image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=150&h=150&fit=crop" },
    ]
  },
  {
    id: "ORD-003",
    date: "2024/03/23",
    time: "12:38 am",
    status: "Pending",
    total: 12.05,
    items: [
      { name: "the blue mug", qty: 1, image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=150&h=150&fit=crop" },
      { name: "the blue mug designed...", qty: 3, image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=150&h=150&fit=crop" },
      { name: "the black cap", qty: 1, image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=150&h=150&fit=crop" },
      { name: "the blue mug", qty: 1, image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=150&h=150&fit=crop" },
    ]
  }
];

export default function ProfilePage() {
    const [activeTab, setActiveTab] = useState('My Orders');
    const [orderTab, setOrderTab] = useState('Pending');

    return (
        <div className="min-h-screen bg-[#FFE6EE]/30 flex flex-col font-sans">
            
            {/* Top Navbar */}
            <div className="bg-[#181818] text-white w-full h-[80px] flex items-center px-8 z-20 shadow-sm relative">
                {/* Logo Area matches sidebar width approximately to keep Karyan Art aligned */}
                <div className="w-[240px] flex-shrink-0">
                    <Link href="/" className="text-xl font-medium tracking-wide">
                        RubixFable
                    </Link>
                </div>
                
                {/* Nav Links */}
                <div className="flex gap-8 text-sm text-gray-400 flex-1 ml-4 tracking-wide font-medium">
                    <Link href="/" className="hover:text-white transition-colors">Home</Link>
                    <Link href="/shop" className="hover:text-white transition-colors">Products</Link>
                    <Link href="#" className="hover:text-white transition-colors">Printing</Link>
                    <Link href="#" className="hover:text-white transition-colors">Embroidery</Link>
                    <Link href="#" className="hover:text-white transition-colors">Blog</Link>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-6 text-gray-300">
                    <div className="flex items-center gap-1 text-sm hover:text-white cursor-pointer">
                        En <ChevronDown className="w-4 h-4" />
                    </div>
                    <Search className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
                    <Heart className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
                    
                    <div className="relative cursor-pointer hover:text-white transition-colors">
                        <ShoppingBag className="w-5 h-5" />
                        <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full leading-none">
                            3
                        </span>
                    </div>

                    {/* Profile Dropdown */}
                    <div className="flex items-center gap-2 cursor-pointer ml-4">
                        <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-600">
                            <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Profile" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-xs font-medium">My Profile</span>
                        <ChevronDown className="w-3 h-3" />
                    </div>
                </div>
            </div>

            {/* Main Layout */}
            <div className="flex flex-1 w-full bg-[#FFE6EE]/30">
                
                {/* Fixed Sidebar */}
                <div className="w-[280px] bg-[#181818] text-gray-400 flex flex-col flex-shrink-0 min-h-[calc(100vh-80px)]">
                    
                    {/* User Info */}
                    <div className="flex flex-col items-center justify-center py-10 border-b border-gray-800/50">
                        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-transparent box-content mb-4 bg-gray-800">
                            <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User" className="w-full h-full object-cover" />
                        </div>
                        <h2 className="text-white text-sm font-semibold tracking-wide">Sabah Alahmad</h2>
                        <p className="text-xs mt-1 text-gray-500 font-medium">+365 8964845</p>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex flex-col pt-8 gap-2">
                        <button 
                            onClick={() => setActiveTab('My Orders')}
                            className={`flex items-center gap-4 px-10 py-3 text-sm font-medium transition-colors ${activeTab === 'My Orders' ? 'text-yellow-400 border-l-2 border-yellow-400' : 'hover:text-white border-l-2 border-transparent'}`}
                        >
                            <div className="relative">
                                <FileText className="w-5 h-5" />
                                {activeTab === 'My Orders' && (
                                    <span className="absolute -top-1 -right-1 bg-yellow-400 text-black w-3 h-3 text-[8px] font-bold flex items-center justify-center rounded-full border border-[#181818]">3</span>
                                )}
                            </div>
                            My Orders
                        </button>
                        
                        <button 
                            onClick={() => setActiveTab('My List')}
                            className={`flex items-center gap-4 px-10 py-3 text-sm font-medium transition-colors ${activeTab === 'My List' ? 'text-yellow-400 border-l-2 border-yellow-400' : 'hover:text-white border-l-2 border-transparent'}`}
                        >
                            <Heart className="w-5 h-5" />
                            My list
                        </button>

                        <button className="flex items-center gap-4 px-10 py-3 text-sm font-medium hover:text-white transition-colors border-l-2 border-transparent">
                            <MapPin className="w-5 h-5" />
                            Address
                        </button>
                        
                        <button className="flex items-center gap-4 px-10 py-3 text-sm font-medium hover:text-white transition-colors border-l-2 border-transparent">
                            <User className="w-5 h-5" />
                            User info
                        </button>
                        
                        <button className="flex items-center gap-4 px-10 py-3 text-sm font-medium hover:text-white transition-colors border-l-2 border-transparent mt-8">
                            <LogOut className="w-5 h-5" />
                            Exit
                        </button>
                    </nav>
                </div>

                {/* Content Area */}
                <div className="flex-1 p-8 overflow-y-auto">
                    
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 min-h-full p-8 max-w-[1200px] mx-auto">
                        
                        {activeTab === 'My Orders' && (
                            <>
                                <h1 className="text-xl font-bold text-gray-900 mb-8 pt-2">Order history</h1>
                                
                                {/* Order Tabs */}
                                <div className="flex gap-8 border-b border-gray-100 mb-8">
                                    {[
                                        { name: 'Pending', count: 3 },
                                        { name: 'Processing', count: 0 },
                                        { name: 'Delivered', count: 0 },
                                        { name: 'Returned', count: 1 },
                                        { name: 'Cancelled', count: 1 }
                                    ].map((tab) => (
                                        <button 
                                            key={tab.name}
                                            onClick={() => setOrderTab(tab.name)}
                                            className={`pb-4 text-sm font-bold flex items-center gap-2 relative transition-colors ${
                                                orderTab === tab.name ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'
                                            }`}
                                        >
                                            {tab.name}
                                            <span className={`w-5 h-5 rounded-full text-[10px] flex items-center justify-center font-bold ${
                                                orderTab === tab.name ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-500'
                                            }`}>
                                                {tab.count}
                                            </span>
                                            {orderTab === tab.name && (
                                                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-yellow-400 rounded-t-md" />
                                            )}
                                        </button>
                                    ))}
                                </div>

                                {/* Order List */}
                                <div className="space-y-6">
                                    {orderTab === 'Pending' ? dummyOrders.map((order, i) => (
                                        <div key={i} className="border border-gray-100 rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow">
                                            {/* Order Header */}
                                            <div className="flex justify-between items-center p-4 border-b border-gray-100 bg-[#FAFAFA]/50">
                                                <div className="flex items-center gap-3">
                                                    <span className="text-sm font-medium text-gray-500">{order.date} <span className="text-gray-300 mx-1">•</span> {order.time}</span>
                                                    <span className="bg-purple-100 text-purple-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                                                        {order.status}
                                                    </span>
                                                </div>
                                                <div className="text-sm text-gray-500">
                                                    Total: <span className="text-black font-bold text-base ml-1">${order.total.toFixed(2)}</span>
                                                </div>
                                            </div>

                                            {/* Order Body */}
                                            <div className="p-5 flex flex-col md:flex-row gap-8">
                                                
                                                {/* Left: Images */}
                                                <div className="flex gap-4 items-center flex-wrap max-w-[50%]">
                                                    {order.items.map((item, index) => (
                                                        <div key={index} className="relative w-16 h-16 bg-gray-50 rounded-md border border-gray-100 flex items-center justify-center">
                                                            <img src={item.image} alt="product" className="w-12 h-12 object-contain mix-blend-multiply" />
                                                            <div className="absolute -top-2 -right-2 w-[18px] h-[18px] bg-black text-white rounded-full flex items-center justify-center text-[9px] font-bold border border-white">
                                                                {item.qty}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* Right: Items List */}
                                                <div className="flex-1 border-l border-gray-100 pl-8 relative min-h-[70px]">
                                                    <div className="flex text-xs text-gray-500 font-medium">
                                                        <span className="w-12">Items:</span>
                                                        <div className="grid grid-cols-2 gap-x-8 gap-y-2 flex-1 relative">
                                                            {order.items.slice(0,4).map((item, index) => (
                                                                <div key={index} className="flex items-center gap-2 truncate">
                                                                    <span className="w-1 h-1 rounded-full bg-gray-400 flex-shrink-0" />
                                                                    <span className="font-bold text-gray-700">{item.qty} x</span>
                                                                    <span className="truncate">{item.name}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    <button className="absolute bottom-0 right-0 text-xs text-gray-400 flex items-center gap-1 hover:text-gray-900 transition-colors">
                                                        See more <ChevronRight className="w-3 h-3" />
                                                    </button>
                                                </div>

                                            </div>
                                        </div>
                                    )) : (
                                        <div className="py-20 text-center text-gray-400">
                                            No orders found for this tab.
                                        </div>
                                    )}
                                </div>
                            </>
                        )}

                        {activeTab === 'My List' && (
                            <>
                                <h1 className="text-xl font-bold text-gray-900 mb-8 pt-2">Favorites</h1>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                    {/* Dummy Favorite Item */}
                                    <div className="border border-gray-100 rounded-lg p-4 text-center">
                                        <div className="aspect-square bg-gray-50 rounded-md mb-4 flex items-center justify-center">
                                            <img src="https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=300&h=300&fit=crop" alt="mug" className="w-3/4 object-contain mix-blend-multiply mix-blend-multiply" />
                                        </div>
                                        <h3 className="font-medium text-sm">The Blue Mug</h3>
                                        <p className="font-bold mt-1">$4.00</p>
                                    </div>
                                    <div className="border border-gray-100 rounded-lg p-4 text-center">
                                        <div className="aspect-square bg-gray-50 rounded-md mb-4 flex items-center justify-center">
                                            <img src="https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=300&h=300&fit=crop" alt="cap" className="w-3/4 object-contain mix-blend-multiply mix-blend-multiply" />
                                        </div>
                                        <h3 className="font-medium text-sm">The Black Cap</h3>
                                        <p className="font-bold mt-1">$8.05</p>
                                    </div>
                                </div>
                            </>
                        )}
                        
                    </div>
                </div>

            </div>
        </div>
    );
}
