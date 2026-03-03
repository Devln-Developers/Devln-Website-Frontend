'use client'

import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { getCalApi } from '@calcom/embed-react'

const BOOKING_OPTIONS = [
  { label: '15-minute call',  duration: '15 min', link: 'devln-kysgxs/15min'          },
  { label: '30-minute call',  duration: '30 min', link: 'devln-kysgxs/30min'          },
  { label: '1-hour meeting',  duration: '60 min', link: 'devln-kysgxs/1-hour-meeting' },
]

interface CalBookingPickerProps {
  mobileStyle?: boolean
  label?: string
  buttonClassName?: string
}

export default function CalBookingPicker({
  mobileStyle = false,
  label,
  buttonClassName,
}: CalBookingPickerProps) {
  const [open, setOpen] = useState(false)
  const [dropdownStyle, setDropdownStyle] = useState<React.CSSProperties>({})
  const buttonRef = useRef<HTMLButtonElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const calRef = useRef<any>(null)

  useEffect(() => {
    ;(async () => {
      const cal = await getCalApi({ namespace: 'devln' })
      cal('ui', { hideEventTypeDetails: false, layout: 'month_view' })
      calRef.current = cal
    })()
  }, [])

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as Node
      if (
        buttonRef.current && !buttonRef.current.contains(target) &&
        dropdownRef.current && !dropdownRef.current.contains(target)
      ) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handleOpen = () => {
    if (!open && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      if (mobileStyle) {
        setDropdownStyle({
          position: 'fixed',
          bottom: window.innerHeight - rect.top + 8,
          left: rect.left,
          right: window.innerWidth - rect.right,
          zIndex: 9999,
        })
      } else {
        setDropdownStyle({
          position: 'fixed',
          top: rect.bottom + 8,
          right: window.innerWidth - rect.right,
          zIndex: 9999,
        })
      }
    }
    setOpen(o => !o)
  }

  const handleSelect = (link: string) => {
    setOpen(false)
    if (calRef.current) {
      calRef.current('modal', { calLink: link, config: { layout: 'month_view' } })
    }
  }

  const dropdown = open ? (
    <div
      ref={dropdownRef}
      style={dropdownStyle}
      className="bg-white rounded-2xl shadow-xl border border-gray-100 py-2 min-w-[200px]"
    >
      {BOOKING_OPTIONS.map(opt => (
        <button
          key={opt.link}
          onClick={() => handleSelect(opt.link)}
          className="cursor-pointer w-full flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-[#D6F5F2] hover:text-[#38D6C4] transition-colors text-left"
        >
          <span className="font-medium">{opt.label}</span>
          <span className="text-xs text-gray-400 ml-4">{opt.duration}</span>
        </button>
      ))}
    </div>
  ) : null

  return (
    <>
      <button
        ref={buttonRef}
        onClick={handleOpen}
        className={
          buttonClassName ?? (
            mobileStyle
              ? 'cursor-pointer mt-3 w-full bg-[#38D6C4] text-white px-5 py-3 rounded-[10px] text-sm font-semibold text-center hover:bg-[#2ec4b4] transition-colors'
              : 'cursor-pointer inline-flex items-center bg-[#38D6C4] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#2ec4b4] transition-colors'
          )
        }
      >
        {label ?? "Let\u2019s Call"}
      </button>

      {typeof document !== 'undefined' && createPortal(dropdown, document.body)}
    </>
  )
}
