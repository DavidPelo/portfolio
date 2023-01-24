import MenuIcon from './icons/MenuIcon'
import SunIcon from './icons/SunIcon'
import MoonIcon from './icons/MoonIcon'
import CloseIcon from './icons/CloseIcon'
import { useRouter } from 'next/router'
import Link from 'next/link'

interface IProps {
  theme?: string
  changeTheme: () => void
  toggleMenu: () => void
}

export default function MobileNavBar({ theme, changeTheme }: IProps) {
  const router = useRouter()

  return (
    <ul className="flex gap-4 sm:hidden">
      <li>
        <button
          onClick={changeTheme}
          type="button"
          className="hover-effect"
          aria-label={theme === 'light' ? 'Dark theme' : 'Light theme'}
        >
          {theme === 'light' ? <MoonIcon /> : <SunIcon />}
        </button>
      </li>
      <li>
        {router.asPath === '/menu' && (
          <button type="button" onClick={() => router.back()}>
            <CloseIcon />
          </button>
        )}
        {router.asPath !== '/menu' && (
          <Link href="menu" className="hover-effect">
            <MenuIcon />
          </Link>
        )}
      </li>
    </ul>
  )
}
