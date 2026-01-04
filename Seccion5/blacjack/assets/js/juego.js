/*
Referencia:
C - Clubs (Tréboles)
H - Hearts (Corazones)
D - Diamonds (Diamantes)
S - Spears (Espadas)
*/

const $nuevoJuego = document.querySelector("#btnNew");
const $pedirCarta = document.querySelector("#btnAsk");
const $detenJuego = document.querySelector("#btnStop");
const $smalls = document.querySelectorAll("small");
const $playerCards = document.querySelector("#jugador-cartas");
const $cpuCards = document.querySelector("#cpu-cartas");

let deck = [];
const tipos = ["C", "H", "D", "S"];
const especiales = ["A", "J", "Q", "K"];

let puntosJugador = 0,
  puntosCpu = 0;

/**
 * crearDeck
 * @param void
 * @returns Shuffle array
 */
const crearDeck = () => {
  for (let i = 2; i <= 10; i++) {
    for (let tipo in tipos) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tipos) {
    for (let esp of especiales) {
      deck.push(esp + tipo);
    }
  }

  //console.log(deck);
  deck = _.shuffle(deck);
  //console.log(deck);

  return deck;
};

/**
 * crearDeck2
 * @description Crea un deck de cartas y lo ordena de forma aleatoria.
 * @param {Array} tipos
 * @param {Array} especiales
 * @returns {Array} deck
 */
const crearDeck2 = (tipos, especiales) => {
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

  let carta = deck.pop();
  return carta;
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
    puntosCpu += valorCarta(carta);
    $smalls[1].innerText = puntosCpu;

    const imgCarta = document.createElement("img");
    imgCarta.classList.add("carta");
    imgCarta.src = `./assets/cartas/${carta}.png`;
    $cpuCards.append(imgCarta);

    if (puntosMinimos > 21) {
      break;
    }
  } while (puntosCpu < 21 && puntosCpu < puntosMinimos);

  setTimeout(() => {
    puntosCpu === puntosMinimos
      ? alert("Empate!!!")
      : (puntosCpu < 21 && puntosMinimos > 21) ||
        (puntosCpu < 21 && puntosCpu > puntosMinimos)
      ? alert("CPU ha ganado!!!")
      : alert("Has ganado!!!");
  }, 500);
};

deck = crearDeck2(tipos, especiales);
//Eventos
$nuevoJuego.addEventListener("click", () => {
  // Reiniciamos table
  $playerCards.innerHTML = "";
  $cpuCards.innerHTML = "";

  let imgDeck = document.createElement("img");
  imgDeck.classList.add("carta");
  imgDeck.src = "./assets/cartas/red_back.png";
  $playerCards.append(imgDeck);
  imgDeck = document.createElement("img");
  imgDeck.classList.add("carta");
  imgDeck.src = "./assets/cartas/grey_back.png";
  $cpuCards.append(imgDeck);

  //Re iniciar contadores
  puntosJugador = 0;
  puntosCpu = 0;
  $smalls[0].innerText = 0;
  $smalls[1].innerText = 0;

  // Nuevo Deck
  deck = crearDeck2(tipos, especiales);

  //Habilitar botones
  $pedirCarta.disabled = false;
  $detenJuego.disabled = false;
});
$pedirCarta.addEventListener("click", () => {
  const carta = pedirCarta(deck);
  puntosJugador += valorCarta(carta);
  $smalls[0].innerText = puntosJugador;

  const imgCarta = document.createElement("img");
  imgCarta.classList.add("carta");
  imgCarta.src = `./assets/cartas/${carta}.png`;
  $playerCards.append(imgCarta);

  if (puntosJugador > 21) {
    $pedirCarta.disabled = true;
    console.warn("Has perdido!!!");
    //alert("Has perdido!!!");
    cpuTurn(puntosJugador);
  } else if (puntosJugador === 21) {
    $pedirCarta.disabled = true;
    console.warn("Has GANADO!!!");
    //alert("Has GANADO!!!");
    cpuTurn(puntosJugador);
  }
});
$detenJuego.addEventListener("click", () => {
  $pedirCarta.disabled = true;
  $detenJuego.disabled - true;
  cpuTurn(puntosJugador);
});
