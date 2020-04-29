let todos = [
  {
    completed: false,
    description: "Take Jim to the hair salon",
  },
  {
    completed: true,
    description: "Drop off wedding invitation at mailbox",
  },
  {
    completed: false,
    description: "Pick up the cake",
  },
  {
    completed: false,
    description: "Call the caterers",
  },
];

///Function - create checklist
function renderTodoApp() {
  const app = document.querySelector("#app");
  const toDoListNode = document.querySelector(".todo-list");
  toDoListNode.innerHTML = "";
  for (let task of todos) {
    const isChecked = task.completed ? "checked" : "";
    let html = `
    <li class="list-item">
    <input type=checkbox ${isChecked}>
    <label>${task.description}</label>
    </li>`;

    toDoListNode.innerHTML += html;
  }

  app.appendChild(toDoListNode);
}
renderTodoApp();

const submitButton = document.querySelector("#submitBtn");
const textOutputEl = document.querySelector("#textOutput");
const todoListItemInput = document.querySelector("todoListItemName");

// submitButton.onclick = (event) => {
//   event.preventDefault();
//   const todoListItemName = todoListItemInput.value;

//   for (let i = 0; i < todos.length; i++) {
//     let checkbox = toDoListNode[i];
//     if (checkbox.checked) {
//       todoListItemInput.push(checkbox);
//     }
//   }

//   textOutputEl.innerHTML = todoListItemName;
// };

//selectors
const todoListInput = document.querySelector(".todo-list-input");
const submitBtn = document.querySelector(".submit-btn");
const todoList = document.querySelector(".todo-list");

//Event Listeners
submitBtn.addEventListener("click", addTodo);

//Function - add new todo
function addTodo(event) {
  event.preventDefault();
  let newTodo = {
    description: todoListInput.value,
    completed: false,
  };
  todos.unshift(newTodo);

  renderTodoApp();
}

//Remove List Item on Check
let checkboxes = document.querySelectorAll(".list-item");
for (let checkbox of checkboxes) {
  checkbox.addEventListener("change", () => {});
}

//   const todoDiv = document.createElement("div");
//   todoDiv.classList.add("todo");

//   const newTodo = document.createElement("li");
//   newTodo.innerText = todoListInput.value;
//   newTodo.classList.add("todo-item");
//   todoDiv.appendChild(newTodo);

//   const completedButton = document.createElement("button");
//   completedButton.innerText = "Completed";
//   completedButton.classList.add("complete-btn");
//   todoDiv.appendChild(completedButton);

//   const TrashButton = document.createElement("button");
//   TrashButton.innerText = "Remove";
//   TrashButton.classList.add("trash-btn");
//   todoDiv.appendChild(TrashButton);

//   todoList.appendChild(todoDiv);

//   todoListInput.value = "";
