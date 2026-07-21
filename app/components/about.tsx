'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const highlights = [
  { icon: '🛏️', label: '2 Bedrooms' },
  { icon: '🚿', label: '1 Bathroom' },
  { icon: '🌊', label: 'Sea & City Views' },
  { icon: '🏠', label: 'Penthouse' },
]

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="about" className="py-20 sm:py-28 px-4">
      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Highlight bar */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {highlights?.map((h: any, i: number) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-white/80 px-5 py-3 rounded-xl shadow-sm border border-[#E8DDD3]"
            >
              <span className="text-xl">{h?.icon}</span>
              <span className="text-sm font-medium text-[#6B5B4F]">{h?.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-8 text-[#3B2F2F]"
          style={{ fontFamily: 'var(--font-serif)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Work from home...with a view.
        </motion.h2>

        <motion.div
          className="space-y-5 text-[#6B5B4F] text-base sm:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p>
            Each bedroom comes with a desk and chair perfect for working in private. Some guests prefer to work from the large, comfortable, living-room sofa or the kitchen table.
          </p>
          <p>
            Very fast fiber internet keeps video calls and uploads smooth. Whether you&apos;re a remote employee riding out a few months abroad, a student attending classes downtown, or a freelancer between cities, you get a real home base — a bedroom to sleep in, a desk to work at, and a kitchen to actually cook in — not a hotel room.
          </p>
          <p>
            Each room can be rented separately or the entire apartment together. Contact us for availability.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
