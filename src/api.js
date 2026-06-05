const KEY = 'crm_students';

function getAll() {
  const data = localStorage.getItem(KEY);
  if (!data) {
    const initial = [
      { id: 1, firstName: 'Владислав', lastName: 'Кудрик', group: 'ІТ-22', age: 17 },
      { id: 2, firstName: 'Назарііііііій', lastName: 'Міщук', group: 'ІТ-22', age: 17 },
      { id: 3, firstName: 'Каріна', lastName: 'Пікуль', group: 'ІТ-22', age: 17 },
    ];
    localStorage.setItem(KEY, JSON.stringify(initial));
    return initial;
  }
  return JSON.parse(data);
}

function saveAll(students) {
  localStorage.setItem(KEY, JSON.stringify(students));
}

export function fetchStudents() {
  return new Promise(resolve => setTimeout(() => resolve(getAll()), 150));
}

export function fetchStudentById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const student = getAll().find(s => s.id === parseInt(id));
      student ? resolve(student) : reject(new Error('Студента не знайдено'));
    }, 150);
  });
}

export function createStudent(data) {
  return new Promise(resolve => {
    setTimeout(() => {
      const all = getAll();
      const newStudent = { ...data, id: Math.max(0, ...all.map(s => s.id)) + 1 };
      saveAll([...all, newStudent]);
      resolve(newStudent);
    }, 150);
  });
}

export function deleteStudent(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      saveAll(getAll().filter(s => s.id !== parseInt(id)));
      resolve();
    }, 150);
  });
}
