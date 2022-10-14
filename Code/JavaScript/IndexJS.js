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


});