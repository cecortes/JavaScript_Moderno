import _ from "underscore";

/**
 * crearDeck
 * @description Crea un deck de cartas y lo ordena de forma aleatoria.
 * @param {Array<string>} tipos ["C", "H", "D", "S"];
 * @param {Array<string>} especiales ["A", "J", "Q", "K"];
 * @returns {Array<string>} deck
 */
export const crearDeck = (tipos, especiales) => {
  // 1. Inicializamos el deck dentro de la función para evitar efectos secundarios
  let deck = [];

  // 2. Definimos todos los valores posibles en un solo arreglo
  const valores = ["2", "3", "4", "5", "6", "7", "8", "9", "10", ...especiales];

  // 3. Un solo ciclo anidado para construir el mazo completo
  for (const tipo of tipos) {
    for (const valor of valores) {
      deck.push(`${valor}${tipo}`);
    }
  }

  // console.log(deck);

  // 4. Barajamos y retornamos el nuevo mazo
  return _.shuffle(deck);
};
