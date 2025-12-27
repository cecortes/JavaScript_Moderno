/**
 * HOLA CÉSAR, BIENVENIDO AL MÉTODO .forEach()
 * * 1. ¿QUÉ ES?
 * Es un método que te permite RECORRER (iterar) cada elemento de un array.
 * Imagina que le das una orden a cada persona de una fila, una por una.
 * * 2. DIFERENCIA CON EL BUCLE 'FOR' TRADICIONAL:
 * En un 'for' manual, tú controlas el índice (i). En .forEach(),
 * JavaScript se encarga de darte el elemento directamente.
 */

// 3. ESTRUCTURA Y SINTAXIS:
/*
   array.forEach(function(elemento, indice, arrayOriginal) {
       // Código que se ejecuta por cada elemento
   });
*/

// 4. ¿QUÉ DEVUELVE?
// Devuelve 'undefined'. César, esto es IMPORTANTE: .forEach() no crea
// un nuevo array, solo ejecuta acciones sobre el que ya existe.

// --- EJEMPLOS PRÁCTICOS ---

console.log("> Ejemplo A: Forma clásica (Función anónima) ");
const herramientas = ["Martillo", "Taladro", "Sierra"];

// Ejemplo A: Forma clásica (Función anónima)
herramientas.forEach(function (herramienta) {
  console.log("César está guardando: " + herramienta);
});

console.log("*****************************************");

// Ejemplo B: Forma moderna (Arrow Function - La más usada)
// Solo necesitamos un parámetro (el elemento actual)
console.log("> Ejemplo B: Forma moderna (Arrow Function) ");
herramientas.forEach((item) => console.log("Revisando: " + item));

console.log("*****************************************");

/**
 * 5. LOS TRES PARÁMETROS DISPONIBLES:
 * El forEach puede darte hasta 3 cosas en cada vuelta:
 * 1. El elemento actual (obligatorio para que tenga sentido)
 * 2. El índice (la posición, empezando en 0)
 * 3. El array completo (el que estás recorriendo)
 */
console.log("> El forEach puede darte hasta 3 cosas en cada vuelta:");
console.log("> 1. El elemento actual (obligatorio para que tenga sentido)");
console.log("> 2. El índice (la posición, empezando en 0)");
console.log("> 3. El array completo (el que estás recorriendo)");
console.log();

const puntajes = [100, 250, 500];
console.log("Mis puntajes son: ", puntajes);

puntajes.forEach((valor, posicion) => {
  console.log(`César, en la posición ${posicion} el valor es ${valor}`);
});

console.log("*****************************************");

/**
 * 6. CASO DE USO REAL: SUMATORIA
 * ¿Quieres saber el total de algo? Mira qué fácil:
 */

let total = 0;
const ventas = [10.5, 5, 20];

ventas.forEach((precio) => {
  total += precio;
});
console.log("> CASO DE USO REAL: SUMATORIA");
console.log("> Las ventas son: ", ventas);
console.log("César, el total de ventas es: " + total);

/**
 * REGLA DE ORO PARA JUNIORS:
 * No uses 'break' ni 'continue' dentro de un .forEach().
 * Si necesitas detener el bucle antes de que termine,
 * mejor usa un bucle 'for' tradicional o el método 'find'.
 */

console.log("No uses 'break' ni 'continue' dentro de un .forEach().");
console.log("Si necesitas detener el bucle antes de que termine,");
console.log("mejor usa un bucle 'for' tradicional o el método 'find'.");
