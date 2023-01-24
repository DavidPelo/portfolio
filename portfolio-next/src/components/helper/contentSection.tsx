interface IProps {
  children: React.ReactNode
  title: string
}

export default function ContentSection({ children, title }: IProps) {
  return (
    <section
      className="mx-auto w-full max-w-[600px]"
    >
      <h2 className="pb-4 text-2xl">{title}</h2>
      {children}
    </section>
  )
}
