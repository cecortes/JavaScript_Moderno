/**
 * EJERCICIOS DE PRÁCTICA: MÉTODO .indexOf()
 * César, recuerda la regla de oro: si no lo encuentra, devuelve -1.
 */

// --- EJERCICIO 1: VERIFICADOR DE ASISTENCIA ---
// Tienes una lista de invitados. César, verifica si "Lucía" está en la lista.
// Si está, imprime "Lucía está invitada en la posición X".
// Si no está, imprime "Lucía no está en la lista".

const invitados = ["Ana", "Pedro", "Lucía", "Marcos"];

// TU CÓDIGO AQUÍ:
console.log("> Ejercicio 1: VERIFICADOR DE ASISTENCIA");
console.log("> Tienes una lista de invitados. César,");
console.log("> verifica si 'Lucía' está en la lista.");
console.log("> Si está, imprime 'Lucía está invitada en la posición X'.");
console.log("> Si no está, imprime 'Lucía no está en la lista'.");
console.log("> Lista de invitados: ", invitados);

let indexSearch = invitados.indexOf("Lucía");

if (indexSearch !== -1) {
  console.log(`Lucía está invitada en la posición ${indexSearch}`);
} else {
  console.log("Lucía no está en la lista");
}

console.log("*****************************************************");

/* SOLUCIÓN EJERCICIO 1:
const indiceLucia = invitados.indexOf("Lucía");

if (indiceLucia !== -1) {
    console.log(`Lucía está invitada en la posición ${indiceLucia}, César.`);
} else {
    console.log("Lucía no está en la lista.");
}
*/

// --- EJERCICIO 2: EVITAR DUPLICADOS (Lógica de Junior) ---
// Tienes una lista de herramientas. César, quieres agregar "Martillo",
// pero SOLO si no existe ya en el array. Usa .indexOf() y .push().

const herramientas = ["Destornillador", "Sierra", "Pinzas"];

// TU CÓDIGO AQUÍ:
console.log("> Ejercicio 2: EVITAR DUPLICADOS (Lógica de Junior)");
console.log("> Tienes una lista de herramientas. César,");
console.log("> quieres agregar 'Martillo', pero SOLO si no existe");
console.log("> ya en el array. Usa .indexOf() y .push().");
console.log("> Herramientas: ", herramientas);

let indexMartillo = herramientas.indexOf("Martillo");

if (indexMartillo === -1) {
  herramientas.push("Martillo");
}

console.log("> Herramientas: ", herramientas);

console.log("*****************************************************");

/* SOLUCIÓN EJERCICIO 2:
if (herramientas.indexOf("Martillo") === -1) {
    herramientas.push("Martillo");
    console.log("César, el martillo ha sido agregado.");
} else {
    console.log("César, el martillo ya estaba en la lista.");
}
*/

// --- EJERCICIO 3: BUSCAR Y DESTRUIR (Combo con .splice) ---
// Tienes un array de lenguajes de programación. César, encuentra en qué
// posición está "Java" y elimínalo del array usando .splice().

const lenguajes = ["JavaScript", "Python", "Java", "Ruby"];

// TU CÓDIGO AQUÍ:
console.log("> Ejercicio 3: BUSCAR Y DESTRUIR (Combo con .splice)");
console.log("> Tienes un array de lenguajes de programación. César,");
console.log("> encuentra en qué posición está 'Java' y elimínalo");
console.log("> del array usando .splice().");
console.log("> Lenguajes: ", lenguajes);

let indexJava = lenguajes.indexOf("Java");

if (indexJava !== -1) {
  lenguajes.splice(indexJava, 1);
}

console.log("> Lenguajes: ", lenguajes);

console.log("*****************************************************");

/* SOLUCIÓN EJERCICIO 3:
const indiceAEliminar = lenguajes.indexOf("Java");

if (indiceAEliminar !== -1) {
    // Si lo encontró, usamos ese índice para borrar 1 elemento
    lenguajes.splice(indiceAEliminar, 1);
    console.log("César, 'Java' ha sido eliminado con éxito.");
}

console.log(lenguajes); // ["JavaScript", "Python", "Ruby"]
*/

console.log("¡Excelente práctica, César! Ya sabes buscar como un detective.");
