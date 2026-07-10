'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Target, TrendingUp, Users, Smile, Award, Heart, Zap } from "lucide-react"
import type { PageView } from "./navbar"

const STATS = [
  {
    Icon: Zap,
    stat: "250+",
    title: "Proven Automation",
    desc: "Workflows shipped across SaaS, e-commerce, and finance teams — eliminating manual busywork at scale.",
  },
  {
    Icon: TrendingUp,
    stat: "40%",
    title: "Real Business Growth",
    desc: "Average revenue uplift measured across our active client portfolio in the past 12 months.",
  },
  {
    Icon: Users,
    stat: "4,050+",
    title: "Happy Clients",
    desc: "Businesses across 28 countries who trust Maxobiz with their digital roadmap.",
  },
  {
    Icon: Smile,
    stat: "99%",
    title: "Customer Satisfaction",
    desc: "Verified satisfaction score from post-launch surveys conducted across all client engagements.",
  },
]

const VALUES = [
  {
    Icon: Target,
    title: "Strategy first",
    desc: "We never start with code. Every engagement begins with discovery — understanding the business model, target users, and the metric that actually matters.",
  },
  {
    Icon: Heart,
    title: "Partnership mindset",
    desc: "We treat client goals as our own. Success is measured by your outcomes, not by hours billed. Long-term partnerships beat short-term projects every time.",
  },
  {
    Icon: Award,
    title: "Engineering excellence",
    desc: "Clean architecture, modern stacks, and rigorous testing. We ship code that your future team will thank you for — not curse you about.",
  },
  {
    Icon: Zap,
    title: "Velocity with quality",
    desc: "Smart execution means moving fast without breaking things. Our automation-first culture lets us deliver in weeks what others deliver in months.",
  },
]

const TIMELINE = [
  { year: "2015", title: "Maxobiz founded", desc: "Started as a 3-person web studio in a small office." },
  { year: "2018", title: "Crossed 500 clients", desc: "Expanded into digital marketing and branding services." },
  { year: "2021", title: "Launched automation practice", desc: "Became a certified n8n partner, shipped 100+ workflows." },
  { year: "2024", title: "4,000+ clients milestone", desc: "Now serving 28 countries with a 60-person team." },
]

export function AboutView({ onNavigate }: { onNavigate: (v: PageView) => void }) {
  return (
    <div className="flex-1">
      {/* ───────────── Intro ───────────── */}
      <section className="border-b border-border bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">About Maxobiz</div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              We turn ambitious ideas into{" "}
              <span className="text-primary">measurable digital impact</span>
            </h1>
            <p className="mt-5 text-base text-muted-foreground sm:text-lg">
              Maxobiz is a full-service digital agency built on a simple belief: real progress
              starts with smart execution. We blend strategy, design, and engineering to help
              businesses ship products that perform — not just look pretty.
            </p>
          </div>
        </div>
      </section>

      {/* ───────────── Stats & Facts ───────────── */}
      <section className="bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Stats &amp; Facts
            </div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Numbers that reflect our{" "}
              <span className="text-primary">dedication</span> and{" "}
              <span className="text-primary">experience</span>
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Results of our projects show the dedication and experience of our team.
              Every engagement is measured against <span className="font-medium text-foreground">measurable outcomes</span>{" "}
              powered by <span className="font-medium text-foreground">digital technology</span> — and we&apos;ve
              delivered for <span className="font-medium text-foreground">hundreds</span> of businesses worldwide.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map(({ Icon, stat, title, desc }) => (
              <Card key={title} className="relative overflow-hidden rounded-2xl border-border/60 transition-all hover:-translate-y-1 hover:shadow-md">
                <CardContent className="p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="size-2.5 rounded-full bg-primary" />
                    <Icon className="size-5 text-primary" />
                  </div>
                  <div className="text-4xl font-bold tracking-tight text-foreground">{stat}</div>
                  <div className="mt-1 text-base font-semibold text-foreground">{title}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Values ───────────── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="text-xs font-semibold uppercase tracking-wider text-primary">What we believe</div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Values that drive every project
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {VALUES.map(({ Icon, title, desc }) => (
            <Card key={title} className="rounded-2xl border-border/60">
              <CardContent className="flex gap-4 p-6">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="size-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ───────────── Timeline ───────────── */}
      <section className="bg-muted/20">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">Our journey</div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              From a 3-person studio to a global digital partner
            </h2>
          </div>

          <div className="relative space-y-8 before:absolute before:left-4 before:h-full before:w-0.5 before:bg-border md:before:left-1/2">
            {TIMELINE.map((t, i) => (
              <div key={t.year} className={`relative flex flex-col gap-2 md:flex-row md:gap-6 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2 md:text-right">
                  <Card className={`rounded-2xl border-border/60 ${i % 2 === 0 ? 'md:ml-8' : 'md:mr-8'}`}>
                    <CardContent className="p-5">
                      <div className="text-sm font-bold text-primary">{t.year}</div>
                      <div className="text-base font-semibold text-foreground">{t.title}</div>
                      <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute left-4 top-5 z-10 size-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background md:left-1/2" />
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── CTA ───────────── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Card className="overflow-hidden rounded-3xl border-primary/20 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent">
          <CardContent className="flex flex-col items-center justify-between gap-6 p-8 text-center sm:p-12 md:flex-row md:text-left">
            <div>
              <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
                Ready to see what we can build together?
              </h3>
              <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                Get a free website audit and a tailored growth plan from our team.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="rounded-xl" onClick={() => onNavigate('services')}>
                Explore Services
                <ArrowRight className="size-4" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-xl border-primary text-primary hover:bg-primary/5" onClick={() => onNavigate('home')}>
                Back to Home
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
