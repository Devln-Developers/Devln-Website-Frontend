"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import CalBookingPicker from "@/components/CalBookingPicker";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

export default function HeroSection() {
  return (
    <section className="relative app-px pt-[90px] md:pt-[110px] pb-[40px] md:pb-[60px] overflow-hidden bg-[#0a0a0a] min-h-[600px] flex items-center">
      <HeroScene />

      {/* Content sits above the 3D scene */}
      <div className="relative z-10 flex flex-col gap-5 md:gap-7 max-w-3xl">
        <h1 className="font-[family-name:var(--font-playfair)] text-[48px] md:text-[96px] font-extrabold leading-[1.05] tracking-tight text-white">
          We Build Digital
          <br />
          Products <span className="text-[#38D6C4]">That</span>
          <br />
          <span className="text-[#38D6C4]">Win</span> in the Real
          <br />
          World
        </h1>

        <p className="font-[family-name:var(--font-inter)] text-[16px] md:text-[20px] font-normal leading-relaxed text-[#a0a0a0]">
          DEVLN designs and develops digital products that scale{" "}
          <br className="hidden md:block" /> by building long-term partnerships
          with founders,
          <br className="hidden md:block" /> operators, and fast-growing teams.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 md:gap-4 w-full sm:w-auto">
          <CalBookingPicker
            label="Let's Talk About Your Projects"
            buttonClassName="inline-flex items-center justify-center w-full sm:w-auto bg-[#38D6C4] text-white px-6 py-3 rounded-[10px] text-[16px] font-semibold font-[family-name:var(--font-inter)] hover:bg-[#2ec4b4] transition-colors cursor-pointer"
          />
          <Link
            href="/#products"
            className="inline-flex items-center justify-center w-full sm:w-auto border-2 border-[#38D6C4] text-[#38D6C4] px-6 py-[10px] rounded-[10px] font-[family-name:var(--font-inter)] text-[16px] font-semibold hover:bg-[#38D6C4] hover:text-white transition-colors"
          >
            See Our Products
          </Link>
        </div>
      </div>
    </section>
  );
}
