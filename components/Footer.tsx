'use client'

import React from 'react'
import Link from 'next/link'
import { SERVICE_AREAS, SITE } from '../lib/site'
import { IconMail, IconPhone } from './Icons'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link href="/" className="nav-logo">
            <img src="/images/logo-expressway.png" alt="Expressway Towing" className="nav-logo-img" />
          </Link>
          <p>
            Licensed, insured towing across Nashville. Live dispatch. Typical arrival 15–25 minutes.
            You call. A truck starts moving.
          </p>
          <a className="btn btn-gold" href={SITE.phoneTel} aria-label={`Get a truck now. Call ${SITE.phoneDisplay}`}>
            <IconPhone className="icon" />
            Get a truck now
          </a>
        </div>

        <div>
          <h3>Services</h3>
          <Link href="/emergency-towing">Emergency towing</Link>
          <Link href="/accident-recovery">Accident recovery</Link>
          <Link href="/repossession-towing">Repossession</Link>
          <Link href="/#services">Flatbed & roadside</Link>
          <Link href="/#junk">Cash for junk cars</Link>
          <Link href="/#impound">Property impounding</Link>
        </div>

        <div>
          <h3>Service areas</h3>
          {SERVICE_AREAS.map((area) => (
            <Link key={area.name} href="/service-areas">
              {area.name}
            </Link>
          ))}
        </div>

        <div>
          <h3>Contact</h3>
          <a href={SITE.phoneTel}>
            <IconPhone className="icon" />
            {SITE.phoneDisplay}
          </a>
          <a href={SITE.mailto}>
            <IconMail className="icon" />
            {SITE.email}
          </a>
          <p className="footer-meta">{SITE.hours}</p>
          <p className="footer-meta">Nashville, TN 37203</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Expressway Towing. All rights reserved.</p>
        <a href="https://bekxod.com" target="_blank" rel="noopener noreferrer" className="bekxod-link">
          developed by bekxod.com
          <img src="/images/bekxod-short-logo.svg" alt="" className="bekxod-logo" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
