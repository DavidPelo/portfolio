import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import SunIcon from '../icons/sunIcon'
import MoonIcon from '../icons/moonIcon'
import MenuIcon from '../icons/menuIcon'
import { useRouter } from 'next/router'

export default function Header() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, theme, setTheme } = useTheme()
  const router = useRouter()

  useEffect(() => setMounted(true), [])

  function themeSwitcher() {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
  }

  function menuHandler() {
    if (router.asPath === '/menu') router.back()
  }

  if (!mounted) return null

  return (
    <>
      <header className="flex max-w-[2000px] justify-between p-4 sm:w-full md:p-8">
        <div>
          <h1 className="ml-[-3px] text-5xl font-thin hover:text-zinc-400">
            <Link className="link-hover" href="/">
              David Pelo
            </Link>
          </h1>
          <h2>Fullstack Developer</h2>
        </div>
        <nav>
          <div className="flex">
            <button
              onClick={themeSwitcher}
              type="button"
              className=" link-hover pr-4 hover:text-zinc-400 sm:hidden"
              aria-label={theme === 'light' ? 'Dark theme' : 'Light theme'}
            >
              {theme === 'light' ? <MoonIcon /> : <SunIcon />}
            </button>
            <Link
              href="/menu"
              onClick={menuHandler}
              className="link-hover sm:hidden"
            >
              <MenuIcon />
            </Link>
          </div>
          <ul className="hidden sm:flex sm:gap-8">
            <li className="cursor-pointer hover:text-zinc-400">
              <button
                onClick={themeSwitcher}
                type="button"
                className=" link-hover pr-4 hover:text-zinc-400 sm:hidden"
                aria-label={theme === 'light' ? 'Dark theme' : 'Light theme'}
              >
                {theme === 'light' ? <MoonIcon /> : <SunIcon />}
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
    </>
  )
}
