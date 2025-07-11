import React from 'react'
import { motion } from 'framer-motion'
import Header from './Header'
import Footer from './Footer'

const AboutPage = () => {
  const values = [
    // {
    //   icon: "🌟",
    //   title: "Excellence",
    //   description: "We strive for excellence in every aspect of our business, from product quality to customer service."
    // },
    {
      icon: "🎨",
      title: "Creativity",
      description: "Our master perfumers blend art and science to create unique, unforgettable fragrances."
    },
    {
      icon: "🌿",
      title: "Sustainability",
      description: "We are committed to sustainable practices and environmentally responsible sourcing."
    },
    {
      icon: "💎",
      title: "Luxury",
      description: "We believe luxury should be accessible while maintaining the highest standards of quality."
    }
  ]

  const team = [
    {
      name: "Isabella Laurent",
      position: "Master Perfumer",
      image: "👩‍🔬",
      bio: "With over 20 years of experience in perfumery, Isabella creates our signature fragrances."
    },
    {
      name: "Marcus Chen",
      position: "Creative Director",
      image: "👨‍🎨",
      bio: "Marcus brings his artistic vision to every aspect of our brand and product design."
    },
    {
      name: "Sophia Rodriguez",
      position: "Quality Control",
      image: "👩‍🔬",
      bio: "Sophia ensures every product meets our exacting standards before reaching customers."
    }
  ]

  const timeline = [
    {
      year: "2010",
      title: "The Beginning",
      description: "LUXE was founded with a vision to create exceptional fragrances that tell stories."
    },
    {
      year: "2015",
      title: "First Collection",
      description: "Our debut collection launched to critical acclaim, establishing our reputation for quality."
    },
    {
      year: "2018",
      title: "Global Expansion",
      description: "LUXE expanded internationally, bringing our fragrances to discerning customers worldwide."
    },
    {
      year: "2024",
      title: "Innovation",
      description: "Today, we continue to push boundaries in perfumery while honoring traditional craftsmanship."
    }
  ]

  return (
    <div className="about-page">
      <Header />
      
      <main className="about-page-main">
        {/* Hero Section */}
        <motion.section 
          className="about-hero"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container">
            <motion.div
              className="about-hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1>Our Story</h1>
              <p>Discover the passion, craftsmanship, and dedication behind every LUXE fragrance.</p>
            </motion.div>
          </div>
        </motion.section>

        <div className="container">
          {/* Mission Section */}
          <motion.section 
            className="mission-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mission-content">
              <motion.div
                className="mission-text"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2>Our Mission</h2>
                <p>
                  At LUXE, we believe that fragrance is more than just a scent—it's a journey, 
                  a memory, and an expression of your unique personality. Our mission is to create 
                  exceptional fragrances that not only smell beautiful but also tell stories and 
                  evoke emotions.
                </p>
                <p>
                  We source the finest ingredients from around the world, working with master 
                  perfumers who blend traditional techniques with modern innovation. Every 
                  fragrance in our collection is crafted with passion, precision, and an 
                  unwavering commitment to quality.
                </p>
              </motion.div>
              
              <motion.div
                className="mission-visual"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="perfume-ingredients">
                  <div className="ingredient">🌹 Rose</div>
                  <div className="ingredient">🌿 Lavender</div>
                  <div className="ingredient">🍊 Bergamot</div>
                  <div className="ingredient">🌲 Sandalwood</div>
                  <div className="ingredient">🌺 Jasmine</div>
                  <div className="ingredient">🪵 Cedar</div>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Values Section */}
          <motion.section 
            className="values-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="section-header">
              <h2>Our Values</h2>
              <p>The principles that guide everything we do</p>
            </div>
            
            <div className="values-grid">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="value-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <div className="value-icon">{value.icon}</div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Timeline Section */}
          <motion.section 
            className="timeline-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="section-header">
              <h2>Our Journey</h2>
              <p>Key milestones in our story</p>
            </div>
            
            <div className="timeline">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="timeline-content">
                    <div className="timeline-year">{item.year}</div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Team Section */}
          <motion.section 
            className="team-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="section-header">
              <h2>Meet Our Team</h2>
              <p>The passionate individuals behind LUXE</p>
            </div>
            
            <div className="team-grid">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  className="team-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <div className="team-avatar">{member.image}</div>
                  <h3>{member.name}</h3>
                  <p className="team-position">{member.position}</p>
                  <p className="team-bio">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section 
            className="about-cta"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="cta-content">
              <h2>Experience LUXE</h2>
              <p>Discover our collection and find your signature scent</p>
              <motion.a
                href="/"
                className="btn btn-primary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Collection
              </motion.a>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default AboutPage 