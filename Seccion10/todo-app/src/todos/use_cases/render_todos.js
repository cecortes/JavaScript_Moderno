import { createTodoHtml } from "./";

/**
 *
 * @param {HTMLElement} elementId identificador del elemento HTML
 * @param {Array<object>} todos Arreglo de objetos tareas.
 */
export const renderTodos = (elementId, todos = []) => {
  const element = document.querySelector(elementId);

  todos.forEach((todo) => {
    element.append(createTodoHtml(todo));
  });
};
