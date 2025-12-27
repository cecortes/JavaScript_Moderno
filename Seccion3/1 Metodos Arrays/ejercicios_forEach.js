/**
 * EJERCICIOS DE PRÁCTICA: MÉTODO .forEach()
 * César, prepárate para iterar como un profesional.
 */

// --- EJERCICIO 1: EL SALUDADOR ---
// Tienes un array de nombres. Usa .forEach para imprimir un saludo
// personalizado para cada uno: "¡Hola [nombre], bienvenido al equipo de César!"

const equipo = ["Laura", "Santi", "Elena"];

// TU CÓDIGO AQUÍ:
console.log("> Ejercicio 1: El saludador");
console.log("> Tienes un array de nombres. Usa .forEach");
console.log("> para imprimir un saludo personalizado para");
console.log("> cada uno: ¡Hola [nombre], bienvenido al equipo");
console.log("> El equipo es: ", equipo);
equipo.forEach((nombre) => {
  console.log(`¡Hola ${nombre}, bienvenido al equipo`);
});
console.log("*****************************************");

/* SOLUCIÓN EJERCICIO 1:
equipo.forEach(nombre => {
    console.log(`¡Hola ${nombre}, bienvenido al equipo de César!`);
});
*/

// --- EJERCICIO 2: CONTADOR DE CARACTERES ---
// Tienes un array de palabras. Usa .forEach para imprimir cuántas letras
// tiene cada palabra usando la propiedad .length que aprendimos antes.

const palabras = ["JavaScript", "Código", "César"];

// TU CÓDIGO AQUÍ:
console.log("> Ejercicio 2: Contador de caracteres");
console.log("> Tienes un array de palabras. Usa .forEach");
console.log("> para imprimir cuántas letras tiene cada palabra");
console.log("> usando la propiedad .length que aprendimos antes.");
console.log("> Las palabras son: ", palabras);

palabras.forEach((palabra) => {
  console.log(`Letras en ${palabra} son: `, palabra.length);
});

console.log("*****************************************");

/* SOLUCIÓN EJERCICIO 2:
palabras.forEach(p => {
    console.log(`La palabra "${p}" tiene ${p.length} letras.`);
});
*/

// --- EJERCICIO 3: CALCULADORA DE IMPUESTOS ---
// Tienes un array de precios sin IVA. César, necesitamos que crees un
// nuevo array llamado "preciosFinales" y, usando .forEach, le agregues
// cada precio con un 21% de impuesto extra (precio * 1.21).

const preciosBase = [100, 200, 500];
const preciosFinales = [];

// TU CÓDIGO AQUÍ:
console.log("> Ejercicio 3: CALCULADORA DE IMPUESTOS");
console.log("> Tienes un array de precios sin IVA.");
console.log("> necesitamos que crees un nuevo array");
console.log("> llamado 'preciosFinales' y, usando .forEach");
console.log("> le agregues a cada precio un 21% de ");
console.log("> extra (precio * 1.21).");
console.log("> Lista de precios base: ", preciosBase);
preciosBase.forEach((entrada) => {
  preciosFinales.push(entrada * 1.21);
});
console.log("> Lista de precios finales: ", preciosFinales);

console.log("*****************************************");

/* SOLUCIÓN EJERCICIO 3:
preciosBase.forEach(precio => {
    preciosFinales.push(precio * 1.21);
});
console.log(preciosFinales);
*/

// --- EJERCICIO 4: BUSCADOR DE POSICIONES ---
// Recorre este array de lenguajes e imprime un mensaje que diga:
// "César, el lenguaje [nombre] está en la posición [indice]".

const lenguajes = ["HTML", "CSS", "JS", "PHP"];

// TU CÓDIGO AQUÍ:
console.log("> Ejercicio 4: BUSCADOR DE POSICIONES");
console.log("> Recorre este array de lenguajes e ");
console.log("> imprime un mensaje que diga:");
console.log("> el lenguaje [nombre] está en la posición [indice]");
console.log("> El array es: ", lenguajes);
lenguajes.forEach((lenguaje, posicion) => {
  console.log(`El lenguaje ${lenguaje}, está en la posición: ${posicion}`);
});

console.log("*****************************************");

/* SOLUCIÓN EJERCICIO 4:
lenguajes.forEach((nombre, indice) => {
    console.log(`César, el lenguaje ${nombre} está en la posición ${indice}`);
});
*/

// --- EJERCICIO 5: FILTRADO VISUAL (BÁSICO) ---
// Tienes una lista de temperaturas. Usa .forEach para imprimir
// SOLAMENTE las que sean mayores a 30 grados.

const temperaturas = [22, 35, 18, 40, 29, 31];

// TU CÓDIGO AQUÍ:
console.log("> Ejercicio 5: FILTRADO VISUAL (BÁSICO)");
console.log("> Tienes una lista de temperaturas.");
console.log("> Usa .forEach para imprimir");
console.log("> SOLAMENTE las que sean mayores a 30 grados.");
console.log("> La lista es: ", temperaturas);
temperaturas.forEach((temp) => {
  if (temp > 30) {
    console.log("- Temperatura alta: ", temp);
  }
});

console.log("*****************************************");

/* SOLUCIÓN EJERCICIO 5:
temperaturas.forEach(t => {
    if (t > 30) {
        console.log(`Alerta César: Temperatura alta detectada: ${t}`);
    }
});
*/

console.log(
  "¡Ejercicios completados, César! Ya tienes el control de los bucles."
);
