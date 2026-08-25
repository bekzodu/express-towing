'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { SITE } from '../lib/site'
import { IconClose, IconMenu, IconPhone } from './Icons'
import '../styles/Navbar.css'

const links = [
  { href: '/#services', label: 'Services' },
  { href: '/emergency-towing', label: 'Emergency' },
  { href: '/accident-recovery', label: 'Accidents' },
  { href: '/repossession-towing', label: 'Repossession' },
  { href: '/service-areas', label: 'Areas' },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [bannerOpen, setBannerOpen] = useState(true)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      {bannerOpen && (
        <div className="promo-banner">
          <p>
            <span className="open-tag">Live now</span>
            <span className="banner-full">Stuck? Dispatch answers. Typical arrival 15–25 min.</span>
            <span className="banner-short">15–25 min arrival</span>
          </p>
          <a href={SITE.phoneTel} aria-label={`Get a truck now. Call ${SITE.phoneDisplay}`}>
            {SITE.phoneDisplay}
          </a>
          <button type="button" className="banner-close" onClick={() => setBannerOpen(false)} aria-label="Dismiss banner">
            ×
          </button>
        </div>
      )}

      <header className={`navbar ${bannerOpen ? '' : 'banner-closed'} ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="nav-content">
          <Link href="/" className="nav-logo" onClick={closeMenu} aria-label="Expressway Towing home">
            <img src="/images/logo-expressway.png" alt="Expressway Towing" className="nav-logo-img" />
          </Link>

          <nav className={`nav-links ${menuOpen ? 'active' : ''}`} aria-label="Primary">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={closeMenu}>
                {link.label}
              </Link>
            ))}
            <a className="nav-call" href={SITE.phoneTel} onClick={closeMenu} aria-label={`Get a truck now. Call ${SITE.phoneDisplay}`}>
              <IconPhone className="icon" />
              Get a truck now
            </a>
          </nav>

          <a className="nav-call nav-call-desktop" href={SITE.phoneTel} aria-label={`Get a truck now. Call ${SITE.phoneDisplay}`}>
            <IconPhone className="icon" />
            Get a truck now
          </a>

          <button
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <IconClose className="icon" /> : <IconMenu className="icon" />}
          </button>
        </div>
      </header>
    </>
  )
}

export default Navbar
