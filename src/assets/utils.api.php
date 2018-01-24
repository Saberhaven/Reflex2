<?php
session_start();
$post = json_decode(file_get_contents('php://input'), true);
	include "dbcon_dev.php";

	if ($post['action']=='getCategories') {
		$stmt = $db->prepare("SELECT * FROM categories");
		$stmt->execute();
		$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
	
		echo json_encode($results);
	}


 
?>