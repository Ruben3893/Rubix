"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // basic mock login that redirects to profile.
        router.push('/profile');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
            <h1 className="text-4xl font-light tracking-widest uppercase mb-12">Login</h1>
            <form onSubmit={handleLogin} className="flex flex-col gap-6 w-full max-w-sm">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="EMAIL"
                    className="bg-transparent border-b border-gray-600 focus:border-white outline-none p-2 text-sm tracking-widest uppercase transition-colors"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="PASSWORD"
                    className="bg-transparent border-b border-gray-600 focus:border-white outline-none p-2 text-sm tracking-widest uppercase transition-colors"
                    required
                />
                <button
                    type="submit"
                    className="mt-8 border border-white py-3 uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-black transition-colors"
                >
                    Sign In
                </button>
            </form>
        </div>
    );
}
