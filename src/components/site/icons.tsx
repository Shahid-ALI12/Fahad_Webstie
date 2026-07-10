import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

/* ── Rating Platforms ──────────────────────────────────── */

export function GoogleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="100%" height="100%" {...props}>
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z"/>
    </svg>
  )
}

export function ClutchIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="100%" height="100%" {...props}>
      <rect width="24" height="24" rx="4" fill="#FF3D2E"/>
      <text x="12" y="16" textAnchor="middle" fontSize="11" fontWeight="700" fill="white" fontFamily="Inter, sans-serif">C</text>
    </svg>
  )
}

export function UpworkIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="100%" height="100%" {...props}>
      <path fill="#14A800" d="M24 12c0-3.31-2.69-6-6-6-1.61 0-3.09.62-4.18 1.66l.01-.01C12.46 9.39 11.4 12.5 10.05 14c-.86.96-1.94 1.5-3.05 1.5-2.21 0-4-1.79-4-4s1.79-4 4-4c.95 0 1.85.32 2.6.92.36-.65.7-1.32 1.01-1.97C9.86 5.55 8.5 5 7 5 3.69 5 1 7.69 1 11s2.69 6 6 6c1.95 0 3.7-.94 4.85-2.4.86 1.5 2.16 2.4 3.65 2.4 1.65 0 3-.94 3.85-2.4.4.91.95 1.7 1.6 2.3l1.05-1.45c-.85-.71-1.5-1.85-1.5-3.45 0 0 0 0 0 0z"/>
      <path fill="#14A800" d="M18 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
    </svg>
  )
}

export function BarkIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="100%" height="100%" {...props}>
      <rect width="24" height="24" rx="4" fill="#000"/>
      <text x="12" y="16" textAnchor="middle" fontSize="11" fontWeight="700" fill="#FFD700" fontFamily="Inter, sans-serif">B</text>
    </svg>
  )
}

export function TrustpilotIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="100%" height="100%" {...props}>
      <rect width="24" height="24" rx="4" fill="#00B67A"/>
      <path fill="#fff" d="M12 5l1.5 4.5h4.7l-3.8 2.8 1.5 4.5L12 14l-3.9 2.8 1.5-4.5-3.8-2.8h4.7L12 5z"/>
    </svg>
  )
}

export function StarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%" {...props}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  )
}

/* ── Tech Stack ────────────────────────────────────────── */

export function ReactIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="100%" height="100%" {...props}>
      <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
      <g fill="none" stroke="#61DAFB" strokeWidth="1">
        <ellipse cx="12" cy="12" rx="11" ry="4.2"/>
        <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)"/>
      </g>
    </svg>
  )
}

export function VueIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="100%" height="100%" {...props}>
      <path d="M2 3h4l6 10 6-10h4L12 21 2 3z" fill="#42B883"/>
      <path d="M6 3h3l3 5 3-5h3l-6 10L6 3z" fill="#35495E"/>
    </svg>
  )
}

export function NodeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="100%" height="100%" {...props}>
      <path fill="#539E43" d="M12 1L2 7v10l10 6 10-6V7L12 1zm0 2.3l7.5 4.5v9.4L12 21.7 4.5 17.2V7.8L12 3.3z"/>
      <path fill="#539E43" d="M12 6.5l-4 2.3v4.6l4 2.3 4-2.3V8.8l-4-2.3zm0 2.3l2 1.15v2.3l-2 1.15-2-1.15v-2.3L12 8.8z"/>
    </svg>
  )
}

export function N8nIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="100%" height="100%" {...props}>
      <rect width="24" height="24" rx="4" fill="#EA4B71"/>
      <circle cx="6" cy="12" r="2.2" fill="#fff"/>
      <circle cx="12" cy="8" r="2.2" fill="#fff"/>
      <circle cx="12" cy="16" r="2.2" fill="#fff"/>
      <circle cx="18" cy="12" r="2.2" fill="#fff"/>
      <path d="M6 12h12M12 8v8" stroke="#fff" strokeWidth="1.5"/>
    </svg>
  )
}

export function SEOIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="100%" height="100%" {...props}>
      <rect width="24" height="24" rx="4" fill="#FF6B35"/>
      <text x="12" y="16" textAnchor="middle" fontSize="7" fontWeight="700" fill="white" fontFamily="Inter, sans-serif">SEO</text>
    </svg>
  )
}

export function ReactNativeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="100%" height="100%" {...props}>
      <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
      <g fill="none" stroke="#61DAFB" strokeWidth="1">
        <ellipse cx="12" cy="12" rx="11" ry="4.2"/>
        <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)"/>
      </g>
    </svg>
  )
}

export function FlutterIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="100%" height="100%" {...props}>
      <path d="M14 2L4 12l3 3 11-11-4-2z" fill="#42C5F5"/>
      <path d="M14 9l-5 5 5 5h6l-5-5 5-5h-6z" fill="#0AB6F2"/>
    </svg>
  )
}

export function KotlinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="100%" height="100%" {...props}>
      <path d="M2 2h20L12 12 2 22V2z" fill="#7F52FF"/>
      <path d="M12 12L22 2v10H12z" fill="#7F52FF" opacity="0.7"/>
    </svg>
  )
}

export function AdobeIllustratorIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="100%" height="100%" {...props}>
      <rect width="24" height="24" rx="3" fill="#330000"/>
      <text x="12" y="16" textAnchor="middle" fontSize="9" fontWeight="700" fill="#FF9A00" fontFamily="Inter, sans-serif">Ai</text>
    </svg>
  )
}

export function AdobeAfterEffectsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="100%" height="100%" {...props}>
      <rect width="24" height="24" rx="3" fill="#00005B"/>
      <text x="12" y="16" textAnchor="middle" fontSize="8" fontWeight="700" fill="#9999FF" fontFamily="Inter, sans-serif">Ae</text>
    </svg>
  )
}

export function AdobePhotoshopIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="100%" height="100%" {...props}>
      <rect width="24" height="24" rx="3" fill="#001E36"/>
      <text x="12" y="16" textAnchor="middle" fontSize="9" fontWeight="700" fill="#31A8FF" fontFamily="Inter, sans-serif">Ps</text>
    </svg>
  )
}
