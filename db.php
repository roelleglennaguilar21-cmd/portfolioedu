<?php
$host = 'localhost';
$dbname = 'portfolio';
$username = 'root'; // default XAMPP username
$password = ''; // default XAMPP password is empty

try {
    // Connect to MySQL server and select the portfolio database
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    
    // Set error mode to exception to catch errors
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
} catch (PDOException $e) {
    die("Database Connection Failed: " . $e->getMessage());
}
?>
