export default function About() {
  return (
    <section className="max-w-2xl">
      <p className="font-mono text-sm text-amberdark mb-4">02 — about</p>
      <h1 className="font-serif text-3xl md:text-4xl text-ink mb-8">Background</h1>

      <div className="space-y-5 text-ink/80 leading-relaxed">
        <p>
          I'm Jens Lagrolla, a software developer who likes tools that get out of the
          way. Most of my work sits somewhere between building applications
          and shaping the systems they run on — I run Arch Linux with a
          Hyprland setup I've tuned over a long time, and that same instinct
          for control and simplicity carries into how I write code.
        </p>
        <p>
          I care about clear structure over clever tricks, and I'd rather
          spend an extra hour understanding a problem than two hours
          debugging a shortcut. Outside of work, I'm usually reading
          documentation I didn't need to read yet, or rebuilding a config
          file that already worked fine.
        </p>
      </div>

      <div className="mt-12 border-t border-rule pt-8">
        <h2 className="font-mono text-sm text-ink/60 mb-4 tracking-tight">skills</h2>
        <div className="flex flex-wrap gap-2 font-mono text-sm">
          {['JavaScript', 'React', 'Node.js', 'Python', 'Linux', 'Git', 'SQL', 'Docker'].map((s) => (
            <span key={s} className="px-3 py-1.5 border border-rule text-ink/80">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
