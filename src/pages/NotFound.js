import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-code">404</div>
      <h1>Сторінку не знайдено</h1>
      <p>Такої сторінки не існує або вона була видалена.</p>
      <Link to="/" className="home-link">На головну →</Link>
    </div>
  );
}

export default NotFound;
