import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './Header'
import Footer from './Footer'

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [priceRange, setPriceRange] = useState([0, 500])
  const [sortBy, setSortBy] = useState('featured')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [viewMode, setViewMode] = useState('grid')
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'men', name: 'Men\'s Fragrances' },
    { id: 'women', name: 'Women\'s Fragrances' },
    { id: 'unisex', name: 'Unisex Fragrances' },
    { id: 'limited', name: 'Limited Edition' }
  ]

  const products = [
    {
      id: 1,
      name: 'Aventus',
      category: 'men',
      price: 450,
      image: '/pics/Aventus.png',
      description: 'A bold and sophisticated fragrance with notes of pineapple, blackcurrant, and oakmoss. Perfect for the modern gentleman.',
      notes: ['Pineapple', 'Blackcurrant', 'Oakmoss', 'Vanilla'],
      size: '100ml',
      concentration: 'Eau de Parfum',
      rating: 4.8,
      reviews: 1247,
      inStock: true
    },
    {
      id: 2,
      name: 'Baccarat Rouge 540',
      category: 'unisex',
      price: 380,
      image: '/pics/Baccarat Rouge 540.png',
      description: 'A luxurious and mysterious fragrance featuring saffron, ambergris, and cedarwood. A true masterpiece of perfumery.',
      notes: ['Saffron', 'Ambergris', 'Cedarwood', 'Jasmine'],
      size: '70ml',
      concentration: 'Extrait de Parfum',
      rating: 4.9,
      reviews: 2156,
      inStock: true
    },
    {
      id: 3,
      name: 'Baltus',
      category: 'men',
      price: 320,
      image: '/pics/Baltus.png',
      description: 'A powerful and masculine scent with leather, tobacco, and oud notes. For the confident and sophisticated man.',
      notes: ['Leather', 'Tobacco', 'Oud', 'Sandalwood'],
      size: '100ml',
      concentration: 'Eau de Parfum',
      rating: 4.7,
      reviews: 892,
      inStock: true
    },
    {
      id: 4,
      name: 'Enigma',
      category: 'unisex',
      price: 420,
      image: '/pics/Enigma.png',
      description: 'An enigmatic and complex fragrance that evolves throughout the day. A true olfactory journey.',
      notes: ['Bergamot', 'Rose', 'Patchouli', 'Musk'],
      size: '100ml',
      concentration: 'Eau de Parfum',
      rating: 4.6,
      reviews: 634,
      inStock: false
    },
    {
      id: 5,
      name: 'Hermes',
      category: 'women',
      price: 280,
      image: '/pics/Hermes.png',
      description: 'An elegant and feminine fragrance with floral and woody notes. Timeless beauty in a bottle.',
      notes: ['Rose', 'Jasmine', 'Sandalwood', 'Vanilla'],
      size: '100ml',
      concentration: 'Eau de Toilette',
      rating: 4.5,
      reviews: 1567,
      inStock: true
    },
    {
      id: 6,
      name: 'Le Labo Santal 33',
      category: 'unisex',
      price: 350,
      image: '/pics/Le Labo Santal 33.png',
      description: 'A cult favorite with sandalwood, cardamom, and leather notes. Minimalist luxury at its finest.',
      notes: ['Sandalwood', 'Cardamom', 'Leather', 'Amber'],
      size: '100ml',
      concentration: 'Eau de Parfum',
      rating: 4.8,
      reviews: 3421,
      inStock: true
    },
    {
      id: 7,
      name: 'Tom Ford',
      category: 'men',
      price: 480,
      image: '/pics/Tom Ford.png',
      description: 'A sophisticated and modern fragrance with citrus, spices, and woody notes. For the discerning gentleman.',
      notes: ['Bergamot', 'Black Pepper', 'Vetiver', 'Amber'],
      size: '100ml',
      concentration: 'Eau de Parfum',
      rating: 4.9,
      reviews: 1892,
      inStock: true
    }
  ]

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1]
    return categoryMatch && priceMatch
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'rating':
        return b.rating - a.rating
      case 'name':
        return a.name.localeCompare(b.name)
      default:
        return 0
    }
  })

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="products-page">
      <Header />
      {/* Hero Section */}
      <motion.div
        className="products-hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <div className="products-hero-content">
            <h1>Our Fragrance Collection</h1>
            <p>Discover the perfect scent that speaks to your soul</p>
          </div>
        </div>
      </motion.div>

      <div className="container">
        {/* Mobile Filter Button */}
        <button className="mobile-filter-btn" onClick={() => setIsFilterOpen(true)}>
          Filter
        </button>
        <div className="products-page-content">
          {/* Filters Sidebar */}
          <motion.aside
            className={`filters-sidebar${isFilterOpen ? ' open' : ''}`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: isFilterOpen ? 'block' : undefined }}
          >
            <button className="close-filter-btn" onClick={() => setIsFilterOpen(false)}>
              ×
            </button>
            <div className="filter-section">
              <h3>Categories</h3>
              <div className="category-filters">
                {categories.map(category => (
                  <label key={category.id} className="filter-option">
                    <input
                      type="radio"
                      name="category"
                      value={category.id}
                      checked={selectedCategory === category.id}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    />
                    <span className="checkmark"></span>
                    {category.name}
                  </label>
                ))}
              </div>
            </div>

            <div className="filter-section">
              <h3>Price Range</h3>
              <div className="price-range">
                <input
                  type="range"
                  min="0"
                  max="500"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="price-slider"
                />
                <div className="price-labels">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>

            <div className="filter-section">
              <h3>Sort By</h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>

            <div className="filter-section">
              <h3>Quick Stats</h3>
              <div className="stats-grid">
                <div className="stat-item">
                  <span className="stat-number">{filteredProducts.length}</span>
                  <span className="stat-label">Products</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">
                    ${Math.min(...filteredProducts.map(p => p.price))}
                  </span>
                  <span className="stat-label">Starting Price</span>
                </div>
              </div>
            </div>
          </motion.aside>

          {/* Products Grid */}
          <motion.main
            className="products-main"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="products-header">
              <h2>Showing {filteredProducts.length} Products</h2>
            </div>

            <motion.div
              className={`products-grid${viewMode === 'list' ? ' list-view' : ''}`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {sortedProducts.map((product) => (
                <motion.div
                  key={product.id}
                  className="product-card"
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                    <div className="product-overlay">
                      
                    </div>
                    {!product.inStock && (
                      <div className="out-of-stock">Out of Stock</div>
                    )}
                  </div>
                  
                  <div className="product-info">
                    <div className="product-category">{product.category}</div>
                    <h3 className="product-name">{product.name}</h3>
                    <div className="product-rating">
                      <span className="stars">{'★'.repeat(Math.floor(product.rating))}</span>
                      <span className="rating-text">({product.rating})</span>
                    </div>
                    <p className="product-price">${product.price}</p>
                    <p className="product-size">{product.size} • {product.concentration}</p>
                    
                    <motion.button
                      className={`add-to-cart-btn ${!product.inStock ? 'disabled' : ''}`}
                      whileHover={product.inStock ? { scale: 1.05 } : {}}
                      whileTap={product.inStock ? { scale: 0.95 } : {}}
                      disabled={!product.inStock}
                    >
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {filteredProducts.length === 0 && (
              <motion.div
                className="no-products"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <h3>No products found</h3>
                <p>Try adjusting your filters to see more products.</p>
              </motion.div>
            )}
          </motion.main>
        </div>
      </div>

      {/* Product Modal */}
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
                  
                  <div className="modal-rating">
                    <span className="stars">{'★'.repeat(Math.floor(selectedProduct.rating))}</span>
                    <span className="rating-text">({selectedProduct.rating}) • {selectedProduct.reviews} reviews</span>
                  </div>
                  
                  <p className="modal-description">{selectedProduct.description}</p>
                  
                  <div className="modal-details">
                    <div className="detail-item">
                      <span className="detail-label">Size:</span>
                      <span className="detail-value">{selectedProduct.size}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Concentration:</span>
                      <span className="detail-value">{selectedProduct.concentration}</span>
                    </div>
                  </div>
                  
                  <div className="modal-notes">
                    <h4>Fragrance Notes:</h4>
                    <div className="notes-list">
                      {selectedProduct.notes.map((note, index) => (
                        <span key={index} className="note-tag">{note}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="modal-price">{selectedProduct.price}</div>
                  
                  <div className="modal-actions">
                    <motion.button
                      className={`btn btn-primary ${!selectedProduct.inStock ? 'disabled' : ''}`}
                      whileHover={selectedProduct.inStock ? { scale: 1.05 } : {}}
                      whileTap={selectedProduct.inStock ? { scale: 0.95 } : {}}
                      disabled={!selectedProduct.inStock}
                    >
                      {selectedProduct.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </motion.button>
                    <motion.button
                      className="btn btn-secondary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
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
      <Footer />
    </div>
  )
}

export default ProductsPage 