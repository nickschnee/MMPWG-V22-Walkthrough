<?php

require('config.php');

$email = $_POST["email"];
$password = $_POST["password"];

$sql = "SELECT * FROM user WHERE email = '$email'";

$stmt = $pdo->prepare($sql);

$erfolg = $stmt->execute();

if ($erfolg) {

    $array = $stmt->fetchAll();

    $anzahlResultate = count($array);

    if ($anzahlResultate == 1){

        $dbPassword = $array[0]['password'];

        pruefepassword($password, $dbPassword);

    } else {

        echo "Dieser E-Mail existiert nicht.";

    }

}

function pruefepassword($userPassword, $dbPassword){

    if (password_verify($userPassword, $dbPassword)) {

        echo 'E-Mail und Passwort korrekt!';

    } else {

        echo 'Ungültiges Passwort!';

    }

}