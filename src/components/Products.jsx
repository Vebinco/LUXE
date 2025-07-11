import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product])
    alert(`${product.name} added to cart!`)
  }

  const handleAddToWishlist = (product) => {
    setWishlist((prev) => [...prev, product])
    alert(`${product.name} added to wishlist!`)
  }

  const products = [
    {
      id: 1,
      name: "Aventus",
      price: "$350",
      image: "/pics/Aventus.png",
      description: "A bold and powerful fragrance with notes of blackcurrant, pineapple, and birch.",
      category: "Masculine"
    },
    {
      id: 2,
      name: "Baccarat Rouge 540",
      price: "$325",
      image: "/pics/Baccarat Rouge 540.png",
      description: "A luxurious amber fragrance with saffron, ambergris, and cedar wood.",
      category: "Unisex"
    },
    {
      id: 3,
      name: "Baltus",
      price: "$280",
      image: "/pics/Baltus.png",
      description: "An elegant blend of citrus, spices, and woody notes for the modern gentleman.",
      category: "Masculine"
    },
    {
      id: 4,
      name: "Enigma",
      price: "$295",
      image: "/pics/Enigma.png",
      description: "A mysterious and captivating scent with oriental spices and precious woods.",
      category: "Unisex"
    },
    {
      id: 5,
      name: "Hermes",
      price: "$310",
      image: "/pics/Hermes.png",
      description: "A sophisticated fragrance inspired by the Mediterranean coast.",
      category: "Unisex"
    },
    {
      id: 6,
      name: "Le Labo Santal 33",
      price: "$275",
      image: "/pics/Le Labo Santal 33.png",
      description: "A cult favorite with sandalwood, cardamom, and leather notes.",
      category: "Unisex"
    },
    {
      id: 7,
      name: "Tom Ford",
      price: "$320",
      image: "/pics/Tom Ford.png",
      description: "A luxurious and sensual fragrance with vanilla, amber, and spices.",
      category: "Unisex"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="products" className="products">
      {/* Pre-Collection Section */}
      <motion.div
        className="pre-collection"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <div className="pre-collection-content">
            <motion.div
              className="pre-collection-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2>Artisanal Craftsmanship</h2>
              <p>
                Each fragrance in our collection is meticulously crafted by master perfumers 
                who blend traditional techniques with modern innovation. We source the finest 
                ingredients from around the world to create scents that tell unique stories.
              </p>
              <div className="craftsmanship-stats">
                <div className="stat">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Ingredients</span>
                </div>
                <div className="stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Natural</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="pre-collection-visual"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="craftsmanship-showcase">
                <div className="showcase-item">
                  <div className="showcase-icon">🌹</div>
                  <h4>Premium Ingredients</h4>
                  <p>Sourced from the finest regions worldwide</p>
                </div>
                <div className="showcase-item">
                  <div className="showcase-icon">👨‍🔬</div>
                  <h4>Master Perfumers</h4>
                  <p>Expert craftsmanship and innovation</p>
                </div>
                <div className="showcase-item">
                  <div className="showcase-icon">⚡</div>
                  <h4>Unique Formulations</h4>
                  <p>Each scent tells a different story</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Our Collection</h2>
          <p>Discover our curated selection of premium fragrances</p>
        </motion.div>

        <motion.div
          className="products-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="product-card"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              onClick={() => setSelectedProduct(product)}
            >
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <div className="product-overlay">
                  
                </div>
              </div>
              
              <div className="product-info">
                <div className="product-category">{product.category}</div>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">{product.price}</p>
                
                <motion.button
                  className="add-to-cart-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => { e.stopPropagation(); handleAddToCart(product); }}
                >
                  Add to Cart
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="product-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              className="product-modal"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelectedProduct(null)}
              >
                ×
              </button>
              
              <div className="modal-content">
                <div className="modal-image">
                  <img src={selectedProduct.image} alt={selectedProduct.name} />
                </div>
                
                <div className="modal-info">
                  <div className="modal-category">{selectedProduct.category}</div>
                  <h2 className="modal-name">{selectedProduct.name}</h2>
                  <p className="modal-description">{selectedProduct.description}</p>
                  <div className="modal-price">{selectedProduct.price}</div>
                  
                  <div className="modal-actions">
                    <motion.button
                      className="btn btn-primary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleAddToCart(selectedProduct)}
                    >
                      Add to Cart
                    </motion.button>
                    <motion.button
                      className="btn btn-secondary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleAddToWishlist(selectedProduct)}
                    >
                      Add to Wishlist
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Post-Collection Section */}
      <motion.div
        className="post-collection"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <div className="post-collection-content">
            <motion.div
              className="post-collection-header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2>Why Choose LUXE?</h2>
              <p>Experience the difference that premium craftsmanship makes</p>
            </motion.div>
            
            <div className="benefits-grid">
              <motion.div
                className="benefit-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="benefit-icon">🎁</div>
                <h3>Luxury Packaging</h3>
                <p>Each fragrance comes in elegant, handcrafted packaging that reflects the quality within.</p>
              </motion.div>
              
              <motion.div
                className="benefit-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="benefit-icon">🌍</div>
                <h3>Global Sourcing</h3>
                <p>We source ingredients from the world's finest regions to ensure exceptional quality.</p>
              </motion.div>
              
              <motion.div
                className="benefit-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="benefit-icon">💎</div>
                <h3>Exclusive Formulations</h3>
                <p>Each fragrance is uniquely formulated and cannot be found anywhere else.</p>
              </motion.div>
              
              <motion.div
                className="benefit-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="benefit-icon">✨</div>
                <h3>Long-lasting Scents</h3>
                <p>Our fragrances are designed to last throughout the day, evolving beautifully over time.</p>
              </motion.div>
            </div>
            
            <motion.div
              className="cta-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h3>Ready to Find Your Signature Scent?</h3>
              <p>Explore our collection and discover the perfect fragrance that speaks to your soul.</p>
              <motion.a
                href="/products"
                className="btn btn-primary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Shop Now
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Products 