<?php

require('config.php');

// userid muss auch noch übermittelt werden!

$user =  $_POST["user"];

$titel = $_POST["titel"];
$adresse = $_POST["adresse"];
$bild = $_POST["bild"];
$beschreibung = $_POST["beschreibung"];
$stadt = $_POST["stadt"];
$status = $_POST["status"];

$sql = "INSERT INTO wg (titel, bild, adresse, stadt, beschreibung, user, status) VALUES (:Titel, :Bild, :Adresse, :Stadt, :Beschreibung, :User, :Status)";

$stmt = $pdo->prepare($sql);

$erfolg = $stmt->execute(array('Titel' => $titel, 'Bild' => $bild, 'Adresse' => $adresse, 'Stadt' => $stadt, 'Beschreibung' => $beschreibung, 'User' => $user, 'Status' => $status));

if ($erfolg) {

    print_r('WG erfolgreich erstellt!');

} else {

    print_r($erfolg);
};