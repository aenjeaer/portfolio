<?php
    // atur koneksi ke database

    // $host_db = "anjarwati.site";
    // $user_db = "u1576804_admin";
    // $password_db = "K8R7YjC5afk35@D";
    // $nama_db = "db_loginform.session.php";
    // $conn = new mysqli($host_db,$user_db,$password_db,$nama_db);

    // atur variabel input data di log in form

    $username =$_POST['username'];
    $password =$_POST['password'];

    //Database Connection
    $conn = new mysqli('anjarwati.site','u1576804_admin','K8R7YjC5afk35@D','u1576804_form_login');
    if($conn->connect_error) {
        die('Connection Failed : '.$conn->connect_error);
    }else {
        $stmt = $conn->prepare("insert into login_form (username, password) values(?, ?)");
        $stmt->bind_param("ss",$username,$password);
        $stmt->execute();
        echo "login berhasil";
        $stmt->close();
        $conn->close();
    }

   
// $servername = "localhost:3306";  // Ganti dengan server database Anda jika berbeda
// $username = "u1576804_admin"; // Ganti dengan nama pengguna database Anda
// $password = "K8R7YjC5afk35@D"; // Ganti dengan kata sandi database Anda
// $dbname = "u1576804_form_login"; // Ganti dengan nama database Anda

// // Buat koneksi
// $conn = new mysqli($servername, $username, $password, $dbname);

// // Periksa koneksi
// if ($conn->connect_error) {
//     die("Koneksi gagal: " . $conn->connect_error);
// }
// echo "Koneksi berhasil!";


?>