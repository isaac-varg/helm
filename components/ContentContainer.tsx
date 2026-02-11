'use client'
import { motion, AnimatePresence } from "motion/react";
import SideImage from "./SideImage";

const ContentContainer = () => {
  const activeTab = "hey"

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="w-full max-w-7xl"
    >
      <div className="backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex  min-h-150">
        <SideImage src="https://picsum.photos/seed/helm/800/1200" alt="Side image" edge="gradient" />
        <div className="flex-1 p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              hey hey
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}

export default ContentContainer
