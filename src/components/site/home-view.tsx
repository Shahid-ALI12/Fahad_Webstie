'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  GoogleIcon, ClutchIcon, UpworkIcon, BarkIcon, TrustpilotIcon, StarIcon,
} from "./icons"
import { ArrowRight, Sparkles, CheckCircle2, Star } from "lucide-react"
import type { PageView } from "./navbar"

const RATINGS = [
  { platform: "Google", rating: "4.9", label: "Rating on Google", Icon: GoogleIcon },
  { platform: "Clutch", rating: "5.0", label: "Rating on Clutch", Icon: ClutchIcon },
  { platform: "Upwork", rating: "5.0", label: "Rating on Upwork", Icon: UpworkIcon },
  { platform: "Bark", rating: "5.0", label: "Rating on Bark", Icon: BarkIcon },
  { platform: "Trustpilot", rating: "4.7", label: "Rating on Trustpilot", Icon: TrustpilotIcon },
]

const HIGHLIGHTS = [
  "Trusted by 4,050+ businesses globally",
  "99% customer satisfaction rate",
  "Avg. 40% real business growth delivered",
]

export function HomeView({ onNavigate }: { onNavigate: (v: PageView) => void }) {
  return (
    <div className="flex-1">
      {/* ───────────── Hero Section ───────────── */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 pb-12 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Left: Hero copy */}
            <div className="text-center lg:text-left">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
                <Sparkles className="size-3.5" />
                Digital transformation starts here
              </div>

              <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Expert{" "}
                <span className="text-primary">Digital Solutions</span>{" "}
                for Every Business
              </h1>

              <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground sm:text-lg lg:mx-0">
                Real progress starts with smart execution. We help ambitious brands
                deliver results through expert strategy, modern engineering, and
                measurable outcomes powered by digital technology.
              </p>

              <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row lg:items-start">
                <Button size="lg" className="w-full rounded-xl px-7 sm:w-auto" onClick={() => onNavigate('services')}>
                  Let&apos;s talk
                  <ArrowRight className="size-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full rounded-xl border-primary px-7 text-primary hover:bg-primary/5 sm:w-auto"
                  onClick={() => onNavigate('about')}
                >
                  Free Website Audit
                </Button>
              </div>

              <ul className="mt-8 flex flex-col items-center gap-3 text-sm text-muted-foreground sm:flex-row sm:flex-wrap lg:items-start">
                {HIGHLIGHTS.map((h) => (
                  <li key={h} className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-primary" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Hero visual */}
            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-primary/15 via-primary/5 to-transparent blur-2xl" />
              <Card className="overflow-hidden rounded-2xl border-border/60 shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="size-3 rounded-full bg-red-400" />
                      <div className="size-3 rounded-full bg-yellow-400" />
                      <div className="size-3 rounded-full bg-green-400" />
                    </div>
                    <div className="text-xs text-muted-foreground">maxobiz.com</div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-3 w-3/4 rounded bg-primary/30" />
                    <div className="h-3 w-1/2 rounded bg-muted" />
                    <div className="grid grid-cols-3 gap-2 pt-2">
                      <div className="h-16 rounded-lg bg-primary/15" />
                      <div className="h-16 rounded-lg bg-primary/25" />
                      <div className="h-16 rounded-lg bg-primary/10" />
                    </div>
                    <div className="h-20 rounded-lg bg-gradient-to-r from-primary/20 to-primary/5" />
                  </div>
                </CardContent>
              </Card>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 rounded-2xl border border-border bg-background px-4 py-3 shadow-lg">
                <div className="text-xs text-muted-foreground">Customer Satisfaction</div>
                <div className="text-2xl font-bold text-primary">99%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Social Proof Ratings ───────────── */}
      <section className="border-y border-border bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Rated excellence across leading review platforms
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {RATINGS.map(({ platform, rating, label, Icon }) => (
              <Card
                key={platform}
                className="group relative overflow-hidden rounded-2xl border-border/60 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
              >
                <CardContent className="flex flex-col items-center gap-2 p-5 text-center">
                  <div className="size-12 transition-transform group-hover:scale-110">
                    <Icon />
                  </div>
                  <div className="flex items-center gap-1">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star
                        key={i}
                        className="size-3.5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <div className="text-2xl font-bold text-foreground">{rating}</div>
                  <div className="text-xs text-muted-foreground">{label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust strip */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <StarIcon className="size-3 text-yellow-400" /> 4,050+ Happy Clients
            </span>
            <span>·</span>
            <span>250+ Proven Automations</span>
            <span>·</span>
            <span>40% Avg. Business Growth</span>
            <span>·</span>
            <span>5-Star Reviews Across Platforms</span>
          </div>
        </div>
      </section>

      {/* ───────────── Featured work teaser ───────────── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Work that drives{" "}
            <span className="text-primary">real outcomes</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground">
            From idea to impact, our projects span industries and deliver measurable growth.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            { tag: "SaaS Platform", title: "Workflow Automation Suite", stat: "+62% efficiency" },
            { tag: "E-commerce", title: "D2C Brand Launch", stat: "3x revenue in 6 months" },
            { tag: "Mobile App", title: "FinTech Onboarding", stat: "99.4% uptime" },
          ].map((c) => (
            <Card key={c.title} className="overflow-hidden rounded-2xl transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="h-40 bg-gradient-to-br from-primary/20 via-primary/10 to-muted" />
              <CardContent className="p-5">
                <div className="text-xs font-medium uppercase tracking-wider text-primary">{c.tag}</div>
                <h3 className="mt-1 text-lg font-semibold text-foreground">{c.title}</h3>
                <div className="mt-2 text-sm text-muted-foreground">{c.stat}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="outline" size="lg" className="rounded-xl border-primary text-primary hover:bg-primary/5" onClick={() => onNavigate('about')}>
            See all case studies
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </section>
    </div>
  )
}
