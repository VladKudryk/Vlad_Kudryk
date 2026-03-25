const users = [
  { name: "NAZARIIIIIIIIIY", age: 67 },
  { name: "KARINA", age: 17 },
  { name: "VLAD", age: 19 }
];

const adults = users.filter(user => user.age >= 18);

const names = users.map(user => user.name);

const avgAge = users.reduce((sum, user) => sum + user.age, 0) / users.length;

console.log("Повнолітні:", adults);
console.log("Імена:", names);
console.log("Середній вік:", avgAge);