import Image from "next/image"
import { BarChart3, Zap, Users } from "lucide-react"

const features = [
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description:
      "Track every metric that matters. Understand your users and make data-driven decisions with live dashboards.",
    image: "/images/feature-analytics.jpg",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Work together seamlessly. Shared workspaces, comments, and real-time editing keep everyone in sync.",
    image: "/images/feature-collaboration.jpg",
  },
  {
    icon: Zap,
    title: "Smart Automation",
    description:
      "Automate repetitive tasks with visual workflows. Connect your tools and let Flowrise handle the rest.",
    image: "/images/feature-automation.jpg",
  },
]

export function Services() {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-20 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Features
          </p>
          <h2 className="mx-auto max-w-2xl font-serif text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
            Everything your team needs to move fast
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Powerful features wrapped in a clean, intuitive interface.
            No learning curve, just results.
          </p>
        </div>

        <div className="flex flex-col gap-24">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`flex flex-col items-center gap-12 lg:flex-row ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text */}
              <div className="flex-1">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[hsl(252,80%,60%)]/10 to-[hsl(220,80%,56%)]/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                  {feature.title}
                </h3>
                <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>

              {/* Image */}
              <div className="relative flex-1">
                <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-[hsl(252,80%,60%)]/10 to-[hsl(220,80%,56%)]/10 blur-xl" />
                <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={600}
                    height={400}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
