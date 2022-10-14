

$('#board-view').on('click',function(){
    $('.board-view-container').show();
    $('.list-view-container').hide();
    $('#list-view').removeClass('selected');
    $('#board-view').addClass('selected');
})


$('#list-view').on('click',function(){
    $('.board-view-container').hide();
    $('.list-view-container').show();
    $('#board-view').removeClass('selected');
    $('#list-view').addClass('selected');
})


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

    document.getElementById("board-view").focus();
    $('.board-view-container').show();
    $('.list-view-container').hide();
    $('#board-view').addClass('selected');
    document.getElementById("upcoming-tasks").classList.add('block');
    document.getElementById("upcoming-tasks").classList.remove('none');
    document.getElementById("list-upcoming-tasks").classList.add('block');
    document.getElementById("list-upcoming-tasks").classList.remove('none');
    const ref = localStorage.getItem('todoItemsRef');
    if(ref){
        toDoList = JSON.parse(ref);
        toDoList.forEach(t => {
            showTodo(t);
        })
    }
    const doneRef = localStorage.getItem('doneTodo');
    if(doneRef){
        doneList = JSON.parse(doneRef);
        doneList.forEach(d =>{
            showOnDone(d);
        })
    }
});





$("a").on('click',function(){
    tag = this.id;

    if(tag == "done-option"){
        //Personal Upcoming show done
        document.getElementById("done-tasks").classList.add('block');
        document.getElementById("done-tasks").classList.remove('none');

        //Personal show upcoming list done
        document.getElementById("list-done-tasks").classList.add('block');
        document.getElementById("list-done-tasks").classList.remove('none');
        
        //Hide personal upcoming tasks
        if(document.getElementById("upcoming-tasks").classList.contains('block')){
            document.getElementById("upcoming-tasks").classList.add('none');
            document.getElementById("upcoming-tasks").classList.remove('block');   
        }
    
        if(document.getElementById("list-upcoming-tasks").classList.contains('block')){
            document.getElementById("list-upcoming-tasks").classList.add('none');
            document.getElementById("list-upcoming-tasks").classList.remove('block');   
        }

        if(document.getElementById("work-done-tasks").classList.contains('block')){
            document.getElementById("work-done-tasks").classList.add("none");
            document.getElementById("work-done-tasks").classList.remove("block");
        }

        if(document.getElementById("work-list-done-tasks").classList.contains('block')){
            document.getElementById("work-list-done-tasks").classList.add('none');
            document.getElementById("work-list-done-tasks").classList.remove('block');   
        }

        if(document.getElementById("work-list-upcoming-tasks").classList.contains('block')){
            document.getElementById("work-list-upcoming-tasks").classList.add('none');
            document.getElementById("work-list-upcoming-tasks").classList.remove('block');   
        }

        if(document.getElementById("work-upcoming-tasks").classList.contains('block')){
            document.getElementById("work-upcoming-tasks").classList.add('none');
            document.getElementById("work-upcoming-tasks").classList.remove('block');   
        }
    
        
    }

    if(tag == "upcoming-option"){
        document.getElementById("upcoming-tasks").classList.add('block');
        document.getElementById("upcoming-tasks").classList.remove('none');
    
        document.getElementById("list-upcoming-tasks").classList.add('block');
        document.getElementById("list-upcoming-tasks").classList.remove('none');


        if(document.getElementById("done-tasks").classList.contains('block')){
            document.getElementById("done-tasks").classList.add('none');
            document.getElementById("done-tasks").classList.remove('block');   
        }
    
        if(document.getElementById("list-done-tasks").classList.contains('block')){
            document.getElementById("list-done-tasks").classList.add('none');
            document.getElementById("list-done-tasks").classList.remove('block');   
        }

        if(document.getElementById("work-done-tasks").classList.contains('block')){
            document.getElementById("work-done-tasks").classList.add("none");
            document.getElementById("work-done-tasks").classList.remove("block");
        }

        if(document.getElementById("work-list-done-tasks").classList.contains('block')){
            document.getElementById("work-list-done-tasks").classList.add('none');
            document.getElementById("work-list-done-tasks").classList.remove('block');   
        }

        if(document.getElementById("work-list-upcoming-tasks").classList.contains('block')){
            document.getElementById("work-list-upcoming-tasks").classList.add('none');
            document.getElementById("work-list-upcoming-tasks").classList.remove('block');   
        }

        if(document.getElementById("work-upcoming-tasks").classList.contains('block')){
            document.getElementById("work-upcoming-tasks").classList.add('none');
            document.getElementById("work-upcoming-tasks").classList.remove('block');   
        }
    }

    if(tag == "work-done-option"){
        document.getElementById("work-done-tasks").classList.add('block');
        document.getElementById("work-done-tasks").classList.remove('none');
    
        document.getElementById("work-list-done-tasks").classList.add('block');
        document.getElementById("work-list-done-tasks").classList.remove('none');


        if(document.getElementById("work-upcoming-tasks").classList.contains('block')){
            document.getElementById("work-upcoming-tasks").classList.add('none');
            document.getElementById("work-upcoming-tasks").classList.remove('block');   
        }
    
        if(document.getElementById("work-list-upcoming-tasks").classList.contains('block')){
            document.getElementById("work-list-upcoming-tasks").classList.add('none');     
            document.getElementById("work-list-upcoming-tasks").classList.remove('block');   
        }

        if(document.getElementById("done-tasks").classList.contains('block')){
            document.getElementById("done-tasks").classList.add('none');
            document.getElementById("done-tasks").classList.remove('block');   
        }
    
        if(document.getElementById("list-done-tasks").classList.contains('block')){
            document.getElementById("list-done-tasks").classList.add('none');
            document.getElementById("list-done-tasks").classList.remove('block');   
        }

        if(document.getElementById("upcoming-tasks").classList.contains('block')){
            document.getElementById("upcoming-tasks").classList.add('none');
            document.getElementById("upcoming-tasks").classList.remove('block');   
        }
    
        if(document.getElementById("list-upcoming-tasks").classList.contains('block')){
            document.getElementById("list-upcoming-tasks").classList.add('none');
            document.getElementById("list-upcoming-tasks").classList.remove('block');   
        }

    }

    if(tag == "work-upcoming-option"){

        document.getElementById("work-upcoming-tasks").classList.add('block');
        document.getElementById("work-upcoming-tasks").classList.remove('none');
    
        document.getElementById("work-list-upcoming-tasks").classList.add('block');
        document.getElementById("work-list-upcoming-tasks").classList.remove('none');

        if(document.getElementById("work-done-tasks").classList.contains('block')){
            document.getElementById("work-done-tasks").classList.add('none');
            document.getElementById("work-done-tasks").classList.remove('block');   
        }
    
        if(document.getElementById("work-list-done-tasks").classList.contains('block')){
            document.getElementById("work-list-done-tasks").classList.add('none');
            document.getElementById("work-list-done-tasks").classList.remove('block');   
        }

        if(document.getElementById("done-tasks").classList.contains('block')){
            document.getElementById("done-tasks").classList.add('none');
            document.getElementById("done-tasks").classList.remove('block');   
        }
    
        if(document.getElementById("list-done-tasks").classList.contains('block')){
            document.getElementById("list-done-tasks").classList.add('none');
            document.getElementById("list-done-tasks").classList.remove('block');   
        }

        if(document.getElementById("upcoming-tasks").classList.contains('block')){
            document.getElementById("upcoming-tasks").classList.add('none');
            document.getElementById("upcoming-tasks").classList.remove('block');   
        }
    
        if(document.getElementById("list-upcoming-tasks").classList.contains('block')){
            document.getElementById("list-upcoming-tasks").classList.add('none');
            document.getElementById("list-upcoming-tasks").classList.remove('block');   
        }
 
    }

});




//To do list code

//List that stores the tasks
var toDoList = [];


//List that stores
var doneList = [];


//Creates the tasks
function showTodo(todo) {
    localStorage.setItem('todoItemsRef',JSON.stringify(toDoList));

    var list;
    var boardTasks;

    if(todo.tag == "personal"){
        list = document.getElementById('upcoming-list');
        boardTasks = document.getElementById("upcoming-board");
    }

    if(todo.tag == "work"){
        list = document.getElementById('work-upcoming-list');
        boardTasks = document.getElementById("work-upcoming-board");
    }




    const item = document.querySelector(`[data-key='${todo.id}']`);
    const itemB = document.querySelector(`[dataKey='${todo.id}']`);
  
    if (todo.done) {
        item.remove();
        itemB.remove();
        if (toDoList.length === 0){
            list.innerHTML = '';
            boardTasks.innerHTML = '';
        }
        return
    }

    const node = document.createElement("li");
    node.setAttribute('data-key', todo.id);
    
    node.className = "task-item";

    let place = {"board": 'board', list: 'list'};

    node.innerHTML = `
        <div class="task-wrapper">
            <span class="task-title">Task: ${todo.title}</span>
            <span class="task-description">Description: ${todo.description}</span>
            <div class="right">
                <span class="task-date">Due date: ${todo.date}</span>
                <button id="${todo.id}" onClick="moveToDone(this.id)" class="task-done">Done</button>
                <button id="${todo.id}" onClick="editTask(${todo.id}, '${todo.tag}', '${todo.list}')" class="task-doneB">Edit</button>
            </div>
        </div>
    `;


    var tag = JSON.stringify(todo.tag);
   

    const board = document.createElement("div");
    board.setAttribute('dataKey', todo.id);
    board.className = "board";
    board.innerHTML = `
        <h1 class="task-titleB">Task: ${todo.title}</h1>
        <h3 class="task-descriptionB">Description: ${todo.description}</h3>
        <h4 class="task-dateB">Due date: ${todo.date}</h4>
        <button id="${todo.id}" onClick="moveToDone(this.id)" class="task-doneB">Done</button>
        <button id="${todo.id}" onClick="editTask(${todo.id}, '${todo.tag}', '${todo.board}')" class="task-doneB">Edit</button>
    `;

    if(item){
        list.replaceChild(node, item);
        boardTasks.replaceChild(board, itemB);
    }
    else{
        list.append(node);
        boardTasks.append(board);
    }

}


function moveToDone(itemID){
    var index = toDoList.findIndex(item => item.id === Number(itemID));
    console.log(toDoList[index]);
    doneList.push(toDoList[index]);
    console.log(doneList);
    const todo = {
        done: true,
        ...toDoList[index]
    };
    
    toDoList = toDoList.filter(item => item.id !== Number(itemID));
    showTodo(todo);
    showOnDone(todo);
}

function editTask(itemID, itemTag, place){
    var node = "";
    console.log(itemTag);
    console.log(place);


    
    if(itemTag == 'personal'){
        if(place == "board"){
            node = document.getElementById("popupconB");

        }
        else{
            node = document.getElementById("popupcon");
        }
        
        
        
    }

    if(itemTag == 'work'){
        if(place == "board"){
            node = document.getElementById("work-popupconB");

        }
        else{
            node = document.getElementById("work-popupcon");
        }
    }

    var index = toDoList.findIndex(item => item.id === Number(itemID));
    const todo = {
        ...toDoList[index]
    };

    node.innerHTML = `
    <div class="popup none" id="popup-window">
        <div class="popup-close" onclick="closeCreateTaskForm()">&times;</div>
        <div class="form">
            <div class="form-header">
                Edit Task
            </div>
            <div class="element">
                <label class="input-label" id="title-label" for="addtask-title">Task Title</label>
                <input type="text" placeholder="Task title" class="addtask-input" id="addtask-title" name="title">
            </div>
            <div class="element">
                <label class="input-label" id="date-label" for="addtask-date">Date</label>
                <input type="date" class="addtask-input" id="addtask-date" name="dueDate">
            </div>
        
           <div class="element">
                <label class="input-label" for="addtask-description">Task Description</label>
                <textarea id="addtask-description"></textarea>
            </div>

            <div class="element">
                <button class="submit-task" onclick="updateTaskData(${todo.id})">Submit Task</button>
            </div>
               
        </div>

    </div>
    `
    var overlay = document.getElementById('overlay-window');
    overlay.style.display = 'block';
    document.getElementById('popup-window').classList.add('block');
    document.getElementById('popup-window').classList.remove('none');
 
    
    document.getElementById('addtask-title').value = todo.title;
    document.getElementById('addtask-description').value = todo.description;
    document.getElementById('addtask-date').value = todo.date;


}

function updateTaskData(itemID){
    var index = toDoList.findIndex(item => item.id === Number(itemID));
    var title = document.getElementById("addtask-title").value;
    var date = document.getElementById("addtask-date").value;
    var description = document.getElementById("addtask-description").value;

    document.getElementById("addtask-title").value = "";
    document.getElementById("addtask-date").value  =  "";
    document.getElementById("addtask-description").value  = "";

    console.log(title, date, description);
    var node = document.getElementById("popupcon");
    var node2 = document.getElementById("popupconB");
    var node3 = document.getElementById("work-popupconB");
    var node4 = document.getElementById("work-popupcon");

    node.innerHTML = "";
    node2.innerHTML = "";
    node3.innerHTML = "";
    node4.innerHTML = "";


    var overlay = document.getElementById('overlay-window');
    overlay.style.display = 'none';
    toDoList[index].title = title;
    toDoList[index].date = date;
    toDoList[index].description = description;

    console.log(toDoList[index]);
    const todo = {
        ...toDoList[index]
    };

    showTodo(todo);
  


}

function showOnDone(task){
    localStorage.setItem('doneTodo',JSON.stringify(doneList));

    var listTasks;
    var boardTasks;

    if(task.tag == "personal"){
        listTasks = document.getElementById("done-list");
        boardTasks = document.getElementById("done-board");

    }

    if(task.tag == "work"){
        listTasks = document.getElementById("work-done-list");
        boardTasks = document.getElementById("work-done-board");
    }

    const item = document.querySelector(`[data-key='${task.id}']`);
    const itemB = document.querySelector(`[dataKey='${task.id}']`);

    if (task.delete) {
        item.remove();
        itemB.remove();
        if (doneList.length === 0){
            listTasks.innerHTML = '';
            boardTasks.innerHTML = '';
        }
        return
    }

    const node = document.createElement("li");
    node.setAttribute('data-key', task.id);
    
    node.className = "task-item";

    node.innerHTML = `
    <div class="task-wrapper">
        <span class="task-title">Task: ${task.title}</span>
        <span class="task-description">Description: ${task.description}</span>
        <div class="right">
            <span class="task-date">Due date: ${task.date}</span>
            <button id="${task.id}" onClick="deleteTask(this.id)" class="task-delete">Delete</button>
        </div>
    </div>
`;

    const board = document.createElement("div");
    board.setAttribute('dataKey', task.id);
    board.className = "board";
    board.innerHTML = `
    <h1 class="task-titleB">Task: ${task.title}</h1>
    <h3 class="task-descriptionB">Description: ${task.description}</h3>
    <h4 class="task-dateB">Due date: ${task.date}</h4>
    <button id="${task.id}" onClick="deleteTask(this.id)" class="task-deleteB">Delete</button>
`;

    listTasks.append(node);
    boardTasks.append(board);   

}


function createTodo(title,description, date, tag){
    board = "board";
    list = "list";
    const todo = {
        tag,
        title,
        description,
        date,
        checked: false,
        id: Date.now(),
        board,
        list
    };

   
    toDoList.push(todo);
    console.log(toDoList);
    showTodo(todo);
}

function deleteTask(taskID){
        var index = doneList.findIndex(item => item.id === Number(taskID));
        const todo = {
            delete: true,
            ...doneList[index]
        };
    
        doneList = doneList.filter(item => item.id !== Number(taskID));
        showOnDone(todo);
}

var d2 = new Date();







function openCreateTaskForm(flag, tag){
    var node = "";
    window.categoryTag = tag;
    
    if(flag == '1'){
        node = document.getElementById("popupconB");
        
    }

    if(flag == '2'){
        node = document.getElementById("work-popupconB");
    }

    if(flag == '3'){
        node = document.getElementById("popupcon");
    }

    if(flag == '4'){
        node = document.getElementById("work-popupcon");
    }

    node.innerHTML = `
    <div class="popup none" id="popup-window">
        <div class="popup-close" onclick="closeCreateTaskForm()">&times;</div>
        <div class="form">
            <div class="form-header">
                Create a New Task
            </div>
            <div class="element">
                <label class="input-label" id="title-label" for="addtask-title">Task Title</label>
                <input type="text" placeholder="e.g. Dentist Appointment" class="addtask-input" id="addtask-title" name="title">
            </div>
            <div class="element">
                <label class="input-label" id="date-label" for="addtask-date">Date</label>
                <input type="date" class="addtask-input" id="addtask-date" name="dueDate">
            </div>
        
           <div class="element">
                <label class="input-label" for="addtask-description">Task Description</label>
                <textarea id="addtask-description" placeholder="e.g. Appointment at 2PM to remove braces"></textarea>
            </div>

            <div class="element">
                <button class="submit-task" onclick="getTaskData()">Submit Task</button>
            </div>
               
        </div>

    </div>
    `
    var overlay = document.getElementById('overlay-window');
    overlay.style.display = 'block';
    document.getElementById('popup-window').classList.add('block');
    document.getElementById('popup-window').classList.remove('none');
}

function closeCreateTaskForm(){
    node = document.getElementById("popupconB");
    node2 = document.getElementById("popupcon");
    node3 = document.getElementById("work-popupconB");
    node4 = document.getElementById("work-popupcon");
  
    node.innerHTML = "";
    node2.innerHTML = "";
    node3.innerHTML = "";
    node4.innerHTML = "";

    var overlay = document.getElementById('overlay-window');
    overlay.style.display = 'none';

}

function getTaskData(){
    var title = document.getElementById("addtask-title").value;
    var date = document.getElementById("addtask-date").value;
    var description = document.getElementById("addtask-description").value;

    document.getElementById("addtask-title").value = "";
    document.getElementById("addtask-date").value  =  "";
    document.getElementById("addtask-description").value  = "";

    console.log(title, date, description);
    var node = document.getElementById("popupcon");
    var node2 = document.getElementById("popupconB");
    var node3 = document.getElementById("work-popupconB");
    var node4 = document.getElementById("work-popupcon");

    node.innerHTML = "";
    node2.innerHTML = "";
    node3.innerHTML = "";
    node4.innerHTML = "";


    var overlay = document.getElementById('overlay-window');
    overlay.style.display = 'none';
    
    createTodo(title,description, date, categoryTag);
      
}

