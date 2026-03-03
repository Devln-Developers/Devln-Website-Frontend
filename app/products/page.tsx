"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const products = [
  {
    id: "aurylius",
    label: "Aurylius",
    name: "Aurylius",
    description:
      "Aurylius is a modern stoic self-improvement app for high-performers. Track goals. Master discipline. Build an unshakable mind with tools inspired by Marcus Aurelius and timeless Stoic philosophy.",
    website: "https://aurylius.com",
    stars: 5,
    ratingLabel: "Aurylius Ratings",
    ratingCount: "1000+",
    avatars: ["#7C5CBF", "#E07B39", "#E8A0B4"],
    smallPhone: "/assets/icons/Small-Phone.svg",
    bigPhone: "/assets/icons/Big-Phone.svg",
  },
  {
    id: "product-2",
    label: "Lorem Ipsum",
    name: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    website: "#",
    stars: 4,
    ratingLabel: "Product Ratings",
    ratingCount: "500+",
    avatars: ["#13C4B2", "#041436", "#E07B39"],
    smallPhone: "/assets/icons/Small-Phone.svg",
    bigPhone: "/assets/icons/Big-Phone.svg",
  },
  {
    id: "product-3",
    label: "Lorem Ipsum",
    name: "Lorem Ipsum",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    website: "#",
    stars: 5,
    ratingLabel: "Product Ratings",
    ratingCount: "2000+",
    avatars: ["#E8A0B4", "#7C5CBF", "#13C4B2"],
    smallPhone: "/assets/icons/Small-Phone.svg",
    bigPhone: "/assets/icons/Big-Phone.svg",
  },
];

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState(0);
  const product = products[activeTab];

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="app-px py-16 md:py-24">

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold italic text-gray-900 leading-tight mb-12 md:mb-16">
            Let&apos;s Download Our Apps for the Best Experience
          </h1>

          {/* Tabs */}
          <div className="flex items-center gap-8 border-b border-gray-200 mb-12 md:mb-16">
            {products.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActiveTab(i)}
                className={`pb-3 text-sm font-medium transition-colors cursor-pointer ${
                  i === activeTab
                    ? "text-gray-900 border-b-2 border-gray-900 -mb-px"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Product Detail */}
          <div className="grid md:grid-cols-2 gap-12 items-end">

            {/* Left — Info */}
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                {product.name}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                {product.description}
              </p>

              {/* Star rating */}
              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold text-gray-900 w-36">
                  {product.ratingLabel}
                </span>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Image
                      key={i}
                      src={
                        i < product.stars
                          ? "/assets/icons/White-Star.svg"
                          : "/assets/icons/Gray-Star.svg"
                      }
                      alt={i < product.stars ? "filled star" : "empty star"}
                      width={18}
                      height={18}
                    />
                  ))}
                </div>
              </div>

              {/* User count */}
              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold text-gray-900 w-36">
                  {product.ratingLabel}
                </span>
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-gray-900">
                    {product.ratingCount}
                  </span>
                  <div className="flex -space-x-2">
                    {product.avatars.map((color, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-2">
                <Link
                  href={product.website}
                  className="inline-flex items-center gap-2 bg-[#13C4B2] text-white px-6 py-3 rounded-button text-sm font-medium hover:bg-[#0fb3a3] transition-colors"
                >
                  Visit Website →
                </Link>
              </div>
            </div>

            {/* Right — Phone mockups */}
            <div className="flex items-end justify-center md:justify-end gap-6">
              <div className="mb-8">
                <Image
                  src={product.smallPhone}
                  alt={`${product.name} screenshot detail`}
                  width={180}
                  height={340}
                  className="w-[150px] md:w-[180px] h-auto drop-shadow-xl"
                />
              </div>
              <div>
                <Image
                  src={product.bigPhone}
                  alt={`${product.name} screenshot`}
                  width={220}
                  height={420}
                  className="w-[180px] md:w-[220px] h-auto drop-shadow-xl"
                />
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
