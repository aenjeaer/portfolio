<?php include("config.php"); ?>

<!DOCTYPE html>
<html>
<head>
    <title>Pendaftaran Siswa Baru | SMK Coding</title>
</head>

<body>
    <header>
        <h3>Siswa yang sudah mendaftar</h3>
    </header>

    

    <br>

    <table border="1">
    <thead>
        <!-- <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Alamat</th>
            <th>Jenis Kelamin</th>
            <th>Agama</th>
            <th>Sekolah Asal</th>
            <th>Tindakan</th>
        </tr> -->
    </thead>
    <tbody>

<?php
session_start();

//atur koneksi ke database
$host_db    = "localhost";
$user_db    = "root";
$pass_db    = "";
$nama_db    = "login";
$koneksi    = mysqli_connect($host_db,$user_db,$pass_db,$nama_db);
//atur variabel
$err        = "";
$username   = "";
$ingataku   = "";

if(isset($_COOKIE['cookie_username'])){
    $cookie_username = $_COOKIE['cookie_username'];
    $cookie_password = $_COOKIE['cookie_password'];

    $sql1 = "select * from login where username = '$cookie_username'";
    $q1   = mysqli_query($koneksi,$sql1);
    $r1   = mysqli_fetch_array($q1);
    if($r1['password'] == $cookie_password){
        $_SESSION['session_username'] = $cookie_username;
        $_SESSION['session_password'] = $cookie_password;
    }
}

if(isset($_SESSION['session_username'])){
    header("location:list-siswa.php");
    exit();

    $sql = "SELECT * FROM calon_siswa";
        $query = mysqli_query($db, $sql);

    while($siswa = mysqli_fetch_array($query)){
        echo "<tr>";

        echo "<td>".$siswa['id']."</td>";
        echo "<td>".$siswa['nama']."</td>";
        echo "<td>".$siswa['alamat']."</td>";
        echo "<td>".$siswa['jenis_kelamin']."</td>";
        echo "<td>".$siswa['agama']."</td>";
        echo "<td>".$siswa['sekolah_asal']."</td>";

        echo "<td>";
        echo "<a href='form-edit.php?id=".$siswa['id']."'>Edit</a> | ";
        echo "<a href='hapus.php?id=".$siswa['id']."'>Hapus</a>";
        echo "</td>";

        echo "</tr>";
    }
} else {
    
    die("Akses dilarang...
    <br><a href='index.php'>Kembali</a><br>"
);
    echo "<br><a href='index.php'>Kembali</a><br>";
    
}
        
?>

        

    </tbody>
    </table>
    <nav>
        <a href="form-daftar.php">[+] Tambah Baru</a>
    </nav>
    <p>Total: <?php echo mysqli_num_rows($query) ?></p>
    
    <!-- <a href="index.php">Kembali</a> -->
    <a href="logout.php">Keluar</a>

    </body>
</html>