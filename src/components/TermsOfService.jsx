import React from 'react'
import { motion } from 'framer-motion'
import Header from './Header'
import Footer from './Footer'

const TermsOfService = () => {
  return (
    <div className="terms-page">
      <Header />
      
      {/* Hero Section */}
      <motion.div
        className="terms-hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <div className="terms-hero-content">
            <h1>Terms of Service</h1>
            <p>Please read these terms carefully before using our services.</p>
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
          className="terms-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="terms-section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the LUXE Fragrances website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
            <p>
              These Terms of Service ("Terms") govern your use of our website, mobile applications, and services (collectively, the "Service") operated by LUXE Fragrances ("we," "us," or "our").
            </p>
          </div>

          <div className="terms-section">
            <h2>2. Description of Service</h2>
            <p>LUXE Fragrances provides the following services:</p>
            
            <div className="service-grid">
              <div className="service-item">
                <div className="service-icon">🛍️</div>
                <h4>Online Retail</h4>
                <p>Purchase premium fragrances and related products through our e-commerce platform</p>
              </div>
              
              <div className="service-item">
                <div className="service-icon">📱</div>
                <h4>Mobile Access</h4>
                <p>Access our services through mobile applications and responsive website design</p>
              </div>
              
              <div className="service-item">
                <div className="service-icon">💳</div>
                <h4>Payment Processing</h4>
                <p>Secure payment processing and order management systems</p>
              </div>
              
              <div className="service-item">
                <div className="service-icon">🚚</div>
                <h4>Shipping & Delivery</h4>
                <p>Worldwide shipping and delivery services for all orders</p>
              </div>
              
              <div className="service-item">
                <div className="service-icon">🎁</div>
                <h4>Gift Services</h4>
                <p>Gift wrapping, personalization, and special packaging options</p>
              </div>
              
              <div className="service-item">
                <div className="service-icon">📞</div>
                <h4>Customer Support</h4>
                <p>24/7 customer service and technical support assistance</p>
              </div>
            </div>
          </div>

          <div className="terms-section">
            <h2>3. User Accounts and Registration</h2>
            
            <h3>3.1 Account Creation</h3>
            <p>To access certain features of our Service, you may be required to create an account. You agree to:</p>
            <ul>
              <li>Provide accurate, current, and complete information during registration</li>
              <li>Maintain and promptly update your account information</li>
              <li>Maintain the security of your password and account</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>

            <h3>3.2 Account Termination</h3>
            <p>We reserve the right to terminate or suspend your account at any time for violations of these Terms or for any other reason at our sole discretion.</p>
          </div>

          <div className="terms-section">
            <h2>4. Product Information and Pricing</h2>
            
            <h3>4.1 Product Descriptions</h3>
            <p>We strive to provide accurate product descriptions, images, and pricing. However, we do not warrant that product descriptions or other content is accurate, complete, reliable, current, or error-free.</p>

            <h3>4.2 Pricing</h3>
            <p>All prices are subject to change without notice. Prices do not include applicable taxes, shipping, or handling charges, which will be added to your order total.</p>

            <h3>4.3 Availability</h3>
            <p>Product availability is subject to change. We reserve the right to discontinue any product at any time and to limit quantities of any products.</p>
          </div>

          <div className="terms-section">
            <h2>5. Orders and Payment</h2>
            
            <h3>5.1 Order Acceptance</h3>
            <p>All orders are subject to acceptance and availability. We reserve the right to refuse any order for any reason, including but not limited to:</p>
            <ul>
              <li>Product unavailability</li>
              <li>Pricing errors</li>
              <li>Suspicious or fraudulent activity</li>
              <li>Violation of these Terms</li>
            </ul>

            <h3>5.2 Payment Methods</h3>
            <p>We accept various payment methods including:</p>
            <div className="payment-methods">
              <div className="payment-method">
                <div className="payment-icon">💳</div>
                <span>Credit Cards</span>
              </div>
              <div className="payment-method">
                <div className="payment-icon">🏦</div>
                <span>Debit Cards</span>
              </div>
              <div className="payment-method">
                <div className="payment-icon">📱</div>
                <span>Digital Wallets</span>
              </div>
              <div className="payment-method">
                <div className="payment-icon">🏛️</div>
                <span>Bank Transfers</span>
              </div>
            </div>

            <h3>5.3 Payment Processing</h3>
            <p>Payment processing is handled by secure third-party payment processors. By placing an order, you authorize us to charge your payment method for the total amount of your order.</p>
          </div>

          <div className="terms-section">
            <h2>6. Shipping and Delivery</h2>
            
            <h3>6.1 Shipping Methods</h3>
            <p>We offer various shipping options:</p>
            <ul>
              <li><strong>Standard Shipping:</strong> 5-7 business days</li>
              <li><strong>Express Shipping:</strong> 2-3 business days</li>
              <li><strong>Overnight Shipping:</strong> Next business day</li>
              <li><strong>International Shipping:</strong> 7-14 business days</li>
            </ul>

            <h3>6.2 Delivery</h3>
            <p>Delivery times are estimates only. We are not responsible for delays beyond our control, including but not limited to:</p>
            <ul>
              <li>Customs delays</li>
              <li>Weather conditions</li>
              <li>Carrier delays</li>
              <li>Address errors</li>
            </ul>

            <h3>6.3 Risk of Loss</h3>
            <p>Risk of loss and title for items purchased pass to you upon delivery of the items to the carrier.</p>
          </div>

          <div className="terms-section">
            <h2>7. Returns and Refunds</h2>
            
            <h3>7.1 Return Policy</h3>
            <p>We accept returns within 30 days of delivery for unused items in original packaging. Return shipping costs are the responsibility of the customer unless the item is defective or we made an error.</p>

            <h3>7.2 Refund Process</h3>
            <p>Refunds will be processed within 5-10 business days of receiving the returned item. Refunds will be issued to the original payment method.</p>

            <h3>7.3 Non-Returnable Items</h3>
            <p>The following items are non-returnable:</p>
            <ul>
              <li>Personal care items for hygiene reasons</li>
              <li>Custom or personalized items</li>
              <li>Items marked as final sale</li>
              <li>Gift cards</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2>8. Intellectual Property</h2>
            
            <h3>8.1 Our Rights</h3>
            <p>The Service and its original content, features, and functionality are owned by LUXE Fragrances and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.</p>

            <h3>8.2 Your Rights</h3>
            <p>You retain ownership of any content you submit, post, or display on or through the Service. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute your content.</p>

            <h3>8.3 Trademarks</h3>
            <p>LUXE Fragrances, our logo, and other trademarks are registered trademarks of our company. You may not use our trademarks without our prior written consent.</p>
          </div>

          <div className="terms-section">
            <h2>9. Prohibited Uses</h2>
            <p>You may not use the Service for any unlawful purpose or to solicit others to perform unlawful acts. You agree not to:</p>
            
            <div className="prohibited-uses">
              <div className="prohibited-item">
                <div className="prohibited-icon">🚫</div>
                <h4>Illegal Activities</h4>
                <p>Use the service for any illegal or unauthorized purpose</p>
              </div>
              
              <div className="prohibited-item">
                <div className="prohibited-icon">🔄</div>
                <h4>Resale</h4>
                <p>Resell or redistribute our products without authorization</p>
              </div>
              
              <div className="prohibited-item">
                <div className="prohibited-icon">🛠️</div>
                <h4>Reverse Engineering</h4>
                <p>Attempt to reverse engineer or hack our systems</p>
              </div>
              
              <div className="prohibited-item">
                <div className="prohibited-icon">📧</div>
                <h4>Spam</h4>
                <p>Send spam, phishing emails, or other malicious content</p>
              </div>
              
              <div className="prohibited-item">
                <div className="prohibited-icon">👥</div>
                <h4>Impersonation</h4>
                <p>Impersonate others or provide false information</p>
              </div>
              
              <div className="prohibited-item">
                <div className="prohibited-icon">💻</div>
                <h4>System Abuse</h4>
                <p>Overload or interfere with our servers or networks</p>
              </div>
            </div>
          </div>

          <div className="terms-section">
            <h2>10. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, LUXE Fragrances shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:</p>
            <ul>
              <li>Your use or inability to use the Service</li>
              <li>Any unauthorized access to or use of our servers</li>
              <li>Any interruption or cessation of transmission to or from the Service</li>
              <li>Any bugs, viruses, or other harmful code that may be transmitted</li>
              <li>Any errors or omissions in any content or for any loss or damage incurred</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2>11. Disclaimers</h2>
            <p>The Service is provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranties, expressed or implied, and hereby disclaim all warranties, including without limitation:</p>
            
            <div className="disclaimers-grid">
              <div className="disclaimer-item">
                <h4>Availability</h4>
                <p>We do not guarantee uninterrupted access to our services</p>
              </div>
              
              <div className="disclaimer-item">
                <h4>Accuracy</h4>
                <p>Product information may contain errors or inaccuracies</p>
              </div>
              
              <div className="disclaimer-item">
                <h4>Compatibility</h4>
                <p>We do not guarantee compatibility with all devices or browsers</p>
              </div>
              
              <div className="disclaimer-item">
                <h4>Third-Party Services</h4>
                <p>We are not responsible for third-party services or content</p>
              </div>
            </div>
          </div>

          <div className="terms-section">
            <h2>12. Indemnification</h2>
            <p>You agree to defend, indemnify, and hold harmless LUXE Fragrances and its officers, directors, employees, and agents from and against any claims, damages, obligations, losses, liabilities, costs, or debt arising from:</p>
            <ul>
              <li>Your use of the Service</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party right</li>
              <li>Any claim that your content caused damage to a third party</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2>13. Governing Law and Dispute Resolution</h2>
            
            <h3>13.1 Governing Law</h3>
            <p>These Terms shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions.</p>

            <h3>13.2 Dispute Resolution</h3>
            <p>Any disputes arising from these Terms or your use of the Service shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.</p>

            <h3>13.3 Jurisdiction</h3>
            <p>You agree to submit to the personal jurisdiction of the courts located within New York County, New York, for any legal proceedings.</p>
          </div>

          <div className="terms-section">
            <h2>14. Changes to Terms</h2>
            <p>We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
          </div>

          <div className="terms-section">
            <h2>15. Contact Information</h2>
            <p>If you have any questions about these Terms of Service, please contact us:</p>
            
            <div className="contact-info">
              <div className="contact-item">
                <strong>Email:</strong>
                <a href="mailto:legal@luxefragrances.com">legal@luxefragrances.com</a>
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

          <div className="terms-section">
            <h2>16. Severability</h2>
            <p>If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.</p>
          </div>

          <div className="terms-section">
            <h2>17. Entire Agreement</h2>
            <p>These Terms constitute the entire agreement between you and LUXE Fragrances regarding the use of the Service, superseding any prior agreements between you and LUXE Fragrances relating to your use of the Service.</p>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  )
}

export default TermsOfService 