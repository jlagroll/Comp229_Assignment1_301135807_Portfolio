export default function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-xs text-ink/60">
        <span>&copy; {new Date().getFullYear()} James. Built with React.</span>
        <div className="flex gap-5">
          <a href="mailto:hello@example.com" className="underline-link">hello@example.com</a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="underline-link">github</a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="underline-link">linkedin</a>
        </div>
      </div>
    </footer>
  )
}
