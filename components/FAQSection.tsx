"use client";

import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    question: "What is DEVLN?",
    answer:
      "DEVLN is a product engineering agency that builds high-performance websites, mobile applications, SaaS platforms, and internal business tools. We design systems that generate revenue and reduce operating problems.",
  },
  {
    question: "How much does a project cost?",
    answer:
      "Pricing depends on scope and timeline. After a short call, we share a clear estimate with milestones.",
  },
  {
    question: "How long does it take to build an MVP?",
    answer:
      "Most MVPs are delivered within 6–12 weeks depending on complexity and the features required.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes — we offer maintenance plans, feature updates, and dedicated support packages post-launch.",
  },
  {
    question: "Can you work with our existing app/website?",
    answer:
      "Absolutely. We regularly audit, redesign, and extend existing codebases and products.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#041436] py-10 md:py-14">
      <div className="app-px">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">

          {/* Left */}
          <div className="flex flex-col gap-6">
            <h2 className="font-[family-name:var(--font-playfair)] text-[40px] md:text-[56px] font-extrabold leading-tight">
              <span className="text-white">Frequently Asked</span><br />
              <span className="text-[#38D6C4]">Questions</span>
            </h2>
            <p className="font-[family-name:var(--font-inter)] text-[18px] font-normal text-[#747474]">
              What do you need help with
            </p>
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center bg-[#38D6C4] text-white px-6 py-3 rounded-[10px] font-[family-name:var(--font-inter)] text-[16px] font-semibold hover:bg-[#2ec4b4] transition-colors"
              >
                Ask a Question
              </Link>
            </div>
          </div>

          {/* Right — Accordion */}
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className="rounded-xl border border-white/10 transition-colors duration-200"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left gap-4 cursor-pointer"
                  >
                    <span className="font-[family-name:var(--font-inter)] text-[18px] font-normal text-[#747474]">
                      {faq.question}
                    </span>
                    <svg
                      className={`flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-90 text-white" : "text-[#747474]"}`}
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5">
                      <p className="font-[family-name:var(--font-inter)] text-[18px] font-normal text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
