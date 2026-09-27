const timeline = [
  {
    period: '2023 — Present',
    title: 'Diploma - Software Engineering Technology (Centennial College)',
    place: 'Coursework including COMP125 and applied math',
    desc: 'Working through core computer science coursework alongside independent projects — web development, systems tooling, and coursework covering discrete math and algorithms.',
  },
  {
    period: 'Ongoing',
    title: 'Self-directed systems learning',
    place: 'Linux, Wayland, Hyprland',
    desc: 'Learning by doing: maintaining and migrating a full Linux desktop configuration, including moving a Hyprland setup onto its newer Lua configuration API.',
  },
]

export default function Education() {
  return (
    <section className="max-w-2xl">
      <p className="font-mono text-sm text-amberdark mb-4">04 — education</p>
      <h1 className="font-serif text-3xl md:text-4xl text-ink mb-10">Education &amp; learning</h1>

      <ol className="space-y-10">
        {timeline.map((t) => (
          <li key={t.title} className="border-l-2 border-rule pl-6 relative">
            <span className="absolute -left-[7px] top-1 w-3 h-3 bg-amber" />
            <p className="font-mono text-xs text-ink/50 mb-1">{t.period}</p>
            <h2 className="font-serif text-xl text-ink">{t.title}</h2>
            <p className="text-sm text-ink/60 mb-2">{t.place}</p>
            <p className="text-ink/75 leading-relaxed text-sm">{t.desc}</p>
          </li>
        ))}
      </ol>

      <p className="mt-10 text-xs text-ink/50 font-mono">
        edit src/pages/Education.jsx to add real dates, institutions, and coursework.
      </p>
    </section>
  )
}
