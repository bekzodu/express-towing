'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import '../../styles/SitelinkPages.css'

export default function ServiceAreas() {
  const serviceAreas = [
    {
      name: 'Nashville',
      description: 'Complete towing and roadside assistance coverage throughout Metro Nashville',
      neighborhoods: ['Downtown', 'East Nashville', 'West Nashville', 'South Nashville', 'North Nashville', 'Germantown', 'The Gulch', 'Music Row']
    },
    {
      name: 'Franklin',
      description: 'Fast response times to Franklin and surrounding Williamson County areas',
      neighborhoods: ['Historic Downtown Franklin', 'Cool Springs', 'Westhaven', 'Fieldstone Farms']
    },
    {
      name: 'Brentwood',
      description: 'Professional towing services for Brentwood residential and business areas',
      neighborhoods: ['Brentwood Estates', 'Governors Club', 'Brentwood Hills']
    },
    {
      name: 'Murfreesboro',
      description: 'Serving Murfreesboro and Rutherford County with reliable towing',
      neighborhoods: ['Downtown Murfreesboro', 'Medical District', 'MTSU Campus Area', 'Gateway']
    },
    {
      name: 'Hendersonville',
      description: 'Quick emergency response throughout Hendersonville and Sumner County',
      neighborhoods: ['Lakeside', 'Indian Lake', 'Walton Ferry']
    },
    {
      name: 'Lebanon',
      description: 'Professional towing and recovery services for Lebanon and Wilson County',
      neighborhoods: ['Downtown Lebanon', 'Cedar Grove', 'Tuckers Crossroads']
    },
    {
      name: 'Smyrna',
      description: 'Comprehensive towing coverage for Smyrna and surrounding areas',
      neighborhoods: ['Lee Victory Recreation Park Area', 'Sam Ridley Parkway Corridor']
    }
  ]

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
          <h1>Service Areas</h1>
          <p className="hero-subtitle">Nashville & surrounding cities</p>
          <p className="hero-description">Fast local dispatch</p>
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
            <h2>Serving Middle Tennessee</h2>
            <p className="lead-text">
              Expressway Towing provides fast, reliable towing and roadside assistance throughout Nashville and the surrounding Middle Tennessee region. With strategically positioned trucks and local knowledge, we ensure quick response times no matter where you're located in our service area.
            </p>

            <div className="features-grid">
              <div className="feature-box">
                <div className="feature-icon">📍</div>
                <h3>Wide Coverage</h3>
                <p>Serving 7+ cities across Middle Tennessee</p>
              </div>
              <div className="feature-box">
                <div className="feature-icon">⚡</div>
                <h3>Fast Dispatch</h3>
                <p>Strategic truck positioning for quick response</p>
              </div>
              <div className="feature-box">
                <div className="feature-icon">🗺️</div>
                <h3>Local Knowledge</h3>
                <p>Familiar with all local routes and shortcuts</p>
              </div>
              <div className="feature-box">
                <div className="feature-icon">🌍</div>
                <h3>Expanding Coverage</h3>
                <p>Always extending our service reach</p>
              </div>
            </div>

            <h2>Our Primary Service Areas</h2>
            
            <div className="areas-grid">
              {serviceAreas.map((area, index) => (
                <motion.div
                  key={index}
                  className="area-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <h3>{area.name}</h3>
                  <p className="area-description">{area.description}</p>
                  <div className="neighborhoods">
                    <h4>Coverage includes:</h4>
                    <ul>
                      {area.neighborhoods.map((neighborhood, idx) => (
                        <li key={idx}>{neighborhood}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="info-box">
              <h3>Don't See Your Area Listed?</h3>
              <p>
                While these are our primary service areas, we regularly accommodate requests from surrounding cities and counties throughout Middle Tennessee. If you're located outside our main service area, give us a call - we may still be able to help!
              </p>
              <p>
                We've assisted customers in Clarksville, Dickson, Gallatin, La Vergne, Mount Juliet, Spring Hill, and many other communities throughout the region.
              </p>
            </div>

            <h2>Why Our Coverage Matters</h2>
            <p>
              Having comprehensive coverage across Middle Tennessee means:
            </p>
            <ul className="services-list">
              <li><strong>Faster Response Times:</strong> Trucks positioned strategically throughout our service area</li>
              <li><strong>Local Expertise:</strong> Drivers familiar with local roads, traffic patterns, and shortcuts</li>
              <li><strong>Consistent Service:</strong> Same high-quality service no matter where you are</li>
              <li><strong>Better Availability:</strong> Multiple trucks mean better availability during busy times</li>
              <li><strong>Interstate Coverage:</strong> Can assist with long-distance towing between our service areas</li>
            </ul>

            <h2>Average Response Times by Area</h2>
            <div className="info-box">
              <ul>
                <li><strong>Nashville Metro:</strong> 20-30 minutes average</li>
                <li><strong>Franklin & Brentwood:</strong> 25-35 minutes average</li>
                <li><strong>Murfreesboro:</strong> 30-40 minutes average</li>
                <li><strong>Hendersonville:</strong> 25-35 minutes average</li>
                <li><strong>Lebanon & Smyrna:</strong> 30-40 minutes average</li>
              </ul>
              <p><em>Response times may vary based on traffic, weather, and time of day. Emergency situations receive priority dispatch.</em></p>
            </div>

            <div className="cta-section">
              <h3>Need Service in Your Area?</h3>
              <p>Call now to confirm coverage and get help on the way</p>
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
