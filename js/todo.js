const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) { 
    const li = event.target.parentElement;
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    li.remove();
    saveToDos();
}

function boxCheck(event) {
    const btn = event.target;
    btn.setAttribute("class", "far fa-check-square check__button");
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;  
    const span = document.createElement("span");
    const del__btn = document.createElement("button");
    const check__btn = document.createElement("button");
    const wrapper = document.createElement("div");
    span.innerText = newTodo.text;
    check__btn.setAttribute("class", "far fa-square check__button");
    del__btn.setAttribute("class", "fas fa-times todo__button");
    wrapper.appendChild(check__btn);
    wrapper.appendChild(span);
    li.appendChild(wrapper);
    li.appendChild(del__btn);
    toDoList.appendChild(li);
    del__btn.addEventListener("click", deleteToDo);
    check__btn.addEventListener("click", boxCheck);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text:newTodo,
        id:Date.now()
    };
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