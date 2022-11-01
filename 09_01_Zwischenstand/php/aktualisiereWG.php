<?php

require_once('config.php');
require_once('autorisieren.php');

$userID = $_POST["userID"];
$titel = $_POST["titel"];
$adresse = $_POST["adresse"];
$beschreibung = $_POST["beschreibung"];
$stadt = $_POST["stadt"];
$status = $_POST["status"];

$bild = $_POST["bild"];

$wgID = $_POST["wgID"];

// $hashtags = json_decode($_POST['hashtags']);

$sql = "UPDATE wg SET titel=?, bild=?, adresse=?, stadt=?, beschreibung=?, status=? WHERE user=?";
$stmt = $pdo->prepare($sql);

$erfolg = $stmt->execute([$titel, $bild, $adresse, $stadt, $beschreibung, $status, $userID]);

// falls erfolg true bzw. 1 ist
if ($erfolg) {

    print_r("WG wurde erfolgreich aktualisiert.");

} else {

    print_r($erfolg);

};