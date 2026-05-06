<?php
// перевірка наявності сесії
if (!isset($_SESSION['name']) || !isset($_SESSION['email'])) {
    header("Location: index.php");
    exit();
}
?>

<p>Ім'я: <?php echo $_SESSION['name']; ?></p>
<p>Email: <?php echo $_SESSION['email']; ?></p>

<p>Ваш email запам'ятали:
<?php echo isset($_COOKIE['email']) ? $_COOKIE['email'] : "немає"; ?>
</p>

<a href="logout.php">Вийти</a>
<br><br>

<form action="clear_cookie.php" method="post">
    <button type="submit">Очистити cookie</button>
</form>