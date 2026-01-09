class Persona {
  //Propiedades estáticas
  static _conteo = 0;

  //Get estático
  static get conteo() {
    return Persona._conteo + " Instancias";
  }

  // Método estático
  static mensaje() {
    console.log("Método estático");
  }

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

    //Uso de la propiedad estática
    Persona._conteo++;
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

class Heroe extends Persona {
  clan = "Sin clan";

  constructor(nombre, codigo, frase) {
    super(nombre, codigo, frase);
    this.clan = "Avengers";
  }
}

const spiderman = new Persona("Peter", "Spiderman", "Su amigo amigable");
const venon = new Heroe("Peter", "Vennon", "Soy vennon");

console.log(venon);
venon.quienSoy();
