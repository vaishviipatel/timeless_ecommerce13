import './Testimonials.css';
function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <p>Join thousands of satisfied customers worldwide</p>
      <div className="test-grid">
        <div className="test-card">
          <div>★★★★★</div>
          <p>Absolutely stunning timepiece. The quality exceeded my expectations. The customer service was exceptional and the watch is perfect for anyone looking for luxury.</p>
          <p>James Mitchell, New York, USA</p>
        </div>
        <div className="test-card">
          <div>★★★★★</div>
          <p>I purchased a watch for my husband's birthday and he absolutely loves it! The craftsmanship is top-notch, making his special day even more memorable.</p>
          <p>Sophia Anderson, London, UK</p>
        </div>
        <div className="test-card">
          <div>★★★★★</div>
          <p>Best shopping experience ever! The authenticity guarantee gave me peace of mind. The watch arrived beautifully packaged. Will definitely shop here again.</p>
          <p>David Chen, Singapore</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;