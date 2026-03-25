const numbers = [3, 33, 333, 3333, 777];

const sum = numbers.reduce((acc, num) => acc + num, 0);
const average = sum / numbers.length;

const min = Math.min(...numbers);
const max = Math.max(...numbers);

const sorted = [...numbers].sort((a, b) => a - b);

console.log("Масив:", numbers);
console.log("Середнє:", average);
console.log("Мінімум:", min);
console.log("Максимум:", max);
console.log("Відсортований:", sorted);