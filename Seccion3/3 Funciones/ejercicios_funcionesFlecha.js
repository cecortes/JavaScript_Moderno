/**
 * PRÁCTICA DE ARROW FUNCTIONS - CÉSAR LÓPEZ
 * ----------------------------------------
 * César, recuerda la regla de oro: si hay una sola línea y no hay llaves,
 * el 'return' es automático (implícito).
 */

// =========================================================================
// PARTE 1: EJERCICIOS DE PRÁCTICA (CREACIÓN)
// =========================================================================

// EJERCICIO 1: El Saludo Personalizado
// Instrucciones: Crea una función flecha llamada 'crearSaludo' que reciba
// un nombre y devuelva: "Hola, [nombre], ¿listo para programar?".
// Usa el retorno implícito (una sola línea).

// --- TU CÓDIGO AQUÍ ---

// --- SOLUCIÓN EXPLICADA ---
/*
const crearSaludo = nombre => `Hola, ${nombre}, ¿listo para programar?`;
// César, nota que como solo hay un parámetro (nombre), no necesitamos paréntesis.
*/

// EJERCICIO 2: Filtro de Números Pares (Callback)
// Instrucciones: JavaScript tiene un método llamado .filter().
// Pásale una función flecha anónima a .filter() para obtener solo los pares.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const pares = numeros.filter( /* Tu función flecha aquí */ );

// --- SOLUCIÓN EXPLICADA ---
/*
const pares = numeros.filter(n => n % 2 === 0);
// Aquí 'n' representa cada número del array. Si la condición es true, se queda.
*/

// EJERCICIO 3: El Generador de Objetos
// Instrucciones: Crea una función flecha llamada 'formatearProducto' que reciba
// 'id' y 'precio'. Debe devolver un objeto con esas propiedades.
// Pista: César, recuerda los paréntesis para devolver objetos implícitamente.

// --- TU CÓDIGO AQUÍ ---

// --- SOLUCIÓN EXPLICADA ---
/*
const formatearProducto = (id, precio) => ({ id, precio });
// Los paréntesis envolviendo a las llaves ({}) le dicen a JS: 
// "esto no es el cuerpo de la función, es un objeto que estoy devolviendo".
*/

// =========================================================================
// PARTE 2: CONVERSIÓN DE TRADICIONAL A FLECHA
// =========================================================================

// EJERCICIO 4: Función Simple
// Tradicional:
function obtenerPinaColada() {
  return "🍹";
}

// --- CONVIERTE A FLECHA AQUÍ ---

// SOLUCIÓN: const obtenerPinaColada = () => "🍹";

// EJERCICIO 5: Función con Parámetros
// Tradicional:
function multiplicar(a, b) {
  return a * b;
}

// --- CONVIERTE A FLECHA AQUÍ ---

// SOLUCIÓN: const multiplicar = (a, b) => a * b;

// EJERCICIO 6: Función con Lógica Interna (Multilínea)
// Tradicional:
function clasificarEdad(edad) {
  if (edad >= 18) {
    return "Adulto";
  } else {
    return "Menor";
  }
}

// --- CONVIERTE A FLECHA AQUÍ ---

// SOLUCIÓN:
/*
const clasificarEdad = edad => {
    if (edad >= 18) return "Adulto";
    return "Menor";
};
*/

// EJERCICIO 7: Función Anónima en un Temporizador
// Tradicional:
setTimeout(function () {
  console.log("Tiempo cumplido");
}, 1000);

// --- CONVIERTE A FLECHA AQUÍ ---

// SOLUCIÓN: setTimeout(() => console.log("Tiempo cumplido"), 1000);

// EJERCICIO 8: Método de Array (Map)
// Tradicional:
const dobles = [1, 2, 3].map(function (num) {
  return num * 2;
});

// --- CONVIERTE A FLECHA AQUÍ ---

// SOLUCIÓN: const dobles = [1, 2, 3].map(num => num * 2);

console.log("¡César, has terminado el entrenamiento de Arrow Functions!");
