const stats = [
  { value: "2,000+", label: "Active teams" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "10x", label: "Faster deployments" },
  { value: "50M+", label: "Tasks completed" },
]

export function Stats() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
