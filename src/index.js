import "./styles.css";
import { todos } from "./todo";
import { createToDoList, addTodoForm } from "./todoDom";

const mainHeading = document.querySelector(".main-header");
const todoForm = document.querySelector(".add-todo-form");
const inbox = document.querySelector(".inbox");
const today = document.querySelector(".today");

const addTodo = document.querySelector(".add-todo");

inbox.addEventListener("click", () => {
    let newTodoList = todos.filter((todo) => todo.Project === "Inbox");
    mainHeading.textContent = "Inbox";
    createToDoList(newTodoList);
});

addTodo.addEventListener("click", () => {
    todoForm.style.display = "block";
    addTodo.style.display = "none";
});

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("submitted form");
    todoForm.style.display = "none";
    addTodo.style.display = "block";
});
