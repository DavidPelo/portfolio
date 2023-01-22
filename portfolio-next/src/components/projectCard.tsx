import { motion } from 'framer-motion'

export default function ProjectCard() {
  return (
    <motion.section
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.05 }}
      className="relative flex h-[400px] items-center justify-center rounded bg-stone-600"
    >
      Project
    </motion.section>
  )
}
