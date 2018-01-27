<?php
session_start();
// print_r(strtolower(htmlentities($_SERVER['PHP_AUTH_USER']));

// function prt_auth_fail($user) {
//     if ($user = '') {
//         echo '<div id="loginboxes">Failed To Get User Name From Active Directory</div>';
//     } else {
//         echo '<div id="loginboxes">User ' . strtolower(htmlentities($_SERVER['PHP_AUTH_USER'])) . ': User not found. Access Denied</div>';
//     }
// }

// if(isset($_SERVER['PHP_AUTH_USER'])) {
	include "dbcon_dev.php";
	$stmt = $db->prepare("SELECT * FROM users WHERE userlnum =:user");
	$stmt->execute(array('user'=>'l7d23b'));
	$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
	// $userQuery = mysqli_query($conn, "SELECT * FROM users WHERE userlnum='" . htmlentities($_SERVER['PHP_AUTH_USER']) . "'", MYSQLI_STORE_RESULT) or die(mysqli_error($conn));
	
	// $userRow = mysqli_fetch_assoc($userQuery);

	// $deptQuery = mysqli_query($conn, "SELECT deptid FROM department WHERE deptname='" . $userRow['department'] . "'", MYSQLI_STORE_RESULT) or die(mysqli_error($conn));
	// $deptRow = mysqli_fetch_assoc($deptQuery);

	// mysqli_query($conn, "UPDATE users SET lastaccess='" . date("y-m-d H:i:s"). "' WHERE userlnum='" . $userRow['userlnum'] . "'", MYSQLI_STORE_RESULT) or die(mysqli_error($conn));

	//  include "dbclose.php";
	foreach($results as $r) {
		$_SESSION['uid'] = $r['userid'];
		$_SESSION['lnum'] = $r['userlnum'];
		$_SESSION['seclvl'] = $r['seclvl'];
		// $_SESSION['userdeptname'] = $r['department'];
		// $_SESSION['userdeptid'] = $r['deptid'];
		$firstName = explode(" ", $r['username']);
		$_SESSION['fname'] = $firstName[0];
		$_SESSION['email'] = $r['useremail'];
	 	$_SESSION['fullname'] = $r['username'];
	}

	echo json_encode($_SESSION);
   //  if(mysqli_num_rows($userQuery) == 1) {
       
//         if (isset($userRow['initials'])) {
//             $_SESSION['ini'] = $userRow['initials'];
//         }
//         printf("<script>location.href='index.php?pagereq=home'</script>");
//     } else {
//         prt_auth_fail($_SERVER['PHP_AUTH_USER']);
//     }
// } else {
//     prt_auth_fail('');
// }
?>