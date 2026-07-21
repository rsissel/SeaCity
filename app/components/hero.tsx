'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  const scrollToContact = () => {
    const el = document.querySelector('#contact')
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/view-4.jpg"
          alt="Sunset view over Thessaloniki from the penthouse rooftop"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.p
          className="text-white/80 text-sm sm:text-base uppercase tracking-[0.3em] mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Thessaloniki, Greece
        </motion.p>
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight max-w-4xl leading-tight"
          style={{ fontFamily: 'var(--font-serif)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Sea & City View
          <br />
          Penthouse Apartment
        </motion.h1>
        <motion.div
          className="mt-4 flex items-center gap-3 text-white/70 text-sm sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <span>2 Bedrooms</span>
          <span className="w-1 h-1 rounded-full bg-white/50" />
          <span>Sea Views</span>
          <span className="w-1 h-1 rounded-full bg-white/50" />
          <span>Penthouse</span>
        </motion.div>
        <motion.button
          onClick={scrollToContact}
          className="mt-8 px-8 py-3 bg-[#C75B39] hover:bg-[#B04E30] text-white rounded-lg font-medium text-base transition-all duration-300 hover:shadow-lg hover:shadow-[#C75B39]/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          Check Availability
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="opacity-60">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>
    </section>
  )
}
