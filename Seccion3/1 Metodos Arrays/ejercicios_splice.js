/**
 * EJERCICIOS DE PRÁCTICA: MÉTODO .splice()
 * César, lee con atención cuántos elementos debes borrar y cuáles insertar.
 */

// --- EJERCICIO 1: ELIMINACIÓN INTERMEDIA ---
// Tienes una lista de compras. César, elimina el elemento "Pescado"
// que se encuentra en la posición (índice) 2.

const compras = ["Pan", "Leche", "Pescado", "Huevos", "Fruta"];

// TU CÓDIGO AQUÍ:
console.log("> Ejercicio 1: ELIMINACIÓN INTERMEDIA");
console.log("> Tienes una lista de compras. César,");
console.log("> elimina el elemento 'Pescado'");
console.log("> que se encuentra en la posición (índice) 2.");
console.log("> Lista de compras: ", compras);
compras.splice(2, 1);
console.log("> Lista de compras: ", compras);

console.log("*****************************************************");

/* SOLUCIÓN EJERCICIO 1:
compras.splice(2, 1); 
console.log(compras); // ["Pan", "Leche", "Huevos", "Fruta"]
*/

// --- EJERCICIO 2: INSERCIÓN SIN BORRAR ---
// Tienes un array de niveles de juego. César, necesitamos que insertes
// el "Nivel 2" en la posición correcta (índice 1) sin borrar nada.

const niveles = ["Nivel 1", "Nivel 3", "Nivel 4"];

// TU CÓDIGO AQUÍ:
console.log("> Ejercicio 2: INSERCIÓN SIN BORRAR");
console.log("> Tienes un array de niveles de juego. César,");
console.log("> necesitamos que insertes el 'Nivel 2' en la");
console.log("> posición correcta (índice 1) sin borrar nada.");
console.log("> Niveles: ", niveles);
niveles.splice(1, 0, "Nivel 2");
console.log("> Niveles: ", niveles);

console.log("*****************************************************");

/* SOLUCIÓN EJERCICIO 2:
niveles.splice(1, 0, "Nivel 2"); 
console.log(niveles); // ["Nivel 1", "Nivel 2", "Nivel 3", "Nivel 4"]
*/

// --- EJERCICIO 3: REEMPLAZO DE ELEMENTO ---
// César, en este array de meses hubo un error. Reemplaza "Febrerooo"
// por el nombre correcto: "Febrero".

const meses = ["Enero", "Febrerooo", "Marzo"];

// TU CÓDIGO AQUÍ:
console.log("> Ejercicio 3: REEMPLAZO DE ELEMENTO");
console.log("> César, en este array de meses hubo un error.");
console.log("> Reemplaza 'Febrerooo' por el nombre correcto: 'Febrero'.");
console.log("> Meses: ", meses);
meses.splice(1, 1, "Febrero");
console.log("> Meses: ", meses);

console.log("*****************************************************");

/* SOLUCIÓN EJERCICIO 3:
meses.splice(1, 1, "Febrero"); 
console.log(meses); // ["Enero", "Febrero", "Marzo"]
*/

// --- EJERCICIO 4: VACIAR DESDE UN PUNTO ---
// Tienes un array de canciones. César, elimina TODAS las canciones
// a partir del índice 2 en adelante.

const playlist = ["Song 1", "Song 2", "Song 3", "Song 4", "Song 5"];

// TU CÓDIGO AQUÍ:
console.log("> Ejercicio 4: VACIAR DESDE UN PUNTO");
console.log("> Tienes un array de canciones. César,");
console.log("> elimina TODAS las canciones a partir del índice 2 en adelante.");
console.log("> Canciones: ", playlist);
playlist.splice(2);
console.log("> Si no pasas el segundo parámetro, borra todo hasta el final.");
console.log("> Canciones: ", playlist);

console.log("*****************************************************");

/* SOLUCIÓN EJERCICIO 4:
// Si no pasas el segundo parámetro, borra todo hasta el final.
playlist.splice(2); 
console.log(playlist); // ["Song 1", "Song 2"]
*/

// --- EJERCICIO 5: CIRUGÍA COMPLEJA ---
// Tienes una lista de colores. César, en una sola línea de código:
// Elimina "Gris" y "Marron", e inserta en su lugar "Verde" y "Amarillo".

const colores = ["Rojo", "Azul", "Gris", "Marron", "Negro"];

// TU CÓDIGO AQUÍ:
console.log("> Ejercicio 5: CIRUGÍA COMPLEJA");
console.log("> Tienes una lista de colores. César,");
console.log("> en una sola línea de código:");
console.log("> Elimina 'Gris' y 'Marron', e inserta");
console.log("> en su lugar 'Verde' y 'Amarillo'.");
console.log("> Colores: ", colores);
colores.splice(2, 2, "Verde", "Amarillo");
console.log("> Colores: ", colores);

console.log("*****************************************************");

/* SOLUCIÓN EJERCICIO 5:
// Empezamos en índice 2, borramos 2 elementos e insertamos los nuevos.
colores.splice(2, 2, "Verde", "Amarillo");
console.log(colores); // ["Rojo", "Azul", "Verde", "Amarillo", "Negro"]
*/

console.log("¡César, has completado el entrenamiento de .splice() con éxito!");
