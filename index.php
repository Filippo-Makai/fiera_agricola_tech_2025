<?php
$servername = "fiera-agricola-tech-2025-4mcqc-mysql.fiera-agricola-tech-2025-4mcqc.svc.cluster.local";
$username = "makai";
$password = "sV8[pI7:jZ7*zK8[";
$dbname = "fiera-agricola-tech-2025";
$port = "3306";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname, $port);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>
<!DOCTYPE html>
<html lang="it-IT">
    <head>
        <title>Mappa Fiera Agricola Tech</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
        <script src="js/script.js"></script>
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>

    </body>
    </html>