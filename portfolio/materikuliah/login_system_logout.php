<?php

@include 'login_system_config.php';

session_start();
session_unset();
session_destroy();

header('location:login_system_login_form.php');

?>