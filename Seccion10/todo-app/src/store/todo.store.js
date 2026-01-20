import { Todo } from "../todos/models/todo.model";

/**
 * Ocupamos otro objeto para contener las opciones posibles de los filtros que ocupara el objeto 'state' y no dejarlo hardcode.
 */
const Filters = {
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
  ],
  //filtro: "all", -> No es buena práctica.
  filtro: Filters.All,
};

const initStore = () => {
  console.log(state);

  console.log("InitStore 💩");
};

export default {
  initStore,
};
