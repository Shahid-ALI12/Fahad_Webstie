'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  N8nIcon, ReactIcon, VueIcon, NodeIcon, SEOIcon, ReactNativeIcon, FlutterIcon, KotlinIcon,
  AdobeIllustratorIcon, AdobeAfterEffectsIcon, AdobePhotoshopIcon,
} from "./icons"
import { ArrowRight, Plus, TrendingUp, Search, PenTool } from "lucide-react"
import type { PageView } from "./navbar"

const SERVICES = [
  {
    Icon: N8nIcon,
    title: "n8n Automation",
    tagline: "Workflow automation that scales with you",
    desc: "We design, build, and maintain n8n workflows that connect your stack end-to-end — eliminating manual work, syncing data across teams, and freeing your people to do work that actually moves the needle.",
    tech: [
      { name: "ReactJS", Icon: ReactIcon },
      { name: "VueJS", Icon: VueIcon },
      { name: "NodeJS", Icon: NodeIcon },
    ],
  },
  {
    Icon: SEOIcon,
    title: "Digital Marketing",
    tagline: "Growth marketing built on data, not guesswork",
    desc: "From SEO to paid acquisition to content engines, we run full-funnel digital marketing programs that compound. Every campaign is tied to revenue — not vanity metrics.",
    tech: [
      { name: "SEO", Icon: SEOIcon },
      { name: "React Native", Icon: ReactNativeIcon },
      { name: "FlutterJS", Icon: FlutterIcon },
      { name: "Kotlin", Icon: KotlinIcon },
    ],
  },
  {
    Icon: AdobeIllustratorIcon,
    title: "Branding & Design",
    tagline: "Brand systems that look sharp and ship fast",
    desc: "Identity systems, product UI, motion graphics, and marketing creative — built by a design team that understands both pixels and production timelines.",
    tech: [
      { name: "Illustrator", Icon: AdobeIllustratorIcon },
      { name: "After Effects", Icon: AdobeAfterEffectsIcon },
      { name: "Photoshop", Icon: AdobePhotoshopIcon },
    ],
  },
]

const PROCESS = [
  { step: "01", title: "Discovery", desc: "We map your goals, audience, and success metrics before a single line of code." },
  { step: "02", title: "Strategy", desc: "A clear plan covering scope, stack, milestones, and KPIs — aligned with your team." },
  { step: "03", title: "Build", desc: "Sprint-based delivery with weekly demos. You see progress in real-time, not at the end." },
  { step: "04", title: "Launch & scale", desc: "We ship, measure, and iterate. Post-launch optimization keeps results compounding." },
]

const PREVIEWS = [
  {
    Icon: PenTool,
    title: "Content Marketing",
    desc: "Expand audience reach with content that ranks, converts, and compounds over time.",
  },
  {
    Icon: TrendingUp,
    title: "SERP Visibility",
    desc: "Build authority on search engines with technical SEO and topical depth that competitors can't match.",
  },
  {
    Icon: Search,
    title: "SEO Optimization",
    desc: "Optimize SEO across technical, on-page, and off-page — every lever that moves rankings and traffic.",
  },
]

export function ServicesView({ onNavigate }: { onNavigate: (v: PageView) => void }) {
  return (
    <div className="flex-1">
      {/* ───────────── Services Header ───────────── */}
      <section className="border-b border-border bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">What we do</div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Services for{" "}
              <span className="text-primary">Business Growth</span>
            </h1>
            <p className="mt-5 text-base text-muted-foreground sm:text-lg">
              Three core practices. One unified team. We help you ship the website, automate the workflow,
              launch the campaign, and design the brand — all under one roof.
            </p>
          </div>
        </div>
      </section>

      {/* ───────────── Services Cards ───────────── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {SERVICES.map(({ Icon, title, tagline, desc, tech }) => (
            <Card
              key={title}
              className="group flex flex-col overflow-hidden rounded-2xl border-border/60 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <CardContent className="flex flex-1 flex-col p-6">
                {/* Service icon + chart placeholder */}
                <div className="mb-5 flex items-start justify-between">
                  <div className="size-14">
                    <Icon />
                  </div>
                  {title === "Digital Marketing" && (
                    <div className="h-12 w-24 rounded-md bg-muted p-1.5">
                      <svg viewBox="0 0 80 32" className="h-full w-full">
                        <polyline
                          points="0,28 12,22 24,24 36,14 48,16 60,8 72,10 80,4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-primary"
                        />
                        <circle cx="80" cy="4" r="2.5" className="fill-primary" />
                      </svg>
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-foreground">{title}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{tagline}</p>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">{desc}</p>

                {/* Tech stack */}
                <div className="mt-5 border-t border-border pt-4">
                  <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Tech stack
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {tech.map(({ name, Icon: TIcon }) => (
                      <div key={name} className="flex items-center gap-1.5 rounded-lg bg-muted/60 px-2.5 py-1.5">
                        <div className="size-4">
                          <TIcon />
                        </div>
                        <span className="text-xs font-medium text-muted-foreground">{name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sub-headline */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Using Modern Tech Stacks for{" "}
            <span className="text-primary">Scalable Digital Products</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
            We pick tools that fit the problem — not the other way around. Every stack choice is
            justified by long-term maintainability, talent availability, and total cost of ownership.
          </p>
        </div>
      </section>

      {/* ───────────── Process ───────────── */}
      <section className="bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">How we work</div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              A simple 4-step process
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p) => (
              <Card key={p.step} className="relative overflow-hidden rounded-2xl border-border/60">
                <CardContent className="p-6">
                  <div className="mb-2 text-3xl font-bold text-primary/20">{p.step}</div>
                  <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── CTA: From Idea to Impact ───────────── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left: copy */}
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">Start now</div>
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              From Idea to Impact:{" "}
              <span className="text-primary">Start Now</span>
            </h2>
            <p className="mt-5 text-base text-muted-foreground sm:text-lg">
              Thinking something big? We&apos;ll help you scale it. Our team works alongside you to
              deliver the websites, apps, and brands that perform — not just look good in a portfolio.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="rounded-xl px-7">
                Book a Meeting
                <ArrowRight className="size-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-xl border-primary px-7 text-primary hover:bg-primary/5"
                onClick={() => onNavigate('home')}
              >
                Back to Home
              </Button>
            </div>
          </div>

          {/* Right: 3 service previews */}
          <div className="grid gap-4">
            {PREVIEWS.map(({ Icon, title, desc }) => (
              <Card key={title} className="group flex items-center gap-4 overflow-hidden rounded-2xl border-border/60 transition-all hover:border-primary/40 hover:shadow-md">
                <div className="relative h-24 w-32 shrink-0 bg-gradient-to-br from-primary/20 via-primary/10 to-muted">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="size-8 text-primary" />
                  </div>
                  <div className="absolute -right-2 -top-2 flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md transition-transform group-hover:scale-110">
                    <Plus className="size-4" />
                  </div>
                </div>
                <CardContent className="flex-1 p-4">
                  <h3 className="text-base font-semibold text-foreground">{title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
