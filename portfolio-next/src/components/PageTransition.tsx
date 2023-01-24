import { motion } from 'framer-motion'

interface IProps {
  children: React.ReactNode[] | React.ReactNode
}

const animation = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 }
}

export default function PageTransition({ children }: IProps) {
  return (
    <motion.section
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={animation}
      transition={{ type: 'linear' }}
      className="mx-auto w-full max-w-[600px]"
    >
      {children}
    </motion.section>
  )
}
