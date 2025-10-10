// AboutUs.tsx
import React from 'react';
import { Users, Heart, MapPin, Calendar, Car, Sparkles } from 'lucide-react';
import styles from "./aboutus.module.scss";

export default function AboutUs() {
  const services = [
    {
      icon: <Calendar className={styles.serviceIcon} />,
      title: "Events & Weddings",
      description: "Creating unforgettable moments with meticulous planning and execution for your special occasions."
    },
    {
      icon: <Users className={styles.serviceIcon} />,
      title: "FIT / JIT Bookings",
      description: "Flexible individual and just-in-time travel arrangements tailored to your schedule and preferences."
    },
    {
      icon: <Car className={styles.serviceIcon} />,
      title: "Transportation",
      description: "Reliable and comfortable transport solutions ensuring seamless journeys across all destinations."
    },
    {
      icon: <MapPin className={styles.serviceIcon} />,
      title: "Destinations & Experiences",
      description: "Curated experiences showcasing India's rich culture, heritage, and breathtaking landscapes."
    }
  ];

  const values = [
    {
      icon: <Heart className={styles.valueIcon} />,
      title: "Passion",
      description: "We love what we do and it reflects in every journey we craft"
    },
    {
      icon: <Sparkles className={styles.valueIcon} />,
      title: "Excellence",
      description: "Committed to delivering exceptional service at every touchpoint"
    },
    {
      icon: <Users className={styles.valueIcon} />,
      title: "Trust",
      description: "Building lasting relationships through reliability and transparency"
    }
  ];

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Kia Tourism <span className={styles.ampersand}>&</span> Hotels
          </h1>
          <p className={styles.heroSubtitle}>
            Your trusted companion in crafting extraordinary journeys across the incredible landscapes of India
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className={styles.storySection}>
        <div className={styles.storyContainer}>
          <div className={styles.storyCard}>
            <h2 className={styles.sectionTitle}>Our Story</h2>
            <div className={styles.storyContent}>
              <p>
                Founded with a vision to redefine travel experiences in India, Kia Tourism and Hotels has grown into a trusted name for discerning travelers and event organizers seeking authenticity, comfort, and seamless service.
              </p>
              <p>
                We believe that every journey tells a story, and every celebration deserves to be extraordinary. From intimate gatherings to grand weddings, from spontaneous getaways to meticulously planned tours, we bring your vision to life with dedication and expertise.
              </p>
              <p>
                Our deep-rooted connections across India enable us to unlock unique experiences that go beyond typical tourism, offering you genuine insights into the heart and soul of this diverse nation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.servicesContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>What We Offer</h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive solutions designed to make your travel dreams a reality
            </p>
          </div>
          
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.serviceIconWrapper}>{service.icon}</div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <div className={styles.valuesContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Values</h2>
            <p className={styles.sectionSubtitle}>The principles that guide everything we do</p>
          </div>
          
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <div className={styles.valueIconWrapper}>
                  {value.icon}
                </div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.statsContainer}>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>500+</div>
              <div className={styles.statLabel}>Happy Clients</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>50+</div>
              <div className={styles.statLabel}>Destinations</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>200+</div>
              <div className={styles.statLabel}>Events Managed</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>24/7</div>
              <div className={styles.statLabel}>Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>
            Ready to Begin Your Journey?
          </h2>
          <p className={styles.ctaSubtitle}>
            Let us help you create memories that will last a lifetime
          </p>
          <div className={styles.ctaButtons}>
            <button className={styles.ctaPrimary}>
              Get in Touch
            </button>
            <button className={styles.ctaSecondary}>
              Explore Destinations
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}