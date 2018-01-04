<?php
print_r(strtolower(htmlentities($_SERVER['PHP_AUTH_USER']));

// function prt_auth_fail($user) {
//     if ($user = '') {
//         echo '<div id="loginboxes">Failed To Get User Name From Active Directory</div>';
//     } else {
//         echo '<div id="loginboxes">User ' . strtolower(htmlentities($_SERVER['PHP_AUTH_USER'])) . ': User not found. Access Denied</div>';
//     }
// }

// if(isset($_SERVER['PHP_AUTH_USER'])) {
//     include "dbcon.php";
//     $userQuery = mysqli_query($conn, "SELECT * FROM users WHERE userlnum='" . htmlentities($_SERVER['PHP_AUTH_USER']) . "'", MYSQLI_STORE_RESULT) or die(mysqli_error($conn));
    
//     $userRow = mysqli_fetch_assoc($userQuery);

//     $deptQuery = mysqli_query($conn, "SELECT deptid FROM department WHERE deptname='" . $userRow['department'] . "'", MYSQLI_STORE_RESULT) or die(mysqli_error($conn));
//     $deptRow = mysqli_fetch_assoc($deptQuery);

//     mysqli_query($conn, "UPDATE users SET lastaccess='" . date("y-m-d H:i:s"). "' WHERE userlnum='" . $userRow['userlnum'] . "'", MYSQLI_STORE_RESULT) or die(mysqli_error($conn));

//     include "dbclose.php";
//     if(mysqli_num_rows($userQuery) == 1) {
//         $_SESSION['uid'] = $userRow['userid'];
//         $_SESSION['lnum'] = $userRow['userlnum'];
//         $_SESSION['seclvl'] = $userRow['seclvl'];
//         $_SESSION['userdeptname'] = $userRow['department'];
//         $_SESSION['userdeptid'] = $deptRow['deptid'];
//         $firstName = explode(" ", $userRow['username']);
//         $_SESSION['fname'] = $firstName[0];
//         $_SESSION['email'] = $userRow['useremail'];
// 		$_SESSION['fullname'] = $userRow['username'];
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