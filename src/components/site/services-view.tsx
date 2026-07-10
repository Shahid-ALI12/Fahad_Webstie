'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  N8nIcon, ReactIcon, VueIcon, NodeIcon, SEOIcon, ReactNativeIcon, FlutterIcon, KotlinIcon,
  AdobeIllustratorIcon, AdobeAfterEffectsIcon, AdobePhotoshopIcon,
} from "./icons"
import { ArrowRight, Plus, TrendingUp, Search, PenTool } from "lucide-react"
import type { PageView } from "./navbar"
import { motion } from "framer-motion"
import { Reveal, StaggerGroup, StaggerItem, fadeInUp, staggerContainer } from "./animations"

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
      <section className="relative overflow-hidden border-b border-border bg-muted/20">
        <motion.div
          className="pointer-events-none absolute -top-20 left-1/4 size-80 rounded-full bg-primary/10 blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            variants={staggerContainer(0.15)}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary" variants={fadeInUp}>
              What we do
            </motion.div>
            <motion.h1
              className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
              variants={fadeInUp}
            >
              Services for{" "}
              <span className="text-primary">Business Growth</span>
            </motion.h1>
            <motion.p className="mt-5 text-base text-muted-foreground sm:text-lg" variants={fadeInUp}>
              Three core practices. One unified team. We help you ship the website, automate the workflow,
              launch the campaign, and design the brand — all under one roof.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ───────────── Services Cards ───────────── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <StaggerGroup className="grid gap-6 lg:grid-cols-3" stagger={0.15}>
          {SERVICES.map(({ Icon, title, tagline, desc, tech }) => (
            <StaggerItem key={title} variant="up">
              <Card
                className="group flex h-full flex-col overflow-hidden rounded-2xl border-border/60 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
              >
                {/* Top accent bar */}
                <motion.div
                  className="h-1 w-full bg-primary"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ originX: 0 }}
                />
                <CardContent className="flex flex-1 flex-col p-6">
                  {/* Service icon + chart placeholder */}
                  <div className="mb-5 flex items-start justify-between">
                    <motion.div
                      className="size-14"
                      whileHover={{ rotate: [0, -8, 8, 0], scale: 1.08 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon />
                    </motion.div>
                    {title === "Digital Marketing" && (
                      <div className="h-12 w-24 rounded-md bg-muted p-1.5">
                        <svg viewBox="0 0 80 32" className="h-full w-full">
                          <motion.polyline
                            points="0,28 12,22 24,24 36,14 48,16 60,8 72,10 80,4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-primary"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.4, ease: 'easeInOut', delay: 0.3 }}
                          />
                          <motion.circle
                            cx="80" cy="4" r="2.5"
                            className="fill-primary"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.5, type: 'spring', stiffness: 300 }}
                          />
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
                        <div
                          key={name}
                          className="flex items-center gap-1.5 rounded-lg bg-muted/60 px-2.5 py-1.5 transition-colors group-hover:bg-primary/5"
                        >
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
            </StaggerItem>
          ))}
        </StaggerGroup>

        {/* Sub-headline */}
        <Reveal className="mt-16 text-center" variant="up">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Using Modern Tech Stacks for{" "}
            <span className="text-primary">Scalable Digital Products</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
            We pick tools that fit the problem — not the other way around. Every stack choice is
            justified by long-term maintainability, talent availability, and total cost of ownership.
          </p>
        </Reveal>
      </section>

      {/* ───────────── Process ───────────── */}
      <section className="relative overflow-hidden bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Reveal className="mb-10 text-center" variant="up">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">How we work</div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              A simple 4-step process
            </h2>
          </Reveal>

          <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {/* Connecting line for desktop */}
            <motion.div
              className="absolute left-0 right-0 top-12 hidden h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent lg:block"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              style={{ originX: 0 }}
            />
            {PROCESS.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <Card className="group relative h-full overflow-hidden rounded-2xl border-border/60 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md">
                  <CardContent className="p-6">
                    <div className="mb-2 text-3xl font-bold text-primary/20 transition-colors group-hover:text-primary/40">
                      {p.step}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── CTA: From Idea to Impact ───────────── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left: copy */}
          <Reveal variant="left">
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
              <Button size="lg" className="group rounded-xl px-7">
                Book a Meeting
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
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
          </Reveal>

          {/* Right: 3 service previews */}
          <StaggerGroup className="grid gap-4" stagger={0.12}>
            {PREVIEWS.map(({ Icon, title, desc }) => (
              <StaggerItem key={title} variant="right">
                <Card className="group flex items-center gap-4 overflow-hidden rounded-2xl border-border/60 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md">
                  <div className="relative h-24 w-32 shrink-0 overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-muted">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        <Icon className="size-8 text-primary" />
                      </motion.div>
                    </div>
                    <motion.div
                      className="absolute -right-2 -top-2 flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md transition-transform group-hover:scale-110 group-hover:rotate-90"
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Plus className="size-4" />
                    </motion.div>
                  </div>
                  <CardContent className="flex-1 p-4">
                    <h3 className="text-base font-semibold text-foreground">{title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </div>
  )
}
