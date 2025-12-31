// ==========================================================
// LABORATORIO DE MÉTODOS DE OBJECT
// Estudiante: César López
// ==========================================================

// ----------------------------------------------------------
// SECCIÓN 1: OPERADOR delete
// ----------------------------------------------------------

// Ejercicio 1: Limpieza de datos sensibles.
// Dado el objeto 'empleado', elimina la propiedad 'password'.
const empleado = { id: 1, nombre: "César", password: "123secretX!" };

// TU CÓDIGO AQUÍ:
console.log("> SECCIÓN 1: OPERADOR delete");
console.log("> Ejercicio 1: Limpieza de datos sensibles.");
console.log("> Dado el objeto 'empleado', elimina la propiedad 'password'.");

console.log("Objeto empleado: ", empleado);
delete empleado.password;
console.log("Propiedad 'password' eliminada: ", empleado);

console.log("*************************************************");

// SOLUCIÓN: delete empleado.password;

// Ejercicio 2: Limpieza dinámica.
// Tienes un objeto 'producto'. Elimina la propiedad cuyo nombre está
// guardado en la variable 'propiedadAEliminar'.
const producto = { nombre: "Monitor", precio: 300, stock: 15 };
const propiedadAEliminar = "stock";

// TU CÓDIGO AQUÍ:
console.log("> Ejercicio 2: Limpieza dinámica.");
console.log("> Tienes un objeto 'producto'.");
console.log("> Elimina la propiedad cuyo nombre está");
console.log("> guardado en la variable 'propiedadAEliminar'.");

console.log("Objeto producto: ", producto);
delete producto[propiedadAEliminar];
console.log("Propiedad eliminada: ", producto);

console.log("*************************************************");

// SOLUCIÓN: delete producto[propiedadAEliminar];

// Ejercicio 3: Verificación de borrado.
// Elimina la propiedad 'temp' del objeto 'clima' y luego imprime
// el objeto para confirmar que ya no existe.
const clima = { ciudad: "Puebla", temp: 22, condicion: "Soleado" };

// TU CÓDIGO AQUÍ:
console.log("> Ejercicio 3: Verificación de borrado.");
console.log("> Elimina la propiedad 'temp' del objeto 'clima' y luego imprime");
console.log("> el objeto para confirmar que ya no existe.");

console.log("Objeto clima: ", clima);
delete clima.temp;
console.log("Propiedad eliminada: ", clima);

console.log("*************************************************");

// SOLUCIÓN: delete clima.temp; console.log(clima);

// ----------------------------------------------------------
// SECCIÓN 2: Object.entries()
// ----------------------------------------------------------

// Ejercicio 4: Conversión a listas.
// Convierte el objeto 'puntajes' en una matriz de pares [clave, valor]
// y guárdalo en una variable llamada 'matrizPuntos'.
const puntajes = { nivel1: 100, nivel2: 250 };

// TU CÓDIGO AQUÍ:
console.log("> Ejercicio 4: Conversión a listas.");
console.log("> Convierte el objeto 'puntajes'");
console.log("> en una matriz de pares [clave, valor]");
console.log("> y guárdalo en una variable llamada 'matrizPuntos'.");

console.log("Objeto puntajes: ", puntajes);
const matrizPuntos = Object.entries(puntajes);
console.log("Matriz: ", matrizPuntos);

console.log("*************************************************");

// SOLUCIÓN: const matrizPuntos = Object.entries(puntajes);

// Ejercicio 5: Iteración manual.
// Usa Object.entries() junto con un forEach para imprimir un mensaje:
// "La propiedad X tiene el valor Y" para cada entrada de 'coche'.
const coche = { marca: "Tesla", modelo: "Model 3" };

// TU CÓDIGO AQUÍ:
console.log("> Ejercicio 5: Iteración manual.");
console.log("> Usa Object.entries() junto con un");
console.log("> forEach para imprimir un mensaje:");
console.log(
  "> 'La propiedad X tiene el valor Y' para cada entrada de 'coche'."
);

console.log("Objeto coche: ", coche);
const arrayCoches = Object.entries(coche);

console.log("Forma más simple, mismo resultado");
Object.entries(coche).forEach(([clave, valor]) =>
  console.log(`La propiedad ${clave} tiene el valor ${valor}`)
);

console.log("*************************************************");

// SOLUCIÓN: Object.entries(coche).forEach(([clave, valor]) => console.log(`La propiedad ${clave} tiene el valor ${valor}`));

// Ejercicio 6: Transformación.
// Crea un nuevo array que contenga strings con el formato "clave=valor"
// a partir del objeto 'filtros'.
const filtros = { color: "rojo", talla: "M" };

// TU CÓDIGO AQUÍ:
console.log("> Ejercicio 6: Transformación.");
console.log("> Crea un nuevo array que contenga");
console.log("> strings con el formato 'clave=valor'");
console.log("> a partir del objeto 'filtros'.");

console.log("Objeto filtros: ", filtros);
const arrayFiltros = Object.entries(filtros).map(([k, v]) => `${k}=${v}`);
console.log("Arreglo filtros: ", arrayFiltros);

console.log("*************************************************");

// SOLUCIÓN: const query = Object.entries(filtros).map(([k, v]) => `${k}=${v}`);

// ----------------------------------------------------------
// SECCIÓN 3: Object.freeze()
// ----------------------------------------------------------

// Ejercicio 7: Inmutabilidad básica.
// Congela el objeto 'PI' para que nadie pueda cambiar su valor.
// Luego intenta cambiarlo a 4 y verifica que no cambió.
const constante = { valor: 3.1416 };

// TU CÓDIGO AQUÍ:
console.log("> Ejercicio 7: Inmutabilidad básica.");
console.log("> Congela el objeto 'PI' para que nadie pueda cambiar su valor.");
console.log("> Luego intenta cambiarlo a 4 y verifica que no cambió.");

console.log("Objeto constante: ", constante);
Object.freeze(constante);
constante.valor = 0;
console.log("Objeto freeze constante: ", constante);

console.log("*************************************************");

// SOLUCIÓN: Object.freeze(constante); constante.valor = 4; console.log(constante.valor);

// Ejercicio 8: Seguridad en API.
// Tienes un objeto con las URLs de tu API. Congélalo y verifica
// si el objeto está congelado usando Object.isFrozen().
const api = { baseUrl: "https://api.com", version: "v1" };

// TU CÓDIGO AQUÍ:
console.log("> Ejercicio 8: Seguridad en API.");
console.log("> Tienes un objeto con las URLs de tu API. Congélalo y verifica");
console.log("> si el objeto está congelado usando Object.isFrozen().");

console.log("Objeto api: ", api);
Object.freeze(api);
console.log("Objeto congelado?: ", Object.isFrozen(api));

console.log("*************************************************");

// SOLUCIÓN: Object.freeze(api); console.log(Object.isFrozen(api));

// Ejercicio 9: Protección de métodos.
// Congela el objeto 'herramienta' para que su método 'saludar' no pueda ser sobrescrito.
const herramienta = { saludar: () => "Hola" };

// TU CÓDIGO AQUÍ:
console.log("> Ejercicio 9: Protección de métodos.");
console.log(
  "> Congela el objeto 'herramienta' para que su método 'saludar' no "
);
console.log("pueda ser sobrescrito.");

console.log("Objeto herramienta: ", herramienta);
Object.freeze(herramienta);
herramienta.saludar = () => "Adios";
console.log("Objeto herramienta: ", herramienta);

console.log("*************************************************");

// SOLUCIÓN: Object.freeze(herramienta); herramienta.saludar = () => "Adiós";

// ----------------------------------------------------------
// SECCIÓN 4: Object.getOwnPropertyNames()
// ----------------------------------------------------------

// Ejercicio 10: Auditoría de claves.
// Obtén un array con todos los nombres de las propiedades del objeto 'usuario'.
const dev = { nickname: "César", lenguaje: "JS", editor: "VS Code" };

// TU CÓDIGO AQUÍ:
console.log("> Ejercicio 10: Auditoría de claves.");
console.log("> Obtén un array con todos los nombres de ");
console.log("> las propiedades del objeto 'usuario'.");

console.log("Objeto dev: ", dev);
const claves = Object.getOwnPropertyNames(dev);
console.log("Arreglo de claves: ", claves);

console.log("*************************************************");

// SOLUCIÓN: const claves = Object.getOwnPropertyNames(dev);

// Ejercicio 11: Contador de propiedades.
// Usa getOwnPropertyNames para obtener cuántas propiedades tiene el objeto 'libro'.
const libro = { titulo: "Clean Code", autor: "Robert C. Martin", paginas: 464 };

// TU CÓDIGO AQUÍ:
console.log("> Ejercicio 11: Contador de propiedades.");
console.log("> Usa getOwnPropertyNames para obtener ");
console.log("> cuántas propiedades tiene el objeto 'libro'.");

console.log("Objeto libro: ", libro);
console.log(Object.getOwnPropertyNames(libro).length);

console.log("*************************************************");

// SOLUCIÓN: console.log(Object.getOwnPropertyNames(libro).length);

// Ejercicio 12: Filtrado de claves.
// Obtén las propiedades de 'estudiante' y filtra aquellas que tengan
// más de 5 caracteres en su nombre.
const estudiante = { id: 1, nombre: "César", promedio: 9.5 };

// TU CÓDIGO AQUÍ:
console.log("> Ejercicio 12: Filtrado de claves.");
console.log("> Obtén las propiedades de 'estudiante'");
console.log("> y filtra aquellas que tengan");
console.log("> más de 5 caracteres en su nombre.");
console.log("Objeto estudiante: ", estudiante);

const arrayClaves = Object.getOwnPropertyNames(estudiante);
arrayClaves.forEach((clave) => {
  if (clave.length > 4) {
    console.log(clave);
  }
});

console.log("*************************************************");

// SOLUCIÓN: const largas = Object.getOwnPropertyNames(estudiante).filter(name => name.length > 5);

// ----------------------------------------------------------
// SECCIÓN 5: Object.values()
// ----------------------------------------------------------

// Ejercicio 13: Suma de valores.
// Obtén los valores del objeto 'gastos' y súmalos todos para obtener el total.
const gastos = { renta: 500, comida: 200, internet: 50 };

// TU CÓDIGO AQUÍ:
console.log("> Ejercicio 13: Suma de valores.");
console.log("> Obtén los valores del objeto 'gastos' ");
console.log("> y súmalos todos para obtener el total.");
console.log("Objeto gastos: ", gastos);

const arrayGastos = Object.values(gastos);
let total = 0;
arrayGastos.forEach((gasto) => {
  total += gasto;
});

console.log(total);

console.log("*************************************************");

// SOLUCIÓN: const total = Object.values(gastos).reduce((acc, val) => acc + val, 0);

// Ejercicio 14: Verificación de existencia.
// Usa Object.values() para saber si el valor "César" existe dentro del objeto 'equipo'.
const equipo = { lider: "César", mentor: "Juan", junior: "Luis" };

// TU CÓDIGO AQUÍ:
console.log("> Ejercicio 14: Verificación de existencia.");
console.log("> Usa Object.values() para saber si ");
console.log("> el valor 'César' existe dentro del objeto");
console.log("Objeto equipo: ", equipo);

Object.values(equipo).forEach((nombres) => {
  nombres === "César"
    ? console.log("César está en el equipo")
    : console.log("");
});

console.log("*************************************************");

// SOLUCIÓN: const existe = Object.values(equipo).includes("César");

// Ejercicio 15: Formateo de datos.
// Obtén los valores del objeto 'persona', conviértelos todos a Mayúsculas
// y guárdalos en un nuevo array (asume que todos son strings).
const persona = { n: "cesar", a: "lopez" };

// TU CÓDIGO AQUÍ:
console.log("> Ejercicio 15: Formateo de datos.");
console.log("> Obtén los valores del objeto 'persona', ");
console.log("> conviértelos todos a Mayúsculas");
console.log("> y guárdalos en un nuevo array (asume que todos son strings).");
console.log("Objeto persona: ", persona);

Object.values(persona).forEach((entrada) => {
  console.log(entrada.toUpperCase());
});

console.log("*************************************************");

// SOLUCIÓN: const mayus = Object.values(persona).map(v => v.toUpperCase());

// ==========================================================
// ¡A darle átomos, César!
// ¿Quieres que revisemos algún método más avanzado como Object.assign()?
// ==========================================================
