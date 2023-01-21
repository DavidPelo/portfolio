import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export default function Header() {
  const [mounted, setMounted] = useState(false)

  const { resolvedTheme, theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  return (
    <header className="flex justify-between p-8">
      <div>
        <h1 className="text-5xl font-thin">David Pelo</h1>
        <h2>Fullstack Developer</h2>
        <button
          onClick={() => {
            setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
          }}
          type="button"
          className="rounded-md p-2 transition-colors duration-300 hover:bg-gray-500/10"
          aria-label={theme === 'light' ? 'Dark theme' : 'Light theme'}
        >
          {theme === 'light' ? 'dark' : 'light'}
        </button>
      </div>
      <nav>
        <ul className="flex gap-8">
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
          <li>Github</li>
          <li>LinkedIn</li>
        </ul>
      </nav>
    </header>
  )
}
