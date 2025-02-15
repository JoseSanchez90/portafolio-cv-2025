import React from "react"
import { motion, AnimatePresence } from "framer-motion"

const specialties = [
  { text: "Support Software", color: "bg-red-500" },
  { text: "Developer FrontEnd", color: "bg-blue-500" },
  { text: "Specialist Help Desk", color: "bg-green-500" },
]

const variants = {
  enter: (direction: number) => {
    return {
      y: direction > 0 ? 40 : -40,
      opacity: 0,
    }
  },
  center: {
    zIndex: 1,
    y: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      y: direction < 0 ? 40 : -40,
      opacity: 0,
    }
  },
}

const AnimatedSpecialties: React.FC = () => {
  const [[page, direction], setPage] = React.useState([0, 0])

  const paginate = (newDirection: number) => {
    setPage(([prevPage]) => {
      const nextPage = (prevPage + newDirection + specialties.length) % specialties.length
      return [nextPage, newDirection]
    })
  }

  React.useEffect(() => {
    const timer = setTimeout(() => paginate(1), 3000)
    return () => clearTimeout(timer)
  }, [page, paginate]) // Added paginate to dependencies

  return (
    <div className="relative h-16 overflow-hidden flex justify-center lg:justify-start">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            y: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className={`absolute w-[200px] text-center py-2 font-bold text-white ${specialties[page].color}`}
        >
          {specialties[page].text}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default AnimatedSpecialties

