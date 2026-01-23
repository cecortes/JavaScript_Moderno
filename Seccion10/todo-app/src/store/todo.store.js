import { Todo } from "../todos/models/todo.model";

/**
 * Ocupamos otro objeto para contener las opciones posibles de los filtros que ocupara el objeto 'state' y no dejarlo hardcode.
 */
export const Filters = {
  All: "all",
  Completed: "Completed",
  Pending: "Pending",
};

/**
 * El estado contiene el arreglo con la lista de tareas, además del tipo de filtro a aplicar, en estado inicial será 'all'.
 */
const state = {
  todos: [
    new Todo("Piedra del alma"),
    new Todo("Piedra del infinito"),
    new Todo("Piedra PicaPiedra"),
    new Todo("Piedra Papel o Tijera"),
    new Todo("Piedra como la cabecera"),
  ],
  //filtro: "all", -> No es buena práctica.
  filtro: Filters.All,
};

/**
 *
 */
const initStore = () => {
  loadStore();
};

/**
 * getTodos
 * @description Regresa la lista de todos dependiendo el filtro que se aplica como parámetro.
 * @param {Object} filter options are All, Completed and Pending
 * @returns {Array<String>} Arreglo con las tareas que cumplan con el filtro.
 */
const getTodos = (filter = Filters.All) => {
  switch (filter) {
    case Filters.All:
      return [...state.todos];

    case Filters.Completed:
      return state.todos.filter((todo) => todo.done);

    case Filters.Pending:
      return state.todos.filter((todo) => !todo.done);

    default:
      throw new Error(`Option $[filter] is not valid!!!`);
  }
};

/**
 *
 */
const loadStore = () => {
  if (!localStorage.getItem("state")) return;

  const { todos = [], filter = Filters.All } = JSON.parse(
    localStorage.getItem("state"),
  );
  state.todos = todos;
  state.filter = filter;
};

/**
 * saveStateToLocalStorage
 * @description Guarda el objeto state en el localStorage.
 * @param {Void} Void
 * @returns{Void} Nothing
 */
const saveStateToLocalStorage = () => {
  localStorage.setItem("state", JSON.stringify(state));
};

/**
 * addTodo
 * @description Valida la descripción y agrega una nueva tarea al arreglo de tareas en state.
 * Llama a la funci[on para guardar en el localStorage.
 * @param {String} description
 */
const addTodo = (description) => {
  if (!description) throw new Error("Description is requiered");

  state.todos.push(new Todo(description));

  saveStateToLocalStorage();
};

/**
 *
 * @param {String} todoId
 */
const toggleTodo = (todoId) => {
  //Ocupamos map porque devuelve un arreglo
  state.todos = state.todos.map((todo) => {
    // Evaluámos el id de la tarea
    if (todo.id === todoId) {
      todo.done = !todo.done; // Si false change to false.
    }
    return todo;
  });

  saveStateToLocalStorage();
};

/**
 * deleteTodo
 * @description Genera un nuevo arreglo con todos las tareas excepto la que se quiere eliminar, gracias al método filter.
 * @param {String} todoId
 */
const deleteTodo = (todoId) => {
  // Devuelve un array con todos los Todos excepto el que se quiere borrar
  state.todos = state.todos.filter((todo) => todo.id !== todoId);

  saveStateToLocalStorage();
};

/**
 * delCompleted
 * @description Genera un nuevo arreglo con todas las tareas excepto las completadas.
 */
const delCompleted = () => {
  // Devuelve un array con todos los Todos excepto los completados
  state.todos = state.todos.filter((todo) => !todo.done);

  saveStateToLocalStorage();
};

/**
 * setFilter
 * @description cambia el filtro por el parámetro que recibe como Filters
 * @param {Filters} newFilter options are All, Completed and Pending
 */
const setFilter = (newFilter = Filters.All) => {
  state.filtro = newFilter;

  saveStateToLocalStorage();
};

/**
 * getCurrentFilter
 * @description Obtiene el filtro aplicado al estado y lo devuelve.
 * @returns Filtro aplicado al estado, puede ser All, Completed or Pending.
 */
const getCurrentFilter = () => {
  return state.filtro;
};

// Dentro del export default podemos exportar n número de funciones que necesitemos.
export default {
  addTodo,
  delCompleted,
  deleteTodo,
  getCurrentFilter,
  getTodos,
  initStore,
  loadStore,
  setFilter,
  toggleTodo,
};
