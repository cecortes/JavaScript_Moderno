// ==========================================================
// MÉTODOS DE LA CLASE OBJECT PARA OBJETOS LITERALES
// Estudiante: César López
// ==========================================================

const usuario = {
  id: 101,
  username: "cesar_dev",
  email: "cesar@example.com",
  rol: "Admin",
};

// ----------------------------------------------------------
// 1. EL OPERADOR 'delete' (No es un método de Object)
// ----------------------------------------------------------
// QUÉ ES: No es un método de la clase Object, sino un operador de JS.
// SINTAXIS: delete objeto.propiedad o delete objeto['propiedad']
// CASO DE USO: Cuando necesitas eliminar una clave y su valor permanentemente.
// RETORNA: true si se eliminó con éxito (o si la propiedad no existía).

console.log("--- 1. Operador delete ---");
console.log("Antes de borrar email:", usuario);

delete usuario.email;

console.log("Después de borrar email:", usuario);
console.log("---------------------------\n");

// ----------------------------------------------------------
// 2. Object.entries()
// ----------------------------------------------------------
// QUÉ ES: Convierte el objeto en una "Matriz" (un array de arrays).
// ESTRUCTURA: Object.entries(nombreDelObjeto)
// CASO DE USO: Ideal cuando necesitas iterar con métodos de arrays (como forEach o map)
// y necesitas tanto la CLAVE como el VALOR al mismo tiempo.

console.log("--- 2. Object.entries ---");
const entradas = Object.entries(usuario);

console.log("Resultado de entries:", entradas);
// Ejemplo de uso práctico:
entradas.forEach(([clave, valor]) => {
  console.log(`La clave es: ${clave} y el valor es: ${valor}`);
});
console.log("---------------------------\n");

// ----------------------------------------------------------
// 3. Object.freeze()
// ----------------------------------------------------------
// QUÉ ES: "Congela" un objeto. Lo hace inmutable.
// SINTAXIS: Object.freeze(nombreDelObjeto)
// CASO DE USO: Seguridad. Cuando tienes una configuración o constantes que
// NINGUNA otra parte del código debería poder cambiar, borrar o agregar.
// NOTA: En "use strict", intentar cambiarlo daría error. Aquí solo se ignorará.

console.log("--- 3. Object.freeze ---");
const config = { puerto: 3000, env: "prod" };

Object.freeze(config);

config.puerto = 5000; // Intentamos cambiarlo
config.token = "abc123"; // Intentamos agregar uno nuevo
delete config.env; // Intentamos borrarlo

console.log("Config (sigue igual por el freeze):", config);
console.log("---------------------------\n");

// ----------------------------------------------------------
// 4. Object.getOwnPropertyNames()
// ----------------------------------------------------------
// QUÉ ES: Devuelve un array con todos los nombres de las propiedades (claves).
// SINTAXIS: Object.getOwnPropertyNames(nombreDelObjeto)
// CASO DE USO: Es similar a Object.keys(), pero este método es más potente
// porque lista incluso propiedades que no son "enumerables" (conceptos avanzados).
// Para un junior, úsalo para auditar qué claves tiene un objeto exactamente.

console.log("--- 4. Object.getOwnPropertyNames ---");
const nombresPropiedades = Object.getOwnPropertyNames(usuario);

console.log("Nombres de las claves:", nombresPropiedades);
// Resultado: ["id", "username", "rol"]
console.log("---------------------------\n");

// ----------------------------------------------------------
// 5. Object.values()
// ----------------------------------------------------------
// QUÉ ES: Extrae únicamente los VALORES del objeto y los mete en un array.
// SINTAXIS: Object.values(nombreDelObjeto)
// CASO DE USO: Muy útil cuando no te importan los nombres de las etiquetas (claves),
// solo necesitas procesar los datos (ej. sumar precios, listar nombres).

console.log("--- 5. Object.values ---");
const valores = Object.values(usuario);

console.log("Valores del usuario:", valores);
// Resultado: [101, "cesar_dev", "Admin"]

// Ejemplo de uso: ¿Está el valor "Admin" en alguna parte del objeto?
if (valores.includes("Admin")) {
  console.log("Acceso concedido para César.");
}
console.log("---------------------------\n");

// ==========================================================
// RESUMEN PARA TI, CÉSAR:
// entries -> [clave, valor]
// values  -> [valor]
// getOwnPropertyNames -> [clave]
// freeze  -> "No se toca"
// delete  -> "Eliminar"
// ==========================================================
