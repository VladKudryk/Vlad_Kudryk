import { Link } from 'react-router-dom';
import './StudentCard.css';

function StudentCard({ student, onDelete }) {
  const initials = (student.firstName[0] + (student.lastName[0] || '')).toUpperCase();

  return (
    <div className="student-card">
      <div className="student-avatar">{initials}</div>
      <div className="student-info">
        <p className="student-name">{student.firstName} {student.lastName}</p>
        <p className="student-meta">
          <span className="badge">{student.group}</span>
          <span>Вік: {student.age} р.</span>
        </p>
      </div>
      <div className="student-actions">
        <Link to={`/students/${student.id}`} className="btn btn-outline">
          Детальніше
        </Link>
        <button
          className="btn btn-danger"
          onClick={() => onDelete(student.id)}
        >
          Видалити
        </button>
      </div>
    </div>
  );
}

export default StudentCard;
