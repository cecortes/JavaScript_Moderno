/**
 * ==============================================================================
 * GUÍA DE CICLOS EN JAVASCRIPT: FOR, FOR IN, FOR OF
 * ==============================================================================
 */

/**
 * 1. ¿QUÉ ES UN CICLO FOR?
 *
 * El ciclo 'for' es la estructura de control de repetición más básica y potente.
 * Se utiliza cuando sabemos de antemano cuántas veces queremos que se ejecute
 * un bloque de código.
 */

/**
 * 2. ESTRUCTURA Y SINTAXIS
 *
 * for( inicialización; condición; incremento/decremento ) {
 *    // Código a ejecutar en cada iteración
 * }
 *
 * - Inicialización: Se ejecuta una sola vez al inicio (ej. let i = 0).
 * - Condición: Se evalúa antes de cada iteración. Si es true, el ciclo continúa.
 * - Incremento: Se ejecuta al final de cada iteración (ej. i++).
 */

// Ejemplo de Ciclo For Tradicional
console.log("--- Ejemplo Ciclo For ---");
const heroes = ["Batman", "Superman", "Wonder Woman", "Flash"];

for (let i = 0; i < heroes.length; i++) {
  console.log(`Héroe en índice ${i}: ${heroes[i]}`);
}
// Resultado en consola:
// Héroe en índice 0: Batman
// Héroe en índice 1: Superman
// Héroe en índice 2: Wonder Woman
// Héroe en índice 3: Flash

/**
 * 3. CASOS DE USO (FOR)
 * - Cuando necesitas el índice numérico de los elementos.
 * - Cuando quieres recorrer un arreglo en un orden específico (ej. de atrás hacia adelante).
 * - Cuando quieres saltarte elementos (ej. i += 2).
 */

/**
 * 4. ¿QUÉ ES UN CICLO FOR IN?
 *
 * El ciclo 'for...in' está diseñado para iterar sobre todas las propiedades
 * "enumerables" de un objeto. En palabras simples, sirve para "barrer" las llaves (keys)
 * de un objeto.
 */

/**
 * 5. ESTRUCTURA Y SINTAXIS
 *
 * for( let propiedad in objeto ) {
 *    // Código a ejecutar
 * }
 */

// Ejemplo de Ciclo For In
console.log("\n--- Ejemplo Ciclo For In ---");
const persona = {
  nombre: "Kilo Code",
  edad: 25,
  puesto: "Software Engineer",
};

for (let propiedad in persona) {
  console.log(`Propiedad: ${propiedad}, Valor: ${persona[propiedad]}`);
}
// Resultado en consola:
// Propiedad: nombre, Valor: Kilo Code
// Propiedad: edad, Valor: 25
// Propiedad: puesto, Valor: Software Engineer

/**
 * 6. CASOS DE USO (FOR IN)
 * - Ideal para iterar sobre objetos literales.
 * - NO se recomienda para arreglos si el orden es importante o si se esperan solo números,
 *   ya que itera sobre llaves (strings) y propiedades heredadas.
 */

/**
 * 7. ¿QUÉ ES UN CICLO FOR OF? (A veces confundido como "for off")
 *
 * El ciclo 'for...of' es una forma moderna y sencilla de iterar sobre objetos
 * "iterables" (como Arreglos, Strings, Maps, NodeLists). A diferencia del for...in,
 * este nos devuelve directamente el VALOR de cada elemento, no la llave.
 */

/**
 * 8. ESTRUCTURA Y SINTAXIS
 *
 * for( let valor of iterable ) {
 *    // Código a ejecutar
 * }
 */

// Ejemplo de Ciclo For Of
console.log("\n--- Ejemplo Ciclo For Of ---");
const lenguajes = ["JavaScript", "TypeScript", "Python", "Go"];

for (let lenguaje of lenguajes) {
  console.log(`Lenguaje: ${lenguaje}`);
}
// Resultado en consola:
// Lenguaje: JavaScript
// Lenguaje: TypeScript
// Lenguaje: Python
// Lenguaje: Go

/**
 * 9. CASOS DE USO (FOR OF)
 * - Recorrer arreglos de forma limpia cuando no necesitas el índice.
 * - Iterar sobre caracteres de un string.
 * - Es la forma más legible y preferida actualmente para colecciones de datos.
 */

/**
 * NOTA FINAL PARA JUNIORS:
 * - Usa FOR si necesitas el control total del índice.
 * - Usa FOR IN si necesitas las llaves de un objeto.
 * - Usa FOR OF si solo quieres los valores de una lista/arreglo.
 */
