import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-logo">
          🧭 WanderList
        </Link>
        <nav className="header-nav">
          <Link to="/" className="header-link">
            Home
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;