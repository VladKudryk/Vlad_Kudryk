let age = Number(prompt("Введіть ваш вік:"));

if (age < 18) {
    alert("Вам заборонено вхід");
} else if (age <= 65) {
    alert("Ласкаво просимо!");
} else {
    alert("Будь ласка, будьте обережні!");
}