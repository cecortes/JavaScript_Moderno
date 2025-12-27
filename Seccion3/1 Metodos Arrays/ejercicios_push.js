/**
 * EJERCICIOS DE PRÁCTICA: MÉTODO .push()
 * César, recuerda que .push siempre añade al final de la fila.
 */

// --- EJERCICIO 1: LA LISTA DE LA COMPRA ---
// Tienes un array con 2 elementos. César, añade "Leche" y "Huevos"
// al array usando una sola línea de código con .push().

const compras = ["Pan", "Fruta"];

// TU CÓDIGO AQUÍ:
console.log("> Ejercicio 1: LA LISTA DE LA COMPRA");
console.log("> Tienes un array con 2 elementos.");
console.log("> César, añade 'Leche' y 'Huevos'");
console.log("> al array usando una sola línea de código con .push().");
console.log("Lista de compras: ", compras);
compras.push("Leche", "Huevos");
console.log("Lista de compras: ", compras);

console.log("*********************************************");

/* SOLUCIÓN EJERCICIO 1:
compras.push("Leche", "Huevos");
console.log(compras); // ["Pan", "Fruta", "Leche", "Huevos"]
*/

// --- EJERCICIO 2: FILTRADO DINÁMICO ---
// Tienes un array de números. Recórrelo usando .forEach() y,
// si el número es par, agrégalo al array "numerosPares".
// (Tip: Un número es par si: numero % 2 === 0)

const todosLosNumeros = [1, 2, 3, 4, 5, 6, 7, 8];
const numerosPares = [];

// TU CÓDIGO AQUÍ:
console.log("> Ejercicio 2: FILTRADO DINÁMICO");
console.log("> Tienes un array de números. Recórrelo usando");
console.log("> .forEach() y, si el número es par, agrégalo al array");
console.log("> 'numerosPares'.");
console.log("> (Tip: Un número es par si: numero % 2 === 0)");
console.log("Numeros: ", todosLosNumeros);

todosLosNumeros.forEach((numero) => {
  if (numero % 2 === 0) {
    numerosPares.push(numero);
  }
});

console.log("> Números pares: ", numerosPares);

console.log("*********************************************");

/* SOLUCIÓN EJERCICIO 2:
todosLosNumeros.forEach(num => {
    if (num % 2 === 0) {
        numerosPares.push(num);
    }
});
console.log("César, los pares son:", numerosPares);
*/

// --- EJERCICIO 3: HISTORIAL DE ACCIONES ---
// Crea una función llamada "registrarAccion" que reciba un string (una acción).
// La función debe añadir esa acción al array "historial" y mostrar por
// consola: "Acción [X] registrada. Total de acciones: [Y]".
// Usa el valor que DEVUELVE el método .push() para obtener el total (Y).

console.log("> Ejercicio 3: HISTORIAL DE ACCIONES");
console.log("> Crea una función llamada 'registrarAccion'");
console.log("> que reciba un string (una acción).");
console.log("> La función debe añadir esa acción al");
console.log("> array 'historial' y mostrar por consola:");
console.log("> 'Acción [X] registrada. Total de acciones: [Y]'.");
console.log("> Usa el valor que DEVUELVE el método .push()");
console.log("> para obtener el total (Y).");

const historial = [];

function registrarAccion(accion) {
  // TU CÓDIGO AQUÍ:
  let totalAcciones = historial.push(accion);
  console.log(
    `Acción ${accion} registrada. Total de acciones: ${totalAcciones}. `
  );
}

registrarAccion("César entró al sistema");
registrarAccion("César descargó un archivo");

// Prueba la función así:
// registrarAccion("Inicio de sesión");

/* SOLUCIÓN EJERCICIO 3:
function registrarAccion(accion) {
    const total = historial.push(accion);
    console.log(`Acción "${accion}" registrada. Total de acciones: ${total}`);
}

registrarAccion("César entró al sistema");
registrarAccion("César descargó un archivo");
*/

console.log("*********************************************");

console.log(
  "¡Ejercicios terminados, César! Ya sabes cómo hacer crecer tus datos."
);
