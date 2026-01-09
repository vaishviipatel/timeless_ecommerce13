import './SaleBanner.css';
function SaleBanner() {
  return (
    <section className="sale-banner">
      <div className="sale-text">
        <span>LIMITED TIME OFFER</span>
        <h2>End of Year Sale</h2>
        <p>Up to 40% Off on Selected Watches. Don't miss out on our biggest sale of the year. Premium watches at unbeatable prices!</p>
        <button>Shop Now</button>
      </div>
      <div className="countdown">
        <div>2<br/>Days</div>
        <div>15<br/>Hours</div>
        <div>25<br/>Mins</div>
        <div>42<br/>Secs</div>
      </div>
      <div className="sale-img">
        <img src="https://lux-life.digital/wp-content/uploads/2021/06/Watch.jpg" alt="Sale Watch" /> 
      </div>
    </section>
  );
}

export default SaleBanner;