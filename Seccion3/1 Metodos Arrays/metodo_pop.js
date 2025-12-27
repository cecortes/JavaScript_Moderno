/**
 * HOLA CÉSAR, AQUÍ TIENES LA GUÍA DEL MÉTODO .pop()
 * * 1. ¿QUÉ ES?
 * Es el método que se usa para ELIMINAR el ÚLTIMO elemento de un array.
 * Al igual que .push(), es un método "mutador" porque cambia el tamaño
 * original del array (lo hace más corto por el final).
 * * 2. ESTRUCTURA Y SINTAXIS:
 * arrayOriginal.pop();
 * (No recibe ningún parámetro, ya que siempre sabe que debe quitar el último).
 */

// 3. ¿QUÉ DEVUELVE?
// ¡CÉSAR, ESTO ES CLAVE! A diferencia de .push() que devolvía un número,
// .pop() DEVUELVE EL ELEMENTO QUE ACABA DE ELIMINAR.
// Esto es súper útil si necesitas hacer algo con ese dato antes de borrarlo.

// --- EJEMPLOS PRÁCTICOS ---

const dispositivos = ["PC", "Laptop", "Tablet"];

// Ejemplo A: Eliminar el último
const eliminado = dispositivos.pop();

console.log(dispositivos); // ["PC", "Laptop"]
console.log(`César, acabas de eliminar: ${eliminado}`); // "Tablet"

/**
 * 4. ¿QUÉ PASA SI EL ARRAY ESTÁ VACÍO?
 * Si intentas usar .pop() en un array que no tiene nada,
 * JavaScript no dará error, simplemente te devolverá 'undefined'.
 */

const listaVacia = [];
console.log(listaVacia.pop()); // undefined

/**
 * 5. CASO DE USO REAL: DESHACER (UNDO)
 * Imagina que César está escribiendo una lista de cambios y quiere
 * borrar el último porque se equivocó.
 */

const historialDeCambios = ["Cambio 1", "Cambio 2", "Error ortográfico"];

// El usuario presiona Ctrl+Z
const correccion = historialDeCambios.pop();

console.log("Historial limpio:", historialDeCambios);
console.log("Se eliminó el error:", correccion);

/**
 * RECAPITULACIÓN PARA CÉSAR:
 * - Se usa para: Eliminar el último elemento.
 * - Modifica: El array original (reduce su .length).
 * - Retorna: El elemento eliminado (o undefined si está vacío).
 */

console.log("¡Último elemento fuera, César!");
