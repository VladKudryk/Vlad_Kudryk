import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import './Home.css';

function Home() {
  const { students } = useAppContext();

  return (
    <div className="home-page">
      <div className="home-hero">
        <h1>Міні CRM для студентів</h1>
        <p>Простий застосунок для управління списком студентів. Додавайте, переглядайте та видаляйте записи.</p>
        <Link to="/students" className="hero-btn">Переглянути студентів →</Link>
      </div>

      <div className="metrics-row">
        <div className="metric-card">
          <span className="metric-value">{students.length}</span>
          <span className="metric-label">Студентів</span>
        </div>
        <div className="metric-card">
          <span className="metric-value">
            {[...new Set(students.map(s => s.group))].length}
          </span>
          <span className="metric-label">Груп</span>
        </div>
        <div className="metric-card">
          <span className="metric-value">5</span>
          <span className="metric-label">Сторінок</span>
        </div>
      </div>

      <div className="features-card">
        <h2>Можливості застосунку</h2>
        <ul>
          <li>📋 Перегляд списку студентів (GET-запит)</li>
          <li>➕ Додавання нового студента (POST-запит)</li>
          <li>🗑️ Видалення студента (DELETE-запит)</li>
          <li>🔍 Детальна сторінка кожного студента</li>
          <li>✅ Валідація форм</li>
          <li>⚡ Глобальний стан через useContext</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
