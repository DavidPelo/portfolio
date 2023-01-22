import ContentSection from './helper/contentSection'
import Link from 'next/link'

export default function Menu() {
  return (
    <ContentSection title="Where would you like to go?">
      <nav>
        <ul className="hidden sm:flex sm:gap-8">
          <li className="cursor-pointer hover:text-zinc-400"></li>
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
    </ContentSection>
  )
}
