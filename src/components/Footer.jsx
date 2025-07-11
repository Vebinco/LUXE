import React from 'react'

const Footer = () => {
  return (
    <footer className="footer dribbble-style-footer">
      <div className="footer-main-row">
        <div className="footer-brand">
          <img src="/pics/Luxe.png" alt="LUXE" style={{width: 100, marginBottom: 8}} />
            </div>
        <nav className="footer-main-links">
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
        <div className="footer-social-icons">
          <a href="#" aria-label="Instagram"><svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="18" height="18" rx="5"/><circle cx="11" cy="11" r="4"/><path d="M16 7h.01"/></svg></a>
          <a href="#" aria-label="Telegram"><svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 4L11 20l-4-9-6-2z"/><path d="M21 4l-10 7-4 9"/></svg></a>
          <a href="#" aria-label="WhatsApp"><svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="9"/><path d="M15 12.5c-.5 1-1.5 2-2.5 2.5-1 .5-2.5.5-3.5-1-1-1.5-1-2.5-1-3.5s.5-2 1-2.5c.5-.5 1.5-1 2.5-1s2 .5 2.5 1c.5.5 1 1.5 1 2.5s0 2-.5 2.5z"/></svg></a>
        </div>
      </div>
      <div className="footer-bottom-row">
        <div className="footer-copyright">&copy; 2024 LUXE. All rights reserved.</div>
            <div className="footer-bottom-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
          </div>
      </div>
    </footer>
  )
}

export default Footer 