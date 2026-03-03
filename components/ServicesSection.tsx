"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const services = [
  {
    number: "01",
    title: "UI UX Design",
    tags: [
      "Mobile App Design",
      "Website Design",
      "Web App Design",
      "Graphic Design",
      "Branding & Identity",
    ],
    description:
      "We design experiences that are simple, fast, and instantly understood from early wireframes to pixel-perfect UI. Whether you're launching an MVP or overhauling an existing product, we craft interfaces that delight users and drive conversions.",
    includes: [
      "User research & persona mapping",
      "Wireframes & interactive prototypes",
      "Design systems & component libraries",
      "Usability testing & iterative refinement",
    ],
  },
  {
    number: "02",
    title: "Development",
    tags: [
      "App Development",
      "Web Development",
      "SaaS",
      "Custom Software",
      "API Integration",
    ],
    description:
      "We build robust, scalable applications engineered for your business goals. From lean MVPs to enterprise-grade platforms, our team delivers clean, maintainable code paired with modern architecture that grows with your product.",
    includes: [
      "Full-stack frontend & backend development",
      "RESTful APIs & third-party integrations",
      "Cloud deployment & CI/CD pipelines",
      "Performance tuning, security & code reviews",
    ],
  },
  {
    number: "03",
    title: "SEO",
    tags: [
      "On-Page SEO",
      "Technical SEO",
      "Content Strategy",
      "Link Building",
      "Analytics & Reporting",
    ],
    description:
      "We elevate your digital presence with data-driven SEO that ranks you higher, attracts qualified traffic, and turns visitors into customers covering every layer from technical health to authoritative content.",
    includes: [
      "In-depth keyword research & site audit",
      "Technical on-page optimization",
      "Content strategy & copywriting",
      "Backlink building & monthly performance reports",
    ],
  },
  {
    number: "04",
    title: "Video Editing",
    tags: [
      "Short-form Reels",
      "Brand Films",
      "Social Media Content",
      "Motion Graphics",
      "YouTube Production",
    ],
    description:
      "We produce compelling video content that tells your story and moves your audience from punchy social reels and YouTube episodes to polished brand films with cinematic quality.",
    includes: [
      "Professional color grading & audio mastering",
      "Motion graphics & animated titles",
      "Multi-platform format delivery (9:16, 16:9, 1:1)",
      "Fast turnaround with structured revision rounds",
    ],
  },
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger point: 40% from top of viewport
      const triggerY = window.scrollY + window.innerHeight * 0.4;
      let next = 0;
      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        const elTop = el.getBoundingClientRect().top + window.scrollY;
        if (triggerY >= elTop) next = i;
      });
      setActiveIndex(next);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // set on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-white divide-y divide-gray-200">
      {services.map((service, i) => {
        const isActive = activeIndex === i;
        return (
          <div
            key={service.number}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            className={`w-full flex flex-col justify-center transition-all duration-500 ${
              isActive
                ? "bg-[#041436] opacity-100"
                : "bg-white opacity-40 blur-[0.3px]"
            }`}
          >
            <div className="app-px py-10 md:py-14">
              <div className="flex items-start gap-4">
                <span className="text-xs font-medium mt-2 w-6 flex-shrink-0 text-gray-400">
                  {service.number}
                </span>

                <div className="flex-1">
                  {/* Title */}
                  <h3
                    className={`font-[family-name:var(--font-inter)] text-[36px] font-bold leading-tight transition-colors duration-500 ${
                      isActive ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {service.title}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 md:gap-4 mt-3">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`font-[family-name:var(--font-inter)] inline-flex items-center gap-1.5 font-normal transition-colors duration-500
                          border rounded-full px-3 py-1 text-[13px]
                          md:border-0 md:rounded-none md:px-0 md:py-0 md:text-[16px]
                          ${isActive ? "text-white border-white" : "text-gray-500 border-gray-400"}`}
                      >
                        <Image
                          src={
                            isActive
                              ? "/assets/icons/White-Star.svg"
                              : "/assets/icons/Gray-Star.svg"
                          }
                          alt=""
                          width={12}
                          height={12}
                          className="flex-shrink-0"
                        />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Expanded content — visible only when active */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      isActive
                        ? "max-h-[600px] opacity-100 mt-6"
                        : "max-h-0 opacity-0 mt-0"
                    }`}
                  >
                    {/* Description — desktop only */}
                    <p className="hidden md:block font-[family-name:var(--font-inter)] text-[16px] font-normal text-gray-300 leading-relaxed max-w-2xl">
                      {service.description}
                    </p>

                    {/* What's Included — desktop only */}
                    <div className="hidden md:block mt-6">
                      <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">
                        What&apos;s Included
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8">
                        {service.includes.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-[15px] text-gray-300 font-[family-name:var(--font-inter)]"
                          >
                            <Image
                              src="/assets/icons/White-Star.svg"
                              alt=""
                              width={10}
                              height={10}
                              className="flex-shrink-0 mt-1"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="mt-4 md:mt-8">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 border border-white text-white px-6 py-3 rounded-[10px] font-[family-name:var(--font-inter)] text-[16px] font-semibold hover:bg-white hover:text-[#041436] transition-colors"
                      >
                        Discuss Project
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
