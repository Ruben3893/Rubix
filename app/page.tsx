"use client";

import { Navbar } from "@/components/Navbar";
import { ProductHero } from "@/components/ProductHero";
import { CompleteTheLook } from "@/components/CompleteTheLook";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-rubix-dark min-h-screen text-white selection:bg-rubix-gold selection:text-rubix-dark relative">
      <Navbar />

      {/* Hero Section */}
      <section id="collections">
        <ProductHero />
      </section>

      {/* Complete The Look Section */}
      <section id="bespeak">
        <CompleteTheLook />
      </section>

      {/* Journal Section (Placeholder for nav) */}
      <section id="journal" />

      {/* Footer */}
      <Footer />

      {/* Optional: Simple Scroll Progress Element could be added here if desired */}
    </main>
  );
}
