'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Navbar, type PageView } from '@/components/site/navbar'
import { Footer } from '@/components/site/footer'
import { HomeView } from '@/components/site/home-view'
import { AboutView } from '@/components/site/about-view'
import { ServicesView } from '@/components/site/services-view'

function readHash(): PageView {
  if (typeof window === 'undefined') return 'home'
  const h = window.location.hash.replace('#', '')
  if (h === 'about' || h === 'services') return h
  return 'home'
}

export default function Home() {
  // Lazy initializer reads hash on first client render — no effect needed for initial value.
  const [view, setView] = useState<PageView>(readHash)

  // Only subscribe to hashchange — no synchronous setState in effect body.
  useEffect(() => {
    const onHash = () => setView(readHash())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const navigate = (v: PageView) => {
    if (typeof window !== 'undefined') {
      window.location.hash = v
    }
    setView(v)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar active={view} onNavigate={navigate} />

      <main className="relative flex flex-1 flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-1 flex-col"
          >
            {view === 'home' && <HomeView onNavigate={navigate} />}
            {view === 'about' && <AboutView onNavigate={navigate} />}
            {view === 'services' && <ServicesView onNavigate={navigate} />}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onNavigate={navigate} />
    </div>
  )
}
