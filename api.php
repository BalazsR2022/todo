<?php
// Adatbázis kapcsolat beállítása
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "todo_database";
 
$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$sql = "SELECT id, kolcsonzesekId, iro, mufaj, cim ready FROM todos";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    
    $todos = array();
    while($row = $result->fetch_assoc()) {
        $kolcsonzesek[] = $row;
    }
    echo json_encode($todos);
} else {
    echo "Nincs találat az adatbázisban.";
}
$conn->close();
?>
