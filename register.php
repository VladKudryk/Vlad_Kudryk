<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $_SESSION['name'] = $_POST['name'];
    $_SESSION['email'] = $_POST['email'];

    // cookie на 7 днів
    setcookie("email", $_POST['email'], time() + (7 * 24 * 60 * 60), "/");

    header("Location: index.php");
    exit();
}
?>

<form method="POST">
    <input type="text" name="name" placeholder="Ім'я"><br>
    <input type="email" name="email" placeholder="Email"><br>
    <input type="password" name="password" placeholder="Пароль"><br>
    <button type="submit">Зареєструватися</button>
</form>