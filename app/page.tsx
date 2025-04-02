"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import GameFeature from "@/components/GameFeature"
import TeamMember from "@/components/TeamMember"
import WaitlistForm from "@/components/WaitlistForm"
import Image from "next/image"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  const waitlistRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLDivElement>(null)

  const headerBg = useTransform(scrollY, [0, 50], ["rgba(26, 26, 26, 0)", "rgba(26, 26, 26, 1)"])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToWaitlist = () => {
    waitlistRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToVideo = () => {
    videoRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-secondary text-foreground">
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? "py-4" : "py-6"}`}
      >
        <nav className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/logo.png" alt="Magik Masala Logo" width={120} height={50} className="h-auto" />
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-4">
              <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <FontAwesomeIcon icon={faTiktok} className="w-6 h-6 text-foreground hover:text-primary transition-colors" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} className="w-6 h-6 text-foreground hover:text-primary transition-colors" />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 text-foreground hover:text-primary transition-colors" />
              </a>
            </div>
            <Button className="bg-[#f7b605] text-[#1a1a1a] hover:bg-primary/80" onClick={scrollToWaitlist}>
              Join Waitlist
            </Button>
          </div>
        </nav>
      </motion.header>

      <main>
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-secondary">
          <div className="absolute inset-0 bg-background bg-opacity-70 z-0"></div>
          <div className="relative z-20 text-center max-w-4xl px-4">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-bold mb-4 text-primary"
            >
              Magik Masala
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 text-foreground font-bold"
            >
              Spice up your gaming with this chaotic and delicious 3D cooking adventure!
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="bg-[#f7b605] text-[#1a1a1a] hover:bg-primary/80" onClick={scrollToVideo}>
                Watch Trailer
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-foreground hover:bg-white hover:text-[#1a1a1a]"
                onClick={scrollToWaitlist}
              >
                Join Waitlist
              </Button>
            </motion.div>
          </div>
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          >
            <FontAwesomeIcon icon={faChevronDown} size="2x" color="#f7b605" />
          </motion.div>
        </section>

        <section ref={videoRef} className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">Our Mission</h2>
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
                <iframe
                  width="100%"
                  height="100%"
                  src="/magikmasalaintro.mp4"
                  title="Magik Masala Game Trailer"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <p className="text-center mt-8 text-lg text-muted-foreground">
                At Magik Masala, we're bringing the vibrant flavors and chaotic joy of Indian cooking to life in a 3D
                gaming experience unlike any other. Our mission is to celebrate Indian cuisine and culture through
                engaging, fun gameplay that anyone can enjoy.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">Game Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              <GameFeature
                title="Authentic Indian Recipes"
                description="Master the art of cooking genuine Indian dishes with traditional ingredients and techniques."
                icon="🍛"
              />
              <GameFeature
                title="Chaotic Multiplayer"
                description="Team up or compete with friends in frantic cooking battles filled with unexpected twists."
                icon="🏆"
              />
              <GameFeature
                title="Vibrant 3D World"
                description="Explore colorful, detailed environments inspired by the bustling markets and kitchens of India."
                icon="🏙️"
              />
              <GameFeature
                title="Play as Niki"
                description="Take on the role of Niki, our charming chef with special cooking abilities and customizable outfits."
                icon="👩‍🍳"
              />
              <GameFeature
                title="Progressive Challenges"
                description="Face increasingly difficult cooking scenarios and time pressures as you advance through the game."
                icon="📈"
              />
              <GameFeature
                title="Cultural Celebration"
                description="Immerse yourself in the rich traditions and festive atmosphere of Indian cuisine and culture."
                icon="✨"
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <TeamMember 
                name="Anisha Jain" 
                role="Founder, Engineering Lead" 
                description="Senior Software Engineer with a proven track record at Tesla and Lyft. She combines her technical expertise, research experience with OpenAI and GPT-4, academic achievements from Stanford, Carnegie Mellon, and Cornell, and a passion for storytelling to lead the project with a culturally rich and innovative vision." 
                image="/anishaprofile.avif" 
                link="https://ajain.dev/" 
              />
              <TeamMember 
                name="Sarah Ann Gonzales" 
                role="Co-Founder, Creative Director" 
                description="Merges her expertise in illustration, graphic design, and 3D animation with her Filipino roots to craft captivating characters and promote the game's luxurious aesthetic. Together, they aim to redefine cultural representation in gaming with Magik Masala" 
                image="/sarahprofile.jpeg" 
                link="https://sarahannnime.framer.ai/" 
              />
            </div>
          </div>
        </section>

        {/* <section className="py-20 bg-secondary relative overflow-hidden">
          <div className="absolute right-20 top-1/2 transform -translate-y-1/2 opacity-80">
            <Image src="/Niki.gif" alt="Niki Character" width={400} height={400} className="h-auto" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold mb-6 text-primary">About Niki</h2>
              <p className="text-lg mb-6 text-muted-foreground">
                Meet Niki, our game's protagonist and master chef extraordinaire! With her trusty cooking tools and
                boundless enthusiasm, Niki navigates the chaotic world of Indian cuisine with style and determination.
              </p>
              <p className="text-lg mb-8 text-muted-foreground">
                Whether she's grinding spices, tossing naan, or racing against the clock to complete orders, Niki
                brings charm and energy to every kitchen she enters. Join her on this culinary adventure and discover
                the magic of masala!
              </p>
              <Button size="lg" className="bg-[#f7b605] text-[#1a1a1a] hover:bg-primary/80" onClick={scrollToWaitlist}>
                Join Niki's Adventure
              </Button>
            </div>
          </div>
        </section> */}
        <section className="py-20 bg-secondary overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
          

          {/* Text Block */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-primary">About Niki</h2>
            <p className="text-lg mb-6 text-muted-foreground">
              Meet Niki, our game's protagonist and master chef extraordinaire! With her trusty cooking tools and
              boundless enthusiasm, Niki navigates the chaotic world of Indian cuisine with style and determination.
            </p>
            <p className="text-lg mb-8 text-muted-foreground">
              Whether she's grinding spices, tossing naan, or racing against the clock to complete orders, Niki
              brings charm and energy to every kitchen she enters. Join her on this culinary adventure and discover
              the magic of masala!
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/80"
              onClick={scrollToWaitlist}
            >
              Join Niki's Adventure
            </Button>
          </div>

          {/* Image Block */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/Niki.gif"
              alt="Niki Character"
              width={600}
              height={600}
            />
          </div>
        </div>
      </section>

        <section ref={waitlistRef} className="py-20 bg-secondary" id="waitlist">
          <div className="container mx-auto px-4 max-w-xl">
            <WaitlistForm />
          </div>
        </section>
      </main>

      <footer className="bg-background text-foreground py-8 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Image src="/logo.png" alt="Magik Masala Logo" width={100} height={40} className="h-auto" />
            </div>
            <div className="flex gap-6 mb-4 md:mb-0">
              <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <FontAwesomeIcon icon={faTiktok} className="w-6 h-6 text-foreground hover:text-primary transition-colors" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} className="w-6 h-6 text-foreground hover:text-primary transition-colors" />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 text-foreground hover:text-primary transition-colors" />
              </a>
            </div>
            <div className="text-center md:text-right text-sm text-gray-400">
              <p>&copy; 2025 Magik Masala. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
