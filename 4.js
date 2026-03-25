const students = {
  NAZARIIIIIYBEEEEEEEST: { math: 67, physics: 52, english: 77 },
  VLAD: { math: 70, physics: 75, english: 80 }
};

for (let name in students) {
  const grades = Object.values(students[name]);
  const avg = grades.reduce((sum, g) => sum + g, 0) / grades.length;

  console.log(`${name}: середній бал = ${avg}`);
}