import Link from 'next/link'
import MenuIcon from '../icons/menuIcon'
import SunIcon from '../icons/sunIcon'
import MoonIcon from '../icons/moonIcon'

interface IProps {
  theme?: string
  changeTheme: () => void
  openMenu: () => void
}

export default function MobileNavigation({
  theme,
  changeTheme,
  openMenu
}: IProps) {
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
        <Link href="/menu" onClick={openMenu} className="hover-effect">
          <MenuIcon />
        </Link>
      </li>
    </ul>
  )
}
