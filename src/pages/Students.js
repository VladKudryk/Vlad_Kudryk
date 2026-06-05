import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { fetchStudents, deleteStudent } from '../api';
import StudentList from '../components/StudentList';
import './Students.css';

function Students() {
  const { students, setStudents } = useAppContext();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    fetchStudents()
      .then(data => { setStudents(data); setError(''); })
      .catch(() => setError('Не вдалося завантажити дані.'))
      .finally(() => setLoading(false));
  }, [setStudents]);

  function handleDelete(id) {
    if (!window.confirm('Видалити студента?')) return;
    deleteStudent(id).then(() => {
      setStudents(prev => prev.filter(s => s.id !== id));
    });
  }

  return (
    <div className="students-page">
      <div className="students-header">
        <h1>Список студентів</h1>
        <Link to="/students/add" className="add-btn">+ Додати студента</Link>
      </div>
      {loading && <div className="status-msg">⏳ Завантаження...</div>}
      {error && <div className="error-block">{error}</div>}
      {!loading && !error && <StudentList students={students} onDelete={handleDelete} />}
    </div>
  );
}

export default Students;
