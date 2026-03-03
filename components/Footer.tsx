import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#041436]">
      <div className="app-px py-8 flex flex-col items-center gap-3 md:flex-row md:items-center md:justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/assets/icons/DevLn-Logo-Black.svg"
            alt="DevLn"
            width={202}
            height={42}
            className="w-[120px] md:w-[202px] h-auto"
          />
        </Link>

        {/* Copyright + Privacy */}
        <p className="font-[family-name:var(--font-inter)] text-[11px] md:text-[14px] font-normal text-[#747474] text-center md:text-left">
          © 2026 DEVLN, All right reserved.
          <br />
          <Link
            href="/privacy-policy"
            className="hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}
