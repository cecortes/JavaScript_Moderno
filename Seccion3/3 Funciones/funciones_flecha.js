/**
 * GUÍA DE ARROW FUNCTIONS Y CALLBACKS PARA CÉSAR LÓPEZ
 * ----------------------------------------------------
 * César, las funciones flecha no son solo "azúcar sintáctico" para escribir menos.
 * Tienen un comportamiento distinto con el contexto ('this') que debes conocer.
 */

// 1. ¿QUÉ ES UNA ARROW FUNCTION?
// Es una forma compacta de escribir funciones. Se eliminan las palabras 'function'
// y se añade la "flecha fat" (=>) después de los parámetros.

const saludar = () => {
  return "Hola, César, desde una flecha.";
};

console.log(saludar());

// 2. FORMAS DE DECLARAR UNA FUNCIÓN FLECHA
// Dependiendo de la complejidad, puedes simplificar la sintaxis:

// A. Sin parámetros: Paréntesis vacíos obligatorios.
const ping = () => "pong";

// B. Un solo parámetro: Los paréntesis son opcionales (pero recomendados por consistencia).
const duplicar = (n) => n * 2;

// C. Múltiples parámetros: Paréntesis obligatorios.
const sumar = (a, b) => a + b;

// D. Cuerpo con múltiples líneas: Requiere llaves {} y la palabra 'return'.
const operacionCompleja = (a, b) => {
  const resultado = (a + b) * 2;
  return resultado / 3;
};

// 3. ¿QUÉ ES UNA CALLBACK FUNCTION?
// César, una callback es simplemente una función que se pasa como argumento a otra función
// para ser ejecutada después (al terminar una tarea).

const procesarEntrada = (nombre, callback) => {
  console.log(`Procesando datos de ${nombre}...`);
  callback(); // Aquí ejecutamos la función que recibimos
};

procesarEntrada("César", () => console.log("¡Callback ejecutada con éxito!"));

// 4. EL OBJETO 'this' EN ARROW FUNCTIONS
// Esta es la diferencia técnica más grande, César. Presta atención:
// - Funciones tradicionales: El 'this' cambia según QUIÉN llame a la función.
// - Arrow Functions: NO tienen su propio 'this'. Heredan el 'this' del contexto donde fueron creadas.

const usuario = {
  nombre: "César",
  saludarTradicional: function () {
    console.log(`Tradicional: Hola ${this.nombre}`); // 'this' es el objeto usuario
  },
  saludarFlecha: () => {
    console.log(`Flecha: Hola ${this.nombre}`); // 'this' es el objeto global (o undefined), no 'usuario'
  },
};

usuario.saludarTradicional(); // Imprime: Hola César
usuario.saludarFlecha(); // Imprime: Hola undefined (o error en modo estricto)

// 5. CASOS DE USO MÁS FRECUENTES DE 'this' (Y POR QUÉ USAR FLECHAS)
// El uso más común es dentro de métodos de clase o temporizadores para no perder el contexto.

function Temporizador() {
  this.segundos = 0;

  // Con una flecha, 'this' sigue siendo la instancia de Temporizador
  setInterval(() => {
    this.segundos++;
    console.log(`César, han pasado ${this.segundos} segundos.`);
  }, 1000);
}

const miReloj = new Temporizador(); // Descomenta para ver en acción

// 6. ¿QUÉ DEVUELVE UNA FUNCIÓN FLECHA?
// A diferencia de las tradicionales, tienen "Retorno Implícito":
// Si la función está en una sola línea y NO tiene llaves {}, devuelve automáticamente el valor.

const cuadrado = (x) => x * x; // Devuelve el resultado de x*x automáticamente

// OJO: Si quieres devolver un OBJETO de forma implícita, debes usar paréntesis:
const crearUsuario = (nombre) => ({ id: 1, user: nombre });

console.log(crearUsuario("César"));

/**
 * RESUMEN PARA CÉSAR:
 * 1. Usa Arrow Functions para callbacks y funciones sencillas.
 * 2. Úsalas cuando quieras mantener el contexto de 'this' del padre.
 * 3. NO las uses como métodos principales de un objeto si necesitas acceder a otras propiedades del mismo.
 */
