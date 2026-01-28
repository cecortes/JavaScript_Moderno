import { heroes } from "../data/heroes";

/**
 * environmentsComponent
 * @description Recibe un div y le inyecta un contenido
 * @param {HTMLDivElement} element
 */
export const promiseComponent = (element) => {
  const renderHero = (hero) => {
    element.innerHTML = hero.name;
  };

  const renderTwoHero = (hero1, hero2) => {
    element.innerHTML = `
      <h3> ${hero1.name} </h3>
      <h3> ${hero2.name} </h3>
    `;
  };

  const renderError = (error) => {
    element.innerHTML = `<h3> ${error} </h3>`;
  };

  const id1 = "5d86371f25a058e5b1c8a65e";
  const id2 = "5d86371f9f80b591f499df32";
  let hero1;

  // Forma natural
  //findHero(id1).then((superHeroe) => renderHero(superHeroe));

  // Forma función como referencia
  //findHero(id1).then(renderHero).catch(renderError);

  //! Sin promise hell, Promesas encadenadas cuando retornamos una promesa.
  // findHero(id1)
  //   .then((hero) => {
  //     hero1 = hero;
  //     return findHero(id2);
  //   })
  //   .then((hero2) => {
  //     renderTwoHero(hero1, hero2);
  //   })
  //   .catch(renderError);

  // Promise.all espera a que todas las promesas terminen
  Promise.all([findHero(id1), findHero(id2)])
    .then(([hero1, hero2]) => {
      renderTwoHero(hero1, hero2);
    })
    .catch(renderError);
};

/**
 * @function findHero
 * @description Busca un heroe por el id que recibe
 * @param {String} id
 * @returns {Promise}
 */
const findHero = (id) => {
  return new Promise((resolve, reject) => {
    const hero = heroes.find((hero) => hero.id === id);

    // Bloque decisión para resolve
    if (hero) {
      resolve(hero);
      return;
    }

    // Bloque reject
    reject(`Hero with id: ${id}, not found`);
  });

  // Return Promise
};
