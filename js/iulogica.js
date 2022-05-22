document.querySelector('#btnSaveRegister').addEventListener('click', saveRegister);


function saveRegister() {
    var sId = document.querySelector('#txtId').value,
        sName = document.querySelector('#txtName').value,
        sCountry = document.querySelector('#txtCountry').value,
        dBirthday = document.querySelector('#txtBirthday').value,
        sEmail = document.querySelector('#txtEmail').value;

    addRegisterToSystem(sId, sName, sCountry, dBirthday, sEmail);
    drawRegisterTable();
}

function drawRegisterTable() {
    var list = getRegisterList(),
        tbody = document.querySelector('#registerTable tbody');


    tbody.innerHTML = '';

    for (var i = 0; i < list.length; i++) {
        var row = tbody.insertRow(i);
        idCell = row.insertCell(0);
        nameCell = row.insertCell(1);
        countryCell = row.insertCell(2);
        birthdayCell = row.insertCell(3);
        emailCell = row.insertCell(4);
        selectCell = row.insertCell(5);

        idCell.innerHTML = list[i].id;
        nameCell.innerHTML = list[i].id;
        countryCell.innerHTML = list[i].id;
        birthdayCell.innerHTML = list[i].id;
        emailCell.innerHTML = list[i].id;

        var inputSelect = document.createElement('input');
        inputSelect.type = 'radio';
        inputSelect.value = list[i].id;
        selectCell.appendChild(inputSelect);
        tbody.appendChild(row);

    }
}