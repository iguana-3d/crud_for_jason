<?php
$request = file_get_contents('php://input');
$data = json_decode($request, true);

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "crud_for_jason";

/*variaveis*/
$id = $data['id'];
$nome = $data['name'];
$idade = $data['age'];
$email = $data['email'];
$cep = $data['cep'];
// $estado = $data['state'];

$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
      die($conn->connect_error);
}
$sql = "UPDATE user_crud SET name = '$nome' ,age = '$idade', email = '$email', cep = '$cep' WHERE id_user = $id";
if ($conn->query($sql) === TRUE) {
      echo ("ok");
      return "Dados Inseridos";
} else {
      return "Error description: " . $conn->error;
      echo ("error");
}
$conn->close();
