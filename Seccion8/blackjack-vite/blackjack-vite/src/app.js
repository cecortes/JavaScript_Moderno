import _ from "underscore";
import {
  crearDeck,
  pedirCarta,
  crearCarta,
  acumularPuntos,
  cpuTurn,
} from "./usecases";

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
  crearCarta("red_back", $cartasJugador[0]);
  crearCarta("grey_back", $cartasJugador[1]);

  //Re iniciar contadores
  puntosJugadores[0] = 0;
  puntosJugadores[1] = 0;

  //Habilitar botones
  $pedirCarta.disabled = false;
  $detenJuego.disabled = false;
};

inicializarJuego();

//Eventos
$nuevoJuego.addEventListener("click", () => {
  inicializarJuego();
});

$pedirCarta.addEventListener("click", () => {
  const carta = pedirCarta(deck);

  let puntosJugador = acumularPuntos(carta, 0, puntosJugadores, $smalls[0]);
  crearCarta(carta, $cartasJugador[0]);

  if (puntosJugador > 21) {
    $pedirCarta.disabled = true;
    cpuTurn(puntosJugador, deck, puntosJugadores, $smalls, $cartasJugador);
  } else if (puntosJugador === 21) {
    $pedirCarta.disabled = true;
    cpuTurn(puntosJugador, deck, puntosJugadores, $smalls, $cartasJugador);
  }
});

$detenJuego.addEventListener("click", () => {
  $pedirCarta.disabled = true;
  $detenJuego.disabled - true;
  cpuTurn(puntosJugadores[0], deck, puntosJugadores, $smalls, $cartasJugador);
});
