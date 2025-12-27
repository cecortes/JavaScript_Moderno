/*
 * EL MÉTODO (PROPIEDAD) .length
 * * 1. ¿QUÉ ES?
 * No es técnicamente un "método" (no lleva paréntesis al final), sino es una
 * PROPIEDAD integrada de los objetos Array. Su función es decirte cuántos
 * elementos tiene una lista en un momento dado.
 * * 2. ESTRUCTURA:
 * nombreDelArray.length
 */

// 3. ¿QUÉ DEVUELVE?
// Devuelve un número entero (Integer) que representa la cantidad de elementos.

// --- EJEMPLOS PRÁCTICOS ---

// Un array vacío siempre devuelve 0
const listaVacia = [];
console.log({ listaVacia }, listaVacia.length); // 0

// Un array con datos
const lenguajes = ["JavaScript", "Python", "Go"];
const cantidad = lenguajes.length;

console.log(lenguajes); // ["JavaScript", "Python", "Go"]
console.log(`El array tiene ${cantidad} elementos.`); // 3
console.log("*******************************************");

/**
 * 4. COMPORTAMIENTO, PARA JUNIORS (LO QUE DEBES SABER):
 * * A) El índice vs El Length:
 * El conteo de .length empieza en 1, pero los índices de los arrays
 * empiezan en 0. Por eso, el último elemento siempre es length - 1.
 */

const frutas = ["Manzana", "Pera", "Banana"];
// Índice:       0          1       2
// Length:       3
console.log(frutas); // ["Manzana", "Pera", "Banana"]
console.log(frutas.length); // Imprime 3
console.log(frutas[frutas.length - 1]); // Imprime "Banana"
console.log("*******************************************");

/**
 * B) Es dinámica:
 * Si agregas o quitas elementos, .length se actualiza automáticamente.
 */

frutas.push("Sandía");
console.log(frutas); // ["Manzana", "Pera", "Banana", "Sandía"]
console.log(frutas.length); // Ahora es 4
console.log("*******************************************");

/**
 * C) ¡Cuidado! Puedes modificarla manualmente (aunque no es común):
 * Si reduces el length manualmente, JavaScript truncará el array y
 * perderás los datos sobrantes.
 */

const numeros = [1, 2, 3, 4, 5];
console.log(numeros); // [1, 2, 3, 4, 5]
numeros.length = 2;
console.log(numeros); // [1, 2] -> ¡Los demás se borraron!
console.log("*******************************************");

/**
 * 5. USO MÁS COMÚN: BUCLES (FOR)
 * Se usa para decirle al bucle que se detenga antes de pasarse del límite.
 */

console.log(lenguajes); // ["JavaScript", "Python", "Go"]
for (let i = 0; i < lenguajes.length; i++) {
  console.log("César está aprendiendo: " + lenguajes[i]);
}
console.log("*******************************************");
