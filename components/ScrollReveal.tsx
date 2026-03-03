'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface Props {
  children: ReactNode
  delay?: number        // stagger delay in ms
  direction?: 'up' | 'left' | 'right'
  mobileDirection?: 'up' | 'left' | 'right'
}

export default function ScrollReveal({ children, delay = 0, direction = 'up', mobileDirection }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const setDir = () => {
      if (mobileDirection) {
        el.setAttribute('data-dir', window.innerWidth < 768 ? mobileDirection : direction)
      }
    }
    setDir()
    window.addEventListener('resize', setDir)

    let timer: ReturnType<typeof setTimeout>

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timer = setTimeout(() => el.classList.add('sr-visible'), delay)
        } else {
          clearTimeout(timer)
          el.classList.remove('sr-visible')
        }
      },
      { threshold: 0.08 }
    )

    observer.observe(el)
    return () => { clearTimeout(timer); observer.disconnect(); window.removeEventListener('resize', setDir) }
  }, [delay, direction, mobileDirection])

  return (
    <div ref={ref} data-dir={mobileDirection ? undefined : direction} className="sr-hidden">
      {children}
    </div>
  )
}
