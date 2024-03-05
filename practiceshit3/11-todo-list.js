let todoList = JSON.parse(localStorage.getItem("list")) || [
  { names: "wewe", dueDate: "2022-12-22" },
  { names: "rererff", dueDate: "2022-12-22" },
];

renderTodoList();
function renderTodoList() {
  let todoListHTML = "";

  todoList.forEach(function (todoObject, index) {
    const { names } = todoObject;
    const { dueDate } = todoObject;
    const html = `
    <div>${names}</div>
    <div>${dueDate}</div>
    <div><button onclick="
    todoList.splice(${index}, 1);
    
    renderTodoList();
    localStorage.setItem('list', JSON.stringify(todoList));
    " class="delete-todo-button">
    Delete</button></div>
    `;
    todoListHTML += html;
  });

  /*
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const names = todoObject.names;
    // const dueDate = todoObject.dueDate;
    const { names } = todoObject;
    const { dueDate } = todoObject;
    const html = `
    <div>${names}</div>
    <div>${dueDate}</div>
    <div><button onclick="
    todoList.splice(${i}, 1);
    
    renderTodoList();
    localStorage.setItem('list', JSON.stringify(todoList));
    " class="delete-todo-button">
    Delete</button></div>
    `;
    todoListHTML += html;
  }
  */

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

function addToDo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  const dateInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInputElement.value;

  if (name.trim() === "") {
    alert("Name cannot be empty.");
    return;
  }

  if (dueDate.trim() === "") {
    alert("Due date cannot be empty.");
    return;
  }
  todoList.push({ names: name, dueDate });

  localStorage.setItem("list", JSON.stringify(todoList));
  inputElement.value = "";
  renderTodoList();
}
