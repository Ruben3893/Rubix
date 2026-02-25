"use client";

import React, { useState } from 'react';

export default function ProfilePage() {
    const [twoFactorAuth, setTwoFactorAuth] = useState(false);
    const [earlyNotifications, setEarlyNotifications] = useState(false);
    const [darkModeEnforced, setDarkModeEnforced] = useState(true);

    return (
        <div className="min-h-screen bg-black text-white p-8 md:p-16">
            <h1 className="text-3xl font-light uppercase tracking-widest mb-12">Profile Preferences</h1>

            <div className="space-y-8 max-w-xl">
                <label className="flex justify-between items-center cursor-pointer group">
                    <span className="text-sm tracking-[0.1em] uppercase group-hover:text-gray-300 transition-colors">Two-Factor Authentication</span>
                    <div className="relative">
                        <input
                            type="checkbox"
                            className="sr-only"
                            checked={twoFactorAuth}
                            onChange={() => setTwoFactorAuth(!twoFactorAuth)}
                        />
                        <div className={`block w-14 h-8 rounded-full ${twoFactorAuth ? 'bg-white' : 'bg-gray-700'} transition-colors`}></div>
                        <div className={`dot absolute left-1 top-1 bg-black w-6 h-6 rounded-full transition-transform ${twoFactorAuth ? 'translate-x-6' : ''}`}></div>
                    </div>
                </label>

                <label className="flex justify-between items-center cursor-pointer group">
                    <span className="text-sm tracking-[0.1em] uppercase group-hover:text-gray-300 transition-colors">Early Access Notifications</span>
                    <div className="relative">
                        <input
                            type="checkbox"
                            className="sr-only"
                            checked={earlyNotifications}
                            onChange={() => setEarlyNotifications(!earlyNotifications)}
                        />
                        <div className={`block w-14 h-8 rounded-full ${earlyNotifications ? 'bg-white' : 'bg-gray-700'} transition-colors`}></div>
                        <div className={`dot absolute left-1 top-1 bg-black w-6 h-6 rounded-full transition-transform ${earlyNotifications ? 'translate-x-6' : ''}`}></div>
                    </div>
                </label>

                <label className="flex justify-between items-center cursor-pointer group">
                    <span className="text-sm tracking-[0.1em] uppercase group-hover:text-gray-300 transition-colors">Dark Mode Enforced</span>
                    <div className="relative">
                        <input
                            type="checkbox"
                            className="sr-only"
                            checked={darkModeEnforced}
                            onChange={() => setDarkModeEnforced(!darkModeEnforced)}
                        />
                        <div className={`block w-14 h-8 rounded-full ${darkModeEnforced ? 'bg-white' : 'bg-gray-700'} transition-colors`}></div>
                        <div className={`dot absolute left-1 top-1 bg-black w-6 h-6 rounded-full transition-transform ${darkModeEnforced ? 'translate-x-6' : ''}`}></div>
                    </div>
                </label>
            </div>
        </div>
    );
}
