/**
 * HOLA CÉSAR, AQUÍ TIENES LA GUÍA DEL MÉTODO .indexOf()
 * * 1. ¿QUÉ ES?
 * Es un método de búsqueda. Te dice la POSICIÓN (índice) de la primera
 * aparición de un elemento en el array.
 * * 2. ESTRUCTURA Y SINTAXIS:
 * array.indexOf(elementoBusqueda, desdeDonde);
 * - elementoBusqueda: Lo que quieres encontrar (obligatorio).
 * - desdeDonde: El índice desde el cual empezar a buscar (opcional).
 */

// 3. ¿QUÉ DEVUELVE? (ESTO ES VITAL, CÉSAR)
// - Si encuentra el elemento: Devuelve el ÍNDICE (0, 1, 2...).
// - Si NO encuentra el elemento: Devuelve siempre -1.

// --- EJEMPLOS PRÁCTICOS ---

const alumnos = ["Ana", "César", "Santi", "Elena"];

// Ejemplo A: Búsqueda exitosa
const posicionCesar = alumnos.indexOf("César");
console.log(posicionCesar); // 1 (porque está en la segunda posición)

// Ejemplo B: Búsqueda fallida
const posicionPedro = alumnos.indexOf("Pedro");
console.log(posicionPedro); // -1 (porque Pedro no está en la lista)

/**
 * 4. ¿PARA QUÉ SIRVE EL -1? (CASO DE USO REAL)
 * Se usa muchísimo en condicionales para saber si algo existe o no
 * antes de hacer una operación.
 */

const frutas = ["Manzana", "Pera", "Uva"];

if (frutas.indexOf("Pera") !== -1) {
  console.log("César, la pera sí está en la canasta.");
}

/**
 * 5. DATOS IMPORTANTES PARA TU CARRERA:
 * - Es sensible a mayúsculas: "César" no es lo mismo que "césar".
 * - Si el elemento está repetido, solo te da la posición del PRIMERO que encuentre.
 * - Usa comparación estricta (===), así que el tipo de dato importa.
 */

const numeros = [10, 20, 30, 20];
console.log(numeros.indexOf(20)); // 1 (ignora el segundo 20)
console.log(numeros.indexOf("10")); // -1 (porque busca un número, no un string)

/**
 * RECAPITULACIÓN PARA CÉSAR:
 * - ¿Lo encontró? -> Devuelve el índice (>= 0).
 * - ¿No lo encontró? -> Devuelve -1.
 */

console.log("¡Buscador configurado, César!");
