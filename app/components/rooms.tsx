'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const rooms = [
  {
    title: 'Room 1',
    image: '/images/1-room-out.jpg',
    desc: 'Bright and airy room with a comfortable double bed, private balcony with city views, dedicated desk and chair for focused work, built-in wardrobe, and individual AC unit (cooling & heating).',
  },
  {
    title: 'Room 2',
    image: '/images/2-room-out.jpeg',
    desc: 'Spacious room featuring a designer ceiling with ambient lighting, double bed, private balcony, work desk with shelving, built-in wardrobe, and individual AC unit (cooling & heating).',
  },
]

export default function Rooms() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section id="rooms" className="py-20 sm:py-28 px-4 bg-white/50">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-4 text-[#3B2F2F]"
          style={{ fontFamily: 'var(--font-serif)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          The Rooms
        </motion.h2>
        <motion.p
          className="text-center text-[#6B5B4F] mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Each room can be rented separately or together as a full apartment.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rooms?.map((room: any, i: number) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-[#E8DDD3] hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
            >
              <div className="relative aspect-[4/3] bg-[#E8DDD3]">
                <Image
                  src={room?.image ?? ''}
                  alt={room?.title ?? 'Room photo'}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3
                  className="text-xl font-bold mb-3 text-[#3B2F2F]"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {room?.title}
                </h3>
                <p className="text-[#6B5B4F] text-sm leading-relaxed">{room?.desc}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {['Desk & Chair', 'Private Balcony', 'AC'].map((tag: string) => (
                    <span
                      key={tag}
                      className="text-xs bg-[#FAF6F1] text-[#C75B39] px-3 py-1 rounded-full border border-[#E8DDD3]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
