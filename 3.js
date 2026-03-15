let x = Number(prompt("Введіть x"));
let y = Number(prompt("Введіть y"));
let z = Number(prompt("Введіть z"));

console.log("Найбільше:", Math.max(x, y, z));
console.log("Найменше:", Math.min(x, y, z));

if (x % 2 === 0 || y % 2 === 0 || z % 2 === 0) {
    console.log("Є парне число");
}

let check = (x > y && y < z);
console.log(check);