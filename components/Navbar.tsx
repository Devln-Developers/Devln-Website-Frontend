'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import CalBookingPicker from '@/components/CalBookingPicker'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/#products' },
  { label: 'Services', href: '/#services' },
  { label: 'Portfolio', href: 'https://www.figma.com/design/1W64j47hJGeyCi0kRnOHN8/Devln-Portfolio?node-id=6-151&p=f&t=f1CmbC2E7znzM9nQ-0', external: true },
  { label: 'Contact Us', href: '/contact' },
]

/* ============================================================
   VERSION 1 — Full pill at the top (logo + links + CTA inside)
   To restore: uncomment the block below and delete Version 2
   ============================================================

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  useEffect(() => {
    ;(async () => {
      const cal = await getCalApi({ namespace: 'devln' })
      cal('ui', { hideEventTypeDetails: false, layout: 'month_view' })
    })()
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-[60px] pt-4">

      // Single pill — logo + links + button all inside
      <div className="hidden md:flex items-center justify-between w-full bg-[#D6F5F2] rounded-full shadow-md px-4 py-2 gap-6">

        // Logo
        <Link href="/" className="flex-shrink-0 pl-2">
          <Image
            src="/assets/icons/DevLn-Logo-Without-Text.svg"
            alt="DevLn"
            width={56}
            height={36}
            priority
          />
        </Link>

        // Nav Links
        <div className="flex items-center gap-1">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative px-5 py-2 text-sm font-medium transition-colors rounded-full text-gray-600 hover:text-[#38D6C4]"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={`relative px-5 py-2 text-sm font-medium transition-colors rounded-full ${
                  isActive(link.href)
                    ? 'text-[#38D6C4]'
                    : 'text-gray-600 hover:text-[#38D6C4]'
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-[70%] h-[2px] bg-[#38D6C4] rounded-full" />
                )}
              </Link>
            )
          )}
        </div>

        // CTA Button
        <button
          data-cal-namespace="devln"
          data-cal-link={CAL_LINK}
          data-cal-config='{"layout":"month_view"}'
          className="flex-shrink-0 inline-flex items-center bg-[#38D6C4] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#2ec4b4] transition-colors cursor-pointer"
        >
          Let's Talk →
        </button>
      </div>

      // Mobile header
      <div className="md:hidden flex items-center justify-between w-full bg-[#D6F5F2] rounded-full shadow-md px-5 py-3">
        <Link href="/">
          <Image
            src="/assets/icons/DevLn-Logo-Without-Text.svg"
            alt="DevLn"
            width={50}
            height={32}
            priority
          />
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      // Mobile dropdown
      {isOpen && (
        <div className="md:hidden absolute top-[70px] left-[60px] right-[60px] bg-white rounded-2xl shadow-lg px-5 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`px-4 py-2.5 rounded-full text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? 'text-[#38D6C4] bg-[#D6F5F2]'
                  : 'text-gray-700 hover:bg-[#D6F5F2] hover:text-[#38D6C4]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            data-cal-namespace="devln"
            data-cal-link={CAL_LINK}
            data-cal-config='{"layout":"month_view"}'
            onClick={() => setIsOpen(false)}
            className="mt-3 bg-[#38D6C4] text-white px-5 py-3 rounded-[10px] text-sm font-semibold text-center hover:bg-[#2ec4b4] transition-colors cursor-pointer"
          >
            Let's Talk
          </button>
        </div>
      )}
    </nav>
  )
}
============================================================ */

/* ============================================================
   VERSION 2 — Logo top-left | CTA top-right | Nav pill bottom-center
   ============================================================ */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hash, setHash] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Scroll-based active section detection — works regardless of how user navigates
  useEffect(() => {
    if (pathname !== '/') {
      setHash('')
      return
    }

    const sections = navLinks
      .filter(l => !l.external && l.href.startsWith('/#'))
      .map(l => ({ id: l.href.slice(2), hash: l.href.slice(1) }))

    const handleScroll = () => {
      const triggerY = window.scrollY + window.innerHeight * 0.3
      let active = ''
      for (const { id, hash: h } of sections) {
        const el = document.getElementById(id)
        if (!el) continue
        if (triggerY >= el.getBoundingClientRect().top + window.scrollY) active = h
      }
      setHash(active)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // set correct state on mount / page load
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/' && hash === ''
    if (href.includes('#')) return pathname === '/' && hash === href.slice(href.indexOf('#'))
    return pathname.startsWith(href)
  }

  // Sticky-on-scroll: navbar starts at top in normal flow, then fixes to top after scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* ── Desktop top bar: Logo left, CTA right ── */}
      <header className="hidden md:flex fixed top-0 left-0 right-0 z-50 items-center justify-between px-[60px] pt-5">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/assets/icons/DevLn-Logo-Without-Text.svg"
            alt="DevLn"
            width={56}
            height={36}
            priority
          />
        </Link>
        <CalBookingPicker />
      </header>

      {/* ── Mobile top pill: starts at top, sticks after scroll ── */}
      <div className="md:hidden fixed top-4 left-0 right-0 z-50 flex justify-center">
        <div className="flex items-center justify-between gap-6 bg-[#D6F5F2] rounded-full shadow-lg px-5 py-2.5">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/assets/icons/DevLn-Logo-Without-Text.svg"
              alt="DevLn"
              width={40}
              height={26}
              priority
            />
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-[#38D6C4] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ── Nav pill — starts top, moves to bottom on scroll ── */}
      <nav className={`hidden md:flex left-0 right-0 z-50 justify-center pointer-events-none transition-all duration-500 ${
        scrolled ? 'fixed bottom-6' : 'absolute top-4'
      }`}>
        <div className="pointer-events-auto flex items-center gap-1 bg-[#D6F5F2] rounded-full shadow-lg px-4 py-2">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative px-5 py-2 text-sm font-medium transition-colors rounded-full text-gray-600 hover:text-[#38D6C4]"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={`relative px-5 py-2 text-sm font-medium transition-colors rounded-full ${
                  isActive(link.href)
                    ? 'text-[#38D6C4]'
                    : 'text-gray-600 hover:text-[#38D6C4]'
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-[70%] h-[2px] bg-[#38D6C4] rounded-full" />
                )}
              </Link>
            )
          )}
        </div>
      </nav>

      {/* ── Mobile dropdown ── */}
      {isOpen && (
        <div className="md:hidden fixed top-[68px] left-4 right-4 z-50 bg-white rounded-2xl shadow-lg px-5 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`px-4 py-2.5 rounded-full text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? 'text-[#38D6C4] bg-[#D6F5F2]'
                  : 'text-gray-700 hover:bg-[#D6F5F2] hover:text-[#38D6C4]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <CalBookingPicker mobileStyle />
        </div>
      )}
    </>
  )
}
