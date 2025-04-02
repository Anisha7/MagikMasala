"use client"

import { motion } from "framer-motion"
import Image from "next/image"
interface TeamMemberProps {
  name: string
  role: string
  image: string
  description: string
  link: string
}
export default function TeamMember({ name, role, image, description, link }: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
    >
      <div className="relative h-64">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4 border-t-2 border-[#f7b605]">
        <h3 className="text-xl font-semibold mb-1 text-[#f7b605]">{name}</h3>
        <p className="text-gray-300 mb-2">{role}</p>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-[#f7b605] hover:text-[#e5a700] transition-colors cursor-pointer"
        >
          Learn more
          <svg 
            className="w-4 h-4 ml-1" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M5 12h14"/>
            <path d="M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </motion.div>
  )
}

