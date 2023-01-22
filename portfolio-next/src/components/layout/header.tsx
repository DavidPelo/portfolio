import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'

export default function Header() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  function themeSwitcher() {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
  }

  if (!mounted) return null

  return (
    <header className="flex w-full justify-between p-8">
      <div>
        <h1 className="text-5xl font-thin hover:text-zinc-400">
          <Link className="link-hover" href="/">
            David Pelo
          </Link>
        </h1>
        <h2>Fullstack Developer</h2>
      </div>
      <nav>
        <ul className="flex gap-8">
          <li className="cursor-pointer hover:text-zinc-400">
            <button
              onClick={themeSwitcher}
              type="button"
              className=" link-hover hover:text-zinc-400"
              aria-label={theme === 'light' ? 'Dark theme' : 'Light theme'}
            >
              {theme === 'light' ? 'Dark' : 'Light'}
            </button>
          </li>
          <li className="cursor-pointer hover:text-zinc-400">
            <Link className="link-hover" href="/projects">
              Projects
            </Link>
          </li>
          <li className="cursor-pointer  hover:text-zinc-400">
            <Link className="link-hover" href="/contact">
              Contact
            </Link>
          </li>
          <li className="cursor-pointer hover:text-zinc-400">
            <Link
              className="link-hover"
              href="https://www.github.com/DavidPelo"
              target="_blank"
            >
              Github
            </Link>
          </li>
          <li className="cursor-pointer hover:text-zinc-400">
            <Link
              className="link-hover"
              href="https://www.linkedin.com/in/davidpelo/"
              target="_blank"
            >
              LinkedIn
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
