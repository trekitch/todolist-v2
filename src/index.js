import "./styles.css";
import { todos } from "./todo";
import { createToDoList } from "./todoDom";

const mainHeading = document.querySelector(".main-header");
const inbox = document.querySelector(".inbox");

inbox.addEventListener("click", () => {
    let newTodoList = todos.filter((todo) => todo.Project === "Inbox");
    mainHeading.textContent = "Inbox";
    createToDoList(newTodoList);
});

console.log(todos);
