const todosInputElement = todosFormElement.querySelector("input");

const TODOS_KEY = "todos";
const ID_KEY = "last_id";
let todos = [];

/**
 * 저장
 */
function saveTodos(newTodoObject) {
  todos.push(newTodoObject);
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  localStorage.setItem(ID_KEY, newTodoObject.id);
}

/**
 * 삭제
 */
function deleteTodo(event) {
  const parentLi = event.target.parentNode;
  console.log("parentLi.id", parentLi.id);
  parentLi.remove();
}

/**
 * 그리기
 */
function paintTodo(newTodoObject) {
  const li = document.createElement("li");
  li.id = newTodoObject.id;
  const span = document.createElement("span");
  span.innerText = newTodoObject.content;

  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);

  li.appendChild(span);
  li.appendChild(button);
  todoListElement.appendChild(li);
}

/**
 * 서브밋
 */
function todoSubmitHandler(event) {
  event.preventDefault();
  const newTodo = todosInputElement.value;
  todosInputElement.value = "";
  const newTodoObject = {
    id: parseInt(localStorage.getItem(ID_KEY)) + 1,
    content: newTodo,
    createdAt: Date.now()
  };
  paintTodo(newTodoObject);
  saveTodos(newTodoObject);
}

todosFormElement.addEventListener("submit", todoSubmitHandler);

const savedTodos = localStorage.getItem(TODOS_KEY);
if (saveTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  console.log("parsedTodos", parsedTodos);
  todos = parsedTodos ? parsedTodos : [];
  console.log("todos", todos);
  parsedTodos?.forEach((item) => paintTodo(item));
}

const lastId = localStorage.getItem(ID_KEY);
if (lastId === null) {
  localStorage.setItem(ID_KEY, 0);
}
