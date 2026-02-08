'use client'
import { motion } from "motion/react";

const Header = () => {
  return (


    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8 text-center"
    >
      <h1 className="text-5xl font-bold text-white mb-2 bg-clip-text bg-linear-to-r from-pink-300 via-purple-300 to-blue-300">
        My Dashboard
      </h1>
      <p className="text-white/60 text-sm">Your aesthetic bookmark collection</p>
    </motion.div>



  )
}

export default Header
