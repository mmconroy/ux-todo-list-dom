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

function renderTodoApp() {
  const app = document.querySelector("#app");
  const h1 = document.createElement("h1");
  const toDoListNode = document.createElement("form");

  h1.innerText = "Todo List";

  for (let task of todos) {
    const isChecked = task.completed ? "checked" : null;

    let html = `
  <ul style="list-style-type:none;">
    <li class="list-item">
    <input type=checkbox ${isChecked}>   
    <label>${task.description}</label>
    </li>
  </ul>`;

    toDoListNode.innerHTML += html;
  }

  app.appendChild(h1);
  app.appendChild(toDoListNode);
}
renderTodoApp();

// todos.completed
//todos.desscirtion

{
  /* <div id="app">
<ul>
  <li class="list-item">
    <input type="checkbox"/>
    Take Jim to the hair salon
  </li>
  <li class="list-item">
    <input type="checkbox"/>
    Drop off wedding invitation at mailbox
  </li> <li class="list-item">
  <input type="checkbox"/>
  Pick up the cake.
</li>
</ul>
</div> */
}
