var admin = admin || {};

admin.date = {
    data1: [],
    main: function() {
        admin.date.clickEvent();

    },
    clickEvent: function() {
        var id_update =
            /*****Click de gravar no banco*******/
            document.querySelector('#send').addEventListener('click', function(e) {
                // var formData = new FormData;
                const select = document.getElementById("state");
                const selectOption = select.options[select.selectedIndex].text;
                var data = {
                    name: document.getElementById('name').value,
                    age: document.getElementById('age').value,
                    email: document.getElementById('email').value,
                    cep: document.getElementById('cep').value,
                    // state: selectOption
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
        /***Click de trazer os dados*******/
        document.querySelector('#select').addEventListener('click', function() {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    admin.date.data1 = JSON.parse(xmlhttp.responseText);
                    admin.date.build();
                }
            }
            xmlhttp.open("POST", "select.php", true);
            xmlhttp.send();
        });
        /*****Click de edição ******/
        document.querySelector('#update').addEventListener('click', function() {
            var data2 = {
                id: document.getElementById('name').dataset.id,
                name: document.getElementById('name').value,
                age: document.getElementById('age').value,
                email: document.getElementById('email').value,
                cep: document.getElementById('cep').value,
                // state: selectOption
            }
            const dataSend = JSON.stringify(data2);

            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    const path = xmlhttp.responseText;
                    console.log("Dados enviados");
                    let confirm = document.getElementById('confirm-update');
                    confirm.style.color = '#339900';
                    confirm.innerHTML = 'Dados atualizados com Sucesso!';

                }
            };
            xmlhttp.open("POST", "update.php");
            xmlhttp.setRequestHeader('Content-type', 'application/json');
            xmlhttp.send(dataSend);
            // console.log(dataSend)
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
        paragraph7.innerHTML = 'Update | Delete';

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
            div.id = 'grid-container-' + i;
            let paragraph = document.createElement('p');
            paragraph.innerHTML = admin.date.data1[i]['id_user'];
            let paragraph1 = document.createElement('input');
            paragraph1.setAttribute("type", "text");
            paragraph1.placeholder = admin.date.data1[i]['name'];
            paragraph1.disabled = 'disabled';
            let paragraph2 = document.createElement('input');
            paragraph2.setAttribute("type", "text");
            paragraph2.placeholder = admin.date.data1[i]['age'];
            paragraph2.disabled = 'disabled';
            let paragraph3 = document.createElement('input');
            paragraph3.setAttribute("type", "text");
            paragraph3.placeholder = admin.date.data1[i]['email'];
            paragraph3.disabled = 'disabled';
            let paragraph4 = document.createElement('input');
            paragraph4.setAttribute("type", "text");
            paragraph4.placeholder = admin.date.data1[i]['cep'];
            paragraph4.disabled = 'disabled';
            let paragraph5 = document.createElement('input');
            paragraph5.setAttribute("type", "text");
            paragraph5.placeholder = admin.date.data1[i]['state'];
            paragraph5.disabled = 'disabled';

            var date = admin.date.data1[i]['last_updated'];
            var dateResult = date.split(" ");
            var dateResultOne = dateResult[0];
            var dateFormat = dateResultOne.substring(0, 10).split('-').reverse().join('/');

            let paragraph6 = document.createElement('p');
            paragraph6.innerHTML = dateFormat + " às " + dateResult[1];

            let div1 = document.createElement('div');
            div1.className = 'grid-edit';
            let paragraph7 = document.createElement('p');
            let icon = document.createElement('img');
            icon.src = 'temporary_edit.jpg';
            icon.style.width = '35px'
            icon.id = 'edit-' + i;
            icon.dataset.id = admin.date.data1[i]['id_user'];
            icon.dataset.name = admin.date.data1[i]['name'];
            icon.dataset.age = admin.date.data1[i]['age'];
            icon.dataset.email = admin.date.data1[i]['email'];
            icon.dataset.cep = admin.date.data1[i]['cep'];
            icon.dataset.state = admin.date.data1[i]['state'];
            // icon.className = 'fas';
            let paragraph8 = document.createElement('p');
            let icon1 = document.createElement('img');
            icon1.src = 'temporary_delete.jpg';
            icon1.style.width = '35px'
                // icon1.className = 'fas fa-trash';
            icon1.id = 'icon-' + [i] + ' delete';
            information.appendChild(div);
            div.appendChild(paragraph);
            div.appendChild(paragraph1);
            div.appendChild(paragraph2);
            div.appendChild(paragraph3);
            div.appendChild(paragraph4);
            div.appendChild(paragraph5);
            div.appendChild(paragraph6);
            div.appendChild(div1);
            div1.appendChild(paragraph7);
            paragraph7.appendChild(icon);
            div1.appendChild(paragraph8);
            paragraph8.appendChild(icon1);
        }

        for (i = 0; i < admin.date.data1.length; i++) {
            document.querySelector("#edit-" + i).addEventListener("click", function(e) {
                var id = e.target.dataset.id;
                var name = e.target.dataset.name;
                var age = e.target.dataset.age;
                var email = e.target.dataset.email;
                var cep = e.target.dataset.cep;
                var state = e.target.dataset.state;
                console.log(name, age, email, cep, state);

                document.getElementById('name').setAttribute('value', name);
                document.getElementById('name').dataset.id = id;
                document.getElementById('age').setAttribute('value', age);
                document.getElementById('email').setAttribute('value', email);
                document.getElementById('cep').setAttribute('value', cep);
                // document.getElementById('state').setAttribute('value', state);
                document.getElementById('update').style.display = 'block';
            });
        }

    }
}

admin.date.main();