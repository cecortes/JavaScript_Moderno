"use strict";

const superHeroes = [
  {
    id: 1,
    name: "Barman",
  },
  {
    id: 2,
    name: "SuperDrogas",
  },
  {
    id: 3,
    name: "ChelaMix",
  },
  {
    id: 4,
    name: "SuperPerro",
  },
];

/**
 * Shallow Copy
 * Aquí no funcionaría el spread porque el arreglo contiene
 * solamente objetos, los cuales siguen pasando por referencia
 * a la copia.
 */
const superHeroesShallowCopy = [...superHeroes];

/**
 * structuredClone
 * Usar cuando el arreglo contiene objetos y se quiere hacer una
 * copia del arreglo.
 */
const superHeroesStructuredClone = structuredClone(superHeroes);

superHeroes[0].name = "Droguin";

console.table(superHeroes);
console.table(superHeroesStructuredClone);
