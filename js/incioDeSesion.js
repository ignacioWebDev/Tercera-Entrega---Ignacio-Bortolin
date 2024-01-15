var userName;
var userSurname;
var userRegisterDate;
let userJSON = JSON.stringify(userName);
console.log(userJSON);


function login() {
    var userName = prompt("Para registrarse por favor ingrese su nombre");

    if (userName === "") {
        alert("Registro cancelado o nombre no válido");
    }
    userSurname = prompt("Para terminar de registrarse ingrese su apellido");
    if (!userSurname) {
        alert("Registro cancelado o apellido no válido");
        return;
    }
    userRegisterDate = new Date().toDateString();
    localStorage.setItem("USERNAME", userName);
    localStorage.setItem("USERSURNAME", userSurname);
    localStorage.setItem("USERREGISTERDATE", userRegisterDate);
}

let userVerification = false;



function accountVerification() {
    if (userVerification === false) {
        login();
        }
    else {
        alert("Usted ya esta registrado! Si quiere cambiar algo vaya a configuracion")
    }
    userVerification = true;
}

function removeAccount(){
    if (userVerification === false) {
        alert("Para eliminar la cuenta primero tiene que tener una")
    }else{
        localStorage.removeItem("USERNAME", userName);
        localStorage.removeItem("USERSURNAME", userSurname);
        localStorage.removeItem("USERREGISTERDATE", userRegisterDate);
        alert("Cuenta eliminada correctamente")
    }
}


