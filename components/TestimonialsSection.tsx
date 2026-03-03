"use client";

import { useState } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Designer",
    bgColor: "#7C5CBF",
    initials: "SJ",
    quote:
      '"Working with DevLn transformed our product vision into reality. Their attention to detail and technical expertise delivered results that truly exceeded our expectations."',
  },
  {
    name: "Edward Alexander",
    role: "Digital Marketer",
    bgColor: "#E07B39",
    initials: "EA",
    quote:
      '"Aurylius is a modern stoic self-improvement app for high performers. Track goals. Master discipline. Build an unshakable mind with tools inspired by Marcus Aurelius and timeless Stoic philosophy".',
  },
  {
    name: "Emily Chen",
    role: "Startup Founder",
    bgColor: "#E8A0B4",
    initials: "EC",
    quote:
      '"DevLn built our MVP in record time without sacrificing quality. The communication was seamless and the end result was exactly what we envisioned for our platform."',
  },
];

// ── Desktop S-curve constants ──────────────────────────────────────────────
const VIEW_W = 240;
const PADDING_Y = 32;
const SPACING = 78;
const LEFT_X = 22;
const RIGHT_X = 66;

function computePositions(n: number) {
  return Array.from({ length: n }, (_, i) => ({
    cx: i % 2 === 0 ? LEFT_X : RIGHT_X,
    cy: PADDING_Y + i * SPACING,
  }));
}

// Catmull-Rom → cubic bezier: derives control points from neighbouring positions
// so each segment is a clean arc with C1 continuity — no internal inflections/waviness.
function buildSPath(positions: { cx: number; cy: number }[]) {
  if (positions.length < 2) return "";
  const n = positions.length;

  // Mirror ghost points at both ends so the curve flows naturally
  const pts = [
    { cx: 2 * positions[0].cx - positions[1].cx, cy: 2 * positions[0].cy - positions[1].cy },
    ...positions,
    { cx: 2 * positions[n - 1].cx - positions[n - 2].cx, cy: 2 * positions[n - 1].cy - positions[n - 2].cy },
  ];

  let d = `M ${positions[0].cx} ${positions[0].cy}`;
  for (let i = 0; i < n - 1; i++) {
    const p0 = pts[i];
    const p1 = pts[i + 1];
    const p2 = pts[i + 2];
    const p3 = pts[i + 3];
    const cp1x = p1.cx + (p2.cx - p0.cx) / 6;
    const cp1y = p1.cy + (p2.cy - p0.cy) / 6;
    const cp2x = p2.cx - (p3.cx - p1.cx) / 6;
    const cp2y = p2.cy - (p3.cy - p1.cy) / 6;
    d += ` C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)}, ${cp2x.toFixed(1)} ${cp2y.toFixed(1)}, ${p2.cx} ${p2.cy}`;
  }
  return d;
}

// ── Mobile horizontal arc constants ───────────────────────────────────────
const MOBILE_W = 300;
const MOBILE_H = 195;
const MOBILE_TOP_Y = 45;
const MOBILE_BOTTOM_Y = 145;
// Control point Y so the cubic bezier passes through the midpoint at MOBILE_BOTTOM_Y
// Formula: ctrl = (midY - 0.25 * topY) / 0.75 → (145 - 11.25) / 0.75 ≈ 178
const MOBILE_CTRL_Y = Math.round((MOBILE_BOTTOM_Y - 0.25 * MOBILE_TOP_Y) / 0.75);
const MOBILE_LEFT_X = 35;
const MOBILE_RIGHT_X = MOBILE_W - 35;

// Positions along a parabolic arc: ends sit at MOBILE_TOP_Y, centre at MOBILE_BOTTOM_Y
function computeMobilePositions(n: number) {
  return Array.from({ length: n }, (_, i) => {
    const t = n === 1 ? 0.5 : i / (n - 1);
    const cx = MOBILE_LEFT_X + t * (MOBILE_RIGHT_X - MOBILE_LEFT_X);
    const cy = MOBILE_TOP_Y + (MOBILE_BOTTOM_Y - MOBILE_TOP_Y) * 4 * t * (1 - t);
    return { cx, cy };
  });
}

// Single smooth arc (one cubic bezier, symmetric) — no S-kink on mobile
function buildMobileArcPath() {
  return `M ${MOBILE_LEFT_X} ${MOBILE_TOP_Y} C ${MOBILE_LEFT_X} ${MOBILE_CTRL_Y}, ${MOBILE_RIGHT_X} ${MOBILE_CTRL_Y}, ${MOBILE_RIGHT_X} ${MOBILE_TOP_Y}`;
}

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(1);

  const n = testimonials.length;

  // Desktop
  const positions = computePositions(n);
  const viewH = PADDING_Y * 2 + (n - 1) * SPACING;
  const svgPath = buildSPath(positions);

  // Mobile
  const mobilePositions = computeMobilePositions(n);
  const mobileArcPath = buildMobileArcPath();

  return (
    <section className="bg-[#041436] py-10 md:py-14 overflow-hidden relative">

      {/* ── Background ellipses (Figma) ── */}
      {/* Right ellipse */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{ width: 1128, height: 1128, left: 312, top: -214, background: "#0C1B3C", zIndex: 0 }}
      />
      {/* Left ellipse */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{ width: 1104, height: 1104, left: -792, top: -202, background: "#0C1B3C", border: "1px solid #000", zIndex: 1 }}
      />

      <div className="app-px relative" style={{ zIndex: 2 }}>

        {/* Title */}
        <h2 className="font-[family-name:var(--font-playfair)] text-[40px] md:text-[56px] font-extrabold leading-tight text-white mb-12 md:mb-14">
          Our <span className="text-[#38D6C4]">Clients</span> Words
        </h2>

        {/* ── Mobile layout ── */}
        <div className="flex md:hidden flex-col items-center gap-6">
          {/* Arc + avatars */}
          <div className="relative" style={{ width: MOBILE_W, height: MOBILE_H }}>
            <svg
              className="absolute inset-0 pointer-events-none"
              width={MOBILE_W}
              height={MOBILE_H}
              viewBox={`0 0 ${MOBILE_W} ${MOBILE_H}`}
            >
              <path
                d={mobileArcPath}
                fill="none"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1.5"
              />
            </svg>

            {testimonials.map((t, i) => {
              const isActive = i === activeIndex;
              const { cx, cy } = mobilePositions[i];
              const size = isActive ? 56 : 40;
              return (
                <button
                  key={i}
                  onMouseEnter={() => setActiveIndex(i)}
                  onClick={() => setActiveIndex(i)}
                  className="absolute rounded-full flex items-center justify-center font-bold text-white"
                  style={{
                    backgroundColor: t.bgColor,
                    width: size,
                    height: size,
                    top: cy,
                    left: cx,
                    transform: "translate(-50%, -50%)",
                    fontSize: isActive ? "14px" : "11px",
                    opacity: isActive ? 1 : 0.55,
                    boxShadow: isActive ? "0 0 0 3px rgba(255,255,255,0.28)" : "none",
                    transition: "all 0.3s ease",
                    zIndex: isActive ? 2 : 1,
                  }}
                >
                  {t.initials}
                </button>
              );
            })}

            {/* Name + role — centred below the active avatar */}
            {(() => {
              const { cx, cy } = mobilePositions[activeIndex];
              const t = testimonials[activeIndex];
              return (
                <div
                  className="absolute pointer-events-none text-center"
                  style={{
                    top: cy + 34,
                    left: cx,
                    transform: "translateX(-50%)",
                    transition: "top 0.3s ease, left 0.3s ease",
                  }}
                >
                  <p className="font-[family-name:var(--font-inter)] text-[16px] font-semibold text-white leading-tight whitespace-nowrap">
                    {t.name}
                  </p>
                  <p className="font-[family-name:var(--font-inter)] text-[13px] font-normal mt-0.5 whitespace-nowrap" style={{ color: "#747474" }}>
                    {t.role}
                  </p>
                </div>
              );
            })()}
          </div>

          {/* Quote */}
          <p
            key={activeIndex}
            className="font-[family-name:var(--font-inter)] text-[17px] font-normal text-white leading-relaxed animate-fade-in text-left"
          >
            {testimonials[activeIndex].quote}
          </p>
        </div>

        {/* ── Desktop layout ── */}
        <div className="hidden md:flex items-center gap-12">
          {/* Left — S-curve + avatars */}
          <div
            className="flex-shrink-0 relative"
            style={{ width: VIEW_W, height: viewH }}
          >
            <svg
              className="absolute inset-0 pointer-events-none"
              width={VIEW_W}
              height={viewH}
              viewBox={`0 0 ${VIEW_W} ${viewH}`}
            >
              <path
                d={svgPath}
                fill="none"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1.5"
              />
            </svg>

            {testimonials.map((t, i) => {
              const isActive = i === activeIndex;
              const { cx, cy } = positions[i];
              const size = isActive ? 52 : 38;
              return (
                <button
                  key={i}
                  onMouseEnter={() => setActiveIndex(i)}
                  onClick={() => setActiveIndex(i)}
                  className="absolute rounded-full flex items-center justify-center font-bold text-white"
                  style={{
                    backgroundColor: t.bgColor,
                    width: size,
                    height: size,
                    top: cy,
                    left: cx,
                    transform: "translate(-50%, -50%)",
                    fontSize: isActive ? "14px" : "11px",
                    opacity: isActive ? 1 : 0.55,
                    boxShadow: isActive
                      ? "0 0 0 3px rgba(255,255,255,0.28)"
                      : "none",
                    transition: "all 0.3s ease",
                    zIndex: isActive ? 2 : 1,
                  }}
                >
                  {t.initials}
                </button>
              );
            })}

            {/* Name + role — floats right of the active avatar */}
            {(() => {
              const { cx, cy } = positions[activeIndex];
              const t = testimonials[activeIndex];
              return (
                <div
                  className="absolute pointer-events-none"
                  style={{
                    top: cy,
                    left: cx + 34,
                    transform: "translateY(-50%)",
                    transition: "top 0.3s ease, left 0.3s ease",
                  }}
                >
                  <p className="font-[family-name:var(--font-inter)] text-[18px] font-semibold text-white leading-tight whitespace-nowrap">
                    {t.name}
                  </p>
                  <p className="font-[family-name:var(--font-inter)] text-[14px] font-normal mt-0.5 whitespace-nowrap" style={{ color: "#747474" }}>
                    {t.role}
                  </p>
                </div>
              );
            })()}
          </div>

          {/* Right — Quote */}
          <div className="flex-1 min-w-0">
            <p
              key={activeIndex}
              className="font-[family-name:var(--font-inter)] text-[28px] font-normal text-white leading-relaxed animate-fade-in"
            >
              {testimonials[activeIndex].quote}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
