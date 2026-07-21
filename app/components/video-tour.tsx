'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function VideoTour() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section id="video" className="py-20 sm:py-28 px-4">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-4 text-[#3B2F2F]"
          style={{ fontFamily: 'var(--font-serif)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Explore the Neighborhood
        </motion.h2>
        <motion.p
          className="text-center text-[#6B5B4F] mb-10 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Take a stroll through the historic Agiou Dimitriou area.
        </motion.p>

        <motion.div
          className="rounded-2xl overflow-hidden shadow-lg border border-[#E8DDD3]"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            controls
            className="w-full"
            poster="/images/view-3.jpg"
          >
            <source src="/images/st-dimitrios.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </section>
  )
}
