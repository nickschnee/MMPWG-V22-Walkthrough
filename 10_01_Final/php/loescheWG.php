<?php

require_once('config.php');
require_once('autorisieren.php');

$userID = $_POST["userID"];
$wgID = $_POST["wgID"];

$sql = "DELETE FROM wg WHERE user = ? AND ID = ?";
$stmt = $pdo->prepare($sql);

$erfolg = $stmt->execute([$userID, $wgID]);

if ($erfolg) {

    loescheHashtags($wgID);

} else {

    print_r($erfolg);
};

function loescheHashtags($wgID){

    require('config.php');

    // lösche die alten hashtags
    $sql = "DELETE FROM wg_hat_hashtag WHERE wg_id = ?";
    $stmt = $pdo->prepare($sql);

    $erfolg = $stmt->execute([$wgID]);

    if ($erfolg){

        echo "WG und Hashtags wurden gelöscht!";

    } else {

        $erfolg;

    }

}