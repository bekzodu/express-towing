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
          initial={{ height: 40, opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
        >
          <div className="banner-content">
            <span className="banner-text">
              <span className="banner-icon">💰</span>
              Turn Your Unwanted Vehicle into Cash Today!
            </span>
            <motion.button
              className="banner-cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('.junk-cars');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get an Offer
            </motion.button>
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
      <nav className="navbar">
        <div className="nav-content">
          <motion.div 
            className="nav-logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="logo-icon">🛻</span>
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
      icon: '🚛', 
      title: 'Flatbed Towing',
      description: 'Safe and secure transport for all vehicle types, from luxury cars to damaged vehicles.',
      features: ['Damage-free transport', 'Suitable for all vehicles', '24/7 availability']
    },
    { 
      icon: '🆘', 
      title: 'Roadside Assistance',
      description: 'Immediate help for any roadside emergency, getting you back on track quickly.',
      features: ['Quick response', 'Professional service', 'Comprehensive support']
    },
    { 
      icon: '⚠️', 
      title: 'Emergency Towing',
      description: 'Fast response times for urgent situations, any time of day or night.',
      features: ['24/7 emergency service', '30-minute response time', 'Experienced operators'],
      image: towing5
    },
    { 
      icon: '🌐', 
      title: 'Long-Distance Auto Transport',
      description: 'Reliable vehicle transportation services across state lines with full insurance coverage.',
      features: ['Interstate transport', 'Vehicle tracking', 'Fully insured']
    },
    { 
      icon: '🏋️‍♂️', 
      title: 'Heavy Hauling & Recovery',
      description: 'Specialized equipment and expertise for heavy vehicle recovery and transport.',
      features: ['Heavy-duty capability', 'Skilled operators', 'Special equipment']
    },
    { 
      icon: '🔧', 
      title: 'Battery & Mechanical Help',
      description: 'Quick solutions for battery issues and basic mechanical problems.',
      features: ['Jump starts', 'Battery testing', 'Basic repairs']
    },
    { 
      icon: '🚫', 
      title: 'Private Property Impounding',
      description: 'Professional management of unauthorized vehicles on your property, ensuring your parking spaces remain available for authorized users.',
      features: ['24/7 monitoring', 'Quick response time', 'Legal compliance']
    },
    { 
      icon: '💰', 
      title: 'Cash for Junk Cars',
      description: 'Turn your unwanted vehicle into instant cash. We buy cars in any condition and handle all the paperwork.',
      features: ['Same-day payment', 'Free towing', 'Best market rates']
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
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="hero"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(${towing3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <h1>Expressway Towing</h1>
          <p>Your dependable partner when you're in a jam on the road</p>
          <motion.a
            href="tel:615-333-3704"
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Call Now: 615-333-3704
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
            <img src={towing4} alt="Luxury car towing service" />
            <div className="showcase-caption">Luxury Vehicle Transport</div>
          </motion.div>
          <motion.div 
            className="showcase-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src={towing5} alt="Emergency towing service" />
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
          <h2 className="section-title">Our Professional Services</h2>
          <p className="services-subtitle">
            Comprehensive towing and roadside assistance solutions you can count on
          </p>
          <div className="services-grid">
            {visibleServices.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                  backgroundColor: "var(--highlight-bg-color)"
                }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="service-header">
                  <span className="service-icon">{service.icon}</span>
                  <h3 className="service-title">{service.title}</h3>
                </div>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="feature-bullet">•</span> {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  className="service-cta"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = 'tel:615-333-3704'}
                >
                  Request Service
                </motion.button>
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
              We're here around the clock, ready to lend a helping hand whenever you need it. 
              Whether it's a flat tire, a dead battery, or a vehicle emergency, our experienced 
              team has got you covered. We'll get you back on the road safely and swiftly.
            </p>
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
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="pin-icon">📍</span>
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

      {/* Testimonials Section - Now with card carousel style */}
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
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="quote-mark">"</div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-footer">
                <div className="stars">{"⭐".repeat(testimonial.rating)}</div>
                <h4 className="testimonial-name">- {testimonial.name}</h4>
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
            <h2>Why Choose Expressway Towing?</h2>
            <div className="features-grid">
              <motion.div whileHover={{ scale: 1.05 }} className="feature">
                <h3>24/7 Availability</h3>
                <p>Round-the-clock service for your peace of mind</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="feature">
                <h3>Fast Response</h3>
                <p>Quick arrival times to get you back on the road</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="feature">
                <h3>Licensed & Insured</h3>
                <p>Fully certified professional service</p>
              </motion.div>
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
              <h3 className="impound-subtitle">Protect Your Property Rights</h3>
              <p className="impound-description">
                Managing a property means ensuring authorized access and maintaining order. 
                Unauthorized vehicles not only create chaos but can pose serious liability risks 
                and safety concerns for your property.
              </p>
              
              <div className="impound-benefits">
                <div className="benefit-column">
                  <h4>Property Owner Benefits</h4>
                  <ul>
                    <li>
                      <span className="check-icon">✓</span>
                      <div>
                        <strong>24/7 Monitoring</strong>
                        <p>Round-the-clock surveillance of your parking areas</p>
                      </div>
                    </li>
                    <li>
                      <span className="check-icon">✓</span>
                      <div>
                        <strong>Quick Response</strong>
                        <p>Swift removal of unauthorized vehicles</p>
                      </div>
                    </li>
                    <li>
                      <span className="check-icon">✓</span>
                      <div>
                        <strong>Legal Compliance</strong>
                        <p>All actions follow local regulations and laws</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="benefit-column">
                  <h4>Our Process</h4>
                  <ul>
                    <li>
                      <span className="number-icon">1</span>
                      <div>
                        <strong>Property Assessment</strong>
                        <p>Complete evaluation of your parking needs</p>
                      </div>
                    </li>
                    <li>
                      <span className="number-icon">2</span>
                      <div>
                        <strong>Signage Installation</strong>
                        <p>Clear warning signs meeting legal requirements</p>
                      </div>
                    </li>
                    <li>
                      <span className="number-icon">3</span>
                      <div>
                        <strong>Enforcement</strong>
                        <p>Professional handling of unauthorized vehicles</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="impound-cta">
                <motion.button
                  className="schedule-inspection"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = 'tel:615-333-3704'}
                >
                  <span className="button-icon">📋</span>
                  Schedule Property Inspection
                </motion.button>
                <p className="cta-subtext">
                  Protect your property rights and ensure smooth operations with our professional impounding services
                </p>
              </div>
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
              Turn your unwanted vehicle into instant cash! We buy cars in any condition 
              and offer competitive prices with free towing services.
            </p>
            <div className="junk-cars-benefits">
              <div className="benefit">
                <span className="benefit-icon">💵</span>
                <h3>Instant Cash</h3>
                <p>Get paid on the spot</p>
              </div>
              <div className="benefit">
                <span className="benefit-icon">🚛</span>
                <h3>Free Towing</h3>
                <p>No hidden fees</p>
              </div>
              <div className="benefit">
                <span className="benefit-icon">📝</span>
                <h3>Easy Process</h3>
                <p>We handle all paperwork</p>
              </div>
            </div>
            <motion.button
              className="get-quote-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = 'tel:615-333-3704'}
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
              href="tel:615-333-3704"
              className="contact-phone-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="phone-icon">📞</span>
              615-333-3704
            </motion.a>
            <motion.a
              href="mailto:Expresswaytow1@gmail.com"
              className="contact-email-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="email-icon">✉️</span>
              Expresswaytow1@gmail.com
            </motion.a>
            <div className="contact-features">
              <div className="feature-item">
                <span className="feature-icon">🕒</span>
                <p>Available 24/7</p>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🚛</span>
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
