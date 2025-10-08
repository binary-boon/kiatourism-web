import React, { useState, useEffect } from 'react';
import styles from './style.module.scss';
import { motion, AnimatePresence } from 'framer-motion';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Sharma",
      role: "CEO, Tech Solutions India",
      company: "Corporate Client",
      rating: 5,
      text: "Kia Tourism handled our entire corporate retreat flawlessly. From transportation to accommodation, every detail was perfect. Their professionalism made our team building event truly memorable.",
      location: "Mumbai, India"
    },
    {
      id: 2,
      name: "Priya & Arjun Mehta",
      role: "Newlyweds",
      company: "Wedding Client",
      rating: 5,
      text: "Our destination wedding was a dream come true thanks to Kia Tourism. They managed everything with such care and attention, allowing us to enjoy every moment. Highly recommended for wedding planning!",
      location: "Goa, India"
    },
    {
      id: 3,
      name: "Sarah Johnson",
      role: "Travel Blogger",
      company: "FIT Traveler",
      rating: 5,
      text: "As a solo traveler, I needed flexibility and reliability. Kia Tourism's FIT booking service was perfect - customized itineraries, excellent support, and genuine care for my experience. Will definitely book again!",
      location: "London, UK"
    },
    {
      id: 4,
      name: "Vikram Patel",
      role: "Business Owner",
      company: "Transportation Client",
      rating: 5,
      text: "Their transportation services are top-notch. Always on time, clean vehicles, and professional drivers. We've been using them for all our business travel needs for over two years now.",
      location: "Delhi, India"
    },
    {
      id: 5,
      name: "Lisa Chen",
      role: "Event Coordinator",
      company: "Corporate Client",
      rating: 5,
      text: "Working with Kia Tourism for our international conference was seamless. They coordinated hotels, transport, and local experiences for 150 attendees without a single hitch. Exceptional service!",
      location: "Singapore"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);

    return () => clearInterval(timer);
  }, [activeIndex]);

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleDotClick = (index) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        viewBox="0 0 24 24"
        fill={index < rating ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ));
  };

  return (
    <section className={styles.testimonials} data-scroll-section>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>Testimonials</span>
          <h2 className={styles.title}>What Our Clients Say</h2>
          <p className={styles.subtitle}>
            Don't just take our word for it - hear from travelers who've experienced the Kia Tourism difference
          </p>
        </motion.div>

        <div className={styles.testimonialWrapper}>
          <button 
            className={`${styles.navButton} ${styles.prev}`}
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className={styles.testimonialContainer}>
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 }
                }}
                className={styles.testimonialCard}
              >
                <div className={styles.quoteIcon}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>
                </div>

                <div className={styles.rating}>
                  {renderStars(testimonials[activeIndex].rating)}
                </div>

                <p className={styles.testimonialText}>
                  "{testimonials[activeIndex].text}"
                </p>

                <div className={styles.authorInfo}>
                  <div className={styles.avatar}>
                    {testimonials[activeIndex].name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className={styles.authorDetails}>
                    <h4 className={styles.authorName}>{testimonials[activeIndex].name}</h4>
                    <p className={styles.authorRole}>{testimonials[activeIndex].role}</p>
                    <div className={styles.authorMeta}>
                      <span className={styles.company}>{testimonials[activeIndex].company}</span>
                      <span className={styles.separator}>•</span>
                      <span className={styles.location}>{testimonials[activeIndex].location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button 
            className={`${styles.navButton} ${styles.next}`}
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className={styles.dotsContainer}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === activeIndex ? styles.active : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <motion.div 
          className={styles.statsBar}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className={styles.stat}>
            <span className={styles.statNumber}>500+</span>
            <span className={styles.statLabel}>Happy Clients</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>4.9/5</span>
            <span className={styles.statLabel}>Average Rating</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>98%</span>
            <span className={styles.statLabel}>Satisfaction Rate</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
