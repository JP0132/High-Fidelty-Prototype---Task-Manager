document.addEventListener("DOMContentLoaded", function(event) {
    var theme = localStorage.getItem('theme');
    document.body.classList.add(theme);
    if(theme == "dark-theme"){
        document.getElementById("logo-image").src = "../Images/logo_dark.png";
    }
    else{
        document.getElementById("logo-image").src = "../Images/logo_light.png";
    }

    var family = localStorage.getItem('family');
    document.body.style.fontFamily = family;



    const newuser = localStorage.getItem('newUser');
    if(newuser){
        user = JSON.parse(newuser);
        displayDetails(user);
    }

});

var user = [];

function displayDetails(u){
    console.log(user);
    document.getElementById("username").innerText = u.username;
    if(u.fullname != "Full name"){
        document.getElementById("fullname").value = u.fullname;

    }
    if(u.email != "Email"){
        document.getElementById("user-email").value = u.email;

    }
    if(u.phone != "Phone"){
        document.getElementById("user-phone").value= u.phone;

    }

}

function saveUserData(){
 
    var name = document.getElementById("fullname").value;
    var userEmail = document.getElementById("user-email").value;
    var userPhone = document.getElementById("user-phone").value;
    var userPassword = document.getElementById("user-password").value;

    if(name){
        user.fullname = name;

    }

    if(userEmail){
        user.email = userEmail;
    }

    if(userPhone){
        user.phone= userPhone;

    }

    if(userPassword){
        user.password = userPassword;
        document.getElementById("user-password").value = "";
    }
    


    localStorage.setItem('newUser',JSON.stringify(user));


}

