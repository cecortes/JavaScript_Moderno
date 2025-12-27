/**
 * EJERCICIOS DE PRÁCTICA: MÉTODO .pop()
 * César, recuerda: .pop() no necesita argumentos y devuelve el elemento eliminado.
 */

// --- EJERCICIO 1: ELIMINACIÓN SIMPLE ---
// Tienes una lista de invitados, pero el último ("Juan") no podrá asistir.
// Usa .pop() para eliminarlo del array.

const invitados = ["César", "Ana", "Lucía", "Juan"];

// TU CÓDIGO AQUÍ:
console.log("> Ejercicio 1: ELIMINACIÓN SIMPLE");
console.log("> Tienes una lista de invitados, pero el último");
console.log("> ('Juan') no podrá asistir.");
console.log("> Usa .pop() para eliminarlo del array.");
console.log("> Lista de invitados: ", invitados);
invitados.pop();
console.log("> Lista de invitados: ", invitados);

console.log("*****************************************************");

/* SOLUCIÓN EJERCICIO 1:
invitados.pop();
console.log(invitados); // ["César", "Ana", "Lucía"]
*/

// --- EJERCICIO 2: MOVER DE UNA LISTA A OTRA ---
// Tienes dos arrays: "tareasPendientes" y "tareasCompletadas".
// Quita la ÚLTIMA tarea de pendientes y agrégala a completadas usando .pop() y .push().

const tareasPendientes = ["Lavar platos", "Alimentar al gato", "Regar plantas"];
const tareasCompletadas = [];

// TU CÓDIGO AQUÍ:
console.log("> Ejercicio 2: MOVER DE UNA LISTA A OTRA");
console.log("> Tienes dos arrays: 'tareasPendientes' y 'tareasCompletadas'.");
console.log("> Quita la ÚLTIMA tarea de pendientes y");
console.log("> agrégala a completadas usando .pop() y .push().");
console.log("> Lista de pendientes: ", tareasPendientes);

let completada = tareasPendientes.pop();
tareasCompletadas.push(completada);

console.log("> Lista de pendientes: ", tareasPendientes);
console.log("> Lista de completadas: ", tareasCompletadas);

console.log("*****************************************************");

/* SOLUCIÓN EJERCICIO 2:
// Paso 1: Sacamos la última tarea y la guardamos en una constante
const tareaTerminada = tareasPendientes.pop();

// Paso 2: La metemos en el array de completadas
tareasCompletadas.push(tareaTerminada);

console.log("Pendientes:", tareasPendientes); // ["Lavar platos", "Alimentar al gato"]
console.log("César, completaste:", tareasCompletadas); // ["Regar plantas"]
*/

// --- EJERCICIO 3: EL CONTROLADOR DE PILA (STACK) ---
// Tienes un mazo de cartas. Crea una condición:
// Si al sacar la última carta con .pop() resulta ser un "As",
// imprime "¡César, ganaste la partida!". Si no, imprime "Sigue intentando".

const mazo = ["7 de Espadas", "Reina de Corazones", "As"];

// TU CÓDIGO AQUÍ:
console.log("> Ejercicio 3: EL CONTROLADOR DE PILA (STACK)");
console.log("> Tienes un mazo de cartas. Crea una condición:");
console.log("> Si al sacar la última carta con .pop() resulta ser un 'As',");
console.log("> imprime '¡César, ganaste la partida!'.");
console.log("> Si no, imprime 'Sigue intentando'.");
console.log("> Mazo: ", mazo);

let carta = mazo.pop();
carta === "As"
  ? console.log("¡César, ganaste la partida!")
  : console.log("Sigue intentando");

console.log("*****************************************************");

/* SOLUCIÓN EJERCICIO 3:
const cartaSacada = mazo.pop();

if (cartaSacada === "As") {
    console.log("¡César, ganaste la partida!");
} else {
    console.log("Sigue intentando, César.");
}
*/

console.log(
  "¡Práctica terminada! Ya eres un experto quitando elementos del final, César."
);
