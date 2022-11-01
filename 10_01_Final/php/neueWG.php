<?php

require('config.php');
require('autorisieren.php');

// userid muss auch noch übermittelt werden!

$user =  $_POST["user"];

$titel = $_POST["titel"];
$adresse = $_POST["adresse"];
$bild = $_POST["bild"];
$beschreibung = $_POST["beschreibung"];
$stadt = $_POST["stadt"];
$status = $_POST["status"];

$hashtags = json_decode($_POST['hashtags']);

$sql = "INSERT INTO wg (titel, bild, adresse, stadt, beschreibung, user, status) VALUES (:Titel, :Bild, :Adresse, :Stadt, :Beschreibung, :User, :Status)";

$stmt = $pdo->prepare($sql);

$erfolg = $stmt->execute(array('Titel' => $titel, 'Bild' => $bild, 'Adresse' => $adresse, 'Stadt' => $stadt, 'Beschreibung' => $beschreibung, 'User' => $user, 'Status' => $status));

if ($erfolg) {

    // print_r('WG erfolgreich erstellt!');

    $letzteID = $pdo->lastInsertId();

    insertHashtags($hashtags, $letzteID);

} else {

    print_r($erfolg);
};

function insertHashtags($hashtags, $letzteID)
{

    require('config.php');

    // und wenn überhaupt Hashtags angeklickt wurden
    if (sizeof($hashtags) > 0) {

        $sql = "INSERT INTO wg_hat_hashtag (wg_id, hashtag_id) VALUES (:wg_id, :hashtag_id)";

        $stmt = $pdo->prepare($sql);

        foreach ($hashtags as $hashtag) {

            $erfolg = $stmt->execute(array('wg_id' => $letzteID, 'hashtag_id' => $hashtag));
        }

        if ($erfolg) {

            print_r("Dein Inserat wurde mit Hashtags erstellt.");

        } else {

            // gib die Fehlermeldung aus
            print_r($erfolg);
        }
    } else {

        print_r("Dein Inserat wurde ohne Hashtags erstellt.");
    }
}