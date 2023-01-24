import Link from 'next/link'
import SunIcon from '../icons/SunIcon'
import MoonIcon from '../icons/MoonIcon'

interface IProps {
  theme?: string
  changeTheme: () => void
}

export default function DesktopNavBar({ theme, changeTheme }: IProps) {
  return (
    <ul className="hidden gap-8 sm:flex">
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
        <Link className="hover-effect" href="/projects">
          Projects
        </Link>
      </li>
      <li>
        <Link className="hover-effect" href="/contact">
          Contact
        </Link>
      </li>
      <li>
        <Link
          className="hover-effect"
          href="https://www.github.com/DavidPelo"
          target="_blank"
        >
          Github
        </Link>
      </li>
      <li>
        <Link
          className="hover-effect"
          href="https://www.linkedin.com/in/davidpelo/"
          target="_blank"
        >
          LinkedIn
        </Link>
      </li>
    </ul>
  )
}
