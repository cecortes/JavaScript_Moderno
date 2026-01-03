/**
 * ==========================================
 * EXPLICACIÓN DEL OPERADOR TERNARIO
 * ==========================================
 *
 * 1. Qué es un operador ternario:
 * El operador ternario es el único operador en JavaScript que toma tres operandos.
 * Es una forma compacta de realizar una evaluación condicional (como un if-else)
 * en una sola línea de código. Se utiliza principalmente para asignar un valor
 * a una variable basándose en si una condición es verdadera o falsa.
 */

// 2. Estructura y sintáxis:
// condicion ? expresion_si_es_verdadera : expresion_si_es_falsa;

/**
 * 3. Casos de uso:
 * Se utiliza mucho para simplificar asignaciones de variables que dependen de una condición.
 */

const edad = 20;
const estado = edad >= 18 ? "Adulto" : "Menor";

console.log("--- Caso de uso: Asignación ---");
console.log(estado); // Resultado en consola: Adulto

/**
 * 4. Usos dentro de arreglos:
 * Es muy útil cuando queremos que un elemento de un arreglo dependa de una condición externa.
 */

const esDiaFeriado = true;
const actividades = [
  "Estudiar JavaScript",
  "Ir al gimnasio",
  esDiaFeriado ? "Descansar" : "Trabajar",
];

console.log("--- Uso dentro de arreglos ---");
console.log(actividades); // Resultado en consola: ["Estudiar JavaScript", "Ir al gimnasio", "Descansar"]

/**
 * 5. Conversiones entre if else y ternario:
 * Aquí veremos cómo transformar un bloque tradicional a uno más limpio con ternario.
 */

// Ejemplo con if-else:
let nota = 85;
let mensajeCalificacion;

if (nota >= 90) {
  mensajeCalificacion = "Excelente";
} else {
  mensajeCalificacion = "Sigue intentando";
}

console.log("--- Conversión: if-else tradicional ---");
console.log(mensajeCalificacion); // Resultado en consola: Sigue intentando (porque 85 < 90)

// El mismo ejemplo convertido a operador ternario:
const mensajeTernario = nota >= 90 ? "Excelente" : "Sigue intentando";

console.log("--- Conversión: Operador Ternario ---");
console.log(mensajeTernario); // Resultado en consola: Sigue intentando

/**
 * 6. Anidaciones con ternario:
 * Podemos encadenar operadores ternarios para manejar múltiples condiciones,
 * similar a un 'if - else if - else'.
 */

const hora = 14; // 2:00 PM
const saludo =
  hora < 12 ? "Buenos días" : hora < 18 ? "Buenas tardes" : "Buenas noches";

console.log("--- Anidación de ternarios ---");
console.log(saludo); // Resultado en consola: Buenas tardes

/**
 * NOTA PARA PROGRAMADORES JUNIOR:
 * Aunque las anidaciones son posibles, si se vuelven muy complejas es mejor
 * volver al 'if-else' o usar un 'switch' para mantener el código legible.
 */
