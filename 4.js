let a = Number(prompt("Введіть перше число:"));
let b = Number(prompt("Введіть друге число:"));
let operation = prompt("Введіть операцію (+, -, *, /):");

let result;

switch (operation) {
    case "+":
        result = a + b;
        break;
    case "-":
        result = a - b;
        break;
    case "*":
        result = a * b;
        break;
    case "/":
        if (b === 0) {
            alert("Ділення на нуль неможливе!");
            break;
        }
        result = a / b;
        break;
    default:
        alert("Невідома операція");
}

if (result !== undefined) {
    alert("Результат: " + result);
}