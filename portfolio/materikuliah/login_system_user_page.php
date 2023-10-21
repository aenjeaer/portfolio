<?php

@include 'login_system_config.php';

session_start();

if(!isset($_SESSION['user_name'])){
   header('location:login_system_login_form.php');
}

?>

