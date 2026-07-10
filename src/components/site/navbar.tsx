'use client'

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { ChevronDown, Menu, X } from "lucide-react"
import { useState } from "react"

export type PageView = 'home' | 'about' | 'services'

const SERVICES = [
  { title: "n8n Automation", desc: "Workflow automation with React, Vue, Node.js" },
  { title: "Digital Marketing", desc: "SEO, React Native, Flutter, Kotlin" },
  { title: "Branding & Design", desc: "Adobe Illustrator, After Effects, Photoshop" },
]

const COMPANY = [
  { title: "About Us", desc: "Learn about Maxobiz story and team" },
  { title: "Case Studies", desc: "Real results from real clients" },
  { title: "Blogs", desc: "Insights from our experts" },
  { title: "Careers", desc: "Join our growing team" },
]

export function Navbar({ active, onNavigate }: { active: PageView; onNavigate: (v: PageView) => void }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNav = (v: PageView) => {
    onNavigate(v)
    setMobileOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <button
          onClick={() => handleNav('home')}
          className="flex items-center gap-2 text-xl font-bold tracking-tight"
          aria-label="Maxobiz home"
        >
          <span className="text-primary">M</span>
          <span>axobiz</span>
        </button>

        {/* Desktop Nav */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-1">
            {/* Services dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className="bg-transparent font-medium text-muted-foreground hover:text-foreground data-[state=open]:bg-transparent"
                onClick={() => handleNav('services')}
              >
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[420px] gap-2 p-3">
                  {SERVICES.map((s) => (
                    <li key={s.title}>
                      <NavigationMenuLink asChild>
                        <button
                          onClick={() => handleNav('services')}
                          className="block w-full rounded-md p-3 text-left transition-colors hover:bg-accent"
                        >
                          <div className="text-sm font-semibold text-foreground">{s.title}</div>
                          <div className="text-xs text-muted-foreground">{s.desc}</div>
                        </button>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <button
                onClick={() => handleNav('home')}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent",
                  active === 'home' ? "text-foreground" : "text-muted-foreground"
                )}
              >
                Work
              </button>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <button
                onClick={() => handleNav('about')}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent",
                  active === 'about' ? "text-foreground" : "text-muted-foreground"
                )}
              >
                Case Studies
              </button>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <button
                onClick={() => handleNav('about')}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                Blogs
              </button>
            </NavigationMenuItem>

            {/* Company dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className="bg-transparent font-medium text-muted-foreground hover:text-foreground data-[state=open]:bg-transparent"
                onClick={() => handleNav('about')}
              >
                Company
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[420px] gap-2 p-3">
                  {COMPANY.map((c) => (
                    <li key={c.title}>
                      <NavigationMenuLink asChild>
                        <button
                          onClick={() => handleNav('about')}
                          className="block w-full rounded-md p-3 text-left transition-colors hover:bg-accent"
                        >
                          <div className="text-sm font-semibold text-foreground">{c.title}</div>
                          <div className="text-xs text-muted-foreground">{c.desc}</div>
                        </button>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA buttons */}
        <div className="hidden items-center gap-2 md:flex">
          <Button
            variant="outline"
            size="lg"
            className="rounded-xl border-primary text-primary hover:bg-primary/5"
            onClick={() => handleNav('about')}
          >
            Free Website Audit
          </Button>
          <Button size="lg" className="rounded-xl" onClick={() => handleNav('services')}>
            Let&apos;s talk
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            <MobileLink label="Home" onClick={() => handleNav('home')} active={active === 'home'} />
            <MobileLink label="Services" onClick={() => handleNav('services')} active={active === 'services'} />
            <MobileLink label="About / Stats" onClick={() => handleNav('about')} active={active === 'about'} />
            <div className="mt-3 flex flex-col gap-2">
              <Button variant="outline" className="rounded-xl" onClick={() => handleNav('about')}>
                Free Website Audit
              </Button>
              <Button className="rounded-xl" onClick={() => handleNav('services')}>
                Let&apos;s talk
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

function MobileLink({ label, onClick, active }: { label: string; onClick: () => void; active: boolean }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-md px-3 py-2 text-left text-base font-medium transition-colors",
        active ? "bg-accent text-foreground" : "text-muted-foreground hover:bg-accent"
      )}
    >
      {label}
    </button>
  )
}
