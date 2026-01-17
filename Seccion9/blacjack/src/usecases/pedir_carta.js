/**
 * pedirCarta
 * @description
 * @param {Array<string>} deck de cartas
 * @return {String} carta
 */
export const pedirCarta = (deck) => {
  if (deck.length === 0) {
    throw "No hay más cartas";
  }

  return deck.pop();
};
