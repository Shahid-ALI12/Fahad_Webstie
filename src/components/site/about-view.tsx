'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Target, TrendingUp, Users, Smile, Award, Heart, Zap } from "lucide-react"
import type { PageView } from "./navbar"
import { motion } from "framer-motion"
import { Reveal, StaggerGroup, StaggerItem, Counter, fadeInUp, staggerContainer } from "./animations"

const STATS = [
  {
    Icon: Zap,
    prefix: "",
    value: 250,
    suffix: "+",
    title: "Proven Automation",
    desc: "Workflows shipped across SaaS, e-commerce, and finance teams — eliminating manual busywork at scale.",
  },
  {
    Icon: TrendingUp,
    prefix: "",
    value: 40,
    suffix: "%",
    title: "Real Business Growth",
    desc: "Average revenue uplift measured across our active client portfolio in the past 12 months.",
  },
  {
    Icon: Users,
    prefix: "",
    value: 4050,
    suffix: "+",
    title: "Happy Clients",
    desc: "Businesses across 28 countries who trust Combite with their digital roadmap.",
  },
  {
    Icon: Smile,
    prefix: "",
    value: 99,
    suffix: "%",
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
  { year: "2015", title: "Combite founded", desc: "Started as a 3-person web studio in a small office." },
  { year: "2018", title: "Crossed 500 clients", desc: "Expanded into digital marketing and branding services." },
  { year: "2021", title: "Launched automation practice", desc: "Became a certified n8n partner, shipped 100+ workflows." },
  { year: "2024", title: "4,000+ clients milestone", desc: "Now serving 28 countries with a 60-person team." },
]

export function AboutView({ onNavigate }: { onNavigate: (v: PageView) => void }) {
  return (
    <div className="flex-1">
      {/* ───────────── Intro ───────────── */}
      <section className="relative overflow-hidden border-b border-border bg-muted/20">
        <motion.div
          className="pointer-events-none absolute -top-20 right-0 size-80 rounded-full bg-primary/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            variants={staggerContainer(0.15)}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary" variants={fadeInUp}>
              About Combite
            </motion.div>
            <motion.h1
              className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
              variants={fadeInUp}
            >
              We turn ambitious ideas into{" "}
              <span className="text-primary">measurable digital impact</span>
            </motion.h1>
            <motion.p className="mt-5 text-base text-muted-foreground sm:text-lg" variants={fadeInUp}>
              Combite is a full-service digital agency built on a simple belief: real progress
              starts with smart execution. We blend strategy, design, and engineering to help
              businesses ship products that perform — not just look pretty.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ───────────── Stats & Facts ───────────── */}
      <section className="bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Reveal className="mb-12 max-w-3xl" variant="up">
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
          </Reveal>

          <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.12}>
            {STATS.map(({ Icon, value, prefix, suffix, title, desc }) => (
              <StaggerItem key={title}>
                <Card className="group relative h-full overflow-hidden rounded-2xl border-border/60 transition-all hover:-translate-y-1 hover:shadow-md">
                  {/* Hover gradient sweep */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 transition-all duration-500 group-hover:from-primary/5 group-hover:to-primary/0" />
                  <CardContent className="relative p-6">
                    <div className="mb-3 flex items-center gap-2">
                      <motion.span
                        className="size-2.5 rounded-full bg-primary"
                        animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      />
                      <Icon className="size-5 text-primary transition-transform group-hover:scale-110" />
                    </div>
                    <div className="text-4xl font-bold tracking-tight text-foreground">
                      <Counter value={value} prefix={prefix} suffix={suffix} />
                    </div>
                    <div className="mt-1 text-base font-semibold text-foreground">{title}</div>
                    <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ───────────── Values ───────────── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal className="mb-10 text-center" variant="up">
          <div className="text-xs font-semibold uppercase tracking-wider text-primary">What we believe</div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Values that drive every project
          </h2>
        </Reveal>

        <StaggerGroup className="grid gap-6 md:grid-cols-2" stagger={0.1}>
          {VALUES.map(({ Icon, title, desc }) => (
            <StaggerItem key={title}>
              <Card className="group h-full rounded-2xl border-border/60 transition-all hover:border-primary/40 hover:shadow-md">
                <CardContent className="flex gap-4 p-6">
                  <motion.div
                    className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10"
                    whileHover={{ rotate: 6, scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Icon className="size-6 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* ───────────── Timeline ───────────── */}
      <section className="bg-muted/20">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <Reveal className="mb-10 text-center" variant="up">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">Our journey</div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              From a 3-person studio to a global digital partner
            </h2>
          </Reveal>

          <div className="relative space-y-8 before:absolute before:left-4 before:h-full before:w-0.5 before:bg-border md:before:left-1/2">
            {/* Animated draw line overlay */}
            <motion.div
              className="absolute left-4 top-0 w-0.5 bg-primary md:left-1/2"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1.6, ease: 'easeInOut' }}
            />
            {TIMELINE.map((t, i) => (
              <motion.div
                key={t.year}
                className={`relative flex flex-col gap-2 md:flex-row md:gap-6 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="md:w-1/2 md:text-right">
                  <Card className={`rounded-2xl border-border/60 transition-all hover:-translate-y-0.5 hover:shadow-md ${i % 2 === 0 ? 'md:ml-8' : 'md:mr-8'}`}>
                    <CardContent className="p-5">
                      <div className="text-sm font-bold text-primary">{t.year}</div>
                      <div className="text-base font-semibold text-foreground">{t.title}</div>
                      <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
                    </CardContent>
                  </Card>
                </div>
                <motion.div
                  className="absolute left-4 top-5 z-10 size-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background md:left-1/2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.3, type: 'spring', stiffness: 300 }}
                />
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── CTA ───────────── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal variant="scale">
          <Card className="relative overflow-hidden rounded-3xl border-primary/20 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent">
            {/* Animated shimmer */}
            <motion.div
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            />
            <CardContent className="relative flex flex-col items-center justify-between gap-6 p-8 text-center sm:p-12 md:flex-row md:text-left">
              <div>
                <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
                  Ready to see what we can build together?
                </h3>
                <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                  Get a free website audit and a tailored growth plan from our team.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg" className="group rounded-xl" onClick={() => onNavigate('services')}>
                  Explore Services
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg" className="rounded-xl border-primary text-primary hover:bg-primary/5" onClick={() => onNavigate('home')}>
                  Back to Home
                </Button>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </section>
    </div>
  )
}
