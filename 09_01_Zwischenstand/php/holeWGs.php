<?php

require("config.php");
require("autorisieren.php");

$sql = "

SELECT WG.ID, WG.titel, WG.bild, WG.adresse, ST.stadt, WG.beschreibung, U.name, U.email, WG.status, WG.timestamp
FROM wg WG
INNER JOIN user U
ON WG.user = U.ID
INNER JOIN stadt ST
ON WG.stadt = ST.ID
ORDER BY WG.timestamp DESC;

";

$stmt = $pdo->prepare($sql);

$erfolg = $stmt->execute();

if ($erfolg) {

    $array = $stmt->fetchAll();

    $jsonArray = json_encode($array);

    print_r($jsonArray);
}