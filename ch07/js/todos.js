const todosFormElement = document.querySelector("#todos");
const todosInputElement = todosFormElement.querySelector("input");
const todoListElement = document.querySelector("#todoList");

// todo가 저장될 배열
const todos = [];

// 로컬스토리지에 todos 를 저장하는 함수
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
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
  // newTodo 를 todos 배열에 추가
  todos.push(newTodo);
  // 로컬스토리지에 저장하는 함수를 호출
  saveTodos();
}

todosFormElement.addEventListener("submit", todoSubmitHandler);
