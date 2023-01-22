import Header from './header'

interface IProps {
  children: React.ReactNode[] | React.ReactNode
}

export default function Layout({ children }: IProps) {
  return (
    <>
      <Header />
      <main className="container">{children}</main>
    </>
  )
}
