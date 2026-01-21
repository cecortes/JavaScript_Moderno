import todoStore from "../store/todo.store";
import html from "./app.html?raw";
import { renderTodos } from "./use_cases";

const ElementsIDs = {
  $TodoList: ".todo-list",
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
};
