<?php
session_start();

if ($_POST["username"] === "admin" && $_POST["password"] === "admin") {
    $_SESSION["connected"] = true;
    header("Location: /index.php");
} else {
    header("Location: /login.php");
}