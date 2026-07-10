'use client'

import { motion, useInView, useMotionValue, useSpring, useTransform, type Variants } from 'framer-motion'
import { useEffect, useRef, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

/* ───────────────────────── Reusable variants ───────────────────────── */

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
}

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export const staggerContainer = (stagger = 0.1, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
})

/* ───────────────────────── Reveal on scroll ───────────────────────── */

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  variant?: 'up' | 'left' | 'right' | 'scale' | 'fade'
  once?: boolean
  as?: 'div' | 'section' | 'li' | 'span'
}

const variantMap = {
  up: fadeInUp,
  left: fadeInLeft,
  right: fadeInRight,
  scale: scaleIn,
  fade: fadeIn,
}

export function Reveal({
  children,
  className,
  delay = 0,
  variant = 'up',
  once = true,
  as = 'div',
}: RevealProps) {
  const MotionTag = motion[as]
  return (
    <MotionTag
      className={className}
      variants={variantMap[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-60px' }}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  )
}

/* ───────────────────────── Stagger group ───────────────────────── */

export function StaggerGroup({
  children,
  className,
  stagger = 0.1,
  delayChildren = 0,
  once = true,
}: {
  children: ReactNode
  className?: string
  stagger?: number
  delayChildren?: number
  once?: boolean
}) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer(stagger, delayChildren)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-60px' }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
  variant = 'up',
}: {
  children: ReactNode
  className?: string
  variant?: 'up' | 'left' | 'right' | 'scale' | 'fade'
}) {
  return (
    <motion.div className={className} variants={variantMap[variant]}>
      {children}
    </motion.div>
  )
}

/* ───────────────────────── Animated counter ───────────────────────── */

export function Counter({
  value,
  suffix = '',
  prefix = '',
  className,
  duration = 1.8,
}: {
  value: number
  suffix?: string
  prefix?: string
  className?: string
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { duration: duration * 1000, bounce: 0 })
  const display = useTransform(spring, (v) => {
    if (value >= 1000) return Math.round(v).toLocaleString()
    if (value % 1 !== 0) return v.toFixed(1)
    return Math.round(v).toString()
  })

  useEffect(() => {
    if (inView) motionValue.set(value)
  }, [inView, value, motionValue])

  return (
    <span ref={ref} className={cn('tabular-nums', className)}>
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  )
}

/* ───────────────────────── Floating wrapper ───────────────────────── */

export function Float({
  children,
  className,
  duration = 6,
  amplitude = 10,
}: {
  children: ReactNode
  className?: string
  duration?: number
  amplitude?: number
}) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -amplitude, 0] }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  )
}
