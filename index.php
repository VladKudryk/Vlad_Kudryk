<?php

$password = "";
$errors = [];
$generated = "";

if (isset($_POST['generate'])) {
    $generated = bin2hex(random_bytes(4)) . "@A1";
}

if (isset($_POST['check'])) {

    $password = htmlspecialchars($_POST['password']);

    if (strlen($password) < 8) {
        $errors[] = "Мінімум 8 символів";
    }

    if (!preg_match('/[A-Z]/', $password)) {
        $errors[] = "Немає великої літери";
    }

    if (!preg_match('/[a-z]/', $password)) {
        $errors[] = "Немає малої літери";
    }

    if (!preg_match('/[0-9]/', $password)) {
        $errors[] = "Немає цифри";
    }

    if (!preg_match('/[\W_]/', $password)) {
        $errors[] = "Немає спецсимволу";
    }
}

?>

<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <title>Пароль</title>
</head>
<body>

<form method="POST">

    <input
        type="text"
        name="password"
        value="<?php echo $generated; ?>"
        placeholder="Введіть пароль"
    >

    <button type="submit" name="check">
        Перевірити
    </button>

    <button type="submit" name="generate">
        Згенерувати
    </button>

</form>

<?php

if (isset($_POST['check'])) {

    if (empty($errors)) {

        echo "Пароль безпечний";

    } else {

        echo "Пароль слабкий:<br>";

        foreach ($errors as $error) {
            echo "- " . $error . "<br>";
        }
    }
}

?>

<br>

Ваш IP:
<?php echo $_SERVER['REMOTE_ADDR']; ?>

</body>
</html>
