<?php

// 1. Змінні та вивід
$name = "NAZARIYBEEEEEST";
$age = 20;
$is_student = true;

echo "<h3>1. Інформація:</h3>";
echo "Мене звати $name, мені $age років. ";
echo $is_student ? "Я є студентом." : "Я не є студентом.";

echo "<hr>";


// 2. Масив і сума
$numbers = [1, 2, 3, 4, 5];
$sum = array_sum($numbers);

echo "<h3>2. Сума масиву:</h3>";
echo "Масив: " . implode(", ", $numbers) . "<br>";
echo "Сума: $sum";

echo "<hr>";


// 3. Асоціативний масив → HTML-список
$user = [
    "name" => "NAZARIYBEEEEEST",
    "email" => "nazariybeeeeest@example.com",
    "phone" => "+380123456789"
];

echo "<h3>3. Дані користувача:</h3><ul>";
foreach ($user as $key => $value) {
    echo "<li><strong>$key:</strong> $value</li>";
}
echo "</ul>";

echo "<hr>";


// 4. Перевірка віку
echo "<h3>4. Вік:</h3>";
echo ($age > 18) ? "Більше 18" : "18 або менше";

echo "<hr>";


// 5. Оцінка
$grade = 85;

echo "<h3>5. Оцінка:</h3>";

// Визначення рівня оцінки
if ($grade >= 90) {
    echo "Відмінно";
} elseif ($grade >= 70) {
    echo "Добре";
} elseif ($grade >= 50) {
    echo "Задовільно";
} else {
    echo "Незадовільно";
}

?>