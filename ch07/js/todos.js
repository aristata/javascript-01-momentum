const todosFormElement = document.querySelector("#todos");
const todosInputElement = todosFormElement.querySelector("input");
const todoListElement = document.querySelector("#todoList");

const TODOS_KEY = "todos";
let todos = [];

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
  const parentLi = event.target.parentNode;

  parentLi.remove();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;

  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);

  li.appendChild(span);
  li.appendChild(button);
  todoListElement.appendChild(li);
}

function todoSubmitHandler(event) {
  event.preventDefault();
  const newTodo = todosInputElement.value;
  todosInputElement.value = "";
  paintTodo(newTodo);
  todos.push(newTodo);
  saveTodos();
}

todosFormElement.addEventListener("submit", todoSubmitHandler);

/* 로컬스토리지에서 데이터 조회 */
const savedTodos = localStorage.getItem(TODOS_KEY);
if (saveTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  // 로컨스토리지에 있는 데이터를 배열에 담는다
  todos = parsedTodos;

  // 로컬스토리지에 있는 데이터를 조회하여 화면에 todo를 그린다
  parsedTodos.forEach((item) => paintTodo(item));
}
