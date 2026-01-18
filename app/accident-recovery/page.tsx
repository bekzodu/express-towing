'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import '../../styles/SitelinkPages.css'

export default function AccidentRecovery() {
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
          <h1>Accident & Recovery</h1>
          <p className="hero-subtitle">Accidents, stuck vehicles, breakdowns</p>
          <p className="hero-description">Professional, insured service</p>
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
            <h2>Professional Accident Recovery Services</h2>
            <p className="lead-text">
              When accidents happen, you need a towing service you can trust. Expressway Towing provides professional accident recovery and vehicle extraction services throughout Nashville and surrounding areas. We work safely and efficiently to clear accident scenes and transport damaged vehicles.
            </p>

            <div className="features-grid">
              <div className="feature-box">
                <div className="feature-icon">🚨</div>
                <h3>Accident Scene Response</h3>
                <p>Quick arrival to accident scenes with proper safety equipment</p>
              </div>
              <div className="feature-box">
                <div className="feature-icon">🛡️</div>
                <h3>Fully Insured</h3>
                <p>Complete insurance coverage for your peace of mind</p>
              </div>
              <div className="feature-box">
                <div className="feature-icon">🏆</div>
                <h3>Professional Team</h3>
                <p>Trained operators with years of accident recovery experience</p>
              </div>
              <div className="feature-box">
                <div className="feature-icon">📋</div>
                <h3>Insurance Coordination</h3>
                <p>We work directly with your insurance company</p>
              </div>
            </div>

            <h2>Comprehensive Recovery Services</h2>
            <ul className="services-list">
              <li><strong>Accident Towing:</strong> Safe removal of vehicles from accident scenes to repair shops or storage facilities</li>
              <li><strong>Vehicle Extraction:</strong> Recovery of stuck or disabled vehicles from ditches, embankments, or difficult terrain</li>
              <li><strong>Rollover Recovery:</strong> Specialized equipment and techniques for overturned vehicles</li>
              <li><strong>Multi-Vehicle Accidents:</strong> Coordinated response for accidents involving multiple vehicles</li>
              <li><strong>Debris Cleanup:</strong> Assistance with clearing accident debris to reopen roadways</li>
              <li><strong>Damage Documentation:</strong> Photos and documentation for insurance claims</li>
            </ul>

            <div className="info-box">
              <h3>Why Choose Expressway for Accident Recovery?</h3>
              <p>
                With specialized equipment including flatbed tow trucks and heavy-duty recovery vehicles, we handle everything from minor fender-benders to major collisions. Our operators are trained in safe vehicle extraction and accident scene management, ensuring your vehicle is handled with care during a stressful situation.
              </p>
              <p>
                We understand that accidents are traumatic. That's why we work quickly and professionally to get your vehicle safely transported while treating you with compassion and respect.
              </p>
            </div>

            <h2>Working with Insurance Companies</h2>
            <p>
              We have extensive experience working with all major insurance providers. We can bill your insurance directly and provide all necessary documentation for your claim. Our transparent pricing and professional service make the insurance process smoother.
            </p>

            <div className="cta-section">
              <h3>Need Accident Recovery Assistance?</h3>
              <p>Available 24/7 for immediate accident response</p>
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
