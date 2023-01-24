import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useRouter } from 'next/router'
import DesktopNavBar from './DesktopNavBar'
import MobileNavBar from './MobileNavBar'

export default function Header() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [mounted, setMounted] = useState(false)
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const { resolvedTheme, theme, setTheme } = useTheme()
  const router = useRouter()

  useEffect(() => setMounted(true), [])

  function themeSwitcher() {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
  }

  function menuHandler() {
    setMenuIsOpen(!menuIsOpen)
  }

  useEffect(() => {
    console.log('useEffect running')

    const checkMenu = () => {
      if (window.innerWidth > 649) {
        setMenuIsOpen(false)
      }
    }

    window.addEventListener('resize', checkMenu)

    return () => {
      window.removeEventListener('resize', checkMenu)
    }
  }, [])

  if (!mounted) return null

  return (
    <>
      <header className="absolute z-10 flex w-full max-w-[2000px] justify-between p-4 sm:w-full md:p-8">
        <div>
          <h1 className="ml-[-3px] text-5xl font-thin">
            <Link className="hover-effect" href="/">
              David Pelo
            </Link>
          </h1>
          <h2>Fullstack Developer</h2>
        </div>
        <nav>
          {/* Mobile Navigation */}
          <MobileNavBar
            theme={theme}
            changeTheme={themeSwitcher}
            toggleMenu={menuHandler}
            menuIsOpen={menuIsOpen}
          />
          {/* Desktop Navigation */}
          <DesktopNavBar theme={theme} changeTheme={themeSwitcher} />
        </nav>
      </header>

      {/* {menuIsOpen && (
        show menu
      )} */}
    </>
  )
}
