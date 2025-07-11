import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'

import Footer from './components/Footer'
import ContactPage from './components/ContactPage'
import AboutPage from './components/AboutPage'
import ProductsPage from './components/ProductsPage'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState('home')

  useEffect(() => {
    // Check if we're on contact page
    if (window.location.pathname === '/contact') {
      setCurrentPage('contact')
    } else if (window.location.pathname === '/about') {
      setCurrentPage('about')
    } else if (window.location.pathname === '/products') {
      setCurrentPage('products')
    } else if (window.location.pathname === '/privacy') {
      setCurrentPage('privacy')
    } else if (window.location.pathname === '/terms') {
      setCurrentPage('terms')
    }
    
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // Handle navigation
  useEffect(() => {
    const handleNavigation = () => {
      if (window.location.pathname === '/contact') {
        setCurrentPage('contact')
      } else if (window.location.pathname === '/about') {
        setCurrentPage('about')
      } else if (window.location.pathname === '/products') {
        setCurrentPage('products')
      } else if (window.location.pathname === '/privacy') {
        setCurrentPage('privacy')
      } else if (window.location.pathname === '/terms') {
        setCurrentPage('terms')
      } else {
        setCurrentPage('home')
      }
    }

    // Listen for popstate (back/forward buttons)
    window.addEventListener('popstate', handleNavigation)
    
    // Listen for clicks on navigation links
    const handleLinkClick = (e) => {
      if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('/')) {
        e.preventDefault()
        const href = e.target.getAttribute('href')
        window.history.pushState({}, '', href)
        handleNavigation()
      }
    }

    document.addEventListener('click', handleLinkClick)

    return () => {
      window.removeEventListener('popstate', handleNavigation)
      document.removeEventListener('click', handleLinkClick)
    }
  }, [])

  if (isLoading) {
    return (
      <div className="loading-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="loading-content"
        >
          <h1>LUXE</h1>
          <div className="loading-bar">
            <motion.div
              className="loading-progress"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    )
  }

  if (currentPage === 'contact') {
    return <ContactPage />
  }

  if (currentPage === 'about') {
    return <AboutPage />
  }

  if (currentPage === 'products') {
    return <ProductsPage />
  }

  if (currentPage === 'privacy') {
    return <PrivacyPolicy />
  }

  if (currentPage === 'terms') {
    return <TermsOfService />
  }

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Products />
      </main>
      <Footer />
    </div>
  )
}

export default App 