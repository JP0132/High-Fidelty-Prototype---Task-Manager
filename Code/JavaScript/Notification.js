
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

    const ref = localStorage.getItem('todoItemsRef');
    if(ref){
        upcomingTasks = JSON.parse(ref);
        console.log(upcomingTasks);
        upcomingTasks.forEach(t => {
            console.log(t.date);
            var today = new Date();
            var taskDueDate = new Date(t.date);
            console.log("Task dATE ", taskDueDate);
            var todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
            console.log("weekleft ", todayDate);
            const oneDay = 24 * 60 * 60 * 1000;
            var diffDays = Math.round((taskDueDate - todayDate) / oneDay);
            if(diffDays <= 7 ){
                createNotification(t, diffDays);
            }
        })
    }
});

var upcomingTasks = [];

function createNotification(todo, daysLeft){
    console.log(todo, daysLeft);
    var category;

    if(todo.tag == "personal"){
        category = document.getElementById("personal-noti");
    }

    if(todo.tag == "work"){
        category = document.getElementById("work-noti");
    }

    var due;
    if(daysLeft < 0){
        due = "Overdue by: " + (daysLeft*-1) + " days";
    }

    if(daysLeft > 0){
        due = "Due in: "+ daysLeft + " days";
    }

    if(daysLeft == 0){
        due = "Today";
    }


    const noti = document.createElement("div");
    noti.className = "noti";
 

    noti.innerHTML = `
    <h1 class="task-title">Task: ${todo.title}</h1>
    <h2 class="task-daysleft">${due}</h2>
    <h3 class="task-description">Description: ${todo.description}</h3>
    <h4 class="task-date">Due date: ${todo.date}</h4>
    `;

    category.append(noti);


}

function showPersonal(){
    document.getElementById("personal-notifications").classList.remove("none");
    document.getElementById("personal-notifications").classList.add("block");

    if(document.getElementById("work-notifications").classList.contains("block")){
        document.getElementById("work-notifications").classList.remove("block");
        document.getElementById("work-notifications").classList.add("none");

    }

}

function showWorkNotifications(){
    document.getElementById("work-notifications").classList.remove("none");
    document.getElementById("work-notifications").classList.add("block");

    if(document.getElementById("personal-notifications").classList.contains("block")){
        document.getElementById("personal-notifications").classList.remove("block");
        document.getElementById("personal-notifications").classList.add("none");

    }

}

