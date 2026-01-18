'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import '../styles/Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isBannerVisible, setIsBannerVisible] = useState(true)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      {isBannerVisible && (
        <motion.div 
          className="promo-banner"
          initial={{ height: 45, opacity: 1 }}
          animate={{ height: 45, opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
        >
          <div className="banner-content">
            <span className="banner-text">
              Need a tow? Call us now for a quote — (615) 259-2727
            </span>
            <motion.a
              href="tel:(615) 259-2727"
              className="banner-cta"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Call Now
            </motion.a>
          </div>
          <button 
            className="banner-close"
            onClick={() => setIsBannerVisible(false)}
            aria-label="Close banner"
          >
            ×
          </button>
        </motion.div>
      )}
      <nav className={`navbar ${!isBannerVisible ? 'banner-closed' : ''}`}>
        <div className="nav-content">
          <Link href="/">
            <motion.div 
              className="nav-logo"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="logo-text">
                <span className="logo-express">EXPRESSWAY</span>
                <span className="logo-towing">TOWING</span>
              </div>
            </motion.div>
          </Link>

          <button 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>

          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <Link href="/#services" onClick={handleLinkClick}>Services</Link>
            <Link href="/emergency-towing" onClick={handleLinkClick}>Emergency Towing</Link>
            <Link href="/accident-recovery" onClick={handleLinkClick}>Accident Recovery</Link>
            <Link href="/repossession-towing" onClick={handleLinkClick}>Repossession</Link>
            <Link href="/service-areas" onClick={handleLinkClick}>Service Areas</Link>
            <Link href="/#contact" onClick={handleLinkClick}>Contact</Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
