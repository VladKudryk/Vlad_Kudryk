import StudentCard from './StudentCard';
import './StudentList.css';

function StudentList({ students, onDelete }) {
  if (students.length === 0) {
    return (
      <div className="empty-state">
        <p>Список студентів порожній.</p>
        <p>Додайте першого студента!</p>
      </div>
    );
  }

  return (
    <div className="student-list">
      {students.map(student => (
        <StudentCard key={student.id} student={student} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default StudentList;
