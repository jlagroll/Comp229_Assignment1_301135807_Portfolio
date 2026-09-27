import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section>
      <p className="font-mono text-sm text-amberdark mb-4">01 — software developer</p>
      <h1 className="font-serif text-4xl md:text-6xl leading-[1.1] text-ink max-w-3xl">
        I build fast, well-structured and meticulously detailed software.
      </h1>
      <p className="mt-6 max-w-xl text-ink/70 leading-relaxed">
        Jens Lagrolla is a developer working across the stack — from Linux systems and
        tooling to full web applications. This site collects a few projects,
        a bit of background, and the easiest way to get in touch.
      </p>

      <div className="mt-10 flex flex-wrap gap-4 font-mono text-sm">
        <Link
          to="/projects"
          className="px-5 py-3 bg-ink text-paper hover:bg-ink/90 transition-colors"
        >
          View projects
        </Link>
        <Link
          to="/contact"
          className="px-5 py-3 border border-ink/30 hover:border-ink transition-colors"
        >
          Get in touch
        </Link>
      </div>

      <div className="mt-20 grid sm:grid-cols-3 gap-8 border-t border-rule pt-10">
        <div>
          <p className="font-mono text-2xl text-ink">4+</p>
          <p className="text-sm text-ink/60 mt-1">years writing software</p>
        </div>
        <div>
          <p className="font-mono text-2xl text-ink">12</p>
          <p className="text-sm text-ink/60 mt-1">projects shipped</p>
        </div>
        <div>
          <p className="font-mono text-2xl text-ink">Linux</p>
          <p className="text-sm text-ink/60 mt-1">daily driver, Arch + Hyprland</p>
        </div>
      </div>
    </section>
  )
}
