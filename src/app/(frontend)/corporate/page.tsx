// Corporate.tsx
import React from 'react';
import { 
  Building2, 
  Users, 
  Briefcase, 
  Calendar, 
  MapPin, 
  Award,
  TrendingUp,
  Globe,
  Clock,
  Shield,
  CheckCircle2,
  Plane,
  Hotel,
  Car,
  Headphones
} from 'lucide-react';
import styles from './Corporate.module.scss';

export default function Corporate() {
  const corporateServices = [
    {
      icon: <Briefcase className={styles.serviceIcon} />,
      title: "Business Travel Management",
      description: "End-to-end travel solutions for corporate teams with streamlined booking, expense management, and 24/7 support.",
      features: ["Flight & Hotel Booking", "Travel Policy Compliance", "Expense Reporting"]
    },
    {
      icon: <Users className={styles.serviceIcon} />,
      title: "MICE Services",
      description: "Meetings, Incentives, Conferences, and Exhibitions organized with precision and creativity.",
      features: ["Event Planning", "Venue Selection", "Technical Support"]
    },
    {
      icon: <Calendar className={styles.serviceIcon} />,
      title: "Corporate Events",
      description: "From annual conferences to team building retreats, we create memorable corporate experiences.",
      features: ["Conference Management", "Team Building Activities", "Gala Dinners"]
    },
    {
      icon: <Globe className={styles.serviceIcon} />,
      title: "International Tours",
      description: "Customized international business travel packages with visa assistance and global partnerships.",
      features: ["Visa Support", "Global Network", "Multi-City Itineraries"]
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className={styles.benefitIcon} />,
      title: "Cost Optimization",
      description: "Strategic partnerships and volume discounts to reduce your travel expenses"
    },
    {
      icon: <Clock className={styles.benefitIcon} />,
      title: "Time Efficiency",
      description: "Quick booking processes and dedicated account managers save valuable time"
    },
    {
      icon: <Shield className={styles.benefitIcon} />,
      title: "Risk Management",
      description: "Travel insurance, safety protocols, and emergency support for peace of mind"
    },
    {
      icon: <Award className={styles.benefitIcon} />,
      title: "Premium Service",
      description: "VIP treatment and exclusive access to premium hotels and services"
    }
  ];

  const solutions = [
    {
      icon: <Plane />,
      title: "Flight Management",
      points: [
        "Corporate fare negotiations",
        "Flexible booking options",
        "Priority check-in assistance",
        "Real-time flight updates"
      ]
    },
    {
      icon: <Hotel />,
      title: "Accommodation",
      points: [
        "Preferred hotel partnerships",
        "Extended stay arrangements",
        "Meeting room facilities",
        "Special corporate rates"
      ]
    },
    {
      icon: <Car />,
      title: "Ground Transportation",
      points: [
        "Airport transfers",
        "Chauffeur services",
        "Long-term vehicle rental",
        "Route optimization"
      ]
    },
    {
      icon: <Headphones />,
      title: "24/7 Support",
      points: [
        "Dedicated account manager",
        "Emergency assistance",
        "Multi-language support",
        "Real-time updates"
      ]
    }
  ];

  const industries = [
    "Technology & IT",
    "Financial Services",
    "Healthcare & Pharma",
    "Manufacturing",
    "E-commerce & Retail",
    "Consulting",
    "Real Estate",
    "Media & Entertainment"
  ];

  const testimonials = [
    {
      company: "Tech Global Inc.",
      industry: "Technology",
      quote: "Kia Tourism has transformed our corporate travel experience. Their attention to detail and cost optimization strategies have reduced our travel expenses by 30%.",
      author: "Rajesh Kumar",
      position: "Head of Operations"
    },
    {
      company: "Horizon Pharmaceuticals",
      industry: "Healthcare",
      quote: "The MICE services for our annual conference were exceptional. Every aspect was handled professionally, allowing us to focus on our business objectives.",
      author: "Priya Sharma",
      position: "Event Manager"
    },
    {
      company: "Pinnacle Consulting",
      industry: "Consulting",
      quote: "Their 24/7 support and dedicated account management have been invaluable for our consultants traveling across India and abroad.",
      author: "Amit Patel",
      position: "Managing Partner"
    }
  ];

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroIcon}>
            <Building2 size={64} />
          </div>
          <h1 className={styles.heroTitle}>
            Corporate Travel <span className={styles.highlight}>Solutions</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Empowering businesses with seamless travel management, MICE services, and corporate event solutions across India and beyond
          </p>
          <div className={styles.heroButtons}>
            <button className={styles.ctaPrimary}>Schedule a Consultation</button>
            <button className={styles.ctaSecondary}>Download Brochure</button>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className={styles.statsSection}>
        <div className={styles.statsContainer}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>150+</div>
            <div className={styles.statLabel}>Corporate Clients</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>5000+</div>
            <div className={styles.statLabel}>Business Travelers</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>300+</div>
            <div className={styles.statLabel}>Events Organized</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>98%</div>
            <div className={styles.statLabel}>Client Satisfaction</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.servicesContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Corporate Services</h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive solutions tailored to meet your business travel and event needs
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {corporateServices.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.serviceIconWrapper}>{service.icon}</div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
                <ul className={styles.serviceFeatures}>
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefitsSection}>
        <div className={styles.benefitsContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why Choose Us</h2>
            <p className={styles.sectionSubtitle}>
              Partner with us for a competitive edge in corporate travel management
            </p>
          </div>

          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitCard}>
                <div className={styles.benefitIconWrapper}>
                  {benefit.icon}
                </div>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitDescription}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className={styles.solutionsSection}>
        <div className={styles.solutionsContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Complete Travel Solutions</h2>
            <p className={styles.sectionSubtitle}>
              Every aspect of your corporate travel needs covered under one roof
            </p>
          </div>

          <div className={styles.solutionsGrid}>
            {solutions.map((solution, index) => (
              <div key={index} className={styles.solutionCard}>
                <div className={styles.solutionIcon}>{solution.icon}</div>
                <h3 className={styles.solutionTitle}>{solution.title}</h3>
                <ul className={styles.solutionPoints}>
                  {solution.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className={styles.industriesSection}>
        <div className={styles.industriesContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Industries We Serve</h2>
            <p className={styles.sectionSubtitle}>
              Trusted by leading organizations across diverse sectors
            </p>
          </div>

          <div className={styles.industriesGrid}>
            {industries.map((industry, index) => (
              <div key={index} className={styles.industryTag}>
                <Building2 size={20} />
                <span>{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonialsSection}>
        <div className={styles.testimonialsContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Client Success Stories</h2>
            <p className={styles.sectionSubtitle}>
              Hear from our satisfied corporate partners
            </p>
          </div>

          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <div className={styles.testimonialQuote}>"{testimonial.quote}"</div>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorInfo}>
                    <div className={styles.authorName}>{testimonial.author}</div>
                    <div className={styles.authorPosition}>{testimonial.position}</div>
                  </div>
                  <div className={styles.companyInfo}>
                    <div className={styles.companyName}>{testimonial.company}</div>
                    <div className={styles.companyIndustry}>{testimonial.industry}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Ready to Transform Your Corporate Travel?</h2>
          <p className={styles.ctaSubtitle}>
            Let's discuss how we can optimize your business travel and event management
          </p>
          <div className={styles.ctaButtons}>
            <button className={styles.ctaPrimary}>Request a Quote</button>
            <button className={styles.ctaSecondary}>Contact Our Team</button>
          </div>
          <div className={styles.ctaContact}>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Email:</span>
              <span className={styles.contactValue}>corporate@kiatourism.com</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Phone:</span>
              <span className={styles.contactValue}>+91 XXX XXX XXXX</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}