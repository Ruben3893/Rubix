"use client";

import React from 'react';
import { UserDashboard } from '@/components/UserDashboard';
import { Navbar } from '@/components/Navbar';

export default function ProfilePage() {
    return (
        <main className="bg-[#00172D] min-h-screen">
            <Navbar />
            <UserDashboard />
        </main>
    );
}
