"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Script from "next/script"

export default function WaitlistForm() {
  const waitlistLoaded = useRef(false)

  useEffect(() => {
    // Only load the widget once
    if (!waitlistLoaded.current && typeof window !== "undefined") {
      // If the GetWaitlist script has already loaded and initialized the global object
      if (window.GetWaitlist) {
        window.GetWaitlist.widget.createOrUpdateWidget()
      }
      waitlistLoaded.current = true
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background/30 p-8 rounded-xl shadow-2xl relative overflow-hidden"
    >
      <div className="relative z-10">
        <h2 className="text-4xl font-bold mb-4 text-[#f7b605] text-center">Join the Waitlist</h2>

        <div className="mb-6 text-center">
          <p className="text-lg mb-6">Be among the first to try our exclusive game demo!</p>
        </div>

        {/* GetWaitlist Widget Container */}
        <div id="getWaitlistContainer" data-waitlist_id="23054" data-widget_type="WIDGET_3"></div>

        {/* GetWaitlist Scripts */}
        <Script
          src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js"
          strategy="afterInteractive"
          onLoad={() => {
            if (window.GetWaitlist) {
              window.GetWaitlist.widget.createOrUpdateWidget()
            }
          }}
        />

        <div className="mt-8 pt-6 border-t border-gray-700">
          <h3 className="text-xl font-bold mb-4 text-[#f7b605]">What you'll get:</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-[#f7b605] mr-2">✓</span>
              <span>Exclusive early access to the Magik Masala demo</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#f7b605] mr-2">✓</span>
              <span>Special in-game bonus item when the full game launches</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#f7b605] mr-2">✓</span>
              <span>Behind-the-scenes development updates</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#f7b605] mr-2">✓</span>
              <span>Opportunity to provide feedback that shapes the game</span>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

