import { motion } from 'framer-motion'

interface IProps {
  children: React.ReactNode[] | React.ReactNode
}

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 }
}

export default function Layout({ children }: IProps) {
  return (
    <>
      <motion.main
        variants={variants} // Pass the variant object into Framer Motion
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit="exit" // Exit state (used later) to variants.exit
        transition={{ type: 'linear' }} // Set the transition to linear
        className="container absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center overflow-hidden"
      >
        {children}
      </motion.main>
    </>
  )
}
