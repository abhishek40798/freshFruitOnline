"use client";

import HeroTopSection from "@/components/hero-section";
import ListSection from "@/components/list-section";
import ProductSection from "@/components/product-section";

export default function Home() {
  return (
    <>
      <HeroTopSection />
      <div style={{ backgroundColor: "#f5f5f5" }}>
        <ListSection />
      </div>
      <ProductSection />
    </>
  );
}
