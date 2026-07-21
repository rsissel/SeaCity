'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Neighborhood() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="neighborhood" className="py-20 sm:py-28 px-4 bg-white/50">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-8 text-[#3B2F2F]"
          style={{ fontFamily: 'var(--font-serif)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          The Neighborhood
        </motion.h2>

        <motion.div
          className="text-[#6B5B4F] text-base sm:text-lg leading-relaxed space-y-5"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p>
            You&apos;re centrally placed on Agiou Dimitriou, an easy 5–10 minute walk to the train and intercity bus station, the airport bus stop, and Thessaloniki&apos;s new metro — so getting around the city, or out of it, never requires a car. The neighborhood has the everyday rhythm long-stay guests actually want: green markets a short walk away for home cooking, tavernas where you&apos;ll be eating alongside locals rather than tourists, and quiet, breezy evenings on the balcony or rooftop with no neighbors crowding you in.
          </p>
          <p>
            When you want a break from the laptop, the city&apos;s history is right outside your door — the ancient city walls, the Church of Agios Dimitrios with its underground crypt, and the 14th-century Church of the 12 Apostles are all nearby, with the seafront and Ladadika&apos;s restaurant district an easy walk beyond that.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
