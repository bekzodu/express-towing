'use client'

import React from 'react'
import Link from 'next/link'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <div className="footer-logo-text">
            <span className="footer-logo-express">EXPRESSWAY</span>
            <span className="footer-logo-towing">TOWING</span>
          </div>
        </div>

        <div className="footer-links">
          <Link href="/#services">Services</Link>
          <Link href="/emergency-towing">Emergency Towing</Link>
          <Link href="/accident-recovery">Accident Recovery</Link>
          <Link href="/repossession-towing">Repossession</Link>
          <Link href="/service-areas">Service Areas</Link>
          <Link href="/#contact">Contact</Link>
        </div>

        <div className="footer-credit">
          <span>developed by</span>
          <a 
            href="https://bekxod.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bekxod-link"
          >
            bekxod.com
            <img src="/images/bekxod-short-logo.svg" alt="Bekxod Logo" className="bekxod-logo" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
