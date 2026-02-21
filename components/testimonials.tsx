import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "Flowrise cut our deployment time by 80%. The automation tools alone are worth the switch. Our team has never been more productive.",
    name: "Sarah Mitchell",
    role: "VP of Engineering, Airstrip",
    avatar: "SM",
  },
  {
    quote:
      "The most intuitive platform we have used. Onboarding took minutes instead of days. Analytics dashboards are genuinely beautiful.",
    name: "David Chen",
    role: "CTO, PayGrid",
    avatar: "DC",
  },
  {
    quote:
      "We scaled from 5 to 50 team members without any growing pains. Flowrise handles everything from planning to production.",
    name: "Olivia Reed",
    role: "Product Lead, Craftwork",
    avatar: "OR",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-card py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Testimonials
          </p>
          <h2 className="mx-auto max-w-2xl font-serif text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
            Loved by teams everywhere
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-background p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <blockquote className="mb-6 flex-1 leading-relaxed text-muted-foreground">
                {`"${t.quote}"`}
              </blockquote>
              <div className="flex items-center gap-3 border-t border-border pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[hsl(252,80%,60%)] to-[hsl(220,80%,56%)] text-xs font-bold text-white">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
