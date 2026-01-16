/**
 * crearCarta
 *
 * @description Crea una carta y la muestra en el contenedor que
 * recibe por parámetro, el contenedor es un arreglo.
 * @param {Number} carta
 * @param {HTMLElement} Imagen de la carta
 * @returns None
 */
export const crearCarta = (carta, htmlCarta) => {
  const imgCarta = document.createElement("img");
  imgCarta.classList.add("carta");
  imgCarta.src = `./assets/cartas/${carta}.png`;
  htmlCarta.append(imgCarta);
};
