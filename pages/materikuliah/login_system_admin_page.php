<?php

@include 'login_system_config.php';

session_start();

if(!isset($_SESSION['admin_name'])){
   header('location:admin_page.html');
}

?>

