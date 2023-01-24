import { AnimatePresence, motion } from 'framer-motion'

interface IProps {
  children: React.ReactNode
  title: string
}
export default function ContentSection({ children, title }: IProps) {
  return (
    <AnimatePresence>
      <motion.section
        className="mx-auto w-full max-w-[600px]"
        initial={{ y: 400, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'just' }}
      >
        <h2 className="pb-4 text-2xl">{title}</h2>
        {children}
      </motion.section>
    </AnimatePresence>
  )
}
