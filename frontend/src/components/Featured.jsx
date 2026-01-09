import './Featured.css';

const featuredProducts = [
  {
    id: 1,
    name: 'Classic Elegance',
    category: "Men's Collection",
    price: 1299,
    rating: 5.0,
    image: 'https://cdn.shopify.com/s/files/1/0278/9723/3501/files/Bulova-Frank-Sinatra-MyWay-Goldtone-2.jpg?v=1701122599'
  },
  {
    id: 2,
    name: 'Sport Chronograph',
    category: "Men's Collection",
    price: 1599,
    rating: 5.0,
    image: 'https://momentumwatch.com/cdn/shop/files/Square-2-Chrono-Black03_copy.jpg?v=1761954071&width=4928'
  },
  {
    id: 3,
    name: 'Minimal Elegance',
    category: "Women's Collection",
    price: 999,
    rating: 4.0,
    image: 'https://publish.purewow.net/wp-content/uploads/sites/2/2023/07/The-Best-Minimalist-Watches-for-Women-A-model-wearing-a-gold-square-watch-BREDA.jpg?fit=1360%2C800'
  },
  {
    id: 4,
    name: 'Luxury Timepiece',
    category: "Men's Collection",
    price: 2499,
    rating: 5.0,
    image: 'https://cdn.shopify.com/s/files/1/0278/9723/3501/files/JLC-Reverso-Tribute-Burgundy-2.jpg?v=1688585254'
  }
];

function Featured() {
  return (
    <section className="featured-section">
      <h2>Featured Collection</h2>
      <p className="subtitle">Handpicked bestsellers loved by our customers</p>
      

      <div className="featured-grid">
        {featuredProducts.map(product => (
          <div key={product.id} className="product-card">
            <div className="image-wrapper">
              <img src={product.image} alt={product.name} />
              <span className="best-seller-badge">Best Seller</span>
            </div>

            <div className="card-content">
              <p className="category">{product.category}</p>
              <h3 className="product-name">{product.name}</h3>

              <div className="rating">
                <span className="stars">
                  {'★'.repeat(Math.floor(product.rating))}
                  {'☆'.repeat(5 - Math.floor(product.rating))}
                </span>
                <span className="rating-text"> ({product.rating.toFixed(1)})</span>
              </div>

              <p className="price">${product.price}</p>

              <div className="buttons">
                <button className="add-to-cart">
                  🛒 Add to Cart
                </button>
                <button className="view-btn">View</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Featured;