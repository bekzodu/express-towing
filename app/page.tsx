'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/HomeStyle.css'

const Home = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [showAllFaqs, setShowAllFaqs] = useState(false)
  const [showAllServices, setShowAllServices] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768)
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const services = [
    { 
      title: 'Flatbed Towing',
      description: 'Secure transport for luxury and damaged vehicles',
      icon: '🚛',
      details: 'Safe, damage-free towing with state-of-the-art flatbed trucks'
    },
    { 
      title: 'Emergency Towing',
      description: 'Fast 24/7 response when you need it most',
      icon: '🆘',
      details: 'Average 30-minute response time across Nashville area'
    },
    { 
      title: 'Roadside Assistance',
      description: 'Jump starts, tire changes, and lockout service',
      icon: '🔧',
      details: 'Quick solutions to get you back on the road'
    },
    { 
      title: 'Long-Distance',
      description: 'Interstate vehicle transportation with tracking',
      icon: '🛣️',
      details: 'Fully insured cross-state transport services'
    },
    { 
      title: 'Heavy Hauling',
      description: 'Specialized equipment for large vehicles',
      icon: '💪',
      details: 'Commercial trucks, RVs, and heavy machinery'
    },
    { 
      title: 'Cash for Junk Cars',
      description: 'Instant payment for vehicles in any condition',
      icon: '💵',
      details: 'Free towing and same-day cash offers'
    }
  ]

  const testimonials = [
    {
      name: "John D.",
      text: "Saved me when I was stranded at 2 AM. Professional and quick service!",
      rating: 5
    },
    {
      name: "Sarah M.",
      text: "Best towing service in the area. Fair prices and friendly staff.",
      rating: 5
    },
    {
      name: "Mike R.",
      text: "They handled my heavy equipment transport with expertise. Highly recommended!",
      rating: 5
    }
  ]

  const visibleServices = isMobile && !showAllServices ? services.slice(0, 3) : services

  return (
    <div className="home">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="hero"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(/images/towing3.jpeg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-label="Hero section"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <h1>Expressway Towing</h1>
          <h2 className="hero-subtitle">Professional Towing & Roadside Assistance in Nashville</h2>
          <motion.a
            href="tel:(615) 259-2727"
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Call Expressway Towing at (615) 259-2727"
          >
            Call Now: (615) 259-2727
          </motion.a>
        </motion.div>
      </section>

      {/* Service Showcase Section */}
      <section className="service-showcase">
        <motion.div 
          className="showcase-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="showcase-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="/images/towing4.png" 
              alt="Expressway Towing flatbed truck towing a luxury Mercedes-Benz vehicle in Nashville" 
            />
            <div className="showcase-caption">Luxury Vehicle Transport</div>
          </motion.div>
          <motion.div 
            className="showcase-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="/images/towing5.png" 
              alt="Expressway Towing emergency service assisting a vehicle with a flat tire in Nashville" 
            />
            <div className="showcase-caption">Emergency Towing Service</div>
          </motion.div>
        </motion.div>
      </section>

      {/* Enhanced Services Section */}
      <section id="services" className="services">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="services-container"
        >
          <h2 className="section-title">Our Services</h2>
          <p className="services-subtitle">
            Professional towing and roadside assistance when you need it
          </p>
          <div className="services-grid">
            {visibleServices.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: [0.4, 0, 0.2, 1]
                }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <span className="icon">{service.icon}</span>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <p className="service-details">{service.details}</p>
              </motion.div>
            ))}
          </div>
          {isMobile && !showAllServices && (
            <motion.button
              className="show-all-services"
              onClick={() => setShowAllServices(true)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Show All Services
            </motion.button>
          )}
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="about-container">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="about-content"
          >
            <h2>24/7 Service You Can Trust</h2>
            <p>
              Professional towing and roadside assistance across Nashville. Our experienced team is ready to help you get back on the road safely.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-number">24/7</span>
                <span className="highlight-label">Available</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">30min</span>
                <span className="highlight-label">Response</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">100%</span>
                <span className="highlight-label">Licensed</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src="/images/towing1.png" alt="Professional towing service" />
          </motion.div>
        </div>
      </section>

      {/* Coverage Area Section */}
      <section className="coverage">
        <div className="map-background">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="coverage-content"
          >
            <div className="coverage-header">
              <h2 className="coverage-title">Service Coverage Area</h2>
              <img 
                src="/images/tn-logo.svg" 
                alt="Tennessee" 
                className="tn-logo" 
                style={{
                  width: '150px',
                  height: 'auto',
                  filter: ' brightness(1)'
                }}
              />
            </div>
            <div className="areas-flex">
              {["Nashville", "Franklin", "Brentwood", "Murfreesboro", "Hendersonville", "Lebanon", "Smyrna"].map((area, index) => (
                <motion.div
                  key={index}
                  className="area-pin"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <span className="area-name">{area}</span>
                </motion.div>
              ))}
            </div>
            <motion.p 
              className="coverage-contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Contact us to see if your area is covered
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="section-title-centered"
        >
          What Our Customers Say
        </motion.h2>
        <div className="testimonials-carousel">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card-modern"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -3 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="quote-mark">"</div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-footer">
                <div className="stars">{"★".repeat(testimonial.rating)}</div>
                <h4 className="testimonial-name">— {testimonial.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-us">
        <div className="why-us-container">
          <motion.div
            className="why-us-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src="/images/towing2.png" alt="Reliable towing service" />
          </motion.div>
          <motion.div
            className="why-us-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Why Choose Us</h2>
            <p className="why-us-intro">Fast, reliable, and professional service across Nashville and surrounding areas.</p>
            <div className="features-list">
              <div className="feature-simple">
                <span className="feature-check">✓</span>
                <span>24/7 Emergency Response</span>
              </div>
              <div className="feature-simple">
                <span className="feature-check">✓</span>
                <span>Licensed & Insured</span>
              </div>
              <div className="feature-simple">
                <span className="feature-check">✓</span>
                <span>Experienced Operators</span>
              </div>
              <div className="feature-simple">
                <span className="feature-check">✓</span>
                <span>Competitive Pricing</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Property Management & Impounding Services */}
      <section className="property-impound">
        <div className="impound-container">
          <motion.div
            className="impound-image-container"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src="/images/impounding.jpg" alt="Professional impounding service" className="impound-image" />
            <div className="image-overlay">
              <span className="overlay-text">Professional Impounding Services</span>
            </div>
          </motion.div>
          <motion.div
            className="impound-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="content-wrapper">
              <h2>Private Property Impounding</h2>
              <p className="impound-description">
                Professional parking enforcement for property owners. We handle unauthorized vehicles quickly and legally.
              </p>
              
              <div className="impound-list">
                <div className="impound-feature">
                  <span>✓</span>
                  <span>24/7 Monitoring & Response</span>
                </div>
                <div className="impound-feature">
                  <span>✓</span>
                  <span>Legal Compliance & Signage</span>
                </div>
                <div className="impound-feature">
                  <span>✓</span>
                  <span>Professional Documentation</span>
                </div>
              </div>

              <motion.button
                className="schedule-inspection"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.href = 'tel:(615) 259-2727'}
              >
                Schedule Inspection
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="junk-cars">
        <div className="junk-cars-container">
          <motion.div
            className="junk-cars-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src="/images/cash-for-junk.jpg" alt="Cash for junk cars" />
          </motion.div>
          <motion.div
            className="junk-cars-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Cash for Junk Cars</h2>
            <p>
              Turn your unwanted vehicle into instant cash. We buy cars in any condition with free towing included.
            </p>
            <div className="junk-cars-benefits">
              <div className="benefit-simple">
                <span>💵</span>
                <span>Instant Cash Payment</span>
              </div>
              <div className="benefit-simple">
                <span>🚛</span>
                <span>Free Towing Service</span>
              </div>
              <div className="benefit-simple">
                <span>📝</span>
                <span>We Handle Paperwork</span>
              </div>
            </div>
            <motion.button
              className="get-quote-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = 'tel:(615) 259-2727'}
            >
              Get an Instant Quote
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Emergency Tips Section */}
      <section className="emergency-tips">
        <motion.div className="tips-timeline">
          <h2 className="section-title-left">Emergency Response Guide</h2>
          <div className="timeline-container">
            {[
              { step: 1, title: "Stay Calm & Safe", content: "Turn on hazard lights and move to a safe location" },
              { step: 2, title: "Mark Your Location", content: "Use reflective triangles or flares if available" },
              { step: 3, title: "Call Us", content: "We'll dispatch the nearest available tow truck" },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.3 }}
              >
                <div className="timeline-step">{step.step}</div>
                <div className="timeline-content">
                  <h3>{step.title}</h3>
                  <p>{step.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="section-title-right"
        >
          Common Questions
        </motion.h2>
        <div className="faq-accordion">
          {[
            {
              q: "How quickly can you arrive?",
              a: "Our average response time is 30 minutes or less in most service areas. For emergencies, we prioritize quick dispatch to ensure you get help as soon as possible."
            },
            {
              q: "Do you accept insurance?",
              a: "Yes, we work with most major insurance providers and roadside assistance programs. We can help coordinate with your insurance company to handle the claim process smoothly."
            },
            {
              q: "What forms of payment do you accept?",
              a: "We accept all major credit cards, cash, and digital payments including Apple Pay and Google Pay. We can also work directly with insurance companies for covered services."
            },
            {
              q: "What types of vehicles can you tow?",
              a: "We can tow virtually any vehicle including cars, trucks, SUVs, motorcycles, and even heavy equipment. Our fleet includes flatbed trucks, wheel-lift trucks, and heavy-duty tow trucks to handle any situation."
            },
            {
              q: "Do you provide long-distance towing?",
              a: "Yes, we offer long-distance towing services across state lines. We ensure your vehicle is transported safely and securely to its destination, with regular updates throughout the journey."
            },
            {
              q: "Are you available on holidays?",
              a: "Yes, we operate 24/7, 365 days a year, including all holidays. We understand that emergencies don't take holidays, so neither do we."
            },
            {
              q: "What areas do you service?",
              a: "We primarily serve Franklin, Brentwood, Murfreesboro, Hendersonville, Lebanon, and Smyrna. However, we can accommodate requests outside these areas - just give us a call to discuss your needs."
            },
            {
              q: "Do you offer roadside assistance without towing?",
              a: "Yes, we provide various roadside assistance services including jump-starts, tire changes, fuel delivery, and lockout assistance, even when towing isn't needed."
            }
          ].slice(0, showAllFaqs ? undefined : 3).map((item, index) => (
            <motion.div
              key={index}
              className="accordion-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.01 }}
              transition={{ delay: index * 0.1 }}
            >
              <div 
                className="accordion-header"
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
              >
                <h3>{item.q}</h3>
                <span className="accordion-icon">
                  {expandedFaq === index ? '−' : '+'}
                </span>
              </div>
              <motion.div 
                className="accordion-content"
                initial={false}
                animate={{
                  height: expandedFaq === index ? 'auto' : 0,
                  opacity: expandedFaq === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
              >
                <p>{item.a}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
        <motion.button
          className="show-more-button"
          onClick={() => setShowAllFaqs(!showAllFaqs)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {showAllFaqs ? 'Show Less' : 'Show More Questions'}
        </motion.button>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-split">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="contact-container"
        >
          <div className="contact-content">
            <h2>Ready to Get Help?</h2>
            <p>24/7 Emergency Service Available</p>
            <motion.a
              href="tel:(615) 259-2727"
              className="contact-phone-button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              (615) 259-2727
            </motion.a>
            <motion.a
              href="mailto:Expresswaytow1@gmail.com"
              className="contact-email-button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Expresswaytow1@gmail.com
            </motion.a>
            <div className="contact-features">
              <div className="feature-item">
                <p>Available 24/7</p>
              </div>
              <div className="feature-item">
                <p>Fast Response Time</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      <Footer />
    </div>
  )
}

export default Home
