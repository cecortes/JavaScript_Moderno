// ==========================================
// EJERCICIOS DE VALOR Y REFERENCIA
// ==========================================

/**
 * INSTRUCCIONES:
 * Resuelve cada ejercicio en el espacio indicado.
 * Luego, puedes comparar tu código con la solución comentada debajo.
 * No olvides ejecutar el archivo para ver los resultados en consola.
 */

// -----------------------------------------------------------------------------
// EJERCICIO 1: Paso por Valor
// Instrucción: Crea una variable 'edad' con valor 25.
// Crea otra variable 'nuevaEdad' que sea igual a 'edad'.
// Cambia 'nuevaEdad' a 30. Imprime ambas para verificar que 'edad' no cambió.
// -----------------------------------------------------------------------------

// --- TU SOLUCIÓN AQUÍ ---
let edad = 25;
let nuevaEdad = edad;
nuevaEdad = 30;
console.log("Ejercicio 1:");
console.log({ edad, nuevaEdad });
console.log("*************************************");

// --- SOLUCIÓN ---
/*
let edad = 25;
let nuevaEdad = edad; // Se copia el valor (25)
nuevaEdad = 30;

console.log('Ejercicio 1:');
console.log({ edad, nuevaEdad }); // edad: 25, nuevaEdad: 30
*/

// -----------------------------------------------------------------------------
// EJERCICIO 2: Problema de Referencia
// Instrucción: Tienes el objeto 'auto'. Crea una variable 'miAuto' que apunte a 'auto'.
// Cambia el color de 'miAuto' a 'Rojo'. Imprime ambos y observa qué sucede.
// -----------------------------------------------------------------------------

let auto = { marca: "Toyota", color: "Azul" };

// --- TU SOLUCIÓN AQUÍ ---
let miAuto = auto;
miAuto.color = "Rojo";
console.log("Ejercicio 2:");
console.log({ auto, miAuto });
console.log("*************************************");

// --- SOLUCIÓN ---
/*
let miAuto = auto; // Ambos apuntan al mismo espacio de memoria
miAuto.color = 'Rojo';

console.log('Ejercicio 2:');
console.log({ auto, miAuto }); // Ambos serán rojos
*/

// -----------------------------------------------------------------------------
// EJERCICIO 3: Romper Referencia en Objetos
// Instrucción: Clona el objeto 'usuario' en 'usuarioClonado' usando el operador spread.
// Cambia el nombre de 'usuarioClonado'. Imprime ambos para ver que son diferentes.
// -----------------------------------------------------------------------------

let usuario = { id: 1, nombre: "Admin" };

// --- TU SOLUCIÓN AQUÍ ---
let usuarioClonado = { ...usuario };
usuarioClonado.nombre = "User";
console.log("Ejercicio 3: ");
console.log({ usuario, usuarioClonado });
console.log("*************************************");

// --- SOLUCIÓN ---
/*
let usuarioClonado = { ...usuario }; // Rompemos la referencia
usuarioClonado.nombre = 'Invitado';

console.log('Ejercicio 3:');
console.log({ usuario, usuarioClonado }); 
*/

// -----------------------------------------------------------------------------
// EJERCICIO 4: Romper Referencia en Arreglos
// Instrucción: Tienes una lista de 'colores'. Crea 'misColores' usando spread para
// que sea una copia independiente. Agrega 'Verde' a 'misColores'.
// -----------------------------------------------------------------------------

const colores = ["Rojo", "Azul"];

// --- TU SOLUCIÓN AQUÍ ---
let misColores = [...colores];
misColores.push("Verde");
console.log("Ejercicio 4:");
console.log({ colores, misColores });
console.log("*************************************");

// --- SOLUCIÓN ---
/*
const misColores = [...colores]; // Copia independiente
misColores.push('Verde');

console.log('Ejercicio 4:');
console.log({ colores, misColores }); 
*/

// -----------------------------------------------------------------------------
// EJERCICIO 5: Función que no muta el original
// Instrucción: Crea una función 'agregarIva' que reciba un objeto producto { nombre, precio }.
// La función debe retornar un NUEVO objeto con el precio aumentado en un 21%,
// pero NO debe modificar el producto original.
// -----------------------------------------------------------------------------

const laptop = { nombre: "Laptop Gaming", precio: 1000 };

// --- TU SOLUCIÓN AQUÍ ---
const agregarIva = (producto) => {
  return {
    ...producto,
    precio: producto.precio * 1.21,
  };
};

const productoIva = agregarIva(laptop);

console.log("Ejercicio 5:");
console.log("Original:", laptop); // Sigue en 1000
console.log("Con IVA:", productoIva); // 1210
console.log("*************************************");

// --- SOLUCIÓN ---
/*
const agregarIva = ( producto ) => {
    // Retornamos un nuevo objeto usando spread para no mutar el original
    return {
        ...producto,
        precio: producto.precio * 1.21
    };
};

const laptopConIva = agregarIva( laptop );

console.log('Ejercicio 5:');
console.log('Original:', laptop);      // Sigue en 1000
console.log('Con IVA:', laptopConIva); // 1210
*/
