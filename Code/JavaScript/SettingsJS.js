
document.addEventListener("DOMContentLoaded", function(event) {
    var theme = localStorage.getItem('theme');
    document.body.classList.add(theme);

    var family = localStorage.getItem('family');
    document.body.style.fontFamily = family;
    document.querySelector('.FA-top').style.fontFamily =family;

    $(".selectFamily").val(family).find("option[value=" + family + "]").attr('selected', true);

    if(theme == "dark-theme"){
        document.getElementById("logo-image").src = "../Images/logo_dark.png";
        $("#theme-input").prop('checked', true);
    }

    else{
        document.getElementById("logo-image").src = "../Images/logo_light.png";
    }

});


const themeSwitch = document.getElementById("theme-input");



themeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
        localStorage.setItem('theme', 'dark-theme');
        document.getElementById("logo-image").src = "../Images/logo_dark.png"
    }
    else{
        localStorage.setItem('theme', 'light-theme');
        document.getElementById("logo-image").src = "../Images/logo_light.png";

    }
});

const faswitch = document.getElementById('fa-toggle');
faswitch.addEventListener('change',() => {
    if(document.getElementById('fa-toggle').checked){
        document.getElementById('enabler').innerHTML = "Enabled";
    }
    else{
        document.getElementById('enabler').innerHTML = "Disabled";

    }

})



$('.selectFamily').change(function(){
    var fontFamily = $(this).val();
    localStorage.setItem('family', fontFamily);
    document.body.style.fontFamily = fontFamily;
    document.querySelector('.FA-top').style.fontFamily =fontFamily;


})


