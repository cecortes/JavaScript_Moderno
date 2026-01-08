// Sintáxis
class Persona {
  //Propiedades
  nombre = "";
  codigo = "";
  frase = "";
  comida = "";

  //Método Constructor, recibe los valores como argumento
  constructor(nombre, codigo, frase) {
    //Parse de los argumentos a las propiedades del objeto
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;
  }

  // Set, método especial
  set setComidaFavorita(comida) {
    this.comida = comida;
  }

  // Get, método especial
  get getComidaFavorita() {
    return `La comida favorita de ${this.nombre} es ${this.comida}`;
  }

  //Método de la clase
  quienSoy() {
    console.log(`Soy ${this.nombre} con identidad ${this.codigo}`);
  }

  //Método de la clase
  miFrase() {
    this.quienSoy();
    console.log(this.frase);
  }
}

const spiderman = new Persona("Peter", "Spiderman", "Su amigo amigable");
const ironman = new Persona(
  "Tony",
  "Ironman",
  "Filántropo, Inventor y Playboy"
);
// console.log(spiderman);
// console.log(ironman);

// spiderman.quienSoy();
spiderman.miFrase();
// ironman.quienSoy();
ironman.miFrase();

// Uso del set
spiderman.setComidaFavorita = "Pie de manzana";
ironman.setComidaFavorita = "Hamburguesa";
console.log(spiderman.getComidaFavorita);
console.log(ironman.getComidaFavorita);
