const todosFormElement = document.querySelector("#todos");
const todosInputElement = todosFormElement.querySelector("input");

// todo list 요소를 찾아 변수에 저장한다
const todoListElement = document.querySelector("#todoList");

// todo 를 화면에 그리는 함수
function paintTodo(newTodo) {
  // li 요소 생성
  const li = document.createElement("li");

  // span 요소 생성
  const span = document.createElement("span");

  // span 을 li 의 자식으로 붙임
  li.appendChild(span);

  // span 에 값 추가
  span.innerText = newTodo;

  // li 를 todoList(ul) 의 자식으로 붙임
  todoListElement.appendChild(li);
}

function todoSubmitHandler(event) {
  event.preventDefault();
  const newTodo = todosInputElement.value;
  console.log(`newTodo => ${newTodo}`);
  todosInputElement.value = "";
  // todo 를 화면에 그리는 함수를 호출
  paintTodo(newTodo);
}

todosFormElement.addEventListener("submit", todoSubmitHandler);
