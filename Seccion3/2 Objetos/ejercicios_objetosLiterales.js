// ==========================================================
// EJERCICIOS DE OBJETOS LITERALES PARA CÉSAR LÓPEZ
// Instrucciones: Resuelve cada ejercicio antes de ver la solución.
// Todo el código es ejecutable.
// ==========================================================

// ----------------------------------------------------------
// EJERCICIO 1: El Objeto Mascota
// Crea un objeto llamado 'mascota' que tenga:
// - nombre (string)
// - especie (string)
// - edad (number)
// - un método llamado 'cumplirAños' que aumente la edad en 1.
// Luego, imprime la edad antes y después de llamar al método.
// ----------------------------------------------------------

// ESCRIBE TU CÓDIGO AQUÍ...
const mascota = {
  nombre: "Gorda",
  especie: "Perro Gordo",
  edad: 5,
  cumplirAnhos() {
    this.edad += 1;
  },
};

console.log("> EJERCICIO 1: El Objeto Mascota");
console.log("> Crea un objeto llamado 'mascota' que tenga:");
console.log(">- nombre (string)");
console.log(">- especie (string)");
console.log(">- edad (number)");
console.log(">- un método llamado 'cumplirAños' que aumente la edad en 1.");
console.log(">Luego, imprime la edad antes y después de llamar al método.");
console.log("Objeto mascota", mascota);
console.log("Edad: ", mascota.edad);
mascota.cumplirAnhos();
console.log("Edad: ", mascota.edad);

console.log("*************************************************");

// ESPACIO PARA LA SOLUCIÓN
/*
const mascota = {
nombre: "Hunter",
especie: "Perro",
edad: 3,
cumplirAños: function() {
this.edad += 1;
}
};

console.log("Ejercicio 1:");
console.log("Edad inicial:", mascota.edad);
mascota.cumplirAños();
console.log("Edad nueva:", mascota.edad);
*/

// ----------------------------------------------------------
// EJERCICIO 2: Acceso Dinámico
// Dado el objeto 'configuracion', utiliza una variable llamada
// 'parametro' para acceder al valor de 'brillo' usando corchetes.
// ----------------------------------------------------------

const configuracion = {
  volumen: 80,
  brillo: 50,
  idioma: "Español",
};

// ESCRIBE TU CÓDIGO AQUÍ...
console.log("> EJERCICIO 2: Acceso Dinámico");
console.log("> Dado el objeto 'configuracion', utiliza una variable llamada");
console.log("> 'parametro' para acceder al ");
console.log("> valor de 'brillo' usando corchetes.");
console.log("Objeto configuracion", configuracion);

const parametro = "brillo";
console.log("> Brillo: ", configuracion[parametro]);

console.log("*************************************************");

// ESPACIO PARA LA SOLUCIÓN
/*
const parametro = "brillo";
console.log("\nEjercicio 2:");
console.log("El valor del brillo es:", configuracion[parametro]);
*/

// ----------------------------------------------------------
// EJERCICIO 3: Objetos Anidados
// Crea un objeto 'curso' que contenga:
// - titulo (string)
// - instructor (objeto con nombre y apellido)
// - alumnos (array de strings)
// Imprime en consola el apellido del instructor.
// ----------------------------------------------------------

// ESCRIBE TU CÓDIGO AQUÍ...
console.log("> EJERCICIO 3: Objetos Anidados");
console.log("> Crea un objeto 'curso' que contenga:");
console.log("> - titulo (string)");
console.log("> - instructor (objeto con nombre y apellido)");
console.log("> - alumnos (array de strings)");
console.log("> Imprime en consola el apellido del instructor.");

const curso = {
  titulo: "JAVASCRIPT",
  instructor: {
    nombre: "César",
    apellido: "López",
  },
  alumnos: ["Juan", "Pedro", "Pablo", "Adriana", "Gaby"],
};

console.log("Objeto curso", curso);
console.log("Apellido del instructor: ", curso.instructor.apellido);

console.log("*************************************************");

// ESPACIO PARA LA SOLUCIÓN
/*
const curso = {
titulo: "JavaScript Master",
instructor: {
nombre: "Diego",
apellido: "De Granda"
},
alumnos: ["César", "Ana", "Luis"]
};

console.log("\nEjercicio 3:");
console.log("Apellido del instructor:", curso.instructor.apellido);
*/

// ----------------------------------------------------------
// EJERCICIO 4: Modificación y Eliminación
// Tienes un objeto 'auto'.
// 1. Cambia el 'color' a "Azul".
// 2. Agrega la propiedad 'transmision' con valor "Manual".
// 3. Elimina la propiedad 'precio'.
// ----------------------------------------------------------

const auto = {
  marca: "Toyota",
  color: "Rojo",
  precio: 20000,
};

// ESCRIBE TU CÓDIGO AQUÍ...
console.log("> EJERCICIO 4: Modificación y Eliminación");
console.log("> Tienes un objeto 'auto'.");
console.log("> 1. Cambia el 'color' a 'Azul'.");
console.log("> 2. Agrega la propiedad 'transmision' con valor 'Manual'.");
console.log("> 3. Elimina la propiedad 'precio'.");

console.log("Objeto auto: ", auto);

auto.color = "Azul";
auto.transmision = "Manual";
delete auto.precio;

console.log("Objeto auto: ", auto);

console.log("*************************************************");

// ESPACIO PARA LA SOLUCIÓN
/*
auto.color = "Azul";
auto.transmision = "Manual";
delete auto.precio;

console.log("\nEjercicio 4:");
console.log("Auto modificado:", auto);
*/

// ----------------------------------------------------------
// EJERCICIO 5: El Carrito de Compras
// Crea un objeto 'carrito' que tenga un array de 'productos'.
// Cada producto es un objeto con { nombre, precio }.
// Agrega un método 'calcularTotal' que sume el precio de todos los productos.
// ----------------------------------------------------------

// ESCRIBE TU CÓDIGO AQUÍ...
console.log("> EJERCICIO 5: El Carrito de Compras");
console.log("> Crea un objeto 'carrito' que tenga un array de 'productos'.");
console.log("> Cada producto es un objeto con { nombre, precio }.");
console.log(
  "> Agrega un método 'calcularTotal' que sume el precio de todos los "
);
console.log("> productos.)");

const carrito = {
  productos: [
    {
      nombre: "Aguacate",
      precio: 50,
    },
    {
      nombre: "Jamon",
      precio: 60,
    },
    {
      nombre: "Cigarros",
      precio: 80,
    },
  ],
  calcularTotal() {
    let total = 0;

    this.productos.forEach((producto) => {
      total += producto.precio;
    });
    return total;
  },
};

console.log("Objeto carrito", carrito);
console.log("Total de Productos: ", carrito.calcularTotal());

console.log("*************************************************");

// ESPACIO PARA LA SOLUCIÓN
/*
const carrito = {
productos: [
{ nombre: "Laptop", precio: 1000 },
{ nombre: "Mouse", precio: 25 },
{ nombre: "Monitor", precio: 200 }
],
calcularTotal: function() {
let total = 0;
for (let i = 0; i < this.productos.length; i++) {
total += this.productos[i].precio;
}
return total;
}
};

console.log("\nEjercicio 5:");
console.log("Total del carrito: $" + carrito.calcularTotal());
*/

// ==========================================================
// César, ¿te gustaría que pasemos a ejercicios de
// desestructuración (destructuring) para simplificar esto?
// ==========================================================
