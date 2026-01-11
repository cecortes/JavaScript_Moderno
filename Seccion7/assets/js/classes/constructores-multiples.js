class Persona {
  // Es estático para que pueda accederse sin instanciar la clase
  static porObjeto({ nombre, apellido, pais }) {
    return new Persona(nombre, apellido, pais);
  }

  constructor(nombre, apellido, pais) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.pais = pais;
  }

  getInfo() {
    console.log(`Info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
  }
}

const nombre1 = "César";
const apellido1 = "López";
const pais1 = "México";

const persona1 = new Persona(nombre1, apellido1, pais1);
persona1.getInfo();

const personaObjeto = {
  nombre: "Roberto",
  apellido: "Cortés",
  pais: "Puebla",
};

const persona2 = Persona.porObjeto(personaObjeto);
persona2.getInfo();
