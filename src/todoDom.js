//createtodos accepts array of todo objects
//and makes div elements for each object
function createTodosElement(object) {
    const todoContainer = document.createElement("div");
    const todoList = document.querySelector(".todo-list");
    todoContainer.classList.add("todo-container");
    const toDoName = document.createElement("p");
    const toDoDue = document.createElement("p");
    const toDoPriority = document.createElement("p");
    const toDoDesc = document.createElement("div");
    toDoDesc.textContent = object.Desc;
    toDoDesc.classList.add("desc");

    toDoName.textContent = object.Name;
    toDoDue.textContent = object.Due;
    toDoPriority.textContent = object.Priority;
    todoContainer.append(toDoName, toDoDue, toDoPriority);
    todoList.appendChild(todoContainer);
    todoContainer.insertAdjacentElement("afterend", toDoDesc);
}

function createToDoList(todoArray) {
    const parentDiv = document.querySelector(".todo-list");
    parentDiv.innerHTML = "";
    todoArray.forEach((element) => {
        createTodosElement(element);
    });
}

function displayDetails() {
    const todoItems = document.querySelectorAll(".todo-container");

    console.log(todoItems);
    todoItems.forEach((todoItem) => {
        todoItem.addEventListener("click", () => {
            if (todoItem.nextSibling.style.display == "none") {
                todoItem.nextSibling.style.display = "block";
            } else {
                todoItem.nextSibling.style.display = "none";
            }
        });
    });
}

export { createToDoList, displayDetails };
