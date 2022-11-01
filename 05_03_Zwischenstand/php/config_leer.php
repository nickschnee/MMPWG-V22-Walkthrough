<?php

$host = "localhost";
$user = "benutzername";
$password = "passwort";
$dbname = "datenbank-name";

$pdo = new PDO('mysql:host='. $host . '; dbname=' . $dbname . ';charset=utf8', $user, $password);
$pdo->exec("set names utf8");