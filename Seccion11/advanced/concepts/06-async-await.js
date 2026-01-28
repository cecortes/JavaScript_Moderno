import { heroes } from "../data/heroes";

/**
 * environmentsComponent
 * @description Recibe un div y le inyecta un contenido
 * @param {HTMLDivElement} element
 */
export const asyncAwaitComponent = async (element) => {
  const id1 = "5d86371f2343e37870b91ef1";
  const id2 = "5d86371fd55e2e2a30fe1ccb2";

  try {
    const hero1 = await findHero(id1);
    const hero2 = await findHero(id2);

    element.innerHTML = `${hero1.name} / ${hero2.name}`;
  } catch (error) {
    element.innerHTML = error;
  }
};

/**
 * @function findHero
 * @description Busca un heroe por el id que recibe
 * @param {String} id
 * @returns {Promise<string>} hero
 */
const findHero = async (id) => {
  const hero = heroes.find((hero) => hero.id === id);
  return hero;
};
