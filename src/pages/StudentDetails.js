import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { fetchStudentById, deleteStudent } from '../api';
import './StudentDetails.css';

function StudentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setStudents } = useAppContext();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    fetchStudentById(id)
      .then(data => { setStudent(data); setError(''); })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  function handleDelete() {
    if (!window.confirm('Видалити цього студента?')) return;
    deleteStudent(id).then(() => {
      setStudents(prev => prev.filter(s => s.id !== parseInt(id)));
      navigate('/students');
    });
  }

  const initials = student
    ? (student.firstName[0] + (student.lastName[0] || '')).toUpperCase()
    : '';

  return (
    <div className="details-page">
      <Link to="/students" className="back-link">← Назад до списку</Link>
      {loading && <div className="status-msg">⏳ Завантаження...</div>}
      {error && <div className="error-block">{error}</div>}
      {!loading && student && (
        <div className="details-card">
          <div className="details-hero">
            <div className="details-avatar">{initials}</div>
            <div>
              <h1>{student.firstName} {student.lastName}</h1>
              <p className="details-id">ID: {student.id}</p>
            </div>
          </div>
          <div className="details-table">
            <div className="detail-row"><span className="detail-label">Ім'я</span><span>{student.firstName}</span></div>
            <div className="detail-row"><span className="detail-label">Прізвище</span><span>{student.lastName}</span></div>
            <div className="detail-row"><span className="detail-label">Група</span><span className="badge-group">{student.group}</span></div>
            <div className="detail-row"><span className="detail-label">Вік</span><span>{student.age} р.</span></div>
          </div>
          <div className="details-actions">
            <button className="btn-delete" onClick={handleDelete}>🗑️ Видалити студента</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentDetails;
