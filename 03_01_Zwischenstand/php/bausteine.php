<?php

// config.php
// config.php
// config.php
// config.php

$host = "localhost";
$user = "benutzername";
$password = "passwort";
$dbname = "datenbank-name";

$pdo = new PDO('mysql:host='. $host . '; dbname=' . $dbname . ';charset=utf8', $user, $password);
$pdo->exec("set names utf8");



// SELECT
// SELECT
// SELECT
// SELECT

$sql = "SELECT * FROM user";

$stmt = $pdo->prepare($sql);

$erfolg = $stmt->execute();

if ($erfolg) {

    $array = $stmt->fetchAll();

    $jsonArray = json_encode($array);

    print_r($jsonArray);
}

// INSERT
// INSERT
// INSERT
// INSERT

$email = $_POST["email"];
$username = $_POST["username"];
$password = $_POST["password"];

$sql = "INSERT INTO user (name, email, password) VALUES (:Name, :Email, :Password)";

$stmt = $pdo->prepare($sql);

$erfolg = $stmt->execute(array('Name' => $username, 'Email' => $email, 'Password' => $password));

if ($erfolg) {

    print_r('Registrierung erfolgreich.');
} else {

    print_r($erfolg);
};

// Password Verify
// Password Verify
// Password Verify
// Password Verify
//https://www.php.net/manual/en/function.password-verify.php

if (password_verify('rasmuslerdorf', $hash)) {
    echo 'Password is valid!';
} else {
    echo 'Invalid password.';
}

// Generiere einen zufälligen String
// Generiere einen zufälligen String
// Generiere einen zufälligen String
// Generiere einen zufälligen String
// https://stackoverflow.com/questions/4356289/php-random-string-generator

function generateRandomString($length)
{
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}