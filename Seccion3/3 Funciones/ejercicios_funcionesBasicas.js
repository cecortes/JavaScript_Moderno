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
