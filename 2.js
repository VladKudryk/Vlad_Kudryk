let n1 = Number(prompt("Введіть перше число"));
let n2 = Number(prompt("Введіть друге число"));
let n3 = Number(prompt("Введіть третє число"));

let average = (n1 + n2 + n3) / 3;
console.log("Середнє:", average);

console.log("Модуль:", Math.abs(n1));
console.log("Округлення вверх:", Math.ceil(n1));
console.log("Округлення вниз:", Math.floor(n1));
console.log("Степінь:", Math.pow(n1, 2));

console.log(n1 % 5 === 0);

if (n1 + n2 > n3 && n1 + n3 > n2 && n2 + n3 > n1) {
    console.log("Трикутник може існувати");
} else {
    console.log("Трикутник не може існувати");
}