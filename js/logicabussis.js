var registerList = [];

function addRegisterToSystem(pid, pname, pcountry, pbirthday, pemail) {
    var newregister = {
        id: pid,
        name: pname,
        country: pcountry,
        birthday: pbirthday,
        email: pemail
    };
    console.log(newregister);
    registerList.push(newregister);
    LocalStorageRegisterList(registerList);
}

function getRegisterList() {
    var storedList = localStorage.getItem('localRegisterList');
    if (storedList == null) {
        registerList = [];
    } else {
        registerList = JSON.parse(storedList);
    }
    return registerList;
}

function LocalStorageRegisterList(plist) {
    localStorage.setItem('localRegisterList', JSON.stringify(plist));
}