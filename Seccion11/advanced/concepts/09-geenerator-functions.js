/**
 * environmentsComponent
 * @description Recibe un div y le inyecta un contenido
 * @param {HTMLDivElement} element
 */
export const generatorFuncitonsComponent = (element) => {
  const myGenerator = myFirstGeneratorFunction();

  console.log(myGenerator.next());
  console.log(myGenerator.next());
  console.log(myGenerator.next());
  console.log(myGenerator.next());
  console.log(myGenerator.next());
};

function* myFirstGeneratorFunction() {
  yield "Primer valor";
  yield "Segundo valor";
  yield "Tercer valor";
  yield "Cuarto valor";

  return "No hay valores";
}
