/**
 * HOLA CÉSAR, AQUÍ TIENES LA GUÍA DEL MÉTODO .unshift()
 * * 1. ¿QUÉ ES?
 * Es el método que se usa para AGREGAR uno o más elementos al INICIO de un array.
 * IMPORTANTE: Al agregar algo al principio, JavaScript tiene que "empujar"
 * todos los elementos existentes una posición hacia la derecha. Por eso,
 * los índices de TODO el array cambian.
 * * 2. ESTRUCTURA Y SINTAXIS:
 * arrayOriginal.unshift(elemento1, elemento2, ..., elementoN);
 */

// 3. ¿QUÉ DEVUELVE?
// Al igual que .push(), devuelve la NUEVA LONGITUD (.length) del array.

// --- EJEMPLOS PRÁCTICOS ---

const tareas = ["Estudiar JS", "Ir al gym"];

console.log(tareas);
console.log("> Ejemplo A: Agregar un elemento al principio");
console.log("> César, ahora 'Desayunar' será la posición [0]");

// Ejemplo A: Agregar un elemento al principio
// César, ahora "Desayunar" será la posición [0]
tareas.unshift("Desayunar");

console.log(tareas);
// Resultado: ["Desayunar", "Estudiar JS", "Ir al gym"]

// Ejemplo B: Agregar múltiples elementos
const invitados = ["Juan", "Maria"];

console.log("> Ejemplo B: Agregar múltiples elementos al principio");
console.log("> Invitados: ", invitados);

const total = invitados.unshift("César", "Ana");

console.log(invitados);
// Resultado: ["César", "Ana", "Juan", "Maria"]
console.log(`César, ahora hay ${total} personas en la lista.`); // 4

/**
 * 4. ¿CUÁNDO USARLO? (CASO DE USO REAL)
 * Se usa mucho en sistemas de notificaciones o feeds de redes sociales,
 * donde quieres que lo más NUEVO aparezca arriba de todo.
 */

const notificaciones = ["Email de jefe", "Alerta de sistema"];

// Llega una nueva notificación
notificaciones.unshift("Nuevo mensaje de WhatsApp");

console.log("Feed de notificaciones de César:");
notificaciones.forEach((notif) => console.log("- " + notif));

/**
 * REGLA DE ORO PARA JUNIORS:
 * Aunque .unshift() es muy útil, en arrays GIGANTES (miles de elementos)
 * es un poco más lento que .push(). Esto es porque el motor de JavaScript
 * tiene que re-indexar cada elemento del array. Para arrays pequeños,
 * ¡no te preocupes por esto, César!
 */

console.log("¡Dominando el inicio del array, César!");
