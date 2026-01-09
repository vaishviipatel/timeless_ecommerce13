import './Contact.css';
function Contact() {
  return (
    <section className="contact">
      <h2>Get In Touch</h2>
      <p>We're here to help and answer any questions you might have.</p>
      <div className="contact-grid">
        <div className="contact-item">
          <img src="https://www.shutterstock.com/image-vector/blue-location-3d-icon-gps-260nw-2413740623.jpg" alt="Location" />
          <h3>Visit Us</h3>
          <p>123 Luxury Avenue<br/>New York, NY 10001<br/>United States</p>
        </div>
        <div className="contact-item">
          <img src="https://t3.ftcdn.net/jpg/15/67/99/38/360_F_1567993855_UOf4ZsdrIlPsRrQet3rgSlyfoJcsDXVt.jpg" alt="Call" />
          <h3>Call Us</h3>
          <p>+1 (123) 456-7890<br/>Mon-Fri: 9AM - 6PM EST</p>
        </div>
        <div className="contact-item">
          <img src="https://static.vecteezy.com/system/resources/previews/059/489/287/non_2x/minimalist-dark-blue-envelope-icon-flat-design-for-email-and-messaging-communication-vector.jpg" alt="Email" />
          <h3>Email Us</h3>
          <p>info@timeless.com<br/>We reply within 24 hours</p>
        </div>
      </div>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button>Send Message</button>
      </form>
    </section>
  );
}

export default Contact;