<?php
$request = file_get_contents('php://input');
$data = json_decode($request, true);

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "crud_for_jason";

/*variaveis*/
$id = $data['id'];

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
      die($conn->connect_error);
}

$sql = "DELETE FROM user_crud WHERE id_user = $id";

if ($conn->query($sql) === TRUE) {
      echo ("ok");
      return "Dados Inseridos";
} else {
      return "Error description: " . $conn->error;
      echo ("error");
}
$conn->close();
