const todosFormElement = document.querySelector("#todos");
const todosInputElement = todosFormElement.querySelector("input");

function todoSubmitHandler(event) {
  event.preventDefault();
  const newTodo = todosInputElement.value;
  console.log(`newTodo => ${newTodo}`);
  todosInputElement.value = "";
}

todosFormElement.addEventListener("submit", todoSubmitHandler);
