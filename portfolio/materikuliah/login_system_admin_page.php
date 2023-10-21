<?php

@include 'login_system_config.php';

session_start();

if(!isset($_SESSION['admin_name'])){
   header('location:login_system_login_form.php');
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>admin page</title>

   <!-- custom css file link  -->
   <link rel="stylesheet" href="css/login_system_style.css">

</head>
<body>
   
<div class="container">

   <div class="content">
      <h3>hi, <span>admin</span></h3>
      <h1>welcome <span><?php echo $_SESSION['admin_name'] ?></span></h1>
      <p>this is an admin page</p>
      <a href="login_system_login_form.php" class="btn">login</a>
      <a href="login_system_register_form.php" class="btn">register</a>
      <a href="login_system_logout.php" class="btn">logout</a>
   </div>

</div>

</body>
</html>