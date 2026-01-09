import './Category.css';

function Category() {
  return (
    <section className="category-section">
      <h2>Shop by Category</h2>
      <div className="category-grid">
        <div className="category-card">
          <img src="https://images.unsplash.com/photo-1751437797070-54ac95740dac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBsdXh1cnklMjB3YXRjaHxlbnwxfHx8fDE3NjY2OTMwMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Men's Watches" />
          <div className="overlay-text">
            <h3>Men's Watches</h3>
            <p>Bold & Sophisticated</p>
            <button>Explore Collection</button>
          </div>
        </div>
        <div className="category-card">
          <img src="https://images.unsplash.com/photo-1604242692760-2f7b0c26856d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGx1eHVyeSUyMHdhdGNofGVufDF8fHx8MTc2Njc1MzE4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Women's Watches" />
          <div className="overlay-text">
            <h3>Women's Watches</h3>
            <p>Elegant & Refined</p>
            <button>Explore Collection</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Category;