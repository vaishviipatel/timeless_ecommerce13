import './ProductCard.css';
function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image_url} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <div>★★★★★</div>
      <button>Add to Cart</button>
      <button>View</button>
    </div>
  );
}

export default ProductCard;