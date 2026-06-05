import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const location = useLocation();

  const links = [
    { to: '/', label: 'Головна' },
    { to: '/students', label: 'Студенти' },
    { to: '/students/add', label: '+ Додати' },
  ];

  return (
    <nav className="nav">
      {links.map(link => (
        <Link
          key={link.to}
          to={link.to}
          className={`nav-link ${location.pathname === link.to ? 'active' : ''}`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

export default Navigation;
