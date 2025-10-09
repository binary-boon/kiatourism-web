import React from 'react';
import styles from './page.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const EventsWeddingsPage = () => {
  const eventTypes = [
    {
      title: 'Destination Weddings',
      description: 'Create magical moments in breathtaking locations across India',
      icon: '💍',
      color: 'rose'
    },
    {
      title: 'Corporate Events',
      description: 'Professional setups for conferences, seminars, and team building',
      icon: '🏢',
      color: 'blue'
    },
    {
      title: 'Private Celebrations',
      description: 'Intimate gatherings, anniversaries, and milestone celebrations',
      icon: '🎉',
      color: 'purple'
    },
    {
      title: 'Cultural Events',
      description: 'Traditional ceremonies and cultural festivities',
      icon: '🎭',
      color: 'amber'
    }
  ];

  const services = [
    'Venue Selection & Booking',
    'Complete Event Planning',
    'Catering & Menu Design',
    'Décor & Styling',
    'Photography & Videography',
    'Entertainment Coordination',
    'Guest Accommodation',
    'Transportation Logistics'
  ];

  const destinations = [
    {
      name: 'Udaipur',
      subtitle: 'City of Lakes',
      image: '/placeholder-udaipur.jpg'
    },
    {
      name: 'Goa',
      subtitle: 'Beach Paradise',
      image: '/placeholder-goa.jpg'
    },
    {
      name: 'Jaipur',
      subtitle: 'Royal Heritage',
      image: '/placeholder-jaipur.jpg'
    },
    {
      name: 'Kerala',
      subtitle: 'Backwater Bliss',
      image: '/placeholder-kerala.jpg'
    }
  ];

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Events & Weddings
          </h1>
          <p className={styles.heroSubtitle}>
            Creating Unforgettable Celebrations Across India
          </p>
          <p className={styles.heroDescription}>
            From intimate gatherings to grand celebrations, Kia Tourism and Hotels 
            brings your vision to life with meticulous planning and flawless execution
          </p>
          <div className={styles.heroCta}>
            <Link href="#contact" className={styles.primaryButton}>
              Plan Your Event
            </Link>
            <Link href="#portfolio" className={styles.secondaryButton}>
              View Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className={styles.eventTypes}>
        <div className={styles.sectionHeader}>
          <h2>Our Specializations</h2>
          <p>Tailored experiences for every occasion</p>
        </div>
        <div className={styles.eventGrid}>
          {eventTypes.map((event, index) => (
            <div key={index} className={`${styles.eventCard} ${styles[event.color]}`}>
              <span className={styles.eventIcon}>{event.icon}</span>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.services}>
        <div className={styles.servicesContent}>
          <div className={styles.servicesText}>
            <h2>Complete Event Solutions</h2>
            <p className={styles.servicesIntro}>
              We handle every detail so you can enjoy your special day without worry. 
              Our comprehensive services ensure a seamless experience from start to finish.
            </p>
            <ul className={styles.servicesList}>
              {services.map((service, index) => (
                <li key={index}>
                  <span className={styles.checkmark}>✓</span>
                  {service}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.servicesVisual}>
            <div className={styles.statsCard}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>500+</span>
                <span className={styles.statLabel}>Events Organized</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>200+</span>
                <span className={styles.statLabel}>Dream Weddings</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>98%</span>
                <span className={styles.statLabel}>Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className={styles.destinations}>
        <div className={styles.sectionHeader}>
          <h2>Popular Destinations</h2>
          <p>Stunning venues across India for your special day</p>
        </div>
        <div className={styles.destinationGrid}>
          {destinations.map((destination, index) => (
            <div key={index} className={styles.destinationCard}>
              <div className={styles.destinationImage}>
                <div className={styles.imagePlaceholder}>
                  {destination.name}
                </div>
              </div>
              <div className={styles.destinationInfo}>
                <h3>{destination.name}</h3>
                <p>{destination.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.process}>
        <div className={styles.sectionHeader}>
          <h2>How We Work</h2>
          <p>Simple steps to your perfect event</p>
        </div>
        <div className={styles.processSteps}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>01</div>
            <h3>Consultation</h3>
            <p>Share your vision and requirements with our expert planners</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>02</div>
            <h3>Planning</h3>
            <p>We create a detailed plan and present options tailored to you</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>03</div>
            <h3>Coordination</h3>
            <p>Our team manages all vendors and logistics seamlessly</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>04</div>
            <h3>Celebration</h3>
            <p>Relax and enjoy while we ensure everything runs perfectly</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2>Ready to Plan Your Dream Event?</h2>
          <p>Let's create something extraordinary together</p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className={styles.ctaButton}>
              Get in Touch
            </Link>
            <Link href="tel:+91-XXXXXXXXXX" className={styles.ctaButtonSecondary}>
              Call Us Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsWeddingsPage;