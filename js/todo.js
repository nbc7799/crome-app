const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";   /*이건 밑에 toDos랑 헷갈릴까봐 */ 

let toDos = [];    /*이건그냥 array로 만들어주기 위함이다*/

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const showList = event.target.parentElement;
    showList.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(showList.id));
    saveToDos();

}

function paintToDo(newTodo) {
    const showList = document.createElement("li");
    showList.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌"
    button.addEventListener("click", deleteToDo);
    showList.appendChild(span);
    showList.appendChild(button);
    toDoList.appendChild(showList);
}


function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text:newTodo,
        id: Date.now()
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);


if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

