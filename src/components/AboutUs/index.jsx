'use client';
import styles from './style.module.scss';

export default function AboutUs() {
  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '50K+', label: 'Happy Guests' },
    { number: '25+', label: 'Premium Hotels' },
    { number: '98%', label: 'Satisfaction Rate' }
  ];

  const values = [
    {
      title: 'Authenticity',
      description: 'We showcase the real beauty of Rajasthan through genuine experiences and cultural immersion.',
      icon: '🏛️'
    },
    {
      title: 'Excellence',
      description: 'Every detail matters. We maintain the highest standards in service and hospitality.',
      icon: '⭐'
    },
    {
      title: 'Sustainability',
      description: 'We are committed to responsible tourism that benefits local communities and preserves heritage.',
      icon: '🌿'
    },
    {
      title: 'Innovation',
      description: 'Blending traditional hospitality with modern amenities for unforgettable experiences.',
      icon: '💡'
    }
  ];

  const team = [
    {
      name: 'Rajesh Sharma',
      position: 'Founder & CEO',
      image: '👨‍💼'
    },
    {
      name: 'Priya Patel',
      position: 'Director of Operations',
      image: '👩‍💼'
    },
    {
      name: 'Amit Singh',
      position: 'Head of Guest Relations',
      image: '👨‍💼'
    },
    {
      name: 'Kavita Reddy',
      position: 'Chief Experience Officer',
      image: '👩‍💼'
    }
  ];

  return (
    <div className={styles.about}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>About Kia Tourism & Hotels</h1>
          <p className={styles.heroSubtitle}>
            Crafting unforgettable journeys through the heart of Rajasthan since 2008
          </p>
        </div>
      </div>

      <section className={styles.story}>
        <div className={styles.container}>
          <div className={styles.storyContent}>
            <div className={styles.storyText}>
              <h2>Our Story</h2>
              <p>
                Founded in 2008 in the vibrant city of Jaipur, Kia Tourism & Hotels began with a simple vision: to share the magnificent heritage and warm hospitality of Rajasthan with travelers from around the world.
              </p>
              <p>
                What started as a small family-run guesthouse has blossomed into a renowned hospitality brand, offering a curated collection of premium hotels and transformative travel experiences across Rajasthan. Our journey has been guided by an unwavering commitment to authenticity, excellence, and the preservation of our rich cultural heritage.
              </p>
              <p>
                Today, we pride ourselves on being more than just a hotel chain. We are storytellers, culture keepers, and dream weavers, dedicated to creating moments that become cherished memories for every guest who walks through our doors.
              </p>
            </div>
            <div className={styles.storyImage}>
              <div className={styles.imagePlaceholder}>
                <span>🏰</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.stats}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <h3 className={styles.statNumber}>{stat.number}</h3>
                <p className={styles.statLabel}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.values}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Our Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <div className={styles.valueIcon}>{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.mission}>
        <div className={styles.container}>
          <div className={styles.missionContent}>
            <div className={styles.missionBox}>
              <h2>Our Mission</h2>
              <p>
                To provide exceptional hospitality experiences that celebrate the rich cultural tapestry of Rajasthan while creating lasting memories for our guests. We strive to be the bridge between tradition and modernity, offering comfort and luxury without compromising authenticity.
              </p>
            </div>
            <div className={styles.missionBox}>
              <h2>Our Vision</h2>
              <p>
                To become the most trusted and preferred hospitality brand in Rajasthan, recognized globally for our commitment to cultural preservation, sustainable tourism, and unparalleled guest experiences that inspire travelers to return time and again.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.team}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Meet Our Team</h2>
            <p>The passionate people behind your perfect stay</p>
          </div>
          <div className={styles.teamGrid}>
            {team.map((member, index) => (
              <div key={index} className={styles.teamCard}>
                <div className={styles.teamImage}>
                  <span>{member.image}</span>
                </div>
                <h3>{member.name}</h3>
                <p>{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Ready to Experience Rajasthan?</h2>
            <p>Let us craft your perfect journey through the land of kings</p>
            <button className={styles.ctaButton}>Plan Your Trip</button>
          </div>
        </div>
      </section>
    </div>
  );
}
