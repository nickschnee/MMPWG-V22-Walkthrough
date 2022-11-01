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


// Authorisierung Server Variablen
// Authorisierung Server Variablen
// Authorisierung Server Variablen
// Authorisierung Server Variablen

$userid = $_SERVER["PHP_AUTH_USER"];
$token = $_SERVER["PHP_AUTH_PW"];

// dieses Zeichen nicht kopieren

?>

 <!-- .htaccess -->
 <!-- .htaccess -->
 <!-- .htaccess -->
 <!-- .htaccess -->

<IfModule mod_headers.c>
    Header set Access-Control-Allow-Origin "*"
    RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]
</IfModule>

<?php 

// Update
// Update
// Update
// Update

$sql = "UPDATE session SET timestamp = now() WHERE ID=?";
$stmt = $pdo->prepare($sql);
$stmt->execute([$ID]);

// Delete
// Delete
// Delete
// Delete

$sql = "
DELETE 
FROM session
WHERE timestamp < (NOW() - INTERVAL 2 HOUR);";

$stmt = $pdo->prepare($sql);
$stmt->execute();


/// SQL holeAlleWGs
/// SQL holeAlleWGs
/// SQL holeAlleWGs
/// SQL holeAlleWGs

$sql = "

SELECT WG.ID, WG.titel, WG.bild, WG.adresse, ST.stadt, WG.beschreibung, U.name, U.email, WG.status, WG.timestamp
FROM wg WG
INNER JOIN user U
ON WG.user = U.ID
INNER JOIN stadt ST
ON WG.stadt = ST.ID
ORDER BY WG.timestamp DESC;

";

// SQL holeHastags
// SQL holeHastags
// SQL holeHastags
// SQL holeHastags

$sql = "

SELECT h.ID, h.hashtag FROM hashtag h 
INNER JOIN wg_hat_hashtag junc ON h.ID = junc.hashtag_id
WHERE junc.wg_id = '$wgID';

";