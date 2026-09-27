import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  function handleSubmit(e) {
    e.preventDefault()
    // Wire this up to a form backend (Formspree, Resend, etc.) — see README.md.
    setStatus('sent')
  }

  return (
    <section className="max-w-xl">
      <p className="font-mono text-sm text-amberdark mb-4">06 — contact</p>
      <h1 className="font-serif text-3xl md:text-4xl text-ink mb-6">Get in touch</h1>
      <p className="text-ink/70 mb-10 leading-relaxed">
        The fastest way to reach me is email, but the form below works too
        once it's connected to a form service (see the project README).
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block font-mono text-xs text-ink/60 mb-2">name</label>
          <input
            id="name"
            required
            type="text"
            className="w-full bg-transparent border border-rule px-4 py-3 text-ink focus:border-amber outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-mono text-xs text-ink/60 mb-2">email</label>
          <input
            id="email"
            required
            type="email"
            className="w-full bg-transparent border border-rule px-4 py-3 text-ink focus:border-amber outline-none"
          />
        </div>
        <div>
          <label htmlFor="message" className="block font-mono text-xs text-ink/60 mb-2">message</label>
          <textarea
            id="message"
            required
            rows={5}
            className="w-full bg-transparent border border-rule px-4 py-3 text-ink focus:border-amber outline-none"
          />
        </div>

        <button
          type="submit"
          className="px-6 py-3 bg-ink text-paper font-mono text-sm hover:bg-ink/90 transition-colors"
        >
          Send message
        </button>

        {status === 'sent' && (
          <p className="font-mono text-sm text-amberdark">
            Form submitted locally — connect a backend to actually deliver this.
          </p>
        )}
      </form>

      <p className="mt-12 font-mono text-sm text-ink/60">
        or email directly:{' '}
        <a href="mailto:hello@example.com" className="underline-link text-ink">
          hello@example.com
        </a>
      </p>
    </section>
  )
}
