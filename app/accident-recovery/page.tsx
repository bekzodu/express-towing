'use client'

import React from 'react'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import StickyCallBar from '../../components/StickyCallBar'
import { SITE } from '../../lib/site'
import '../../styles/SitelinkPages.css'

export default function AccidentRecovery() {
  return (
    <div className="sitelink-page accident-page">
      <Navbar />
      <main id="main">
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Crash? Get off the road</p>
            <h1>Accident? We’ll clear you out — not later, now.</h1>
            <p>Collisions, ditches, rollovers. We send the right truck the first time so you are not waiting on a second company.</p>
            <a className="btn btn-gold" href={SITE.phoneTel} aria-label={`Get a truck now. Call ${SITE.phoneDisplay}`}>
              Get a truck now · {SITE.phoneDisplay}
            </a>
            <p className="hero-cta-note">Live dispatch. Typical arrival 15–25 minutes.</p>
          </div>
        </section>

        <section className="page-content">
          <div className="content-wrap">
            <h2>When the scene is chaotic, the tow should not be</h2>
            <p className="lead">
              Expressway Towing clears accident scenes across Nashville and Middle Tennessee. We extract damaged vehicles without making a bad day worse — then deliver them to the shop, yard, or address you choose.
            </p>

            <div className="feature-grid">
              <article className="feature-card">
                <div className="feature-icon">01</div>
                <h3>On-scene response</h3>
                <p>Quick arrival with cones, lighting, and recovery gear.</p>
              </article>
              <article className="feature-card">
                <div className="feature-icon">02</div>
                <h3>Fully insured</h3>
                <p>Coverage that protects you, the vehicle, and the property.</p>
              </article>
              <article className="feature-card">
                <div className="feature-icon">03</div>
                <h3>Trained operators</h3>
                <p>Years of crash recovery — not a random hook-and-go.</p>
              </article>
              <article className="feature-card">
                <div className="feature-icon">04</div>
                <h3>Insurance ready</h3>
                <p>We bill carriers directly and document the condition.</p>
              </article>
            </div>

            <h2>Recovery services</h2>
            <ul className="service-list">
              <li><strong>Accident towing:</strong> Safe removal from the scene to a shop or storage.</li>
              <li><strong>Winch-outs:</strong> Ditches, embankments, mud, and snow.</li>
              <li><strong>Rollover recovery:</strong> Specialized equipment for overturned vehicles.</li>
              <li><strong>Multi-car scenes:</strong> Coordinated response when more than one vehicle is involved.</li>
              <li><strong>Debris cleanup:</strong> Help reopening the lane faster.</li>
              <li><strong>Photo documentation:</strong> Condition photos for the claim file.</li>
            </ul>

            <div className="info-card">
              <h3>Why people call Expressway after a crash</h3>
              <p>
                Flatbeds and heavy wreckers mean we can move everything from a fender-bender to a major collision. Operators are trained in scene safety, and we treat the driver like a person — not a ticket number.
              </p>
            </div>

            <div className="cta-box">
              <h3>Need recovery now?</h3>
              <p>Stay safe, keep hazards on, and call. We dispatch on the line.</p>
              <div className="cta-row">
                <a className="btn btn-gold" href={SITE.phoneTel} aria-label={`Get a truck now. Call ${SITE.phoneDisplay}`}>
                  Get a truck now · {SITE.phoneDisplay}
                </a>
                <Link href="/" className="btn btn-ghost-dark">Not stranded? Go home</Link>
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
