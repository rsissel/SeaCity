'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function LocationMap() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="location" className="py-20 sm:py-28 px-4">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-4 text-[#3B2F2F]"
          style={{ fontFamily: 'var(--font-serif)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Location
        </motion.h2>
        <motion.p
          className="text-center text-[#6B5B4F] mb-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Thessaloniki city centre
        </motion.p>

        <motion.div
          className="rounded-2xl overflow-hidden shadow-lg border border-[#E8DDD3]"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <iframe
            title="Apartment location in Thessaloniki"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            src="https://www.openstreetmap.org/export/embed.html?bbox=22.935%2C40.634%2C22.955%2C40.646&layer=mapnik&marker=40.6401%2C22.9444"
            allowFullScreen
          />
        </motion.div>
      </div>
    </section>
  )
}
