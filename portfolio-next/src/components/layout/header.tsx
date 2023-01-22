import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'

export default function Header() {
  // // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [mounted, setMounted] = useState(false)

  // const { resolvedTheme, theme, setTheme } = useTheme()

  // useEffect(() => setMounted(true), [])

  return (
    <header className="flex w-full justify-between p-8 shadow-none">
      <div>
        <h1 className="text-5xl font-thin transition-all duration-200 hover:text-zinc-400">
          <Link href="/">David Pelo</Link>
        </h1>
        <h2>Fullstack Developer</h2>
        {/* <button
          onClick={() => {
            setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
          }}
          type="button"
          className="rounded-md bg-white p-2 text-black transition-colors duration-1000 hover:bg-gray-500/10"
          aria-label={theme === 'light' ? 'Dark theme' : 'Light theme'}
        >
          {theme === 'light' ? 'dark' : 'light'}
        </button> */}
      </div>
      <nav>
        <ul className="flex gap-8">
          <li className="cursor-pointer transition-all duration-200 hover:text-zinc-400">
            <Link href="/about">About</Link>
          </li>
          <li className="cursor-pointer transition-all duration-200 hover:text-zinc-400">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="cursor-pointer transition-all duration-200 hover:text-zinc-400">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="cursor-pointer transition-all duration-200 hover:text-zinc-400">
            <Link href="https://www.github.com/DavidPelo" target="_blank">
              Github
            </Link>
          </li>
          <li className="cursor-pointer transition-all duration-200 hover:text-zinc-400">
            <Link href="https://www.linkedin.com/in/davidpelo/" target="_blank">
              LinkedIn
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
