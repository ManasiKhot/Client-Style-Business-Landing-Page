import { Lightbulb, Layers, Rocket } from "lucide-react"

const steps = [
  {
    icon: Lightbulb,
    step: "01",
    title: "Plan & Design",
    description:
      "Define your goals, map user journeys, and design beautiful interfaces all inside Flowrise.",
  },
  {
    icon: Layers,
    step: "02",
    title: "Build & Iterate",
    description:
      "Develop your product with real-time collaboration, version control, and smart component libraries.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Launch & Scale",
    description:
      "Deploy globally in one click. Monitor performance, automate workflows, and grow with confidence.",
  },
]

export function Work() {
  return (
    <section id="how-it-works" className="bg-card py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-20 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            How It Works
          </p>
          <h2 className="mx-auto max-w-2xl font-serif text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
            From idea to launch in three steps
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.step}
              className="relative rounded-2xl border border-border bg-background p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[hsl(252,80%,60%)] to-[hsl(220,80%,56%)] shadow-md shadow-[hsl(252,80%,60%)]/20">
                <s.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Step {s.step}
              </p>
              <h3 className="mb-3 font-serif text-xl font-bold text-foreground">
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
