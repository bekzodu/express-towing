'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import '../../styles/SitelinkPages.css'

export default function EmergencyTowing() {
  return (
    <div className="sitelink-page">
      <Navbar />
      
      <section className="page-hero">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <h1>Emergency Towing</h1>
          <p className="hero-subtitle">Fast response, 24/7 availability</p>
          <p className="hero-description">Upfront pricing, no surprises</p>
          <motion.a
            href="tel:(615) 259-2727"
            className="cta-button-large"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Call Now: (615) 259-2727
          </motion.a>
        </motion.div>
      </section>

      <section className="page-content">
        <div className="content-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>When You Need Help Fast, We're Here</h2>
            <p className="lead-text">
              Car trouble doesn't wait for business hours. Whether you're stranded on the highway at 3 AM or dealing with a breakdown during rush hour, Expressway Towing provides rapid emergency response 24/7, 365 days a year.
            </p>

            <div className="features-grid">
              <div className="feature-box">
                <div className="feature-icon">⚡</div>
                <h3>30-Minute Response</h3>
                <p>Average response time across the Nashville metro area</p>
              </div>
              <div className="feature-box">
                <div className="feature-icon">🌙</div>
                <h3>24/7 Availability</h3>
                <p>Day or night, weekday or holiday - we're always ready</p>
              </div>
              <div className="feature-box">
                <div className="feature-icon">💰</div>
                <h3>Upfront Pricing</h3>
                <p>Clear quotes before we start - no hidden fees</p>
              </div>
              <div className="feature-box">
                <div className="feature-icon">🚛</div>
                <h3>Professional Fleet</h3>
                <p>Modern equipment and experienced, licensed operators</p>
              </div>
            </div>

            <h2>Emergency Services We Provide</h2>
            <ul className="services-list">
              <li><strong>Accident Towing:</strong> Quick response to accident scenes with professional vehicle recovery</li>
              <li><strong>Breakdown Assistance:</strong> Engine failure, transmission issues, or other mechanical problems</li>
              <li><strong>Roadside Emergencies:</strong> Flat tires, dead batteries, lockouts, and fuel delivery</li>
              <li><strong>Highway Rescue:</strong> Safe extraction from dangerous highway situations</li>
              <li><strong>Weather-Related:</strong> Help during storms, floods, or other severe weather conditions</li>
            </ul>

            <div className="cta-section">
              <h3>Need Emergency Towing Now?</h3>
              <p>Our dispatch team is standing by to send help your way</p>
              <div className="cta-buttons">
                <motion.a
                  href="tel:(615) 259-2727"
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Call (615) 259-2727
                </motion.a>
                <Link href="/" className="btn-secondary">
                  Back to Home
                </Link>
              </div>
            </div>

            <div className="info-box">
              <h3>What to Do in an Emergency</h3>
              <ol>
                <li>Move to a safe location if possible</li>
                <li>Turn on your hazard lights</li>
                <li>Call us at (615) 259-2727</li>
                <li>Provide your location and situation details</li>
                <li>Stay in a safe place while help arrives</li>
              </ol>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
