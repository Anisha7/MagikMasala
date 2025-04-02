"use client"

import { motion } from "framer-motion"

interface GameFeatureProps {
  title: string
  description: string
  icon: string
}

export default function GameFeature({ title, description, icon }: GameFeatureProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#2d2d2d] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-2 border-[#f7b605]"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-[#f7b605]">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  )
}

