'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import StickyCallBar from '../components/StickyCallBar'
import {
  IconArrow,
  IconBuilding,
  IconCash,
  IconCheck,
  IconClock,
  IconPhone,
  IconShield,
  IconStar,
  IconTruck,
} from '../components/Icons'
import { SERVICE_AREAS, SITE } from '../lib/site'
import '../styles/HomeStyle.css'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5 },
}

const services = [
  {
    title: 'Emergency Towing',
    copy: 'Breakdowns and highway rescue. We dispatch on the call — you are not waiting in a queue.',
    href: '/emergency-towing',
  },
  {
    title: 'Flatbed Towing',
    copy: 'Damage-free transport for luxury, classic, lowered, and AWD vehicles. The truck that fits, the first time.',
    href: '/#contact',
  },
  {
    title: 'Roadside Assistance',
    copy: 'Jump starts, tire changes, fuel, lockouts. Often faster than a tow — we tell you which on the phone.',
    href: '/#contact',
  },
  {
    title: 'Accident Recovery',
    copy: 'Clear the scene, document the damage, get you off the shoulder. Insurance-ready from the start.',
    href: '/accident-recovery',
  },
  {
    title: 'Heavy Hauling',
    copy: 'RVs, box trucks, and equipment. We send heavy gear instead of making you wait for a second truck.',
    href: '/#contact',
  },
  {
    title: 'Cash for Junk Cars',
    copy: 'Same-day offer and pickup. The car that’s been sitting does not have to sit another week.',
    href: '/#junk',
  },
]

const steps = [
  {
    n: '01',
    title: 'Call — about 20 seconds',
    copy: 'Say where you are. We quote before we roll. A person picks up. No hold music.',
  },
  {
    n: '02',
    title: 'We send the nearest truck',
    copy: 'Local operators who already know I-24, I-40, I-65, and the side streets GPS gets wrong.',
  },
  {
    n: '03',
    title: 'You’re off the shoulder',
    copy: 'Back on the road, or delivered to a shop, home, or lot. Waiting is the part we skip.',
  },
]

const reasons = [
  'No waitlist — we dispatch the nearest truck on the call',
  'A person answers. 24/7. Including 2 a.m. and holidays.',
  'Typical Nashville arrival 15–25 minutes',
  'Upfront quotes. No surprise fees after the hook.',
  'Flatbeds ready so you are not waiting on a second truck',
  'Local crews who know the interstates and the back roads',
]

const reviews = [
  {
    name: 'James R.',
    place: 'East Nashville',
    text: 'Stranded on I-40 after midnight. They answered immediately and were there before I finished my coffee. That is the whole job.',
  },
  {
    name: 'Melissa K.',
    place: 'Franklin',
    text: 'I did not have time to sit around. They quoted, dispatched, and kept me updated. I was off the shoulder faster than I expected.',
  },
  {
    name: 'David P.',
    place: 'Murfreesboro',
    text: 'Needed a lot tow the same day. No “we’ll try to squeeze you in.” They just came.',
  },
]

const faqs = [
  {
    q: 'How quickly can you arrive?',
    a: 'Typical arrival is 15–25 minutes in most Nashville-area locations. We dispatch the nearest truck on the call — there is no waitlist and no appointment.',
  },
  {
    q: 'Do I have to wait on hold?',
    a: 'No. Dispatch is live 24/7. A person answers, takes your location, and sends a truck on that same call.',
  },
  {
    q: 'Do you work with insurance?',
    a: 'Yes. We work with most major insurers and roadside programs and can help coordinate the claim so you are not stuck in the middle.',
  },
  {
    q: 'What payment methods do you take?',
    a: 'Cards, cash, Apple Pay, Google Pay, and direct insurance billing when the service is covered.',
  },
  {
    q: 'What vehicles can you tow?',
    a: 'Cars, trucks, SUVs, motorcycles, RVs, and commercial equipment. The fleet includes flatbeds, wheel-lifts, and heavy-duty wreckers — so you are not waiting for a second company.',
  },
  {
    q: 'Do you offer long-distance towing?',
    a: 'Yes. We run statewide and interstate transport with secure tie-downs and updates while your vehicle is in transit.',
  },
  {
    q: 'Are you open on holidays?',
    a: 'Always. We operate 24/7, 365 days a year — nights, weekends, and holidays included. Breakdowns do not wait, so neither do we.',
  },
  {
    q: 'Which cities do you cover?',
    a: 'Nashville, Franklin, Brentwood, Murfreesboro, Hendersonville, Lebanon, and Smyrna, plus surrounding Middle Tennessee. If you do not see your town, call anyway — we will tell you an honest ETA in seconds.',
  },
]

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className="home">
      <Navbar />

      <main id="main">
        <section className="hero" aria-label="Expressway Towing emergency dispatch">
          <div className="hero-overlay" />
          <div className="container hero-grid">
            <motion.div {...fadeUp} className="hero-copy">
              <img src="/images/logo-expressway.png" alt="Expressway Towing" className="hero-logo" />
              <p className="hero-kicker">Live dispatch · A person answers</p>
              <h1>Stuck? Don’t wait. Get a truck rolling now.</h1>
              <p className="hero-lead">
                One call. We send the closest truck. Most Nashville pickups land in 15–25 minutes —
                not later today, not after lunch.
              </p>
              <div className="hero-actions">
                <a className="btn btn-gold" href={SITE.phoneTel} aria-label={`Get a truck now. Call ${SITE.phoneDisplay}`}>
                  <IconPhone />
                  Get a truck now · {SITE.phoneDisplay}
                </a>
              </div>
              <p className="cta-note">Takes about 20 seconds. No hold music. No waitlist.</p>
              <ul className="hero-trust">
                <li>
                  <IconClock className="icon" /> Typical arrival 15–25 min
                </li>
                <li>
                  <IconShield className="icon" /> Licensed & insured
                </li>
                <li>
                  <IconStar className="icon" /> 5.0 from local drivers
                </li>
              </ul>
              <a className="btn-quiet" href="#services">
                Not stranded? See other services
              </a>
            </motion.div>
          </div>
        </section>

        <section className="stats-bar" aria-label="Company highlights">
          <div className="container stats-grid">
            <div>
              <strong>Live</strong>
              <span>A person answers 24/7</span>
            </div>
            <div>
              <strong>15–25 min</strong>
              <span>Typical Nashville arrival</span>
            </div>
            <div>
              <strong>No waitlist</strong>
              <span>Nearest truck, on the call</span>
            </div>
            <div>
              <strong>7 cities</strong>
              <span>Middle Tennessee coverage</span>
            </div>
          </div>
        </section>

        <section id="services" className="section services">
          <div className="container">
            <motion.div {...fadeUp} className="section-head">
              <p className="section-kicker">What we do</p>
              <h2 className="section-title">When you can’t wait, this is what we send.</h2>
              <p className="section-lead">
                You don’t need a menu. You need the right truck moving toward you. We figure that out on the call.
              </p>
            </motion.div>
            <ol className="service-index">
              {services.map((service, index) => (
                <motion.li key={service.title} {...fadeUp}>
                  <Link href={service.href}>
                    <span className="service-num">{String(index + 1).padStart(2, '0')}</span>
                    <span className="service-body">
                      <h3>{service.title}</h3>
                      <p>{service.copy}</p>
                    </span>
                    <span className="service-go" aria-hidden="true">
                      <IconArrow />
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ol>
          </div>
        </section>

        <section className="proof">
          <div className="container proof-grid">
            <motion.figure {...fadeUp}>
              <img src="/images/towing4.png" alt="Expressway Towing flatbed carrying a luxury Mercedes-Benz in Nashville" />
              <figcaption>Flatbed transport for high-value vehicles</figcaption>
            </motion.figure>
            <motion.figure {...fadeUp}>
              <img src="/images/towing5.png" alt="Expressway Towing operator helping a driver with a roadside tire issue" />
              <figcaption>Roadside help that gets you moving</figcaption>
            </motion.figure>
          </div>
        </section>

        <section className="section process">
          <div className="container">
            <motion.div {...fadeUp} className="section-head">
              <p className="section-kicker">How it works</p>
              <h2 className="section-title">Three steps. None of them are “sit tight.”</h2>
            </motion.div>
            <ol className="process-board">
              {steps.map((step) => (
                <motion.li key={step.n} {...fadeUp}>
                  <b>{step.n}</b>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </motion.li>
              ))}
            </ol>
          </div>
        </section>

        <section id="about" className="section why">
          <div className="container why-grid">
            <motion.div className="why-photo" {...fadeUp}>
              <img src="/images/towing1.png" alt="Expressway Towing truck recovering a vehicle in Nashville" />
            </motion.div>
            <motion.div {...fadeUp}>
              <p className="section-kicker">Why drivers call us</p>
              <h2 className="section-title">The worst part of a breakdown is waiting.</h2>
              <p className="section-lead">
                We skip that. Expressway is a Nashville operation — not a call center flipping jobs to whoever is cheapest.
                You talk to dispatch, a truck starts moving, and you’re not guessing when help shows up.
              </p>
              <ul className="why-list">
                {reasons.map((item) => (
                  <li key={item}>
                    <IconCheck className="icon" />
                    {item}
                  </li>
                ))}
              </ul>
              <a className="btn btn-dark" href={SITE.phoneTel}>
                <IconPhone />
                Talk to dispatch — now
              </a>
            </motion.div>
          </div>
        </section>

        <section className="section coverage">
          <div className="container">
            <motion.div {...fadeUp} className="section-head light">
              <p className="section-kicker">Coverage</p>
              <h2 className="section-title">Closer trucks. Shorter wait.</h2>
              <p className="section-lead">
                We stage in Nashville and the surrounding cities so you are not waiting on a truck from the other side of the state.
              </p>
            </motion.div>
            <ul className="coverage-board">
              {SERVICE_AREAS.map((area) => (
                <li key={area.name}>
                  <Link href="/service-areas">
                    <strong>{area.name}</strong>
                    <span className="coverage-rule" aria-hidden="true" />
                    <em>{area.time}</em>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="testimonials" className="section reviews">
          <div className="container">
            <motion.div {...fadeUp} className="section-head">
              <p className="section-kicker">Social proof</p>
              <h2 className="section-title">People remember who showed up first.</h2>
            </motion.div>
            <div className="reviews-grid">
              {reviews.map((review) => (
                <motion.blockquote key={review.name} className="review-card" {...fadeUp}>
                  <div className="stars" aria-label="5 star review">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <IconStar key={i} />
                    ))}
                  </div>
                  <p>“{review.text}”</p>
                  <footer>
                    <strong>{review.name}</strong>
                    <span>{review.place}</span>
                  </footer>
                </motion.blockquote>
              ))}
            </div>
          </div>
        </section>

        <section id="impound" className="section split-dark">
          <div className="container split-grid">
            <motion.div className="split-photo" {...fadeUp}>
              <img src="/images/impounding.jpg" alt="Private property impound towing in Nashville" />
            </motion.div>
            <motion.div {...fadeUp}>
              <p className="section-kicker">Property managers</p>
              <h2 className="section-title">Illegal parking, handled legally.</h2>
              <p className="section-lead">
                We partner with apartments, HOAs, and commercial lots on private-property impounding —
                documented, posted, and available after hours.
              </p>
              <ul className="why-list">
                <li>
                  <IconBuilding className="icon" /> 24/7 monitoring and response
                </li>
                <li>
                  <IconCheck className="icon" /> Signage and compliance support
                </li>
                <li>
                  <IconCheck className="icon" /> Photo documentation on every tow
                </li>
              </ul>
              <a className="btn btn-gold" href={SITE.phoneTel}>
                Schedule a property walkthrough
              </a>
            </motion.div>
          </div>
        </section>

        <section id="junk" className="section split-light">
          <div className="container split-grid reverse">
            <motion.div {...fadeUp}>
              <p className="section-kicker">Cash for cars</p>
              <h2 className="section-title">We’ll buy the car that’s been sitting.</h2>
              <p className="section-lead">
                Running, wrecked, or rusted — we make a same-day cash offer, pick it up free, and take care of the title work.
              </p>
              <ul className="why-list">
                <li>
                  <IconCash className="icon" /> Instant cash offer
                </li>
                <li>
                  <IconTruck className="icon" /> Free towing included
                </li>
                <li>
                  <IconCheck className="icon" /> We handle the paperwork
                </li>
              </ul>
              <a className="btn btn-dark" href={SITE.phoneTel}>
                Get a junk-car quote
              </a>
            </motion.div>
            <motion.div className="split-photo" {...fadeUp}>
              <img src="/images/cash-for-junk.jpg" alt="Cash for junk cars pickup by Expressway Towing" />
            </motion.div>
          </div>
        </section>

        <section className="section faq">
          <div className="container faq-wrap">
            <motion.div {...fadeUp} className="section-head">
              <p className="section-kicker">FAQ</p>
              <h2 className="section-title">Questions people ask from the shoulder.</h2>
            </motion.div>
            <div className="faq-list">
              {faqs.map((item, index) => {
                const open = openFaq === index
                return (
                  <div key={item.q} className={`faq-item ${open ? 'open' : ''}`}>
                    <button
                      type="button"
                      className="faq-trigger"
                      aria-expanded={open}
                      onClick={() => setOpenFaq(open ? null : index)}
                    >
                      {item.q}
                      <span aria-hidden="true">{open ? '–' : '+'}</span>
                    </button>
                    {open && (
                      <div className="faq-panel">
                        <p>{item.a}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="final-cta">
          <div className="container final-inner">
            <p className="section-kicker">Still on the shoulder?</p>
            <h2 className="section-title">Tap. We’ll come get you.</h2>
            <p>A person answers. We dispatch on the call. Keep your hazards on until the truck is there.</p>
            <div className="hero-actions">
              <a className="btn btn-gold" href={SITE.phoneTel} aria-label={`Get a truck now. Call ${SITE.phoneDisplay}`}>
                <IconPhone />
                Get a truck now · {SITE.phoneDisplay}
              </a>
            </div>
            <p className="cta-note">Not an emergency? Email {SITE.email}</p>
          </div>
        </section>
      </main>

      <Footer />
      <StickyCallBar />
    </div>
  )
}
