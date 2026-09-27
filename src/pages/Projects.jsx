const projects = [
  {
    name: 'Mang Inasal Restaurant Site',
    desc: 'A restaurant ordering site built with AJAX and jQuery, with a Cypress end-to-end test suite covering the ordering flow.',
    stack: ['jQuery', 'AJAX', 'Cypress'],
    link: '#',
  },
  {
    name: 'Hyprland Config, Lua Edition',
    desc: 'A migration of a hand-tuned Hyprland window manager configuration from the legacy hyprlang syntax to the newer Lua-based API.',
    stack: ['Lua', 'Hyprland', 'Wayland'],
    link: '#',
  },
  {
    name: 'Booking',
    desc: 'A book tracking app entirely run on the command line. Written in Python',
    stack: ['Stack', 'Goes', 'Here'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section>
      <p className="font-mono text-sm text-amberdark mb-4">03 — projects</p>
      <h1 className="font-serif text-3xl md:text-4xl text-ink mb-10">Selected work</h1>

      <div className="grid sm:grid-cols-2 gap-px bg-rule border border-rule">
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.link}
            className="bg-paper p-6 flex flex-col gap-3 hover:bg-ink/[0.03] transition-colors"
          >
            <h2 className="font-serif text-xl text-ink">{p.name}</h2>
            <p className="text-sm text-ink/70 leading-relaxed flex-1">{p.desc}</p>
            <div className="flex flex-wrap gap-2 font-mono text-xs text-ink/60 pt-1">
              {p.stack.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
