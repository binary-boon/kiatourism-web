import React, { useState } from 'react';
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CallToAction() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const ctaCards = [
    {
      id: 'book',
      title: 'Ready to Explore?',
      subtitle: 'Book Your Journey',
      description: 'Start your adventure with personalized travel packages designed just for you.',
      buttonText: 'Book Now',
      buttonLink: '/book',
      icon: 'plane',
      gradient: 'from-blue-500 to-purple-600',
      features: [
        'Instant Confirmation',
        'Best Price Guarantee',
        '24/7 Support'
      ]
    },
    {
      id: 'partner',
      title: 'Grow Together',
      subtitle: 'Partner with Us',
      description: 'Join our network and unlock new business opportunities in tourism and hospitality.',
      buttonText: 'Become a Partner',
      buttonLink: '/partner',
      icon: 'handshake',
      gradient: 'from-pink-500 to-orange-500',
      features: [
        'Competitive Commission',
        'Marketing Support',
        'Dedicated Account Manager'
      ]
    }
  ];

  const renderIcon = (iconName) => {
    const icons = {
      plane: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 16.21v-1.895L14 8V4a2 2 0 0 0-4 0v4L2 14.315V16.21l8-2.31v4.81l-2 1.5V22l4-1 4 1v-1.79l-2-1.5v-4.81l8 2.31z"/>
        </svg>
      ),
      handshake: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M11 4h2v3h4.382l1.447 1.724L21 12v9h-4v-6h-2v6H7v-6H5v6H1v-9l2.171-3.276L4.618 7H9V4z"/>
          <path d="M9 14l-1.5-1.5M15 14l1.5-1.5M15 7l-1.5 1.5M9 7l1.5 1.5"/>
        </svg>
      )
    };
    return icons[iconName];
  };

  return (
    <section className={styles.cta} data-scroll-section>
      {/* Animated background elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.gradient1}></div>
        <div className={styles.gradient2}></div>
        <div className={styles.gradient3}></div>
      </div>

      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Let&apos;s Make It Happen</h2>
          <p className={styles.subtitle}>
            Whether you&apos;re planning your next adventure or looking to grow your business, 
            we&apos;re here to help you succeed.
          </p>
        </motion.div>

        <div className={styles.cardsWrapper}>
          {ctaCards.map((card, index) => (
            <motion.div
              key={card.id}
              className={styles.ctaCard}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onHoverStart={() => setHoveredCard(card.id)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <div className={styles.cardInner}>
                {/* Icon Section */}
                <motion.div 
                  className={styles.iconWrapper}
                  animate={{
                    scale: hoveredCard === card.id ? 1.1 : 1,
                    rotate: hoveredCard === card.id ? 5 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {renderIcon(card.icon)}
                </motion.div>

                {/* Content Section */}
                <div className={styles.cardContent}>
                  <span className={styles.cardSubtitle}>{card.title}</span>
                  <h3 className={styles.cardTitle}>{card.subtitle}</h3>
                  <p className={styles.cardDescription}>{card.description}</p>

                  {/* Features List */}
                  <ul className={styles.featuresList}>
                    {card.features.map((feature, idx) => (
                      <motion.li 
                        key={idx}
                        className={styles.featureItem}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.6 + (idx * 0.1) }}
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 13l4 4L19 7"/>
                        </svg>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link href={card.buttonLink} className={styles.ctaButton}>
                    <span>{card.buttonText}</span>
                    <motion.svg 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                      animate={{
                        x: hoveredCard === card.id ? 5 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </motion.svg>
                  </Link>
                </div>

                {/* Decorative corner accent */}
                <div className={styles.cornerAccent}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div 
          className={styles.trustBar}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className={styles.trustItem}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
            </svg>
            <span>Secure Booking</span>
          </div>
          <div className={styles.trustItem}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span>Verified Partner</span>
          </div>
          <div className={styles.trustItem}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
            </svg>
            <span>24/7 Support</span>
          </div>
          <div className={styles.trustItem}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
            <span>Top Rated</span>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div 
          className={styles.contactInfo}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className={styles.contactText}>
            Have questions? We&apos;re here to help!
          </p>
          <div className={styles.contactDetails}>
            <a href="tel:+911234567890" className={styles.contactLink}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              +91 123 456 7890
            </a>
            <span className={styles.divider}>|</span>
            <a href="mailto:info@kiatourism.com" className={styles.contactLink}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              info@kiatourism.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
