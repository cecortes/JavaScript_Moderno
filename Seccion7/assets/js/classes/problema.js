// Estructura y Sintáxis

// ESTRUCTURA ANTIGUA
/**
 * Función como clase
 * @param {String} nombre
 * @param {Number} edad
 */
function Persona(nombre, edad) {
  // Constructor
  this.nombre = nombre;
  this.edad = edad;

  // Método interno
  this.imprimir = function () {
    console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
  };
}

//ESTRUCTURA RECOMENDADA
class ClasePersona {
  constructor(nombre, edad) {
    // Constructor
    this.nombre = nombre;
    this.edad = edad;

    // Método interno
    this.imprimir = function () {
      console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    };
  }
}

const cesar = new Persona("César", 48);
cesar.imprimir();

const roberto = new ClasePersona("Roberto", 47);
roberto.imprimir();
