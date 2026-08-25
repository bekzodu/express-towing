'use client'

import React from 'react'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import StickyCallBar from '../../components/StickyCallBar'
import { SITE } from '../../lib/site'
import '../../styles/SitelinkPages.css'

export default function RepossessionTowing() {
  return (
    <div className="sitelink-page repo-page">
      <Navbar />
      <main id="main">
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Lenders & agencies</p>
            <h1>Repossession that stays professional</h1>
            <p>Discreet, lawful recovery for banks, credit unions, and agencies. Secure storage, clean documentation, and operators who know Tennessee rules.</p>
            <a className="btn btn-gold" href={SITE.phoneTel} aria-label={`Assign a recovery. Call ${SITE.phoneDisplay}`}>
              Assign a recovery · {SITE.phoneDisplay}
            </a>
            <p className="hero-cta-note">A person answers. Same-day and after-hours assignments.</p>
          </div>
        </section>

        <section className="page-content">
          <div className="content-wrap">
            <h2>Recovery partners, not cowboy towing</h2>
            <p className="lead">
              Expressway Towing handles voluntary and involuntary repossessions across Nashville and Middle Tennessee. Every assignment is run quietly, legally, and with a full paper trail.
            </p>

            <div className="feature-grid">
              <article className="feature-card">
                <div className="feature-icon">01</div>
                <h3>Low profile</h3>
                <p>Unmarked options and conflict-aware operators.</p>
              </article>
              <article className="feature-card">
                <div className="feature-icon">02</div>
                <h3>Legal compliance</h3>
                <p>Tennessee and federal repossession requirements followed.</p>
              </article>
              <article className="feature-card">
                <div className="feature-icon">03</div>
                <h3>Secure storage</h3>
                <p>Gated, monitored lot for recovered vehicles.</p>
              </article>
              <article className="feature-card">
                <div className="feature-icon">04</div>
                <h3>Live updates</h3>
                <p>Immediate notice and detailed recovery reports.</p>
              </article>
            </div>

            <h2>Assignments we take</h2>
            <ul className="service-list">
              <li><strong>Voluntary surrenders:</strong> Coordinated pickup with the borrower.</li>
              <li><strong>Involuntary recovery:</strong> Professional, no-drama retrieval.</li>
              <li><strong>Commercial units:</strong> Trucks, vans, and equipment.</li>
              <li><strong>Private property:</strong> Trained procedures — no breach of peace.</li>
              <li><strong>Skip support:</strong> Help locating hard-to-find units.</li>
              <li><strong>Condition reports:</strong> Photos and inventory of personal property.</li>
            </ul>

            <div className="info-card">
              <h3>Why lenders stay with us</h3>
              <ul>
                <li>Licensed and bonded agents</li>
                <li>Liability coverage on every job</li>
                <li>24/7 availability for urgent recoveries</li>
                <li>Volume pricing for ongoing accounts</li>
                <li>Electronic reporting and documentation</li>
              </ul>
            </div>

            <div className="cta-box">
              <h3>Set up a recovery account</h3>
              <p>Talk to dispatch about lender onboarding, storage, and after-hours assignments.</p>
              <div className="cta-row">
                <a className="btn btn-gold" href={SITE.phoneTel} aria-label={`Assign a recovery. Call ${SITE.phoneDisplay}`}>
                  Assign a recovery · {SITE.phoneDisplay}
                </a>
                <Link href="/" className="btn btn-ghost-dark">Back to home</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCallBar />
    </div>
  )
}
