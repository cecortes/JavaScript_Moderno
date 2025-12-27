/**
 * EJERCICIOS DE PRÁCTICA: MÉTODO .unshift()
 * César, recuerda que esto mueve todos los índices hacia la derecha.
 */

// --- EJERCICIO 1: PRIORIDAD DE NOTICIAS ---
// Tienes un array con noticias antiguas. César, acaba de llegar una
// "NOTICIA DE ÚLTIMA HORA". Agrégala al principio del array.

const noticias = ["Clima de mañana", "Resultados del fútbol"];

// TU CÓDIGO AQUÍ:
console.log("> Ejercicio 1: PRIORIDAD DE NOTICIAS");
console.log("> Tienes un array con noticias antiguas.");
console.log("> César, acaba de llegar una 'NOTICIA DE ÚLTIMA HORA'.");
console.log("> Agrégala al principio del array.");
console.log("> Lista de noticias: ", noticias);
noticias.unshift("NOTICIA DE ÚLTIMA HORA");
console.log("> Lista de noticias: ", noticias);

console.log("*****************************************************");

/* SOLUCIÓN EJERCICIO 1:
noticias.unshift("NOTICIA DE ÚLTIMA HORA");
console.log(noticias); 
// Resultado: ["NOTICIA DE ÚLTIMA HORA", "Clima de mañana", "Resultados del fútbol"]
*/

// --- EJERCICIO 2: EL CLUB VIP ---
// Tienes una lista de espera. César, tú eres el dueño del club, así que
// debes agregarte a ti mismo ("César") y a "Invitado Especial" al
// principio de la lista en UNA sola línea de código.

const listaEspera = ["Pedro", "Luis", "Ana"];

// TU CÓDIGO AQUÍ:
console.log("> Ejercicio 2: EL CLUB VIP");
console.log("> Tienes una lista de espera. César,");
console.log("> tú eres el dueño del club, así que");
console.log("> debes agregarte a ti mismo ('César')");
console.log("> y a 'Invitado Especial' al principio de la lista");
console.log("> en UNA sola línea de código.");
console.log("> Lista de espera: ", listaEspera);
listaEspera.unshift("César", "Invitado Especial");
console.log("> Lista de espera: ", listaEspera);

console.log("*****************************************************");

/* SOLUCIÓN EJERCICIO 2:
listaEspera.unshift("César", "Invitado Especial");
console.log(listaEspera);
// Resultado: ["César", "Invitado Especial", "Pedro", "Luis", "Ana"]
*/

// --- EJERCICIO 3: CRONOLOGÍA INVERSA ---
// Tienes un array de números que representan años: [2023, 2024].
// 1. Agrega el año 2022 al principio usando .unshift().
// 2. Guarda el valor que DEVUELVE el método en una variable llamada "totalAños".
// 3. Imprime: "César, ahora tenemos [totalAños] años registrados".

const anhos = [2023, 2024];

// TU CÓDIGO AQUÍ:
console.log("> Ejercicio 3: CRONOLOGÍA INVERSA");
console.log("> Tienes un array de números que");
console.log("> representan años: [2023, 2024].");
console.log("> 1. Agrega el año 2022 al principio usando .unshift().");
console.log("> 2. Guarda el valor que DEVUELVE el método en una");
console.log("> variable llamada 'totalAños'.");
console.log(
  "> 3. Imprime: 'César, ahora tenemos [totalAños] años registrados'."
);
console.log("> Lista de años: ", anhos);
let totalAnhos = anhos.push(2022);
console.log(`César, ahora tenemos ${totalAnhos} años registrados`);

console.log("*****************************************************");

/* SOLUCIÓN EJERCICIO 3:
const totalAnhos = anhos.unshift(2022);
console.log(`César, ahora tenemos ${totalAnhos} años registrados`);
// Imprime: "César, ahora tenemos 3 años registrados"
*/

console.log("¡Excelente, César! Ya sabes controlar ambos extremos del array.");
