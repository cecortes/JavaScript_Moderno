/**
 * determinarGanador
 * @description Muestras las alerts dependiendo de que jugador ganó
 * @param {Array<Number>} puntosJugadores puntaje acumulado por jugador
 * @returns {None}
 */
export const determinarGanador = (puntosJugadores) => {
  // Desestructurar puntos jugadores
  const [puntosMinimos, puntosCpu] = puntosJugadores;

  setTimeout(() => {
    puntosCpu === puntosMinimos
      ? alert("Empate!!!")
      : (puntosCpu < 21 && puntosMinimos > 21) ||
        (puntosCpu < 21 && puntosCpu > puntosMinimos)
      ? alert("CPU ha ganado!!!")
      : alert("Has ganado!!!");
  }, 500);
};
