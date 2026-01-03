// ==========================================
// 1. PASAR ARGUMENTOS POR VALOR
// ==========================================

// En JavaScript, todos los tipos de datos primitivos (Boolean, null, undefined, Number, String, Symbol)
// se pasan por valor. Esto significa que cuando asignas un valor primitivo a una variable o lo pasas
// a una función, se crea una copia exacta de ese dato en un nuevo espacio de memoria.

let a = 10;
let b = a; // Aquí b recibe una COPIA del valor de a
a = 20;

console.log({ a, b }); // { a: 20, b: 10 }
// Como puedes ver, cambiar 'a' no afectó a 'b' porque son independientes.

const cambiaNombre = (nombre) => {
  nombre = "Nuevo Nombre";
  return nombre;
};

let personaNombre = "Juan";
let nuevoNombre = cambiaNombre(personaNombre);

console.log({ personaNombre, nuevoNombre }); // { personaNombre: 'Juan', nuevoNombre: 'Nuevo Nombre' }
// La variable original 'personaNombre' sigue siendo 'Juan'.

// ==========================================
// 2. PASAR ARGUMENTOS POR REFERENCIA
// ==========================================

// Los Objetos y Arrays (que también son objetos en JS) se pasan por REFERENCIA.
// Esto significa que la variable no guarda el objeto en sí, sino una "dirección" o "puntero"
// a donde el objeto vive en la memoria.

let juan = { nombre: "Juan" };
let ana = juan; // Aquí 'ana' NO recibe una copia, recibe la misma dirección de memoria que 'juan'.

ana.nombre = "Ana";

console.log({ juan, ana }); // Ambos muestran { nombre: 'Ana' }
// ¡Cuidado! Modificar 'ana' cambió también a 'juan' porque ambos apuntan al mismo objeto.

const cambiaNombreObjeto = (persona) => {
  persona.nombre = "Tony";
  return persona;
};

let peter = { nombre: "Peter" };
let tony = cambiaNombreObjeto(peter);

console.log({ peter, tony }); // Ambos son { nombre: 'Tony' }
// Tip: Esto puede causar errores difíciles de encontrar si no tienes cuidado.

// ==========================================
// 3. ROMPER LAS REFERENCIAS EN OBJETOS (SPREAD)
// ==========================================

// Para evitar el problema anterior, usamos el operador spread (...) para "esparcir"
// las propiedades del objeto original en uno nuevo, creando así una copia superficial.

let luffy = { nombre: "Luffy" };
let zoro = { ...luffy }; // Creamos un nuevo objeto y le pasamos las propiedades de luffy

zoro.nombre = "Zoro";

console.log({ luffy, zoro }); // { luffy: { nombre: 'Luffy' }, zoro: { nombre: 'Zoro' } }
// ¡Referencia rota! Ahora son objetos independientes.

// Ejemplo en función:
const clonarYCambiarNombre = ({ ...persona }) => {
  // Usamos spread en los argumentos para clonar
  persona.nombre = "Sanji";
  return persona;
};

let chopper = { nombre: "Chopper" };
let sanji = clonarYCambiarNombre(chopper);

console.log({ chopper, sanji }); // { chopper: { nombre: 'Chopper' }, sanji: { nombre: 'Sanji' } }

// ==========================================
// 4. ROMPER LAS REFERENCIAS EN ARRAYS (SPREAD)
// ==========================================

// Al igual que con los objetos, los arrays se pasan por referencia.
// Usamos el operador spread dentro de corchetes [...] para crear un nuevo array.

const frutas = ["Manzana", "Pera", "Piña"];

// const otrasFrutas = frutas; // Esto NO rompe la referencia
const otrasFrutas = [...frutas]; // Esto SÍ crea un nuevo array con los mismos elementos

otrasFrutas.push("Mango");

console.log({ frutas, otrasFrutas });
// frutas: ['Manzana', 'Pera', 'Piña']
// otrasFrutas: ['Manzana', 'Pera', 'Piña', 'Mango']

// TIP FINAL:
// El operador spread hace una "copia superficial" (shallow copy).
// Si tienes objetos dentro de otros objetos, las referencias internas seguirán existiendo.
// Para copias totales (deep copy) en objetos muy complejos, se suelen usar otros métodos
// como structuredClone() o librerías externas.
