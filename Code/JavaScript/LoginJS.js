



var user = [];
function saveUser(){
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;

    document.getElementById("login-username").value = "";
    document.getElementById("login-password").value = "";
    var fullname = "Full name";
    var email = "Email";
    var phone = "Phone";

    const user = {
        username,
        password,
        fullname,
        email,
        phone
    }


    localStorage.setItem('newUser',JSON.stringify(user));
   



}