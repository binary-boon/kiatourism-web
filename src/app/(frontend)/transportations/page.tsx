import React from 'react';
import styles from './page.module.scss';
import Link from 'next/link';

const TransportationPage = () => {
  const vehicleCategories = [
    {
      title: 'Luxury Sedans',
      description: 'Premium comfort for business and leisure travelers',
      icon: '🚗',
      color: 'blue',
      features: ['AC', 'WiFi', 'Leather Seats']
    },
    {
      title: 'SUVs & MUVs',
      description: 'Spacious vehicles perfect for families and groups',
      icon: '🚙',
      color: 'purple',
      features: ['7-8 Seater', 'Luggage Space', 'Entertainment']
    },
    {
      title: 'Tempo Travellers',
      description: 'Comfortable group travel for up to 17 passengers',
      icon: '🚐',
      color: 'amber',
      features: ['Group Travel', 'Push Back Seats', 'AC']
    },
    {
      title: 'Luxury Coaches',
      description: 'Premium buses for large groups and corporate travel',
      icon: '🚌',
      color: 'rose',
      features: ['45+ Seater', 'Recliner Seats', 'Washroom']
    }
  ];

  const services = [
    {
      title: 'Airport Transfers',
      description: 'Reliable pick-up and drop services to all major airports',
      icon: '✈️'
    },
    {
      title: 'City Tours',
      description: 'Explore destinations with our knowledgeable chauffeurs',
      icon: '🗺️'
    },
    {
      title: 'Outstation Trips',
      description: 'Comfortable long-distance travel across India',
      icon: '🛣️'
    },
    {
      title: 'Wedding Transportation',
      description: 'Special vehicles and coordination for wedding guests',
      icon: '💒'
    },
    {
      title: 'Corporate Shuttles',
      description: 'Regular transport solutions for business needs',
      icon: '💼'
    },
    {
      title: 'Customized Packages',
      description: 'Tailored transportation solutions for unique requirements',
      icon: '⚙️'
    }
  ];

  const features = [
    'Professional Chauffeurs',
    'Well-Maintained Fleet',
    '24/7 Availability',
    'GPS Tracking',
    'Transparent Pricing',
    'Flexible Booking',
    'Multi-lingual Drivers',
    'Safety Certified'
  ];

  const popularRoutes = [
    {
      from: 'Jaipur',
      to: 'Delhi',
      duration: '5-6 hours',
      distance: '280 km'
    },
    {
      from: 'Jaipur',
      to: 'Agra',
      duration: '4-5 hours',
      distance: '240 km'
    },
    {
      from: 'Delhi',
      to: 'Shimla',
      duration: '7-8 hours',
      distance: '350 km'
    },
    {
      from: 'Mumbai',
      to: 'Goa',
      duration: '10-12 hours',
      distance: '580 km'
    }
  ];

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Transportation Services
          </h1>
          <p className={styles.heroSubtitle}>
            Seamless Journeys Across India
          </p>
          <p className={styles.heroDescription}>
            Experience comfort, safety, and reliability with Kia Tourism and Hotels' 
            comprehensive transportation solutions. From airport transfers to 
            cross-country journeys, we've got you covered.
          </p>
          <div className={styles.heroCta}>
            <Link href="#booking" className={styles.primaryButton}>
              Book Now
            </Link>
            <Link href="#fleet" className={styles.secondaryButton}>
              View Fleet
            </Link>
          </div>
        </div>
      </section>

      {/* Vehicle Categories */}
      <section className={styles.vehicleCategories}>
        <div className={styles.sectionHeader}>
          <h2>Our Fleet</h2>
          <p>Choose from our diverse range of vehicles</p>
        </div>
        <div className={styles.vehicleGrid}>
          {vehicleCategories.map((vehicle, index) => (
            <div key={index} className={`${styles.vehicleCard} ${styles[vehicle.color]}`}>
              <span className={styles.vehicleIcon}>{vehicle.icon}</span>
              <h3>{vehicle.title}</h3>
              <p className={styles.vehicleDescription}>{vehicle.description}</p>
              <div className={styles.featureList}>
                {vehicle.features.map((feature, idx) => (
                  <span key={idx} className={styles.featureBadge}>
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className={styles.services}>
        <div className={styles.sectionHeader}>
          <h2>Transportation Solutions</h2>
          <p>Comprehensive services for every travel need</p>
        </div>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <span className={styles.serviceIcon}>{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={styles.whyChoose}>
        <div className={styles.whyChooseContent}>
          <div className={styles.whyChooseText}>
            <h2>Why Choose Kia Tourism?</h2>
            <p className={styles.whyChooseIntro}>
              We prioritize your comfort, safety, and satisfaction. Our commitment 
              to excellence ensures you have a memorable journey every time.
            </p>
            <div className={styles.featuresGrid}>
              {features.map((feature, index) => (
                <div key={index} className={styles.featureItem}>
                  <span className={styles.checkmark}>✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.whyChooseVisual}>
            <div className={styles.highlightCard}>
              <div className={styles.highlight}>
                <span className={styles.highlightIcon}>🏆</span>
                <h4>Award Winning Service</h4>
                <p>Recognized for excellence in hospitality</p>
              </div>
              <div className={styles.highlight}>
                <span className={styles.highlightIcon}>🛡️</span>
                <h4>Fully Insured</h4>
                <p>Complete coverage for your peace of mind</p>
              </div>
              <div className={styles.highlight}>
                <span className={styles.highlightIcon}>⭐</span>
                <h4>5-Star Ratings</h4>
                <p>Trusted by thousands of satisfied travelers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className={styles.routes}>
        <div className={styles.sectionHeader}>
          <h2>Popular Routes</h2>
          <p>Frequently traveled destinations from major cities</p>
        </div>
        <div className={styles.routesGrid}>
          {popularRoutes.map((route, index) => (
            <div key={index} className={styles.routeCard}>
              <div className={styles.routePath}>
                <div className={styles.routePoint}>
                  <span className={styles.routeDot}></span>
                  <span className={styles.routeCity}>{route.from}</span>
                </div>
                <div className={styles.routeLine}></div>
                <div className={styles.routePoint}>
                  <span className={styles.routeDot}></span>
                  <span className={styles.routeCity}>{route.to}</span>
                </div>
              </div>
              <div className={styles.routeDetails}>
                <div className={styles.routeDetail}>
                  <span className={styles.routeLabel}>Duration:</span>
                  <span className={styles.routeValue}>{route.duration}</span>
                </div>
                <div className={styles.routeDetail}>
                  <span className={styles.routeLabel}>Distance:</span>
                  <span className={styles.routeValue}>{route.distance}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Process */}
      <section className={styles.process}>
        <div className={styles.sectionHeader}>
          <h2>Easy Booking Process</h2>
          <p>Get on the road in three simple steps</p>
        </div>
        <div className={styles.processSteps}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>01</div>
            <h3>Choose Vehicle</h3>
            <p>Select from our wide range of vehicles based on your needs</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>02</div>
            <h3>Book & Confirm</h3>
            <p>Provide travel details and receive instant confirmation</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>03</div>
            <h3>Travel Safely</h3>
            <p>Enjoy your journey with our professional chauffeurs</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2>Ready to Hit the Road?</h2>
          <p>Book your transportation today and travel in comfort</p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className={styles.ctaButton}>
              Request a Quote
            </Link>
            <Link href="tel:+91-XXXXXXXXXX" className={styles.ctaButtonSecondary}>
              Call for Booking
            </Link>
          </div>
          <p className={styles.ctaNote}>
            Available 24/7 • Instant Confirmation • Best Rates Guaranteed
          </p>
        </div>
      </section>
    </div>
  );
};

export default TransportationPage;