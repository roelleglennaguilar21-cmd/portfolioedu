<?php
$host = 'localhost';
$dbname = 'portfolio';
$username = 'root'; // default XAMPP username
$password = ''; // default XAMPP password is empty

try {
    // 1. Connect to MySQL server
    $pdo = new PDO("mysql:host=$host", $username, $password);
    
    // Set error mode to exception to catch errors
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // 2. Create the database if it doesn't exist
    $pdo->exec("CREATE DATABASE IF NOT EXISTS `$dbname`");
    
    // 3. Select the database to use
    $pdo->exec("USE `$dbname`");
    
    // 4. Create the 'user' table for register and login
    $tableQuery = "CREATE TABLE IF NOT EXISTS user (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )";
    
    $pdo->exec($tableQuery);
    
} catch (PDOException $e) {
    die("Database Connection / Setup Failed: " . $e->getMessage());
}
?>
