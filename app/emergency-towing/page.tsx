'use client'

import React from 'react'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import StickyCallBar from '../../components/StickyCallBar'
import { SITE } from '../../lib/site'
import '../../styles/SitelinkPages.css'

export default function EmergencyTowing() {
  return (
    <div className="sitelink-page emergency-page">
      <Navbar />
      <main id="main">
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Don’t sit on the shoulder</p>
            <h1>Need a tow right now? We’ll dispatch on this call.</h1>
            <p>A person answers. Typical arrival around 30 minutes across Nashville. No waitlist. No “we’ll try to fit you in.”</p>
            <a className="btn btn-gold" href={SITE.phoneTel} aria-label={`Get a truck now. Call ${SITE.phoneDisplay}`}>
              Get a truck now · {SITE.phoneDisplay}
            </a>
            <p className="hero-cta-note">Takes about 20 seconds. No hold music.</p>
          </div>
        </section>

        <section className="page-content">
          <div className="content-wrap">
            <h2>When you need help fast, a truck starts moving</h2>
            <p className="lead">
              Breakdowns do not wait for business hours. You call, a person answers, and we send the nearest licensed truck — highway, parking garage, or neighborhood street. Typical Nashville arrival is around 30 minutes, not later today.
            </p>

            <div className="feature-grid">
              <article className="feature-card">
                <div className="feature-icon">30</div>
                <h3>~30 min arrival</h3>
                <p>Typical response across the Nashville metro.</p>
              </article>
              <article className="feature-card">
                <div className="feature-icon">24</div>
                <h3>Always open</h3>
                <p>Nights, weekends, and holidays included.</p>
              </article>
              <article className="feature-card">
                <div className="feature-icon">$</div>
                <h3>Price before we roll</h3>
                <p>Clear quotes. No mystery add-ons on scene.</p>
              </article>
              <article className="feature-card">
                <div className="feature-icon">TN</div>
                <h3>Licensed fleet</h3>
                <p>Modern trucks and insured, trained operators.</p>
              </article>
            </div>

            <h2>Emergency work we handle</h2>
            <ul className="service-list">
              <li><strong>Accident towing:</strong> Fast, careful recovery from crash scenes.</li>
              <li><strong>Breakdowns:</strong> Engine, transmission, or anything that leaves you stuck.</li>
              <li><strong>Roadside rescue:</strong> Flat tires, dead batteries, lockouts, and fuel.</li>
              <li><strong>Highway extraction:</strong> Safe pull-offs from I-40, I-24, I-65, and I-440.</li>
              <li><strong>Weather events:</strong> Storms, ice, and flooding do not pause dispatch.</li>
            </ul>

            <div className="info-card">
              <h3>If you are stranded right now</h3>
              <ol>
                <li>Move as far from traffic as you can.</li>
                <li>Turn on hazard lights.</li>
                <li>Call {SITE.phoneDisplay}.</li>
                <li>Share your location and what happened.</li>
                <li>Stay in a safe place until the truck arrives.</li>
              </ol>
            </div>

            <div className="cta-box">
              <h3>Need a truck now?</h3>
              <p>A person answers. We dispatch on this call. Typical arrival around 30 minutes.</p>
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
