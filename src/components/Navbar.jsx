import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/education', label: 'Education' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-paper/90 backdrop-blur border-b border-rule">
      <div className="max-w-5xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <NavLink to="/" className="font-mono text-sm tracking-tight text-ink">
          james<span className="text-amber">.dev</span>
        </NavLink>

        <nav className="hidden md:flex items-center gap-8 font-mono text-sm">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `pb-1 border-b-2 transition-colors ${
                  isActive ? 'border-amber text-ink' : 'border-transparent text-ink/60 hover:text-ink'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="md:hidden font-mono text-sm border border-rule px-3 py-1.5"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? 'close' : 'menu'}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-rule bg-paper font-mono text-sm">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-6 py-3 border-b border-rule/60 ${isActive ? 'text-amber' : 'text-ink/80'}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
