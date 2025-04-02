"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface CharacterCardProps {
  name: string
  specialty: string
  image: string
}

export default function CharacterCard({ name, specialty, image }: CharacterCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#2d2d2d] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={name} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-1 text-[#f7b605]">{name}</h3>
        <p className="text-gray-300">{specialty}</p>
      </div>
    </motion.div>
  )
}

