/**
 * HOLA CÉSAR, PREPÁRATE PARA DOMINAR EL MÉTODO .splice()
 * * 1. ¿QUÉ ES?
 * Es un método "multitarea" que sirve para:
 * - Eliminar elementos de cualquier posición.
 * - Insertar elementos en cualquier posición.
 * - Reemplazar elementos existentes.
 * Es MUTADOR: modifica el array original directamente.
 * * 2. ESTRUCTURA Y SINTAXIS:
 * array.splice(inicio, cuantosEliminar, item1, item2, ...);
 * * - inicio: El índice donde empezar (obligatorio).
 * - cuantosEliminar: Cuántos elementos quitar desde ahí (opcional).
 * - items: Qué elementos quieres meter ahí (opcional).
 */

// 3. ¿QUÉ DEVUELVE?
// Devuelve un ARRAY con los elementos que han sido eliminados.
// Si no eliminas nada, devuelve un array vacío [].

// --- EJEMPLOS PRÁCTICOS ---

// A) ELIMINAR: César, vamos a quitar a "Santi" (índice 1)
const nombres = ["Ana", "Santi", "Elena", "Luis"];
const eliminado = nombres.splice(1, 1);

console.log(nombres); // ["Ana", "Elena", "Luis"]
console.log("César, eliminamos a:", eliminado); // ["Santi"]

// B) INSERTAR: Vamos a meter "PHP" en la posición 2 sin borrar nada
const lenguajes = ["JS", "Python", "Java"];
lenguajes.splice(2, 0, "PHP");

console.log(lenguajes); // ["JS", "Python", "PHP", "Java"]

// C) REEMPLAZAR: Cambiar "Rojo" por "Verde"
const colores = ["Rojo", "Azul"];
// Empieza en índice 0, quita 1 elemento, y pon "Verde"
colores.splice(0, 1, "Verde");

console.log(colores); // ["Verde", "Azul"]

/**
 * 4. TRUCO DE PROFESIONAL PARA CÉSAR:
 * Si usas un número negativo en el 'inicio', .splice empieza a
 * contar desde el final del array.
 * Ejemplo: .splice(-1, 1) quita siempre el último.
 */

const numeros = [10, 20, 30, 40];
numeros.splice(-2, 2); // Quita los dos últimos
console.log("César, el array quedó:", numeros); // [10, 20]

/**
 * RECAPITULACIÓN PARA CÉSAR:
 * - 1er parámetro: ¿Dónde empiezo?
 * - 2do parámetro: ¿Cuántos borro?
 * - Resto: ¿Qué agrego?
 */

console.log("¡Cuidado con el cuchillo (splice), César!");
