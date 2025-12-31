/**
 * EJERCICIOS DE FUNCIONES PARA CÉSAR LÓPEZ
 * ---------------------------------------
 * Instrucciones: Intenta resolver cada ejercicio en el espacio indicado.
 * No hagas trampa mirando la solución de inmediato, ¡tú puedes, César!
 */

// ==========================================
// EJERCICIO 1: El Conversor de Temperatura
// ==========================================
// Instrucciones: Crea una función tradicional llamada 'convertirCelsiusAFahrenheit'.
// Debe recibir un parámetro (grados Celsius) y devolver el resultado de la fórmula:
// (Celsius * 9/5) + 32.

// --- TU CÓDIGO AQUÍ ---
console.log("> EJERCICIO 1: El Conversor de Temperatura");
console.log("> Instrucciones: Crea una función tradicional llamada ");
console.log("'convertirCelsiusAFahrenheit'.");
console.log("> Debe recibir un parámetro (grados Celsius)");
console.log("y devolver el resultado de la fórmula:");
console.log("> (Celsius * 9/5) + 32.");

function convertirCelsiusAFahrenheit(Celsius) {
  return (Celsius * 9) / 5 + 32;
}

console.log(convertirCelsiusAFahrenheit(9));

console.log("********************************************");

// --- SOLUCIÓN EXPLICADA (Mírala después de intentar) ---
/*
function convertirCelsiusAFahrenheit(celsius) {
    // Usamos el return para que el valor calculado "salga" de la función
    return (celsius * 9 / 5) + 32;
}
// Nota para César: Al ser una función tradicional, podrías invocarla 
// incluso antes de definirla por el hoisting, pero mejor mantener el orden.
*/

// ==========================================
// EJERCICIO 2: El Contador de Argumentos
// ==========================================
// Instrucciones: Crea una función tradicional llamada 'verificarInventario'.
// Esta función no debe tener parámetros definidos en su declaración.
// Debe usar el objeto 'arguments' para imprimir en consola cuántos
// productos se pasaron como argumentos.

// --- TU CÓDIGO AQUÍ ---
console.log("> EJERCICIO 2: El Contador de Argumentos");
console.log("> Instrucciones: Crea una función tradicional llamada ");
console.log("> 'verificarInventario' Esta función no debe");
console.log("> tener parámetros definidos en su declaración.");
console.log("> Debe usar el objeto 'arguments' para imprimir");
console.log("> en consola cuántos productos se pasaron como argumentos.");

function verificarInventario() {
  console.log(arguments.length);
}

verificarInventario("refresco", "agua", "cigarros", "atún");

console.log("********************************************");

// --- SOLUCIÓN EXPLICADA ---
/*
function verificarInventario() {
    // César, recuerda que 'arguments' es un objeto similar a un array.
    // Tiene la propiedad .length que nos dice cuántos elementos recibió.
    console.log("Cantidad de productos recibidos: " + arguments.length);
}

// Ejemplo de uso: verificarInventario("Laptop", "Mouse", "Teclado"); // Imprime 3
*/

// ==========================================
// EJERCICIO 3: El Validador de Usuario
// ==========================================
// Instrucciones: Declara una función dentro de una constante llamada 'esAdmin'.
// La función debe recibir un objeto como argumento que tenga las propiedades
// 'nombre' y 'rol'. Debe devolver true si el rol es "admin" y false en caso contrario.

// --- TU CÓDIGO AQUÍ ---
console.log("> EJERCICIO 3: El Validador de Usuario");
console.log("> Instrucciones: Declara una función dentro");
console.log("> de una constante llamada 'esAdmin'.");
console.log("> La función debe recibir un objeto como argumento");
console.log("> que tenga las propiedades 'nombre' y 'rol'. ");
console.log("> Debe devolver true si el rol es 'admin'");
console.log("> y false en caso contrario.");

const esAdmin = function (objeto) {
  if (objeto.rol === "admin") {
    return true;
  }
  return false;
};

const usuario = {
  nombre: "César",
  rol: "admin",
};

console.log("Objeto usuario: ", usuario);
console.log(esAdmin(usuario));

console.log("********************************************");

// --- SOLUCIÓN EXPLICADA ---
/*
const esAdmin = function(usuario) {
    // Accedemos a la propiedad 'rol' del objeto pasado por argumento.
    if (usuario.rol === "admin") {
        return true;
    } else {
        return false;
    }
};

// César, una forma más "pro" y corta de hacer esto sería:
// const esAdmin = (usuario) => usuario.rol === "admin";
*/

console.log("¡Ejercicios listos! Dale con todo, César.");
