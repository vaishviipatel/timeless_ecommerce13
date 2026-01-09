import { Link } from 'react-router-dom';
import './Header.css';
import { FiSearch, FiUser } from 'react-icons/fi';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">TIMELESS</Link>
      </div>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/men">Men Watches</Link>
        <Link to="/women">Women Watches</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>

      <div className="right-section">
        <div className="search-container">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search watches..."
            className="search-input"
          />
        </div>

        <button className="login-btn">
          <FiUser className="user-icon" />
          Login
        </button>
      </div>
    </header>
  );
}

export default Header;