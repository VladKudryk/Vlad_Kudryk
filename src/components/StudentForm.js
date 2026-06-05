import { useState } from 'react';
import './StudentForm.css';

const initialState = {
  firstName: '',
  lastName: '',
  group: '',
  age: '',
};

function StudentForm({ onSubmit }) {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  function validate() {
    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = "Введіть ім'я";
    if (!form.lastName.trim()) newErrors.lastName = 'Введіть прізвище';
    if (!form.group.trim()) newErrors.group = 'Введіть групу';
    const age = parseInt(form.age);
    if (!form.age || isNaN(age) || age < 14 || age > 60) {
      newErrors.age = 'Вік повинен бути від 14 до 60';
    }
    return newErrors;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    try {
      await onSubmit({ ...form, age: parseInt(form.age) });
      setForm(initialState);
      setErrors({});
    } finally {
      setLoading(false);
    }
  }

  function handleClear() {
    setForm(initialState);
    setErrors({});
  }

  return (
    <form className="student-form" onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <label htmlFor="firstName">Ім'я</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="Наприклад: Владислав"
          value={form.firstName}
          onChange={handleChange}
          className={errors.firstName ? 'input-error' : ''}
        />
        {errors.firstName && <span className="error-msg">{errors.firstName}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="lastName">Прізвище</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Наприклад: Кудрик"
          value={form.lastName}
          onChange={handleChange}
          className={errors.lastName ? 'input-error' : ''}
        />
        {errors.lastName && <span className="error-msg">{errors.lastName}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="group">Група</label>
        <input
          id="group"
          name="group"
          type="text"
          placeholder="Наприклад: ІТ-22"
          value={form.group}
          onChange={handleChange}
          className={errors.group ? 'input-error' : ''}
        />
        {errors.group && <span className="error-msg">{errors.group}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="age">Вік</label>
        <input
          id="age"
          name="age"
          type="number"
          placeholder="Наприклад: 17"
          min="14"
          max="60"
          value={form.age}
          onChange={handleChange}
          className={errors.age ? 'input-error' : ''}
        />
        {errors.age && <span className="error-msg">{errors.age}</span>}
      </div>

      <div className="form-actions">
        <button type="submit" className="btn-primary" disabled={loading}>
          {loading ? 'Збереження...' : '✓ Зберегти студента'}
        </button>
        <button type="button" className="btn-secondary" onClick={handleClear}>
          Очистити
        </button>
      </div>
    </form>
  );
}

export default StudentForm;
