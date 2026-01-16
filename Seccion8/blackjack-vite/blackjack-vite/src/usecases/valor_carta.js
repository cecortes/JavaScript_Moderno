/**
 * valorCarta
 * @description Evalúa la carta y regresa el valor en formato de número
 * @param {String} carta
 * @returns {Number} valor
 */
export const valorCarta = (carta) => {
  // Extremos todos los caracteres excepto el último
  const valor = carta.substring(0, carta.length - 1);

  return valor === "A" ? 11 : isNaN(valor) ? 10 : valor * 1;
};
