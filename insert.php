<?php

// $array = key($_POST);
// $data = json_decode($array, true);
$request = file_get_contents('php://input');
$data = json_decode($request, true);

var_dump($data['name']);


$servername = "localhost";
$username = "root";
$password = "";
$dbname = "crud_for_jason";

$nome = $data['name'];
$idade = $data['age'];
$email = $data['email'];
$cep = $data['cep'];
$estado = $data['state'];

$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
      die($conn->connect_error);
}

$sql = "INSERT INTO user_crud (name, age, email, cep, state) VALUES ('$nome', '$idade', '$email', '$cep', '$estado')";

if ($conn->query($sql) === TRUE) {
      echo ("ok");
      return "Dados Inseridos";
} else {
      return "Error description: " . $conn->error;
      echo ("error");
}
$conn->close();
