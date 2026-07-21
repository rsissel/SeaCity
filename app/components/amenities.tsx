'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const amenities = [
  {
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9.5 21H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-5.5"/><path d="M12 9V3"/><path d="M8 5l4-2 4 2"/><path d="M15 21v-3a3 3 0 00-6 0v3"/></svg>`,
    label: 'AC — Cooling & Heating',
  },
  {
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12.55a11 11 0 0114.08 0"/><path d="M1.42 9a16 16 0 0121.16 0"/><path d="M8.53 16.11a6 6 0 016.95 0"/><circle cx="12" cy="20" r="1"/></svg>`,
    label: 'Fast Fiber Internet',
  },
  {
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="4" width="16" height="16" rx="2"/><path d="M22 6v12"/><path d="M6 14v4"/><circle cx="10" cy="10" r="3"/></svg>`,
    label: 'Washing Machine',
  },
  {
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 7v4a1 1 0 001 1h16a1 1 0 001-1V7"/><path d="M21 7l-3-4H6L3 7"/><path d="M12 12v9"/><path d="M8 21h8"/></svg>`,
    label: 'Private Balcony per Room',
  },
  {
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M19 21V11l-6-4"/><path d="M9 9v.01"/><path d="M9 12v.01"/><path d="M9 15v.01"/></svg>`,
    label: 'Roof Access',
  },
  {
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M18 6L6 18"/></svg>`,
    label: 'No Pets',
  },
  {
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M18 6L6 18"/></svg>`,
    label: 'No Parties',
  },
]

export default function Amenities() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section id="amenities" className="py-20 sm:py-28 px-4 bg-white/50">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12 text-[#3B2F2F]"
          style={{ fontFamily: 'var(--font-serif)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Amenities & House Rules
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {amenities?.map((a: any, i: number) => (
            <motion.div
              key={i}
              className="flex flex-col items-center text-center p-5 bg-white rounded-xl shadow-sm border border-[#E8DDD3] hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
            >
              <div
                className="text-[#3B82A0] mb-3"
                dangerouslySetInnerHTML={{ __html: a?.icon ?? '' }}
              />
              <span className="text-sm font-medium text-[#6B5B4F]">{a?.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
