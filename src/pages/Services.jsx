const services = [
  {
    title: 'Web application development',
    desc: 'Full-stack builds using React and Node — from a first prototype through to a maintainable, tested product.',
  },
  {
    title: 'Frontend engineering',
    desc: 'Component-driven interfaces, performance tuning, and accessibility passes for existing sites and apps.',
  },
  {
    title: 'Linux tooling & automation',
    desc: 'Scripting, environment setup, and workflow tooling for developers who live in the terminal.',
  },
  {
    title: 'Code review & consulting',
    desc: 'A second set of eyes on architecture decisions, pull requests, or a codebase you inherited.',
  },
]

export default function Services() {
  return (
    <section>
      <p className="font-mono text-sm text-amberdark mb-4">05 — services</p>
      <h1 className="font-serif text-3xl md:text-4xl text-ink mb-10">What I can help with</h1>

      <div className="space-y-0 border-t border-rule">
        {services.map((s, i) => (
          <div key={s.title} className="grid sm:grid-cols-[auto,1fr] gap-4 sm:gap-10 py-7 border-b border-rule">
            <span className="font-mono text-sm text-ink/40">0{i + 1}</span>
            <div>
              <h2 className="font-serif text-xl text-ink mb-2">{s.title}</h2>
              <p className="text-ink/70 text-sm leading-relaxed max-w-lg">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
