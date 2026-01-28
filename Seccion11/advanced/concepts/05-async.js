import { heroes } from "../data/heroes";

/**
 * environmentsComponent
 * @description Recibe un div y le inyecta un contenido
 * @param {HTMLDivElement} element
 */
export const asyncComponent = (element) => {
  const id1 = "5d86371f9f80b591f499df32";

  // Producto de la función
  // console.log(findHero(id1));

  // Ocupamos then porque async vuelve a la función una promesa
  findHero(id1)
    .then((name) => (element.innerHTML = name))
    .catch((error) => (element.innerHTML = error));
};

/**
 * @function findHero
 * @description Busca un heroe por el id que recibe
 * @param {String} id
 * @returns {Promise<string>} hero
 */
const findHero = async (id) => {
  try {
    const hero = heroes.find((hero) => hero.id === id);
    return hero.name;
  } catch (error) {
    throw error;
  }
};
