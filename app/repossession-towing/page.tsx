'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import '../../styles/SitelinkPages.css'

export default function RepossessionTowing() {
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
          <h1>Repossession Towing</h1>
          <p className="hero-subtitle">Discrete and reliable service</p>
          <p className="hero-description">Serving lenders and agencies</p>
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
            <h2>Professional Repossession Services</h2>
            <p className="lead-text">
              Expressway Towing provides discrete, professional repossession services for banks, credit unions, financial institutions, and recovery agencies throughout Nashville and Middle Tennessee. Our experienced team handles every repossession with efficiency, professionalism, and strict adherence to legal requirements.
            </p>

            <div className="features-grid">
              <div className="feature-box">
                <div className="feature-icon">🤫</div>
                <h3>Discrete Operations</h3>
                <p>Low-profile service that minimizes attention and conflict</p>
              </div>
              <div className="feature-box">
                <div className="feature-icon">⚖️</div>
                <h3>Legal Compliance</h3>
                <p>Full compliance with state and federal repossession laws</p>
              </div>
              <div className="feature-box">
                <div className="feature-icon">🔒</div>
                <h3>Secure Storage</h3>
                <p>Gated, monitored storage facility for recovered vehicles</p>
              </div>
              <div className="feature-box">
                <div className="feature-icon">📱</div>
                <h3>Real-Time Updates</h3>
                <p>Immediate notification and detailed recovery reports</p>
              </div>
            </div>

            <h2>Repossession Services We Provide</h2>
            <ul className="services-list">
              <li><strong>Voluntary Repossessions:</strong> Coordinated pick-up with borrower cooperation</li>
              <li><strong>Involuntary Repossessions:</strong> Professional recovery with minimal confrontation</li>
              <li><strong>Commercial Vehicles:</strong> Specialized equipment for trucks, vans, and commercial equipment</li>
              <li><strong>Private Property Recovery:</strong> Trained in proper procedures for recovering from private property</li>
              <li><strong>Skip Tracing Support:</strong> Assistance in locating hard-to-find vehicles</li>
              <li><strong>Condition Documentation:</strong> Detailed photo documentation and vehicle condition reports</li>
            </ul>

            <div className="info-box">
              <h3>Why Financial Institutions Choose Us</h3>
              <p>
                We understand the sensitive nature of repossession work. Our operators are trained in conflict de-escalation and always operate within legal boundaries. We maintain the highest standards of professionalism and discretion to protect your institution's reputation.
              </p>
              <ul>
                <li>Licensed and bonded repossession agents</li>
                <li>Comprehensive liability insurance</li>
                <li>24/7 availability for urgent recoveries</li>
                <li>Competitive rates with volume discounts</li>
                <li>Secure, gated storage facility</li>
                <li>Electronic reporting and documentation</li>
              </ul>
            </div>

            <h2>Our Approach</h2>
            <p>
              Every repossession is handled professionally and discreetly. We arrive in unmarked vehicles when appropriate, work quickly and efficiently, and always prioritize safety. Our team is trained to remain calm and professional in all situations, de-escalating any potential conflicts.
            </p>

            <div className="info-box">
              <h3>Legal Compliance & Safety</h3>
              <p>
                We strictly adhere to all Tennessee repossession laws and regulations, including:
              </p>
              <ul>
                <li>Proper licensing and bonding requirements</li>
                <li>Avoiding "breach of peace" situations</li>
                <li>Respecting private property boundaries</li>
                <li>Accurate documentation and reporting</li>
                <li>Proper handling of personal property</li>
              </ul>
            </div>

            <div className="cta-section">
              <h3>Partner with Expressway Towing</h3>
              <p>Reliable repossession services for lenders and agencies</p>
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
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
