import _ from "underscore";
import { crearDeck } from "./usecases/create_deck";
("use strict");

const $nuevoJuego = document.querySelector("#btnNew");
const $pedirCarta = document.querySelector("#btnAsk");
const $detenJuego = document.querySelector("#btnStop");
const $smalls = document.querySelectorAll("small");
const $cartasJugador = document.querySelectorAll(".divCartas");

let deck = [];
const tipos = ["C", "H", "D", "S"];
const especiales = ["A", "J", "Q", "K"];

let puntosJugadores = [];

/**
 * inicializarJuego
 * @description Instancia el deck
 * @param {Number} numJugadores default 2
 * @returns None
 */
const inicializarJuego = (numJugadores = 2) => {
  deck = crearDeck(tipos, especiales);

  //Agregar número de jugadores
  for (let i = 0; i < numJugadores; i++) {
    puntosJugadores.push(0);
  }

  // Reiniciamos table
  $cartasJugador.forEach((element) => (element.innerText = ""));
  $smalls.forEach((element) => (element.innerText = 0));
  crearCarta("red_back", 0);
  crearCarta("grey_back", 1);

  //Re iniciar contadores
  puntosJugadores[0] = 0;
  puntosJugadores[1] = 0;

  //Habilitar botones
  $pedirCarta.disabled = false;
  $detenJuego.disabled = false;
};

/**
 * pedirCarta
 * @description
 * @param {Array} deck
 * @return {String} carta
 */
const pedirCarta = (deck) => {
  if (deck.length === 0) {
    throw "No hay más cartas";
  }

  return deck.pop();
};

/**
 * valorCarta
 * Evalúa la carta y regresa el valor en formato de número
 * @param {String} carta
 * @returns {Number} valor
 */
const valorCarta = (carta) => {
  // Extremos todos los caracteres excepto el último
  const valor = carta.substring(0, carta.length - 1);

  return valor === "A" ? 11 : isNaN(valor) ? 10 : valor * 1;
};

/**
 * acumularPuntos
 *
 * @description Obtiene los puntos para el arreglo de jugadores,
 * la computadora se considera en la última posción del arreglo.
 * @param {Number} carta
 * @param {Number} turno
 * @returns
 */
const acumularPuntos = (carta, turno) => {
  puntosJugadores[turno] += valorCarta(carta);
  $smalls[turno].innerText = puntosJugadores[turno];
  return puntosJugadores[turno];
};

/**
 * crearCarta
 *
 * @description Crea una carta y la muestra en el contenedor que
 * recibe por parámetro, el contenedor es un arreglo.
 * @param {Number} carta
 * @param {Number} turno
 * @returns None
 */
const crearCarta = (carta, turno) => {
  const imgCarta = document.createElement("img");
  imgCarta.classList.add("carta");
  imgCarta.src = `./assets/cartas/${carta}.png`;
  $cartasJugador[turno].append(imgCarta);
};

/**
 * determinarGanador
 * @description Muestras las alerts dependiendo de que jugador ganó
 * @param {None}
 * @returns {None}
 */
const determinarGanador = () => {
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

/**
 * cpuTurn
 * @description Lógica para el juego de la computadora,
 * Seguirá jugando hasta que iguale el puntaje del jugador,
 * obtenga 21 puntos o si el jugador perdió, pida una sola
 * carta.
 * @param {Number} puntosMinimos
 */
const cpuTurn = (puntosMinimos) => {
  do {
    const carta = pedirCarta(deck);
    acumularPuntos(carta, 1);
    crearCarta(carta, 1);

    if (puntosMinimos > 21) {
      break;
    }
  } while (puntosJugadores[1] < 21 && puntosJugadores[1] < puntosMinimos);

  determinarGanador();
};

inicializarJuego();

//Eventos
$nuevoJuego.addEventListener("click", () => {
  inicializarJuego();
});

$pedirCarta.addEventListener("click", () => {
  const carta = pedirCarta(deck);

  let puntosJugador = acumularPuntos(carta, 0);
  crearCarta(carta, 0);

  if (puntosJugador > 21) {
    $pedirCarta.disabled = true;
    cpuTurn(puntosJugador);
  } else if (puntosJugador === 21) {
    $pedirCarta.disabled = true;
    cpuTurn(puntosJugador);
  }
});

$detenJuego.addEventListener("click", () => {
  $pedirCarta.disabled = true;
  $detenJuego.disabled - true;
  cpuTurn(puntosJugadores[0]);
});
