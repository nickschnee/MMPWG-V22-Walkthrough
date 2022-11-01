<?php

require_once('config.php');
require_once('autorisieren.php');

$userID = $_POST["userID"];
$wgID = $_POST["wgID"];

$sql = "DELETE FROM wg WHERE user = ? AND ID = ?";
$stmt = $pdo->prepare($sql);

$erfolg = $stmt->execute([$userID, $wgID]);

if ($erfolg) {

    print_r('WG erfolgreich gelöscht.');

} else {

    print_r($erfolg);
};