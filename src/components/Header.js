import Navigation from './Navigation';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">
          <span className="logo-icon">🎓</span>
          <span className="logo-text">StudentCRM</span>
        </div>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
