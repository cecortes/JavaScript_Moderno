import { heroes } from "../data/heroes";

/**
 * environmentsComponent
 * @description Recibe un div y le inyecta un contenido
 * @param {HTMLDivElement} element
 */
export const callbacksComponent = (element) => {
  const id = "5d86371fd55e2e2a30fe1ccb1";

  /* Manera Simple de manejar los errores en el callback
  findHero(id, (drStrange) => {
    element.innerHTML = drStrange?.name || `No existe heroe con ese ID: ${id}`;
  });
  */

  // Standard para manejar errores en el callback
  findHero(id, (error, drStrange) => {
    if (error) {
      element.innerHTML = error;
      return;
    }

    element.innerHTML = drStrange.name;
  });
};

/**
 *
 * @param {String} id
 * @param {(error: String|null, hero: Object) => void} callback
 */
const findHero = (id, callback) => {
  const hero = heroes.find((hero) => hero.id === id);

  // Forma standard del manejo de errores
  if (!hero) {
    callback(`Hero with id: ${id}, not found!!!`);
    return; //undefined
  }

  callback(null, hero);
};
