import { pedirCarta } from "./pedir_carta";
import { acumularPuntos } from "./acumular_puntos";
import { crearCarta } from "./crear_carta";
import { determinarGanador } from "./determinar_ganador";

/**
 * cpuTurn
 * @description Lógica para el juego de la computadora,
 * Seguirá jugando hasta que iguale el puntaje del jugador,
 * obtenga 21 puntos o si el jugador perdió, pida una sola
 * carta.
 * @param {Number} puntosMinimos para ganar o empatar la partida
 * @param {Array<string>} deck arreglo con las cartas
 * @param {Array<Number>} puntosJugadores con los puntajes de los jugadores
 * @param {HTMLElement} span para mostrar el puntaje de la cpu
 * @param {HTMLElement} img para mostrar la carta del jugador.
 */
export const cpuTurn = (
  puntosMinimos,
  deck,
  puntosJugadores,
  $smalls,
  $cartasJugador
) => {
  do {
    const carta = pedirCarta(deck);
    acumularPuntos(carta, 1, puntosJugadores, $smalls[1]);
    crearCarta(carta, $cartasJugador[1]);

    if (puntosMinimos > 21) {
      break;
    }
  } while (puntosJugadores[1] < 21 && puntosJugadores[1] < puntosMinimos);

  determinarGanador(puntosJugadores);
};
