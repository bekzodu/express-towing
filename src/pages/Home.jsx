import React from 'react';
import { motion } from 'framer-motion';
import '../styles/HomeStyle.css';
import towing3 from '../assets/towing3.jpeg';
import towing1 from '../assets/towing1.png';
import towing2 from '../assets/towing2.png';
import coverMap from '../assets/cover-map.svg';
import cashForJunk from '../assets/cash-for-junk.jpg';
import impoundingImg from '../assets/impounding.jpg';
import tnLogo from '../assets/tn-logo.svg';
import towing4 from '../assets/towing4.png';
import towing5 from '../assets/towing5.png';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isBannerVisible, setIsBannerVisible] = React.useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {isBannerVisible && (
        <motion.div 
          className="promo-banner"
          initial={{ height: 45, opacity: 1 }}
          animate={{ height: 45, opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
        >
          <div className="banner-content">
            <span className="banner-text">
              Need a tow? Call us now for a quote — (615) 259-2727
            </span>
            <motion.a
              href="tel:(615) 259-2727"
              className="banner-cta"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Call Now
            </motion.a>
          </div>
          <button 
            className="banner-close"
            onClick={() => setIsBannerVisible(false)}
            aria-label="Close banner"
          >
            ×
          </button>
        </motion.div>
      )}
      <nav className={`navbar ${!isBannerVisible ? 'banner-closed' : ''}`}>
        <div className="nav-content">
          <motion.div 
            className="nav-logo"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="logo-text">
              <span className="logo-express">EXPRESSWAY</span>
              <span className="logo-towing">TOWING</span>
            </div>
          </motion.div>

          <button 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>

          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="#services" onClick={handleLinkClick}>Services</a>
            <a href="#about" onClick={handleLinkClick}>About</a>
            <a href="#testimonials" onClick={handleLinkClick}>Testimonials</a>
            <a href="#contact" onClick={handleLinkClick}>Contact</a>
          </div>
        </div>
      </nav>
    </>
  );
};

const Home = () => {
  const [expandedFaq, setExpandedFaq] = React.useState(null);
  const [showAllFaqs, setShowAllFaqs] = React.useState(false);
  const [showAllServices, setShowAllServices] = React.useState(false);
  const isMobile = window.innerWidth <= 768;

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
  ];

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
  ];

  const visibleServices = isMobile && !showAllServices ? services.slice(0, 3) : services;

  return (
    <div className="home">
      <Helmet>
        <title>Expressway Towing | 24/7 Emergency Towing Nashville TN | (615) 259-2727</title>
        <meta name="description" content="Nashville's trusted 24/7 towing service. Emergency roadside assistance, flatbed towing, heavy hauling, private property impounding & cash for junk cars. Serving Nashville, Franklin, Brentwood, Murfreesboro. Call (615) 259-2727 for fast response." />
        <meta name="keywords" content="towing Nashville TN, 24/7 towing Nashville, emergency towing Nashville, roadside assistance Nashville, flatbed towing Nashville, tow truck Nashville, junk car removal Nashville, cash for junk cars Nashville, heavy duty towing Nashville, private property towing Nashville, Franklin TN towing, Brentwood TN towing" />
        <meta property="og:title" content="Expressway Towing | 24/7 Emergency Towing Nashville TN" />
        <meta property="og:description" content="Nashville's trusted 24/7 towing service. Emergency roadside assistance, flatbed towing, heavy hauling & cash for junk cars. Call (615) 259-2727." />
        <meta property="og:image" content="https://expressway-towing.com/social-share.png" />
        <meta property="og:url" content="https://expressway-towing.com" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://expressway-towing.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TowingService",
            "name": "Expressway Towing",
            "image": "https://expressway-towing.com/social-share.png",
            "description": "Nashville's trusted 24/7 towing service providing emergency roadside assistance, flatbed towing, heavy hauling, private property impounding, and cash for junk cars.",
            "@id": "https://expressway-towing.com",
            "url": "https://expressway-towing.com",
            "telephone": "+16152592727",
            "email": "Expresswaytow1@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Nashville",
              "addressRegion": "TN",
              "postalCode": "37203",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 36.1627,
              "longitude": -86.7816
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            },
            "sameAs": [
              "https://www.facebook.com/expresswaytowing",
              "https://www.instagram.com/expresswaytowing"
            ],
            "priceRange": "$$",
            "areaServed": [
              {"@type": "City", "name": "Nashville", "sameAs": "https://en.wikipedia.org/wiki/Nashville,_Tennessee"},
              {"@type": "City", "name": "Franklin"},
              {"@type": "City", "name": "Brentwood"},
              {"@type": "City", "name": "Murfreesboro"},
              {"@type": "City", "name": "Hendersonville"},
              {"@type": "City", "name": "Lebanon"},
              {"@type": "City", "name": "Smyrna"}
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Towing Services",
              "itemListElement": [
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Emergency Towing"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Flatbed Towing"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Roadside Assistance"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Heavy Hauling"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Private Property Impounding"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Cash for Junk Cars"}}
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "127"
            }
          })}
        </script>
      </Helmet>
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="hero"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(${towing3})`,
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

      {/* Service Showcase Section - New! */}
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
              src={towing4} 
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
              src={towing5} 
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

      {/* About Section - Now with image */}
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
            <img src={towing1} alt="Professional towing service" />
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
                src={tnLogo} 
                alt="Tennessee" 
                className="tn-logo" 
                style={{
                  width: '150px',
                  height: 'auto',
                  filter: ' brightness(1)' // This will make it visible if it's white
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

      {/* Why Choose Us Section - Now with image */}
      <section className="why-us">
        <div className="why-us-container">
          <motion.div
            className="why-us-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src={towing2} alt="Reliable towing service" />
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
            <img src={impoundingImg} alt="Professional impounding service" className="impound-image" />
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
            <img src={cashForJunk} alt="Cash for junk cars" />
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

      {/* Emergency Tips Section - Now with timeline style */}
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
  );
};

export default Home;
