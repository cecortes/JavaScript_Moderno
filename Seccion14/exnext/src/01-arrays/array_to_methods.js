"use strict";

const heroes = ["Batman", "Superman", "Flash", "Aquaman"];
const heroesCopy = heroes;

//heroes.sort();

console.table(heroes);
console.table(heroesCopy);

/**
 * Método toSorted()
 * Crea una copia del arreglo original ordenado y lo devuelve
 */

const sortedHeroes = heroes.toSorted();

console.table(heroes);
console.table(sortedHeroes);

/**
 * Método toReserved()
 * Crea una copia del arreglo original en orden inverso y lo devuelve
 */
heroes.sort();

const reversedHeroes = heroes.toReversed();
console.table(heroes);
console.table(reversedHeroes);

/**
 * Método toSpliced()
 * Crea un nuevo arreglo removiendo o reemplazando sin mutar el arreglo
 * original.
 */
const deletedHeroes = heroes.toSpliced(0, 2, "Green Lantern");

console.table(heroes);
console.table(deletedHeroes);
