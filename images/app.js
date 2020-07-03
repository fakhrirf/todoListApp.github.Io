
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todolist = document.querySelector(".todo-list");


Button.addEventListener('click', addTodoList);


//function

function addTodoList(event){
    event.preventDafault();
}

const todoDiv = document.createElement('div');
todoDiv.classList.add('todo')

const newTodo = document.createElement('li');
newTodo.innerText = 'hey';
newTodo.classList.add('todo-item');
todoDiv.appendChild(newTodo);

const completedButton = document.createElement('button');
completedButton.innerHTML = '<i class="fa fa-check-square-o"></i>';
todoDiv.appendChild(completedButton);

const trashButton = document.createElement('button')
trashButton.innerHTML = `<i class="fa fa-trash"><i>`;
trashButton.classList.add("complete-btn");
todoDiv.appendChild(trashButton);

todoList.appendChild(todoDiv);

todoInput.value = "";