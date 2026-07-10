'use client'

import { useState, useEffect } from 'react'
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
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar active={view} onNavigate={navigate} />

      <main className="flex flex-1 flex-col">
        {view === 'home' && <HomeView onNavigate={navigate} />}
        {view === 'about' && <AboutView onNavigate={navigate} />}
        {view === 'services' && <ServicesView onNavigate={navigate} />}
      </main>

      <Footer onNavigate={navigate} />
    </div>
  )
}
