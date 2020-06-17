var admin = admin || {};

admin.date = {
    data1: [],
    main: function() {
        admin.date.clickEvent();

    },
    clickEvent: function() {
        document.querySelector('#send').addEventListener('click', function(e) {
            // var formData = new FormData;
            const select = document.getElementById("state");
            const selectOption = select.options[select.selectedIndex].text;
            var data = {
                name: document.getElementById('name').value,
                age: document.getElementById('age').value,
                email: document.getElementById('email').value,
                cep: document.getElementById('cep').value,
                state: selectOption
            }
            const dataSend = JSON.stringify(data);

            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    const path = xmlhttp.responseText;
                    console.log("Dados enviados");
                    let confirm = document.getElementById('confirm');
                    confirm.style.color = '#339900';
                    confirm.innerHTML = 'Dados gravados no Banco com Sucesso!';

                }
            };
            xmlhttp.open("POST", "insert.php");
            xmlhttp.setRequestHeader('Content-type', 'application/json');
            xmlhttp.send(dataSend);
        });
        document.querySelector('#select').addEventListener('click', function() {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    console.log("state:" + xmlhttp.readyState);
                    admin.date.data1 = JSON.parse(xmlhttp.responseText);
                    admin.date.build();
                }
            }
            console.log("luladrão")
            xmlhttp.open("POST", "select.php", true);
            xmlhttp.send();
        })
    },
    build: function() {
        let information = document.getElementById('information-container');
        let element = document.querySelector('.grid-container');
        if (typeof(element) != 'undefined' && element != null) {
            information.innerHTML = '';
        }
        let div = document.createElement('div');
        div.className = 'grid-container';
        let paragraph = document.createElement('p');
        paragraph.innerHTML = 'ID do Usuário';
        let paragraph1 = document.createElement('p');
        paragraph1.innerHTML = 'Nome';
        let paragraph2 = document.createElement('p');
        paragraph2.innerHTML = 'Idade';
        let paragraph3 = document.createElement('p');
        paragraph3.innerHTML = 'Email';
        let paragraph4 = document.createElement('p');
        paragraph4.innerHTML = 'CEP';
        let paragraph5 = document.createElement('p');
        paragraph5.innerHTML = 'Estado';
        let paragraph6 = document.createElement('p');
        paragraph6.innerHTML = 'Ultima atualização';
        let paragraph7 = document.createElement('p');
        paragraph7.innerHTML = 'Update/Delete';

        let length = Object.keys(admin.date.data1).length;
        information.appendChild(div);
        div.appendChild(paragraph);
        div.appendChild(paragraph1);
        div.appendChild(paragraph2);
        div.appendChild(paragraph3);
        div.appendChild(paragraph4);
        div.appendChild(paragraph5);
        div.appendChild(paragraph6);
        div.appendChild(paragraph7);


        for (i = 0; i < length; i++) {

            let div = document.createElement('div');
            div.className = 'grid-container';
            let paragraph = document.createElement('p');
            paragraph.innerHTML = admin.date.data1[i]['id_user'];
            let paragraph1 = document.createElement('p');
            paragraph1.innerHTML = admin.date.data1[i]['name'];
            let paragraph2 = document.createElement('p');
            paragraph2.innerHTML = admin.date.data1[i]['age'];
            let paragraph3 = document.createElement('p');
            paragraph3.innerHTML = admin.date.data1[i]['email'];
            let paragraph4 = document.createElement('p');
            paragraph4.innerHTML = admin.date.data1[i]['cep'];
            let paragraph5 = document.createElement('p');
            paragraph5.innerHTML = admin.date.data1[i]['state'];

            var date = admin.date.data1[i]['last_updated'];
            var dateResult = date.split(" ");
            var dateResultOne = dateResult[0];
            var dateFormat = dateResultOne.substring(0, 10).split('-').reverse().join('/');

            let paragraph6 = document.createElement('p');
            paragraph6.innerHTML = dateFormat + " às " + dateResult[1];
            information.appendChild(div);
            div.appendChild(paragraph);
            div.appendChild(paragraph1);
            div.appendChild(paragraph2);
            div.appendChild(paragraph3);
            div.appendChild(paragraph4);
            div.appendChild(paragraph5);
            div.appendChild(paragraph6);
        }
        console.log(length)
        console.log(admin.date.data1)
    }
}

admin.date.main();