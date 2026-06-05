import { useNavigate, Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { createStudent } from '../api';
import StudentForm from '../components/StudentForm';
import './AddStudent.css';

function AddStudent() {
  const { setStudents } = useAppContext();
  const navigate = useNavigate();

  async function handleSubmit(formData) {
    const newStudent = await createStudent(formData);
    setStudents(prev => [...prev, newStudent]);
    navigate('/students');
  }

  return (
    <div className="add-student-page">
      <div className="page-header">
        <Link to="/students" className="back-link">← Назад до списку</Link>
        <h1>Додати студента</h1>
      </div>
      <div className="form-card">
        <StudentForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default AddStudent;
