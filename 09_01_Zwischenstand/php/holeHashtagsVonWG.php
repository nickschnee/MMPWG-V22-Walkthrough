<?php

require("config.php");
require("autorisieren.php");

$wgID = $_POST["wgID"];

$sql = "

SELECT h.ID, h.hashtag FROM hashtag h 
INNER JOIN wg_hat_hashtag junc ON h.ID = junc.hashtag_id
WHERE junc.wg_id = '$wgID';

";

$stmt = $pdo->prepare($sql);

$erfolg = $stmt->execute();

if ($erfolg) {

    $array = $stmt->fetchAll();

    $jsonArray = json_encode($array);

    print_r($jsonArray);
}