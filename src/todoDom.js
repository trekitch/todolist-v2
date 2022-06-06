//createtodos accepts array of todo objects
//and makes div elements for each object
function createTodosElement(object) {
    const todoContainer = document.createElement("div");
    todoContainer.classList.add("todo-container");
    const toDoName = document.createElement("p");
    const toDoDue = document.createElement("p");
    const toDoPriority = document.createElement("p");
    toDoName.textContent = object.Name;
    toDoDue.textContent = object.Due;
    toDoPriority.textContent = object.Priority;
    todoContainer.append(toDoName, toDoDue, toDoPriority);
    return todoContainer;
}

function createToDoList(todoArray) {
    const parentDiv = document.querySelector(".todo-list");
    parentDiv.innerHTML = "";
    todoArray.forEach((element) => {
        parentDiv.append(createTodosElement(element));
    });
}

export { createToDoList };
