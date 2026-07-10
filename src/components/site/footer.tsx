'use client'

import { Button } from "@/components/ui/button"
import type { PageView } from "./navbar"

const FOOTER_LINKS = {
  Services: ["n8n Automation", "Digital Marketing", "Branding & Design", "Web Development"],
  Company: ["About Us", "Case Studies", "Blogs", "Careers", "Contact"],
  Resources: ["Free Website Audit", "Pricing", "Testimonials", "Privacy Policy", "Terms"],
}

export function Footer({ onNavigate }: { onNavigate: (v: PageView) => void }) {
  return (
    <footer className="mt-auto border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <button
              onClick={() => onNavigate('home')}
              className="mb-3 flex items-center gap-1 text-xl font-bold"
            >
              <span className="text-primary">M</span>axobiz
            </button>
            <p className="text-sm text-muted-foreground">
              Expert digital solutions for every business. Real progress starts with smart execution.
            </p>
            <div className="mt-4 flex gap-3">
              <Button size="sm" className="rounded-lg" onClick={() => onNavigate('services')}>
                Let&apos;s talk
              </Button>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">{title}</h3>
              <ul className="space-y-2">
                {links.map((l) => (
                  <li key={l}>
                    <button
                      onClick={() => onNavigate(title === 'Services' ? 'services' : title === 'Company' ? 'about' : 'home')}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {l}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Maxobiz. All rights reserved.</p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <span>Rated 4.9 on Google</span>
            <span>·</span>
            <span>5.0 on Clutch</span>
            <span>·</span>
            <span>5.0 on Upwork</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
