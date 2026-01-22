import { createTodoHtml } from "./";

let element;

/**
 *
 * @param {HTMLElement} elementId identificador del elemento HTML
 * @param {Array<object>} todos Arreglo de objetos tareas.
 */
export const renderTodos = (elementId, todos = []) => {
  if (!element) element = document.querySelector(elementId);

  if (!element) throw new Error(`Element: ${elementId}, not founded`);

  element.innerHTML = "";

  todos.forEach((todo) => {
    element.append(createTodoHtml(todo));
  });
};
