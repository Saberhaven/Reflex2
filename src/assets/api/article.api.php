<?php
session_start();
$post = json_decode(file_get_contents('php://input'), true);
	include "dbcon_dev.php";

	if ($post['action']=='pull') {
		$stmt = $db->prepare("SELECT * FROM article WHERE artid = '".$post['id']."' ");
		$stmt->execute();
		$article = $stmt->fetchAll(PDO::FETCH_ASSOC);
		$stmt = $db->prepare("SELECT * FROM categories WHERE fullcatid = '".$article[0]['chainid']."' ");
		$stmt->execute();
		$cat = $stmt->fetchAll(PDO::FETCH_ASSOC);
		$result = array_merge($article[0], $cat[0]);
		echo json_encode($result);
	}


 
?>