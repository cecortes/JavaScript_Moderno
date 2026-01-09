class Rectangulo {
  //Propiedad Privada usando # antes del nomnre
  #area = 0;

  constructor(base = 0, altura = 0) {
    this.base = base;
    this.altura = altura;

    //Propiedad privada #area
    this.#area = this.base * this.altura;
  }
}

const rectan = new Rectangulo(10, 15);

console.log(rectan);
