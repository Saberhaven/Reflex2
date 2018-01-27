<?php
session_start();
$post = json_decode(file_get_contents('php://input'), true);
	include "dbcon_dev.php";

	if ($post['action']=='getCategories') {
		$stmt = $db->prepare("SELECT * FROM categories");
		$stmt->execute();
		$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($results);
	} else if ($post['action']=='getTopics') {
		$stmt = $db->prepare("SELECT cat2, catid2 FROM categories WHERE cat1 = :cat1");
		$stmt->execute(array('cat1'=>$post['cat']));
		$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($results);
	}


 
?>