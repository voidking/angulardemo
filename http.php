<?php 
	$username = $_POST['username'];
	$result = array(
		'code' => '0',
		'ext' => 'success',
		'username' => $username
	);
	echo json_encode($result);
?>