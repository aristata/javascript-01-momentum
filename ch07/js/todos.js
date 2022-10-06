const todosFormElement = document.querySelector("#todos");
const todosInputElement = todosFormElement.querySelector("input");
const todoListElement = document.querySelector("#todoList");

// todo 를 화면에서 삭제하는 함수
function deleteTodo(event) {
  // event 객체에서 부모 li 요소를 찾는다
  const parentLi = event.target.parentNode;

  // 부모 li 를 지운다
  parentLi.remove();
}

// todo 를 화면에 그리는 함수
function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;

  // button 요소 생성
  const button = document.createElement("button");

  // button 값 추가
  button.innerText = "❌";

  // button 이벤트 추가
  button.addEventListener("click", deleteTodo);

  li.appendChild(span);
  // li에 button 추가, 위치는 span 다음
  li.appendChild(button);
  todoListElement.appendChild(li);
}

function todoSubmitHandler(event) {
  event.preventDefault();
  const newTodo = todosInputElement.value;
  // console.log(`newTodo => ${newTodo}`);
  todosInputElement.value = "";
  // todo 를 화면에 그리는 함수를 호출
  paintTodo(newTodo);
}

todosFormElement.addEventListener("submit", todoSubmitHandler);
