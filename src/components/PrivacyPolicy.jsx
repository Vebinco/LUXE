import React from 'react'
import { motion } from 'framer-motion'
import Header from './Header'
import Footer from './Footer'

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-page">
      <Header />
      
      {/* Hero Section */}
      <motion.div
        className="privacy-hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <div className="privacy-hero-content">
            <h1>Privacy Policy</h1>
            <p>Your privacy is important to us. Learn how we protect and handle your information.</p>
            <div className="last-updated">
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
          </div>
        </div>
      </motion.div>

      <div className="container">
        <motion.div
          className="privacy-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="privacy-section">
            <h2>1. Introduction</h2>
            <p>
              Welcome to LUXE Fragrances ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or make purchases from us.
            </p>
            <p>
              By using our website and services, you consent to the data practices described in this policy. If you do not agree with our policies and practices, please do not use our website.
            </p>
          </div>

          <div className="privacy-section">
            <h2>2. Information We Collect</h2>
            
            <h3>2.1 Personal Information</h3>
            <p>We may collect the following personal information:</p>
            <ul>
              <li><strong>Contact Information:</strong> Name, email address, phone number, and mailing address</li>
              <li><strong>Account Information:</strong> Username, password, and account preferences</li>
              <li><strong>Payment Information:</strong> Credit card details, billing address, and payment history</li>
              <li><strong>Order Information:</strong> Purchase history, order details, and shipping information</li>
              <li><strong>Communication Data:</strong> Messages, feedback, and customer service interactions</li>
            </ul>

            <h3>2.2 Automatically Collected Information</h3>
            <p>When you visit our website, we automatically collect:</p>
            <ul>
              <li><strong>Device Information:</strong> IP address, browser type, operating system, and device identifiers</li>
              <li><strong>Usage Data:</strong> Pages visited, time spent on pages, and navigation patterns</li>
              <li><strong>Cookies and Tracking:</strong> Information stored on your device to enhance your experience</li>
              <li><strong>Location Data:</strong> General location information based on your IP address</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>3. How We Use Your Information</h2>
            <p>We use the collected information for the following purposes:</p>
            
            <div className="usage-grid">
              <div className="usage-item">
                <div className="usage-icon">🛍️</div>
                <h4>Order Processing</h4>
                <p>Process and fulfill your orders, send order confirmations, and provide customer support</p>
              </div>
              
              <div className="usage-item">
                <div className="usage-icon">💳</div>
                <h4>Payment Processing</h4>
                <p>Process payments, prevent fraud, and maintain secure transactions</p>
              </div>
              
              <div className="usage-item">
                <div className="usage-icon">📧</div>
                <h4>Communication</h4>
                <p>Send order updates, promotional offers, and respond to your inquiries</p>
              </div>
              
              <div className="usage-item">
                <div className="usage-icon">🔍</div>
                <h4>Website Improvement</h4>
                <p>Analyze usage patterns, improve website functionality, and enhance user experience</p>
              </div>
              
              <div className="usage-item">
                <div className="usage-icon">🛡️</div>
                <h4>Security</h4>
                <p>Protect against fraud, unauthorized access, and ensure website security</p>
              </div>
              
              <div className="usage-item">
                <div className="usage-icon">📊</div>
                <h4>Analytics</h4>
                <p>Generate reports, analyze trends, and make business decisions</p>
              </div>
            </div>
          </div>

          <div className="privacy-section">
            <h2>4. Information Sharing and Disclosure</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. However, we may share your information in the following circumstances:</p>
            
            <h3>4.1 Service Providers</h3>
            <p>We may share information with trusted third-party service providers who assist us in:</p>
            <ul>
              <li>Payment processing and fraud prevention</li>
              <li>Order fulfillment and shipping</li>
              <li>Website hosting and maintenance</li>
              <li>Customer service and support</li>
              <li>Analytics and marketing services</li>
            </ul>

            <h3>4.2 Legal Requirements</h3>
            <p>We may disclose your information if required by law or in response to:</p>
            <ul>
              <li>Legal processes or court orders</li>
              <li>Government requests or investigations</li>
              <li>Protection of our rights, property, or safety</li>
              <li>Prevention of fraud or security threats</li>
            </ul>

            <h3>4.3 Business Transfers</h3>
            <p>In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction.</p>
          </div>

          <div className="privacy-section">
            <h2>5. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal information:</p>
            
            <div className="security-features">
              <div className="security-item">
                <div className="security-icon">🔐</div>
                <h4>Encryption</h4>
                <p>All sensitive data is encrypted using industry-standard SSL/TLS protocols</p>
              </div>
              
              <div className="security-item">
                <div className="security-icon">🛡️</div>
                <h4>Access Controls</h4>
                <p>Strict access controls limit who can access your personal information</p>
              </div>
              
              <div className="security-item">
                <div className="security-icon">🔍</div>
                <h4>Regular Monitoring</h4>
                <p>Continuous monitoring and security audits to detect and prevent threats</p>
              </div>
              
              <div className="security-item">
                <div className="security-icon">💾</div>
                <h4>Secure Storage</h4>
                <p>Data is stored in secure, certified data centers with backup systems</p>
              </div>
            </div>
          </div>

          <div className="privacy-section">
            <h2>6. Cookies and Tracking Technologies</h2>
            <p>We use cookies and similar tracking technologies to enhance your browsing experience:</p>
            
            <h3>6.1 Types of Cookies</h3>
            <ul>
              <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
              <li><strong>Performance Cookies:</strong> Help us understand how visitors use our website</li>
              <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
              <li><strong>Marketing Cookies:</strong> Used for targeted advertising and promotions</li>
            </ul>

            <h3>6.2 Managing Cookies</h3>
            <p>You can control and manage cookies through your browser settings. However, disabling certain cookies may affect website functionality.</p>
          </div>

          <div className="privacy-section">
            <h2>7. Your Rights and Choices</h2>
            <p>You have the following rights regarding your personal information:</p>
            
            <div className="rights-grid">
              <div className="right-item">
                <h4>Access</h4>
                <p>Request access to your personal information and receive a copy</p>
              </div>
              
              <div className="right-item">
                <h4>Correction</h4>
                <p>Request correction of inaccurate or incomplete information</p>
              </div>
              
              <div className="right-item">
                <h4>Deletion</h4>
                <p>Request deletion of your personal information in certain circumstances</p>
              </div>
              
              <div className="right-item">
                <h4>Portability</h4>
                <p>Request a copy of your data in a portable format</p>
              </div>
              
              <div className="right-item">
                <h4>Objection</h4>
                <p>Object to processing of your personal information</p>
              </div>
              
              <div className="right-item">
                <h4>Withdrawal</h4>
                <p>Withdraw consent for data processing where applicable</p>
              </div>
            </div>

            <p>To exercise these rights, please contact us using the information provided below.</p>
          </div>

          <div className="privacy-section">
            <h2>8. Data Retention</h2>
            <p>We retain your personal information for as long as necessary to:</p>
            <ul>
              <li>Provide our services and fulfill your orders</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes and enforce agreements</li>
              <li>Maintain business records</li>
            </ul>
            <p>When we no longer need your information, we will securely delete or anonymize it.</p>
          </div>

          <div className="privacy-section">
            <h2>9. International Data Transfers</h2>
            <p>Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.</p>
          </div>

          <div className="privacy-section">
            <h2>10. Children's Privacy</h2>
            <p>Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.</p>
          </div>

          <div className="privacy-section">
            <h2>11. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by:</p>
            <ul>
              <li>Posting the updated policy on our website</li>
              <li>Sending you an email notification</li>
              <li>Displaying a prominent notice on our website</li>
            </ul>
            <p>Your continued use of our website after any changes indicates your acceptance of the updated policy.</p>
          </div>

          <div className="privacy-section">
            <h2>12. Contact Us</h2>
            <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
            
            <div className="contact-info">
              <div className="contact-item">
                <strong>Email:</strong>
                <a href="mailto:privacy@luxefragrances.com">privacy@luxefragrances.com</a>
              </div>
              
              <div className="contact-item">
                <strong>Phone:</strong>
                <a href="tel:+1-555-123-4567">+1 (555) 123-4567</a>
              </div>
              
              <div className="contact-item">
                <strong>Address:</strong>
                <p>LUXE Fragrances<br />
                123 Luxury Avenue<br />
                New York, NY 10001<br />
                United States</p>
              </div>
            </div>
          </div>

          <div className="privacy-section">
            <h2>13. Governing Law</h2>
            <p>This Privacy Policy is governed by and construed in accordance with the laws of the United States. Any disputes arising from this policy will be resolved in the courts of New York, NY.</p>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  )
}

export default PrivacyPolicy 