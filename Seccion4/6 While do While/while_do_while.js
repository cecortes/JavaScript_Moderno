// ==========================================
// CICLOS EN JAVASCRIPT: WHILE Y DO WHILE
// ==========================================

/**
 * 1. ¿Qué es un ciclo while?
 *
 * Es una estructura de control que permite ejecutar un bloque de código
 * de forma repetitiva "mientras" una condición específica sea verdadera (true).
 *
 * Piensa en ello como un "if" que se repite una y otra vez hasta que la
 * condición deje de cumplirse. Si la condición es falsa desde el inicio,
 * el código dentro del while NUNCA se ejecutará.
 */

// 2. Estructura y Sintaxis del While
/**
 * while (condición) {
 *    // Código a ejecutar
 *    // Importante: Aquí debe haber algo que cambie la condición
 *    // para evitar un ciclo infinito.
 * }
 */

console.log("--- Ejemplo de Ciclo While ---");
let i = 0; // Inicialización

while (i < 5) {
  // Condición: mientras i sea menor a 5
  console.log(`Valor de i: ${i}`);
  i++; // Incremento: esto hace que eventualmente la condición sea falsa
}
// Resultado en consola:
// Valor de i: 0
// Valor de i: 1
// Valor de i: 2
// Valor de i: 3
// Valor de i: 4

/**
 * 3. Casos de uso del While
 *
 * Se usa principalmente cuando NO SABEMOS cuántas veces se debe repetir el ciclo.
 * Por ejemplo:
 * - Leer datos hasta encontrar un valor específico.
 * - Mantener un proceso activo hasta que el usuario decida salir.
 * - Procesar elementos de una cola mientras no esté vacía.
 */

/**
 * 4. Usos de break y continue en While
 *
 * break: Detiene el ciclo por completo y sale de él inmediatamente.
 * continue: Salta la iteración actual y pasa a la siguiente evaluación de la condición.
 */

console.log("\n--- Ejemplo de break en While ---");
let j = 0;
while (j < 10) {
  if (j === 3) {
    console.log("Se encontró el 3, rompiendo ciclo...");
    break; // Detiene todo el ciclo
  }
  console.log(`Valor de j: ${j}`);
  j++;
}
// Resultado: 0, 1, 2, "Se encontró el 3..."

console.log("\n--- Ejemplo de continue en While ---");
let k = 0;
while (k < 5) {
  k++;
  if (k === 3) {
    console.log("Saltando el número 3...");
    continue; // Salta el console.log de abajo y vuelve a evaluar la condición
  }
  console.log(`Valor de k: ${k}`);
}
// Resultado: 1, 2, "Saltando el número 3...", 4, 5

// ==========================================
// EL CICLO DO WHILE
// ==========================================

/**
 * 5. ¿Qué es un ciclo do while?
 *
 * Es muy similar al while, pero con una diferencia CRÍTICA:
 * El código dentro del bloque "do" se ejecutará AL MENOS UNA VEZ,
 * independientemente de si la condición es verdadera o falsa.
 * Esto sucede porque la condición se evalúa al FINAL de la iteración.
 */

// 6. Estructura y Sintaxis del Do While
/**
 * do {
 *    // Código a ejecutar al menos una vez
 * } while (condición);
 */

console.log("\n--- Ejemplo de Ciclo Do While ---");
let n = 10;

do {
  console.log("Este mensaje se verá aunque n no sea menor a 5");
  console.log(`Valor de n: ${n}`);
  n++;
} while (n < 5); // Condición falsa desde el inicio
// Resultado en consola:
// Este mensaje se verá aunque n no sea menor a 5
// Valor de n: 10

/**
 * 7. Casos de uso del Do While
 *
 * Se usa cuando necesitamos que el código se ejecute por lo menos una vez.
 * Ejemplo clásico:
 * - Mostrar un menú al usuario y pedirle una opción (primero muestras, luego validas).
 * - Solicitar una contraseña hasta que sea correcta (primero pides, luego validas).
 */

/**
 * 8. Usos de break y continue en Do While
 *
 * Funcionan exactamente igual que en el while normal.
 */

console.log("\n--- Ejemplo de break en Do While ---");
let m = 0;
do {
  if (m === 2) break;
  console.log(`Valor de m: ${m}`);
  m++;
} while (m < 5);
// Resultado: 0, 1

// 9. Resumen para Junior:
/**
 * - While: "Pregunta y luego dispara". (Evalúa, luego ejecuta).
 * - Do While: "Dispara y luego pregunta". (Ejecuta, luego evalúa).
 * - Siempre asegúrate de que tu variable de control cambie dentro del ciclo
 *   para no bloquear el navegador con un ciclo infinito.
 */
