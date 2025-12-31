/**
 * GUÍA DE FUNCIONES EN JAVASCRIPT PARA CÉSAR LÓPEZ
 * -----------------------------------------------
 * César, piensa en una función como un "snippet" de código reutilizable.
 * Es un bloque de construcción que toma una entrada, hace algo y devuelve un resultado.
 */

// 1. ¿QUÉ ES UNA FUNCIÓN?
// Es un conjunto de instrucciones que realiza una tarea o calcula un valor.
// Para que sea útil, debe ser "llamada" o "invocada" en algún lugar de tu código.

function saludarCesar() {
  console.log("Hola, César. ¡Bienvenido al código!");
}

saludarCesar(); // Invocación

// 2. FORMAS DE DECLARAR UNA FUNCIÓN
// Existen principalmente dos formas: Declaración (Function Declaration)
// y Expresión (Function Expression).

// A. Declaración (Tradicional)
function sumar(a, b) {
  return a + b;
}

// B. Expresión de función (Asignada a una variable/constante)
const restar = function (a, b) {
  return a - b;
};

// 3. ¿POR QUÉ ES MEJOR DECLARAR UNA FUNCIÓN DENTRO DE UNA CONSTANTE?
// César, esto es una buena práctica por dos razones clave:
// - Hoisting: Las funciones declaradas se "elevan" al principio. Las constantes no,
//   lo que te obliga a mantener un orden lógico (definir antes de usar).
// - Inmutabilidad: Al usar 'const', evitas que tú (o alguien más) sobrescriba
//   la función accidentalmente más adelante.

const multiplicar = (a, b) => a * b;
// multiplicar = "un string"; // Esto lanzaría un error, protegiendo tu lógica.

// 4. FUNCIONES ANÓNIMAS
// Son funciones que no tienen nombre. Se usan mucho como "callbacks"
// (funciones que pasas como argumentos a otras).

setTimeout(function () {
  console.log(
    "César, esto se ejecutó después de 2 segundos (Función Anónima)."
  );
}, 2000);

// 5. ARGUMENTOS Y PARÁMETROS
// - Parámetros: Los nombres que pones en la definición (a, b).
// - Argumentos: Los valores reales que pasas al invocarla (5, 10).

function presentarPerfil(nombre, rol) {
  console.log(`Nombre: ${nombre}, Puesto: ${rol}`);
}

presentarPerfil("César", "Junior Developer"); // "César" y "Junior Developer" son argumentos.

// 6. EL OBJETO 'arguments'
// Es un objeto similar a un array, disponible SOLO dentro de funciones
// tradicionales (no en arrow functions), que contiene todos los argumentos pasados.

function listarTodo() {
  console.log("Argumentos recibidos:", arguments);
  console.log("Primer argumento:", arguments[0]);
}

listarTodo("JavaScript", "Python", "Node.js");

// 7. ¿QUÉ DEVUELVE UNA FUNCIÓN? (El 'return')
// Si no especificas un 'return', la función devuelve 'undefined' por defecto.
// El 'return' finaliza la ejecución de la función y entrega el valor al llamador.

function calcularAreaCuadrado(lado) {
  return lado * lado;
  console.log("Esto nunca se ejecutará"); // El return corta la ejecución
}

const area = calcularAreaCuadrado(5);
console.log(`César, el área es: ${area}`);

/**
 * NOTA FINAL:
 * Como junior, César, dominar las Arrow Functions (=>) y entender el retorno
 * de valores te ahorrará muchísimos bugs en el futuro.
 */
