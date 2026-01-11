class Singleton {
  static instancia;
  nombre = "";

  constructor(nombre = "") {
    // Evaluámos con doble negación si es undefined instancia
    if (!!Singleton.instancia) {
      // Si ya existe regresamos la instancia
      return Singleton.instancia;
    }

    Singleton.instancia = this;
    this.nombre = nombre;
  }
}

const instancia1 = new Singleton("Ironman");
const instancia2 = new Singleton("Spiderman");
const instancia3 = new Singleton("BlackPanther");

console.log(`El nombre de instancia1 es ${instancia1.nombre}`);
console.log(`El nombre de instancia2 es ${instancia2.nombre}`);
console.log(`El nombre de instancia3 es ${instancia3.nombre}`);
