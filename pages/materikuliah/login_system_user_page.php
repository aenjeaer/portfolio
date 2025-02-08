<?php

@include 'login_system_config.php';

session_start();

if(!isset($_SESSION['user_name'])){
   header('location:user_page.html');
}

?>

