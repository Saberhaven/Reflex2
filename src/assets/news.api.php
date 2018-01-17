<?php
session_start();

	include "dbcon_dev.php";
	$stmt = $db->prepare("SELECT * FROM news ORDER BY createstamp DESC");
	$stmt->execute();
	$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

	echo json_encode($results);
 
?>

