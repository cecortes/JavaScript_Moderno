/**
 * HOLA CÉSAR, AQUÍ TIENES LA GUÍA DEL MÉTODO .push()
 * * 1. ¿QUÉ ES?
 * Es el método que se usa para AGREGAR uno o más elementos al FINAL de un array.
 * Es una operación "mutadora", lo que significa que modifica directamente
 * el array original (lo hace más largo).
 * * 2. ESTRUCTURA Y SINTAXIS:
 * arrayOriginal.push(elemento1, elemento2, ..., elementoN);
 */

// 3. ¿QUÉ DEVUELVE?
// ¡OJO AQUÍ, CÉSAR! Esta es pregunta de entrevista para Juniors:
// .push() NO devuelve el array modificado.
// Devuelve la NUEVA LONGITUD (.length) del array después de la inserción.

// --- EJEMPLOS PRÁCTICOS ---

const tareas = ["Lavar ropa", "Estudiar"];

console.log(tareas); // Imprime ["Lavar ropa", "Estudiar"]
console.log(`César, tienes ${tareas.length} tareas.`);
console.log("Agregar tarea con .push()");

// Ejemplo A: Agregar un solo elemento
tareas.push("Hacer ejercicio");
console.log(tareas); // ["Lavar ropa", "Estudiar", "Hacer ejercicio"]

console.log("Agregar varias tareas con .push()");
// Ejemplo B: Agregar varios elementos a la vez
tareas.push("Comprar comida", "Programar");

console.log(tareas); // ["Lavar ropa", "Estudiar", "Hacer ejercicio", "Comprar comida", "Programar"]
console.log(`César, ahora tienes ${tareas.length} tareas.`);

console.log("********************************************");

/**
 * 4. CAPTURANDO EL VALOR DE RETORNO
 * Como dijimos, devuelve el nuevo .length. Mira este ejemplo:
 */
console.log("Capturando el valor de retorno");

const amigos = ["Luis", "Maria"];

console.log(amigos); // Imprime ["Luis", "Maria"]
console.log(`César, tienes ${amigos.length} amigos.`);
console.log("Agregando un nuevo amigo con .push()");

const nuevaCantidad = amigos.push("César");

console.log(amigos); // Imprime ["Luis", "Maria", "César"]

console.log(nuevaCantidad); // Imprime 3 (porque ahora hay 3 amigos)

console.log("********************************************");

/**
 * 5. DIFERENCIA CLAVE PARA TU CARRERA:
 * .push() añade al FINAL.
 * Si algún día necesitas añadir al PRINCIPIO, usarás .unshift().
 */

// Ejemplo C: Push con objetos (Muy común en el trabajo real)

console.log(".push() añade al FINAL");
console.log("Si necesitas añadir al PRINCIPIO, usa .unshift()");

const carrito = [];

console.log("César, el carrito está vacío:", carrito);

carrito.push({
  producto: "Monitor Gaming",
  precio: 300,
});

console.log("César, el carrito tiene:", carrito);

/**
 * RECAPITULACIÓN PARA CÉSAR:
 * - Se usa para: Insertar datos al final.
 * - Modifica: El array original.
 * - Retorna: El número de elementos total tras la inserción.
 */

console.log("¡Array actualizado con éxito, César!");
