import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function ProductsSection() {
  return (
    <section className="bg-[#E6F9F7] py-16 md:py-20">
      <div className="app-px">
        {/* Section Heading */}
        <h2 className="font-[family-name:var(--font-playfair)] text-[40px] md:text-[56px] font-extrabold leading-tight text-black mb-12">
          Products That <span className="text-[#38D6C4]">Inspire</span>
        </h2>

        {/* Product Row */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — Product Info */}
          <ScrollReveal direction="left">
            <div className="flex flex-col gap-5">
              <h3 className="font-[family-name:var(--font-inter)] text-[28px] font-bold text-black">
                Aurylius
              </h3>
              <p className="font-[family-name:var(--font-inter)] text-[16px] font-normal text-[#747474] leading-relaxed">
                Aurylius is a modern stoic self-improvement app for high
                <br className="hidden md:block" />
                performers. Track goals. Master discipline. Build an unshakable
                mind with tools
                <br className="hidden md:block" />
                inspired by Marcus Aurelius and timeless Stoic philosophy.
              </p>

              {/* Download Buttons — Google left, Apple right */}
              <div className="flex items-center gap-3 mt-2">
                <a
                  href="https://play.google.com/store/apps/details?id=com.aurylius.auryliusapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white border border-gray-300 text-black px-4 py-2.5 rounded-[10px] text-[14px] font-semibold hover:bg-gray-50 transition-colors"
                >
                  <Image
                    src="/assets/icons/Google-Logo.svg"
                    alt="Google"
                    width={18}
                    height={18}
                    className="w-[18px] h-[18px] object-contain"
                  />
                  Download the App
                </a>
                <a
                  href="https://apps.apple.com/us/app/aurylius/id6755753775"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white border border-gray-300 text-black px-4 py-2.5 rounded-[10px] text-[14px] font-semibold hover:bg-gray-50 transition-colors"
                >
                  <Image
                    src="/assets/icons/Apple-Logo.svg"
                    alt="Apple"
                    width={18}
                    height={18}
                    className="w-[18px] h-[18px] object-contain"
                  />
                  Download the App
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Phone Mockups */}
          <ScrollReveal direction="right" mobileDirection="up" delay={150}>
            <div className="flex items-end justify-center md:justify-end gap-6">
              <div className="mb-8">
                <Image
                  src="/assets/icons/Small-Phone.svg"
                  alt="Aurylius app screenshot"
                  width={180}
                  height={340}
                  className="w-[150px] md:w-[180px] h-auto drop-shadow-xl"
                />
              </div>
              <div>
                <Image
                  src="/assets/icons/Big-Phone.svg"
                  alt="Aurylius app screenshot"
                  width={220}
                  height={420}
                  className="w-[180px] md:w-[220px] h-auto drop-shadow-xl"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
