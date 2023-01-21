export default function Header() {
  return (
    <header className="flex">
      <div>
        <h1 className="font-thin text-5xl">David Pelo</h1>
        <h2>Fullstack Developer</h2>
      </div>
      <nav>
        <ul className="flex gap-8">
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
          <li>Github</li>
          <li>LinkedIn</li>
        </ul>
      </nav>
    </header>
  )
}
