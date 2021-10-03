const todoform = document.getElementById("todo-form");
const todolist = document.getElementById("todo-list");
const todoinput = todoform.querySelector("input");
let todos = [];
const TODOSKEY = "todos";

function deletetodo(event){
  const li = event.target.parentElement;
  todos = todos.filter(todo => todo.id !== parseInt(li.id));
  li.remove();
  savetodos(); 
}


function savetodos(){
  localStorage.setItem(TODOSKEY,JSON.stringify(todos));
}

function painttodo(newtodo){
  const li = document.createElement("li");
  li.id = newtodo.id;
  const span = document.createElement("span");
  span.innerText = newtodo.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click",deletetodo);
  li.appendChild(span);
  li.appendChild(button);
  todolist.appendChild(li);
}

function handletodosubmit(event) {
  event.preventDefault();
  const newtodo = todoinput.value;
  todoinput.value = "";
  const newtodoobj = {
    text:newtodo,
    id: Date.now()
  }
  todos.push(newtodoobj);    
  painttodo(newtodoobj);
  savetodos();
}
function sayhello(item){
  console.log(item);
}

todoform.addEventListener("submit", handletodosubmit);

const saveTodos = localStorage.getItem(TODOSKEY);

if(saveTodos){
  const parsetodos = JSON.parse(saveTodos);
  todos = parsetodos;
  parsetodos.forEach(painttodo);
}
