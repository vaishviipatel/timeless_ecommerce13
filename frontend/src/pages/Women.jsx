import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

function Women() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products?category=women')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="featured-section">
      <h2>Women's Watches</h2>
      <div className="featured-grid">
        {products.map(product => <ProductCard key={product.id} product={product} />)}
      </div>
    </section>
  );
}

export default Women;