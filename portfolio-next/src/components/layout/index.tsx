import Header from './header'

interface IProps {
  children: React.ReactNode[] | React.ReactNode
}

export default function Layout({ children }: IProps) {
  return (
    <>
      <Header />
      <main className="container absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center mx-auto overflow-hidden">
        {children}
      </main>
    </>
  )
}
