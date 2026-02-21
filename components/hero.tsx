import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-32 md:pb-32 md:pt-44">
      {/* Subtle gradient glow behind hero */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-br from-[hsl(252,80%,60%)]/15 to-[hsl(220,80%,56%)]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground shadow-sm">
          <span className="flex h-2 w-2 rounded-full bg-gradient-to-r from-[hsl(252,80%,60%)] to-[hsl(220,80%,56%)]" />
          Now in Open Beta
        </div>

        <h1 className="mx-auto max-w-4xl font-serif text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl md:text-7xl">
          <span className="text-balance">
            Build smarter.{" "}
            <span className="bg-gradient-to-r from-[hsl(252,80%,60%)] to-[hsl(220,80%,56%)] bg-clip-text text-transparent">
              Ship faster.
            </span>
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          Flowrise gives your team the tools to design, develop, and deploy
          products at speed. All-in-one platform. Zero friction.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="rounded-full bg-gradient-to-r from-[hsl(252,80%,60%)] to-[hsl(220,80%,56%)] px-8 text-base shadow-lg shadow-[hsl(252,80%,60%)]/25 hover:shadow-xl hover:shadow-[hsl(252,80%,60%)]/30"
            asChild
          >
            <a href="#contact">
              Start for Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 text-base"
            asChild
          >
            <a href="#how-it-works">
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </a>
          </Button>
        </div>

        {/* Trusted by logos placeholder */}
        <div className="mt-16 flex flex-col items-center gap-4">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Trusted by 2,000+ teams worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-40">
            {["Vercel", "Stripe", "Linear", "Notion", "Figma"].map((name) => (
              <span
                key={name}
                className="text-lg font-bold tracking-tight text-foreground"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        {/* Product mockup */}
        <div className="relative mx-auto mt-16 max-w-5xl">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[hsl(252,80%,60%)]/20 to-[hsl(220,80%,56%)]/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-[hsl(252,80%,60%)]/10">
            <Image
              src="/images/hero-dashboard.jpg"
              alt="Flowrise dashboard interface showing analytics and project management tools"
              width={1200}
              height={720}
              className="w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
