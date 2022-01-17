import React from 'react'

const Footer: React.FC = () => (
  <div className="footer">
    <h3 className="custom-heading">Quick Links</h3>
    <div className="content quicklinks">
      <a href="/services">Services</a>
      <a href="/solutions">Solutions</a>
      <a href="/products">Products</a>
      <a href="/contact-us">Contact</a>
      <a href="/about-us">About Us</a>
      <a href="/blog/">Blog</a>
    </div>
    <div className="bottom">
      <p>
        4GL Ltd, 29 Oldfield Rd, Windermere, Cumbria, LA23 2AZ. Company
        Registration No. 08777171
      </p>
    </div>
  </div>
)

export default Footer
