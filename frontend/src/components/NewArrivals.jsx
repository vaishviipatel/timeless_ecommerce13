import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import './NewArrivals.css';

function NewArrivals() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products?new=true')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="new-arrivals section">
      <h2>New Arrivals</h2>
      <p>Explore our latest collection of premium timepieces</p>
      <div className="new-grid">
        {products.map(product => <ProductCard key={product.id} product={product} />)}
      </div>
    </section>
  );
}

export default NewArrivals;