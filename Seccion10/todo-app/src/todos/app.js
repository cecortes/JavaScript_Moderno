import todoStore from "../store/todo.store";
import html from "./app.html?raw";
import { renderTodos } from "./use_cases";

const ElementsIDs = {
  $TodoList: ".todo-list",
  $NewTodoInput: "#new-todo-input",
};

/**
 * App
 * @description Funciona como un renderizador o un factory app,
 * Auto invoca a la función que crea un elemento y lo inyecta
 * en elementId que recibe como parámetro.
 * @param {String} elementId
 * @returns {void} None
 */
export const App = (elementId) => {
  //Renderizar lista de tareas
  const displayTodos = () => {
    const todos = todoStore.getTodos(todoStore.getCurrentFilter());
    renderTodos(ElementsIDs.$TodoList, todos);
  };

  // Patrón module, función autoinvoke cuando se carga App
  (() => {
    const app = document.createElement("div");
    app.innerHTML = html;
    document.querySelector(elementId).append(app);
    //Renderizar después de cargar el html
    displayTodos();
  })();

  //Referencias HTMLElement
  const newDescriptionInput = document.querySelector(ElementsIDs.$NewTodoInput);
  const todoListUL = document.querySelector(ElementsIDs.$TodoList);

  //Listeners
  newDescriptionInput.addEventListener("keyup", (event) => {
    //Validación no Enter y no Vacío
    if (event.keyCode !== 13 || event.target.value.trim() === 0) return;

    todoStore.addTodo(event.target.value.trim());
    displayTodos();
    event.target.value = "";
  });

  todoListUL.addEventListener("click", (event) => {
    const element = event.target.closest("[data-id]");
    //Toggle Todo
    todoStore.toggleTodo(element.getAttribute("data-id"));
    //Borrar Todo
    if (event.target.classList.contains("destroy"))
      todoStore.deleteTodo(element.getAttribute("data-id"));
    displayTodos();
  });
};
