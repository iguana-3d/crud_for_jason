<?php
echo "
<!DOCTYPE HTML>
<html lang='PT-BR'>
      <head>
            <meta charset='UTF-8' />
            <link rel='stylesheet' href='style.css' type='text/css' />
      </head>
      <body>
            <div class='div-content'>
                  <h1>CRUD para JASON</h1>

                  <h2>Inserção de dados no banco</h2>                 
                  <div class='content'>
                        <label>Digite seu nome: <input type='text' id='name' class='name' placeholder='Ex: Jason' size='50' maxlength='50'></input></label>
                        <label>Digite sua idade: <input type='number' id='age' class='age' placeholder='Ex: 17' size='50' maxlength='50'></input></label>
                        <label>Digite seu email: <input type='email' id='email' class='email' placeholder='Ex: fulano@gbol.com' size='50' maxlength='50'></input></label>
                        <label>Digite seu CEP: <input type='text' id='cep' class='cep' placeholder='Ex: 12345-123' size='50' maxlength='50'></input></label>
                        <label>Estado: 
                        <select id='state' name='state'>
                              <option value='AC'>Acre</option>
                              <option value='AL'>Alagoas</option>
                              <option value='AP'>Amapá</option>
                              <option value='AM'>Amazonas</option>
                              <option value='BA'>Bahia</option>
                              <option value='CE'>Ceará</option>
                              <option value='DF'>Distrito Federal</option>
                              <option value='ES'>Espírito Santo</option>
                              <option value='GO'>Goiás</option>
                              <option value='MA'>Maranhão</option>
                              <option value='MT'>Mato Grosso</option>
                              <option value='MS'>Mato Grosso do Sul</option>
                              <option value='MG'>Minas Gerais</option>
                              <option value='PA'>Pará</option>
                              <option value='PB'>Paraíba</option>
                              <option value='PR'>Paraná</option>
                              <option value='PE'>Pernambuco</option>
                              <option value='PI'>Piauí</option>
                              <option value='RJ'>Rio de Janeiro</option>
                              <option value='RN'>Rio Grande do Norte</option>
                              <option value='RS'>Rio Grande do Sul</option>
                              <option value='RO'>Rondônia</option>
                              <option value='RR'>Roraima</option>
                              <option value='SC'>Santa Catarina</option>
                              <option value='SP'>São Paulo</option>
                              <option value='SE'>Sergipe</option>
                              <option value='TO'>Tocantins</option>
                        </select>
                        </label>
                        <span id='confirm-update'></span>
                        <button id='update' class='button-update'>Atualizar</button>
                        <span id='confirm'></span>
                        <button id='send' class='button-send'>Gravar</button>
                        <button id='select' class='button-send'>Visualizar</button>
                  </div> 
                  <div id='information-container' class='information-container'>
                  </div>                 
            </div>
      </body>
      <script src='index.js'></script>
</html>
";
