interface IProps {
  children: React.ReactNode[] | React.ReactNode,
  title: string
}

export default function ContentSection({ children, title }: IProps) {
  return (
    <section className="mx-auto max-w-[600px] pb-11">
      <h2 className="pb-2 text-2xl">{title}</h2>
      <hr className="pb-6" />
      {children}
    </section>
  )
}
