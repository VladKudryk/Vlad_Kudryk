let n = Number(prompt("Введіть число для факторіалу:"));

let result = 1;
let i = 1;

while (i <= n) {
    result *= i;
    i++;
}

console.log("Факторіал:", result);