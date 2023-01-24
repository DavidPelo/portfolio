import ContentSection from '../components/helper/contentSection'
import Layout from '../components/Layout'
import Link from 'next/link'

export default function Menu() {
  return (
    <Layout>
      <ContentSection title="Where are we going?">
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
      </ContentSection>
    </Layout>
  )
}
