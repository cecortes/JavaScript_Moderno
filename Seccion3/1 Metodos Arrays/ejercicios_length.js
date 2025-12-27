/**
 * EJERCICIOS DE PRÁCTICA: PROPIEDAD .length
 * César, intenta resolverlos antes de leer la solución comentada.
 */

// --- EJERCICIO 1: VALIDACIÓN DE REGISTRO ---
// Tienes un array con los nombres de usuarios registrados.
// Crea una condición que imprima "César, el sistema está lleno" si el array
// tiene 5 o más usuarios, o "Espacio disponible" si tiene menos.

const usuarios = ["Ana", "Pedro", "Lucía", "Marcos"];

// TU CÓDIGO AQUÍ:
console.log("> Ejercicio 1");
let noUsuarios = usuarios.length;
// Validar si el sistema está lleno
noUsuarios >= 5
  ? console.log("César, el sistema está lleno")
  : console.log("Espacio disponible");

console.log("*******************************************");

/* SOLUCIÓN EJERCICIO 1:
if (usuarios.length >= 5) {
    console.log("César, el sistema está lleno");
} else {
    console.log("Espacio disponible");
}
// En este caso imprimirá "Espacio disponible" porque length es 4.
*/

// --- EJERCICIO 2: EL ÚLTIMO DE LA FILA ---
// Sin saber cuántos elementos hay exactamente, accede al último elemento
// del array "pendientes" y guárdalo en una variable llamada "ultimo".
// Luego imprímelo indicando que es el pendiente final de César.

const pendientes = [
  "Comprar pan",
  "Estudiar JS",
  "Ir al gym",
  "Llamar a mamá",
  "Limpiar casa",
];

// TU CÓDIGO AQUÍ:
console.log("> Ejercicio 2");
console.log("Mi lista de pendientes es: ", pendientes);
let ultimo = pendientes[pendientes.length - 1];
console.log(`César, tu pendiente final es: ${ultimo}`);
console.log("*******************************************");

/* SOLUCIÓN EJERCICIO 2:
const ultimo = pendientes[pendientes.length - 1]; 
console.log(`César, tu pendiente final es: ${ultimo}`);
// Usamos .length - 1 porque los índices son 0, 1, 2, 3, 4 y el length es 5.
*/

// --- EJERCICIO 3: LIMPIEZA DE DATOS ---
// Tienes un array de sensores que ha recolectado demasiados datos (10 elementos).
// César, necesitamos que recortes el array para que solo se quede con los
// primeros 3 elementos usando ÚNICAMENTE la propiedad .length.

const datosSensores = [15, 22, 18, 30, 25, 40, 12, 10, 5, 60];

// TU CÓDIGO AQUÍ:
console.log("> Ejercicio 3");
console.log("Mis datos de sensores son: ", datosSensores);
console.log("> Limpiando los datos de sensores");
datosSensores.length = 3;
console.log(`> Los datos de sensores limpios son: ${datosSensores}`);

/* SOLUCIÓN EJERCICIO 3:
datosSensores.length = 3; 
console.log(datosSensores); 
// Resultado: [15, 22, 18]. Al reasignar el length, JS elimina el resto.
*/

console.log("**************************************");
