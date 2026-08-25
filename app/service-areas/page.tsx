'use client'

import React from 'react'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import StickyCallBar from '../../components/StickyCallBar'
import { SITE } from '../../lib/site'
import '../../styles/SitelinkPages.css'

const areas = [
  {
    name: 'Nashville',
    time: '20–30 min',
    copy: 'Full coverage across Metro Nashville — downtown through the neighborhoods.',
    places: ['Downtown', 'East Nashville', 'West Nashville', 'Germantown', 'The Gulch', 'Music Row'],
  },
  {
    name: 'Franklin',
    time: '25–35 min',
    copy: 'Fast response through Franklin and Williamson County.',
    places: ['Historic Downtown', 'Cool Springs', 'Westhaven', 'Fieldstone Farms'],
  },
  {
    name: 'Brentwood',
    time: '25–35 min',
    copy: 'Residential and commercial towing throughout Brentwood.',
    places: ['Brentwood Estates', 'Governors Club', 'Brentwood Hills'],
  },
  {
    name: 'Murfreesboro',
    time: '30–40 min',
    copy: 'Reliable towing for Murfreesboro and Rutherford County.',
    places: ['Downtown', 'Medical District', 'MTSU area', 'Gateway'],
  },
  {
    name: 'Hendersonville',
    time: '25–35 min',
    copy: 'Quick dispatch across Hendersonville and Sumner County.',
    places: ['Lakeside', 'Indian Lake', 'Walton Ferry'],
  },
  {
    name: 'Lebanon',
    time: '30–40 min',
    copy: 'Professional recovery throughout Lebanon and Wilson County.',
    places: ['Downtown Lebanon', 'Cedar Grove', 'Tuckers Crossroads'],
  },
  {
    name: 'Smyrna',
    time: '30–40 min',
    copy: 'Coverage along the Smyrna corridors and nearby industrial parks.',
    places: ['Sam Ridley Pkwy', 'Lee Victory area'],
  },
]

export default function ServiceAreas() {
  return (
    <div className="sitelink-page areas-page">
      <Navbar />
      <main id="main">
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Closer trucks. Shorter wait.</p>
            <h1>Towing near you — because the truck is already local.</h1>
            <p>Nashville, Franklin, Brentwood, Murfreesboro, and nearby. Typical arrival 20–40 minutes. Call and we’ll give you an honest ETA in seconds.</p>
            <a className="btn btn-gold" href={SITE.phoneTel} aria-label={`Get a truck now. Call ${SITE.phoneDisplay}`}>
              Get a truck now · {SITE.phoneDisplay}
            </a>
            <p className="hero-cta-note">Local trucks. We tell you the ETA on the call.</p>
          </div>
        </section>

        <section className="page-content">
          <div className="content-wrap">
            <h2>If you can see these city limits, we can get there</h2>
            <p className="lead">
              Expressway Towing covers Nashville and Middle Tennessee with operators who already know the interstates, the shortcuts, and the lots that GPS gets wrong.
            </p>

            <div className="feature-grid">
              <article className="feature-card">
                <div className="feature-icon">7+</div>
                <h3>Core cities</h3>
                <p>Primary coverage across the metro.</p>
              </article>
              <article className="feature-card">
                <div className="feature-icon">I</div>
                <h3>Interstate ready</h3>
                <p>I-40, I-24, I-65, I-440, and Briley.</p>
              </article>
              <article className="feature-card">
                <div className="feature-icon">30</div>
                <h3>Local ETAs</h3>
                <p>Typical arrival in about half an hour.</p>
              </article>
              <article className="feature-card">
                <div className="feature-icon">+</div>
                <h3>Beyond the map</h3>
                <p>Call if you are just outside the list.</p>
              </article>
            </div>

            <h2>Primary cities</h2>
            <div className="areas-grid">
              {areas.map((area) => (
                <article key={area.name} className="area-card">
                  <h3>
                    {area.name} <em>{area.time}</em>
                  </h3>
                  <p>{area.copy}</p>
                  <ul>
                    {area.places.map((place) => (
                      <li key={place}>{place}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="info-card">
              <h3>Typical response times</h3>
              <ul>
                <li><strong>Nashville:</strong> 20–30 minutes</li>
                <li><strong>Franklin & Brentwood:</strong> 25–35 minutes</li>
                <li><strong>Murfreesboro:</strong> 30–40 minutes</li>
                <li><strong>Hendersonville:</strong> 25–35 minutes</li>
                <li><strong>Lebanon & Smyrna:</strong> 30–40 minutes</li>
              </ul>
              <p>Traffic, weather, and time of day can change arrival windows. Emergencies go first.</p>
            </div>

            <div className="cta-box">
              <h3>Confirm we cover your pin</h3>
              <p>Tell dispatch your location. We give you an honest ETA in seconds — then we send the truck.</p>
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
