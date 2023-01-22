import { AnimatePresence, motion } from 'framer-motion'

interface IProps {
  children: React.ReactNode
  title: string
}
export default function ContentSection({ children, title }: IProps) {
  return (
    <AnimatePresence>
      <motion.section
        className="mx-auto max-w-[600px] pb-11"
        initial={{ y: 500, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 500, opacity: 0 }}
      >
        <h2 className="pb-2 text-2xl">{title}</h2>
        <hr className="pb-6" />
        {children}
      </motion.section>
    </AnimatePresence>
  )
}
