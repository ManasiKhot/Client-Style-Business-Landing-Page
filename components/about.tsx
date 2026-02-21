import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"

const perks = [
  "Unlimited projects & team members",
  "SOC 2 Type II certified",
  "99.9% uptime guarantee",
  "Priority support & onboarding",
  "Custom integrations available",
]

export function About() {
  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[hsl(252,80%,60%)] to-[hsl(220,80%,56%)] px-8 py-16 text-center shadow-2xl shadow-[hsl(252,80%,60%)]/20 md:px-16 md:py-24">
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-white/10 blur-2xl" />

          <div className="relative z-10">
            <h2 className="mx-auto max-w-2xl font-serif text-3xl font-extrabold tracking-tight text-white md:text-5xl">
              <span className="text-balance">
                Start building for free today
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-white/80">
              No credit card required. Get full access to every feature with our
              generous free tier, and upgrade when you are ready.
            </p>

            <div className="mx-auto mt-8 flex max-w-md flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {perks.map((perk) => (
                <span key={perk} className="flex items-center gap-2 text-sm text-white/90">
                  <Check className="h-4 w-4 text-white" />
                  {perk}
                </span>
              ))}
            </div>

            <div className="mt-10">
              <Button
                size="lg"
                className="rounded-full bg-white px-10 text-base font-semibold text-[hsl(252,80%,60%)] shadow-lg hover:bg-white/90"
                asChild
              >
                <a href="#contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
