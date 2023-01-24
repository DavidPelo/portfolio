import Header from './Header'

interface IProps {
  children: React.ReactNode[] | React.ReactNode
}

export default function Layout({ children }: IProps) {
  return (
    <>
      <Header />
      <main className="container absolute top-0 bottom-0 right-0 left-0 mx-auto flex items-center justify-center overflow-hidden">
        {children}
      </main>
    </>
  )
}
