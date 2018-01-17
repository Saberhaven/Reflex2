<?php
session_start();
$post = json_decode(file_get_contents('php://input'), true);
	include "dbcon_dev.php";

	if ($post['action']=='pull') {
		$stmt = $db->prepare("SELECT * FROM article WHERE artid = '".$post['id']."' ");
		$stmt->execute();
		$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
	
		echo json_encode($results[0]);
	}


 
?>