import './Footer.css';
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>Timeless</h3>
        <p>Your premier destination for luxury timepieces. Quality, authenticity, and excellence since 1998.</p>
      </div>
      <div className="footer-column">
        <h3>Quick Links</h3>
        <ul>
          <li>About Us</li>
          <li>Men's Collection</li>
          <li>Women's Collection</li>
          <li>Best Sellers</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Customer Service</h3>
        <ul>
          <li>Shipping Information</li>
          <li>Return Policy</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Contact Information</h3>
        <p>123 Luxury Avenue, New York, NY 10001</p>
        <p>+1 (123) 456-7890</p>
        <p>info@timeless.com</p>
      </div>
      <p>© 2025 Timeless. All rights reserved. | Privacy Policy | Terms of Service</p>
    </footer>
  );
}

export default Footer;