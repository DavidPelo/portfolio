import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useRouter } from 'next/router'
import DesktopNavigation from '../navigation/desktopNav'
import MobileNavigation from '../navigation/mobileNav'

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
      <header className="mx-auto flex max-w-[2000px] justify-between p-4 sm:w-full md:p-8">
        <div>
          <h1 className="ml-[-3px] text-5xl font-thin hover:text-zinc-400">
            <Link className="hover-effect" href="/">
              David Pelo
            </Link>
          </h1>
          <h2>Fullstack Developer</h2>
        </div>
        <nav>
          {/* Mobile Navigation */}
          <MobileNavigation
            theme={theme}
            changeTheme={themeSwitcher}
            openMenu={menuHandler}
          />
          {/* Desktop Navigation */}
          <DesktopNavigation theme={theme} changeTheme={themeSwitcher} />
        </nav>
      </header>
    </>
  )
}
