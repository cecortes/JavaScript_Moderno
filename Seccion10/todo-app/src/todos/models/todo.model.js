import { v4 as uuid } from "uuid";
/**
 * Todo
 * @description Clase para crear nuevas instancias de la
 * lista de tareas
 */
export class Todo {
  /**
   * @description Crea una nueva instancia de la lista de tareas,
   * con propiedades id, description, done y createdAt
   * @param {String} description
   */
  constructor(description) {
    this.id = uuid();
    this.description = description;
    this.done = false;
    this.createdAt = new Date();
  }
}
