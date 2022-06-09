//this module with control CRUD for todos

const todos = [
    { Name: "test 1", Due: "09/26/1995", Desc: "test 3", Priority: "Mid", Project: "Inbox" },
    { Name: "test 1", Due: "09/26/2022", Desc: "This is a desc", Priority: "Mid", Project: "Inbox" },
];

const createTodo = (name, dueDate, description, priority, projectId) => {
    let todo = {
        Name: name,
        Due: dueDate,
        Desc: description,
        Priority: priority,
        Project: projectId,
    };
    todos.push(todo);

    idElements(todos);
};

function idElements(todoArray) {
    //adds id number to each item in the array
    todoArray.forEach((element, index) => {
        element.id = index;
    });
}

function updateTodo(id, todosArray, updatedName, updatedDue, updatedDesc, updatedNotes, updatedPriority) {
    for (const obj of todosArray) {
        if (obj.id === id) {
            obj.Name = updatedName;
            obj.Due = updatedDue;
            obj.Desc = updatedDesc;
            obj.Notes = updatedNotes;
            obj.Priority = updatedPriority;

            break;
        }
    }
}

function deleteTodo(todosArray, id) {
    todosArray.forEach((element, index) => {
        if (element.id === id) {
            todosArray.splice(index, 1);
        }
    });

    idElements(todos);
}

export { todos, createTodo, updateTodo, deleteTodo };
