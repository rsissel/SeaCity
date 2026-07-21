'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Neighborhood', href: '#neighborhood' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FAF6F1]/95 backdrop-blur-md shadow-md'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => scrollTo('#hero')}
              className={`font-serif text-lg font-bold tracking-tight transition-colors ${
                scrolled ? 'text-[#3B2F2F]' : 'text-white'
              }`}
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Penthouse Thessaloniki
            </button>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems?.map((item: any) => (
                <button
                  key={item?.href}
                  onClick={() => scrollTo(item?.href)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    scrolled
                      ? 'text-[#6B5B4F] hover:text-[#C75B39] hover:bg-[#C75B39]/10'
                      : 'text-white/90 hover:text-white hover:bg-white/15'
                  }`}
                >
                  {item?.label}
                </button>
              ))}
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 rounded-lg ${
                scrolled ? 'text-[#3B2F2F]' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#FAF6F1]/98 backdrop-blur-lg flex flex-col items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {navItems?.map((item: any) => (
              <button
                key={item?.href}
                onClick={() => scrollTo(item?.href)}
                className="text-xl font-medium text-[#3B2F2F] hover:text-[#C75B39] transition-colors py-2"
              >
                {item?.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
