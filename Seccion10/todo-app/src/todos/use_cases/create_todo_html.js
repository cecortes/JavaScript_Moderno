/**
 * createTodoHtml
 * @description Crea una entrada en la lista de tareas, con el objeto que recibe como parámetro.
 * @param {Object<todo>} todo Objeto del tipo tarea.
 * @returns {HTMLElement} Elemento del tipo li.
 */
export const createTodoHtml = (todo) => {
  if (!todo) throw new Error("Todo Object is requiered");

  // Destructuración de todo
  const { done, description, id } = todo;

  const html = `
    <div class="view">
      <input class="toggle" type="checkbox" ${done ? "checked" : ""}   />
      <label>${description}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template" />`;
  const liElement = document.createElement("li");
  liElement.innerHTML = html;
  liElement.setAttribute("data-id", id);

  if (done) liElement.classList.add("completed");

  return liElement;
};
