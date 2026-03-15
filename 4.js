let name = prompt("Ваше ім'я");
let year = Number(prompt("Рік народження"));
let city = prompt("Місто");

let age = 2026 - year;

console.log("Ваш вік:", age);

if (age < 12) {
    console.log("Дитина");
} 
else if (age < 18) {
    console.log("Підліток");
} 
else if (age < 60) {
    console.log("Дорослий");
} 
else {
    console.log("Літня людина");
}

if (city === "Київ") {
    console.log("Ви живете у столиці");
} else {
    console.log("Ви живете не у столиці");
}