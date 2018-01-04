<?php
$dbhost = 'localhost';
$dbuser = 'lore';
$dbpass = 'lorelore';
$conn = mysqli_connect($dbhost, $dbuser, $dbpass) or die(mysqli_error($conn));
$dbname = 'reflex_kms_dev';
mysqli_select_db($conn, $dbname);

$db = new PDO('mysql:host=localhost;dbname=reflex_kms_dev;charset=utf8', 'lore', 'lorelore');
?>