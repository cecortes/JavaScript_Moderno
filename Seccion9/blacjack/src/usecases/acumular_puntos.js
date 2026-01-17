import { valorCarta } from "./valor_carta";

/**
 * acumularPuntos
 *
 * @description Obtiene los puntos para el arreglo de jugadores,
 * la computadora se considera en la última posción del arreglo.
 * @param {Number} carta
 * @param {Number} turno del jugador 0 - user, 1 - cpu
 * @param {Array<String>} puntosJugadores arreglo con los puntajes para el jugador
 * @param {HTMLElement} Elemento HTML donde se muestra el puntaje
 * @returns {Number} puntaje acumulado para el jugador
 */
export const acumularPuntos = (carta, turno, puntosJugadores, smallsHtml) => {
  puntosJugadores[turno] += valorCarta(carta);
  smallsHtml.innerText = puntosJugadores[turno];
  return puntosJugadores[turno];
};
