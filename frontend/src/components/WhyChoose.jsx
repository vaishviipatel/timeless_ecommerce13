import './WhyChoose.css';

function WhyChoose() {
  return (
    <section className="why-choose section">
      <h2>Why Choose Timeless</h2>
      <p>Experience excellence in every aspect of your purchase</p>
      <div className="why-grid">
        <div className="why-item">
         <img src="https://pngate.com/wp-content/uploads/2025/05/orange-shield-with-white-checkmark-icon-vector-illustration-1.png" alt="Quality" /> {/* Premium Quality */}
          <h3>Premium Quality</h3>
          <p>Only authentic watches with guarantee</p>
        </div>
        <div className="why-item">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/069/030/162/small_2x/fast-and-reliable-orange-delivery-truck-icon-efficient-cargo-transportation-graphic-design-for-logistics-and-shipping-businesses-free-vector.jpg" alt="Delivery" /> {/* Free Delivery */}
          <p>Fast and secure shipping to all orders worldwide</p>
        </div>
        <div className="why-item">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/047/176/701/small/a-set-of-10-security-icons-as-payment-lock-profile-id-card-vector.jpg" alt="Payments" /> {/* Secure Payments */}
          <h3>Secure Payments</h3>
          <p>100% secure payments with encryption technology</p>
        </div>
        <div className="why-item">
          <img src="https://static.vecteezy.com/system/resources/previews/032/728/961/non_2x/easy-return-icon-vector.jpg" alt="Returns" /> {/* Easy Returns */}
          <h3>Easy Returns</h3>
          <p>30-day hassle free returns for your peace of mind</p>
        </div>
        <div className="why-item">
          <img src="https://pngate.com/wp-content/uploads/2025/05/orange-shield-with-white-checkmark-icon-vector-illustration-1.png" alt="Warranty" /> {/* Warranty Support - reuse shield */}
          <h3>Warranty Support</h3>
          <p>Extended warranty support on all premium timepieces</p>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;