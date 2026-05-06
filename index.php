<?php
session_start();

// перевірка сесії
if (isset($_SESSION['name']) && isset($_SESSION['email'])) {
    require "profile.php";
} else {
    require "register.php";
}