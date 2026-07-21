'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const photos = [
  { src: '/images/living-room-sofa.jpg', alt: 'Spacious living room with comfortable sofa and decorative shelving' },
  { src: '/images/kitchen-decluttered-s.jpg', alt: 'Fully equipped kitchen with washing machine and dining area' },
  { src: '/images/kitchen-window.jpg', alt: 'Kitchen with sea view through the window' },
  { src: '/images/balcony-s.jpg', alt: 'Private balcony with seating, perfect for relaxing with a drink' },
  { src: '/images/bathroom.jpg', alt: 'Clean bathroom with bathtub' },
  { src: '/images/view-1.jpg', alt: 'Sea and city panorama from the apartment window' },
  { src: '/images/view-2.jpg', alt: 'View of Mount Olympus across the Thermaic Gulf' },
  { src: '/images/view-3.jpg', alt: 'Panoramic sea view with snowy mountains in the distance' },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const openLightbox = (i: number) => setLightbox(i)
  const closeLightbox = () => setLightbox(null)
  const nextPhoto = () => setLightbox((prev) => (prev !== null ? (prev + 1) % (photos?.length ?? 1) : null))
  const prevPhoto = () => setLightbox((prev) => (prev !== null ? (prev - 1 + (photos?.length ?? 1)) % (photos?.length ?? 1) : null))

  return (
    <section id="gallery" className="py-20 sm:py-28 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12 text-[#3B2F2F]"
          style={{ fontFamily: 'var(--font-serif)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          The Apartment
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {photos?.map((photo: any, i: number) => (
            <motion.div
              key={i}
              className="relative aspect-[4/3] bg-[#E8DDD3] rounded-xl overflow-hidden cursor-pointer group"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 + i * 0.05, duration: 0.5 }}
              onClick={() => openLightbox(i)}
            >
              <Image
                src={photo?.src ?? ''}
                alt={photo?.alt ?? 'Apartment photo'}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button
              onClick={(e) => { e.stopPropagation(); prevPhoto() }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 z-10"
              aria-label="Previous photo"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextPhoto() }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 z-10"
              aria-label="Next photo"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white/80 hover:text-white p-2 z-10"
              aria-label="Close lightbox"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <motion.div
              className="relative w-full max-w-4xl aspect-[4/3]"
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photos?.[lightbox]?.src ?? ''}
                alt={photos?.[lightbox]?.alt ?? 'Apartment photo'}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
