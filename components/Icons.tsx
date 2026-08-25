import React from 'react'

type IconProps = {
  className?: string
}

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function IconPhone({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
      <path d="M6.5 3.5h3l1.2 3.2-1.8 1.1a13 13 0 0 0 6.3 6.3l1.1-1.8 3.2 1.2v3A1.5 1.5 0 0 1 18 18.5 14.5 14.5 0 0 1 5.5 6 1.5 1.5 0 0 1 6.5 3.5Z" />
    </svg>
  )
}

export function IconClock({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
      <circle cx="12" cy="12" r="8.25" />
      <path d="M12 8v4.2l2.6 1.6" />
    </svg>
  )
}

export function IconShield({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
      <path d="M12 3.5 19 6.2v5.3c0 4.3-2.9 7.3-7 8.5-4.1-1.2-7-4.2-7-8.5V6.2L12 3.5Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

export function IconTruck({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
      <path d="M3 16.5V8.2A1.7 1.7 0 0 1 4.7 6.5H13v10" />
      <path d="M13 10.5h4.2l3.3 3.4v2.6h-2" />
      <circle cx="7" cy="16.5" r="1.8" />
      <circle cx="16.5" cy="16.5" r="1.8" />
    </svg>
  )
}

export function IconFlatbed({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
      <path d="M3 15.5h18" />
      <path d="M5 15.5V9.5h7.5v6" />
      <path d="M12.5 12.5H19l1.5 3" />
      <circle cx="7.2" cy="17.6" r="1.4" />
      <circle cx="16.8" cy="17.6" r="1.4" />
    </svg>
  )
}

export function IconWrench({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
      <path d="M14.5 6.2a4 4 0 0 0-5.7 5.4L5 15.4a1.8 1.8 0 0 0 2.5 2.5l3.8-3.8a4 4 0 0 0 5.4-5.7l-2.4 2.4-1.8-1.8 2-1.8Z" />
    </svg>
  )
}

export function IconRoute({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
      <circle cx="6.5" cy="6.5" r="2" />
      <circle cx="17.5" cy="17.5" r="2" />
      <path d="M8.5 7.8c4 .2 7 2.2 7 6.2" />
    </svg>
  )
}

export function IconHeavy({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
      <path d="M4 17.5h16" />
      <path d="M7 17.5V8.5h6l4 4.5h3v4.5" />
      <path d="M13 8.5v4.5h4" />
    </svg>
  )
}

export function IconCash({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
      <rect x="3.5" y="6.5" width="17" height="11" rx="1.5" />
      <circle cx="12" cy="12" r="2.2" />
      <path d="M6 9.2v5.6M18 9.2v5.6" />
    </svg>
  )
}

export function IconPin({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
      <path d="M12 21s6.5-5.2 6.5-10A6.5 6.5 0 0 0 5.5 11c0 4.8 6.5 10 6.5 10Z" />
      <circle cx="12" cy="11" r="2.1" />
    </svg>
  )
}

export function IconStar({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="m12 3.4 2.2 4.6 5 .7-3.6 3.6.9 5.1L12 15.9 7.5 17.4l.9-5.1L4.8 8.7l5-.7L12 3.4Z"
      />
    </svg>
  )
}

export function IconCheck({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
      <path d="m5.5 12.5 4.2 4.2 8.8-9.4" />
    </svg>
  )
}

export function IconBuilding({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
      <path d="M5 20.5V5.5h9v15" />
      <path d="M14 10.5h5v10" />
      <path d="M8 8.5h3M8 12h3M8 15.5h3M16.5 13.5h1M16.5 16.5h1M3.5 20.5h17" />
    </svg>
  )
}

export function IconMail({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
      <rect x="3.5" y="6" width="17" height="12" rx="1.6" />
      <path d="m4.5 8 7.5 5.2L19.5 8" />
    </svg>
  )
}

export function IconArrow({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function IconMenu({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export function IconClose({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  )
}

export function LogoMark({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 40 40" aria-hidden="true">
      <rect width="40" height="40" rx="2" fill="currentColor" />
      <path
        d="M8 26h24M10 26v-8.2A1.8 1.8 0 0 1 11.8 16H22v10M22 19.5h6.2L32 23.2V26h-2"
        fill="none"
        stroke="#1c1917"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="14.2" cy="27.6" r="1.7" fill="#1c1917" />
      <circle cx="27.6" cy="27.6" r="1.7" fill="#1c1917" />
    </svg>
  )
}
