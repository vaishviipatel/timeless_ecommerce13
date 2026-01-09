import './Newsletter.css';
function Newsletter() {
  return (
    <section className="newsletter">
      <h2>Subscribe to Our Newsletter</h2>
      <p>Be the first to know about new arrivals, exclusive offers, special promotions.</p>
      <input type="email" placeholder="Enter your email" />
      <button>Subscribe Now</button>
      <p>We respect your privacy. Unsubscribe anytime.</p>
    </section>
  );
}

export default Newsletter;