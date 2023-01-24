import PageTransition from '../components/PageTransition'
import Link from 'next/link'

export default function Menu() {
  return (
    <PageTransition>
      <h2 className="pb-4 text-2xl">Where are we going?</h2>
      <nav>
        <ul className="flex flex-col gap-4">
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
      </nav>
    </PageTransition>
  )
}
