<?php
class Connect extends PDO{
      public function __construct()
      {     
            parent::__construct("mysql: host= localhost; dbname=crud_for_jason;","root","", array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));

            $this->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->setAttribute( PDO::ATTR_EMULATE_PREPARES, false);
      }
}

class API
{
      function Select()
      {
            $db = new Connect;
            $db->query("SET NAMES 'utf8'");
            $informations = array();
            $result = array();
            $data = $db->prepare('SELECT * FROM user_crud');
            $data->execute();
            while ($OutputData = $data->fetch(PDO::FETCH_ASSOC)) {
                  $informations[$OutputData['id_user']] = array(
                        'id-user' => $OutputData['id_user'],
                        'name' => $OutputData['name'],
                        'age' => $OutputData['age'],
                        'email' => $OutputData['email'],
                        'cep' => $OutputData['cep'],
                        'state' => $OutputData['state'],
                        'last-updated' => $OutputData['last_updated'],
                        array_push($result, $OutputData)
                  );
                  
            }
            return json_encode($result);
      }
}

$API = new API;

echo $API->Select();