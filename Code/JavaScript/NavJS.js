function navhamburger(){
    var nav = document.getElementById("navbar");
    if(nav.className === "topnav"){
        nav.className += " responsive";
    }
    else{
        nav.className = "topnav";
    }
}



