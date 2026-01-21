/**
 * createTodoHtml
 * @description Crea una entrada en la lista de tareas, con el objeto que recibe como parámetro.
 * @param {Object<todo>} todo Objeto del tipo tarea.
 * @returns {HTMLElement} Elemento del tipo li.
 */
export const createTodoHtml = (todo) => {
  if (!todo) throw new Error("Todo Object is requiered");

  const html = `<h1>${todo.description}</h1>`;
  const liElement = document.createElement("li");
  liElement.innerHTML = html;

  return liElement;
};
