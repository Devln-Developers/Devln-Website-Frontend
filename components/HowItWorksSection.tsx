"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const RADIUS = 240;
const SIZE = RADIUS * 2 + 160; // 640

const steps = [
  {
    label: "Discovery Call",
    angle: 270, // top
    imageSrc: "/assets/icons/Discovery%20Call.svg",
  },
  {
    label: "Scope & Proposal",
    angle: 0, // right
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 2l5 5h-5V4zM8 17v-1h8v1H8zm0-3v-1h8v1H8zm0-3V10h5v1H8z" />
      </svg>
    ),
  },
  {
    label: "Design & Planning",
    angle: 90, // bottom
    imageSrc: "/assets/icons/Design%20%26%20Planning.svg",
  },
  {
    label: "Build & Launch",
    angle: 180, // left
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
];

export default function HowItWorksSection() {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
  const labelRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const dotRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);

  useEffect(() => {
    // Scale orbit to fit container width
    const applyScale = () => {
      if (!orbitRef.current || !wrapperRef.current) return;
      const available = wrapperRef.current.clientWidth;
      const scale = Math.min(1, available / SIZE);
      const excess = SIZE * (1 - scale);
      orbitRef.current.style.transform = `scale(${scale})`;
      orbitRef.current.style.marginTop = `-${excess / 2}px`;
      orbitRef.current.style.marginBottom = `-${excess / 2}px`;
    };

    applyScale();
    window.addEventListener("resize", applyScale);

    const baseAngles = steps.map((s) => s.angle);
    let currentAngle = 0;
    let activeIdx = -1;
    let raf: number;

    const animate = () => {
      if (!isPausedRef.current) {
        currentAngle = (currentAngle + 0.18) % 360;
      }

      // Find which node is closest to the top spotlight (270°)
      let closestIdx = 0;
      let closestDist = Infinity;

      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        const deg = (baseAngles[i] + currentAngle) % 360;
        const dist = Math.min(Math.abs(deg - 270), 360 - Math.abs(deg - 270));
        if (dist < closestDist) {
          closestDist = dist;
          closestIdx = i;
        }
        const rad = (deg * Math.PI) / 180;
        const x = Math.cos(rad) * RADIUS;
        const y = Math.sin(rad) * RADIUS;
        el.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
      });

      // Apply active highlight directly in DOM to avoid React re-renders
      if (closestIdx !== activeIdx) {
        // Reset previous
        if (activeIdx >= 0) {
          if (iconRefs.current[activeIdx]) {
            iconRefs.current[activeIdx]!.style.boxShadow = "";
            iconRefs.current[activeIdx]!.style.transform = "scale(1)";
          }
          if (labelRefs.current[activeIdx]) {
            labelRefs.current[activeIdx]!.style.color = "";
          }
        }
        // Highlight new
        if (iconRefs.current[closestIdx]) {
          iconRefs.current[closestIdx]!.style.boxShadow =
            "0 0 0 3px #38D6C4, 0 0 20px 8px rgba(56,214,196,0.35)";
          iconRefs.current[closestIdx]!.style.transform = "scale(1.2)";
        }
        if (labelRefs.current[closestIdx]) {
          labelRefs.current[closestIdx]!.style.color = "#38D6C4";
        }
        activeIdx = closestIdx;
      }

      // Traveling glow dot — runs 30° ahead of the first node
      if (dotRef.current) {
        const leadAngle = (baseAngles[0] + currentAngle + 30) % 360;
        const rad = (leadAngle * Math.PI) / 180;
        const x = Math.cos(rad) * RADIUS;
        const y = Math.sin(rad) * RADIUS;
        dotRef.current.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
      }

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", applyScale);
    };
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="app-px">
        <h2 className="font-[family-name:var(--font-playfair)] text-[40px] md:text-[56px] font-extrabold leading-tight text-black mb-16">
          How DevLn <span className="text-[#38D6C4]">Works</span>
        </h2>

        {/* Orbit container — scales to fit on mobile */}
        <div ref={wrapperRef} className="flex justify-center overflow-hidden">
          <div
            ref={orbitRef}
            className="relative flex-shrink-0"
            style={{
              width: `${SIZE}px`,
              height: `${SIZE}px`,
              transformOrigin: "center",
            }}
          >
            {/* Dashed orbit ring */}
            <div
              className="absolute rounded-full"
              style={{
                width: `${RADIUS * 2}px`,
                height: `${RADIUS * 2}px`,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                border: "2px dashed rgba(19,196,178,0.45)",
              }}
            />

            {/* Traveling glow dot */}
            <div
              ref={dotRef}
              className="absolute rounded-full pointer-events-none"
              style={{
                width: 10,
                height: 10,
                top: "50%",
                left: "50%",
                background: "#38D6C4",
                boxShadow: "0 0 8px 4px rgba(56,214,196,0.7)",
                transform: `translate(calc(-50% + ${RADIUS}px), -50%)`,
                zIndex: 10,
              }}
            />

            {/* Center glow — pulsing */}
            <div
              className="absolute rounded-full hiw-glow-pulse"
              style={{
                width: `${RADIUS * 2}px`,
                height: `${RADIUS * 2}px`,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background:
                  "radial-gradient(circle, rgba(4,20,54,0.7) 0%, rgba(56,214,196,0.7) 100%)",
                filter: "blur(6px)",
              }}
            />

            {/* Center text */}
            <div
              className="absolute flex items-center justify-center"
              style={{
                width: `${RADIUS * 2}px`,
                height: `${RADIUS * 2}px`,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <p className="text-center text-[45px] font-bold text-gray-900 leading-tight select-none">
                Agile
                <br />
                Development
                <br />
                Methodology
              </p>
            </div>

            {/* Orbiting step items */}
            {steps.map((step, i) => {
              const initRad = (step.angle * Math.PI) / 180;
              const initX = Math.cos(initRad) * RADIUS;
              const initY = Math.sin(initRad) * RADIUS;
              return (
                <div
                  key={step.label}
                  ref={(el) => {
                    itemRefs.current[i] = el;
                  }}
                  className="absolute flex flex-col items-center gap-2 cursor-pointer"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: `translate(calc(-50% + ${initX}px), calc(-50% + ${initY}px))`,
                  }}
                  onMouseEnter={() => {
                    isPausedRef.current = true;
                  }}
                  onMouseLeave={() => {
                    isPausedRef.current = false;
                  }}
                >
                  <div
                    ref={(el) => {
                      iconRefs.current[i] = el;
                    }}
                    className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center shadow-lg"
                    style={{
                      transition: "box-shadow 0.4s ease, transform 0.4s ease",
                    }}
                  >
                    {"imageSrc" in step ? (
                      <Image
                        src={step.imageSrc as string}
                        alt={step.label}
                        width={28}
                        height={28}
                        className="w-7 h-7 object-contain"
                      />
                    ) : (
                      step.icon
                    )}
                  </div>
                  <span
                    ref={(el) => {
                      labelRefs.current[i] = el;
                    }}
                    className="text-[18px] font-bold text-gray-700 whitespace-nowrap"
                    style={{ transition: "color 0.4s ease" }}
                  >
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes hiw-glow-pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.45; }
        }
        .hiw-glow-pulse {
          animation: hiw-glow-pulse 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
