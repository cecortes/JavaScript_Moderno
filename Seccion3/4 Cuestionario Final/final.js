/**
 * GUÍA DE EJERCICIOS DE JAVASCRIPT - NIVEL MEDIO A AVANZADO
 * Usuario: César
 */

// ==========================================
// SECCIÓN 1: ARREGLOS Y MÉTODOS (1-10)
// ==========================================

// 1. Usa splice para eliminar los dos elementos centrales de un array de longitud par.
let numbers1 = [1, 2, 3, 4, 5, 6];
// Escribe tu código aquí:
console.log({ numbers1 });
const mitad = numbers1.length / 2;
numbers1.splice(mitad - 1, 2);
console.log({ numbers1 });
console.log("***********************************");

/* SOLUCIÓN:
numbers1.splice((numbers1.length / 2) - 1, 2); 
Explicación: Calculamos el índice medio restando 1 y eliminamos 2 elementos.
*/

// 2. Implementa un shift manual usando splice.
let fruits2 = ["Manzana", "Pera", "Uva"];
// Escribe tu código aquí:
console.log([fruits2]);
const shiftManual = fruits2.splice(0, 1)[0];
fruits2.push(shiftManual);
console.log({ fruits2 });
console.log("***********************************");

/* SOLUCIÓN:
let removed = fruits2.splice(0, 1)[0];
Explicación: splice(0, 1) devuelve un array con el primer elemento y modifica el original.
*/

// 3. Usa forEach para crear un histograma de frecuencias de números en un array.
let tags = ["js", "html", "js", "css", "js", "html"];
let freq = {};
// Escribe tu código aquí:
tags.forEach((tag) => {
  freq[tag] = (freq[tag] || 0) + 1;
});

console.log({ tags });
console.log({ freq });
console.log("*****************************************");

/* SOLUCIÓN:
tags.forEach(tag => freq[tag] = (freq[tag] || 0) + 1);
Explicación: Por cada elemento, incrementamos su contador en el objeto freq.
*/

// 4. Encuentra el índice de la primera aparición de un objeto específico (referencia) usando indexOf.
let objRef = { id: 1 };
let list4 = [{ id: 0 }, objRef, { id: 2 }];
// Escribe tu código aquí:
const indiceRef = list4.indexOf(objRef);
console.log({ indiceRef });
console.log("*****************************************");

/* SOLUCIÓN:
let index = list4.indexOf(objRef);
Explicación: indexOf funciona con referencias de memoria, no con igualdad estructural.
*/

// 5. Usa unshift para agregar múltiples elementos y explica el orden resultante.
let queue = [3, 4];
// Escribe tu código aquí:
console.log(queue);
queue.unshift(1, 2);
console.log(queue);
console.log("*****************************************");

/* SOLUCIÓN:
queue.unshift(1, 2); // Resultado: [1, 2, 3, 4]
Explicación: Al pasar múltiples argumentos a unshift, se insertan en el bloque manteniendo su orden.
*/

// 6. Crea una función que rote un array a la derecha N veces usando pop y unshift.
function rotarArrayDerecha(nVeces) {
  let arrayOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  console.log(arrayOriginal);
  for (let i = 0; i < nVeces; i++) {
    arrayOriginal.unshift(arrayOriginal.pop());
  }
  console.log(arrayOriginal);
}

rotarArrayDerecha(2);
console.log("****************************************");

// 7. Usa splice para insertar un array dentro de otro en una posición específica.
let arrayIns = [0, 1, 2, 3, 4];
let arrayIn = ["a", "b"];
console.log(arrayIns);
arrayIns.splice(2, 0, arrayIn);
console.log(arrayIns);

// 8. Dado un array de strings, filtra y transforma usando forEach (sin usar filter/map).
const array = ["frío", "perro", "azul", "verde", "a", "b", "c"];
console.log(array);
let filtro = "a";
array.forEach((item, index) => {
  if (item === filtro) array.splice(index, 1);
});
console.log(array);

console.log("****************************************");

// 9. Implementa una búsqueda bidireccional usando indexOf con el segundo parámetro de posición.
console.log(array);
filtro = "perro";
let indiceBusqueda = array.indexOf(filtro);
console.log(`Index: ${indiceBusqueda}`);
console.log("****************************************");

// 10. Vacía un array de 100 elementos sin usar "array = []" (usa length).
array.length = 0;

console.log("****************************************");
/* SOLUCIÓN (10):
array.length = 0; 
Explicación: Modificar la propiedad length trunca el array original.
*/

// ==========================================
// SECCIÓN 2: OBJETOS Y MÉTODOS DE OBJECT (11-20)
// ==========================================

// 11. Usa Object.freeze en un objeto y luego intenta borrar una propiedad con delete. Observa qué pasa.
const config = { status: "active" };
// Escribe tu código aquí:
Object.freeze(config);
let resDelete = delete config.status;
console.log({ resDelete });

console.log("****************************************");

/* SOLUCIÓN:
Object.freeze(config);
delete config.status; // Devuelve false en modo estricto, no borra nada.
Explicación: freeze hace al objeto inmutable.
*/

// 12. Usa Object.entries para convertir un objeto de precios {pan: 10, leche: 20} en un string "pan: $10, leche: $20".
const precios = {
  pan: 10,
  leche: 20,
};
let stringPrecios = "";
let arrayPrecios = Object.entries(precios);
for (let item of arrayPrecios) {
  stringPrecios += `${item[0]}: $${item[1]}, `;
}
console.log(precios, stringPrecios);

console.log("****************************************");

// 13. Obtén solo las propiedades NO heredadas de un objeto complejo usando Object.getOwnPropertyNames.
const objetoPadre = {
  nombre: "",
  apellido: "",
};

const objetoHijo = {
  objetoPadre,
  apodo: ",",
};

const propiedadesHijo = Object.getOwnPropertyNames(objetoHijo);

console.log({ objetoPadre }, { propiedadesHijo });

console.log("****************************************");

// 14. Usa Object.values para sumar todos los valores numéricos de un objeto.
const objetoNumero = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
};
let suma = 0;

const valorNum = Object.values(objetoNumero);
valorNum.forEach((numero) => {
  suma += numero;
});

console.log({ objetoNumero }, { suma });

console.log("****************************************");

// 15. Crea un clon superficial (shallow copy) de un objeto usando Object.entries y forEach.
const objetoOriginal = {
  status: "activo",
  valor: 20,
  actividad: 50,
};

const objetoCopia = {};

const arrayEntries = Object.entries(objetoOriginal);
arrayEntries.forEach((valor) => {
  objetoCopia[valor[0]] = valor[1];
});

// Mejor praxis
const shallowCopy = { ...objetoOriginal };

console.log({ objetoOriginal, objetoCopia, shallowCopy });

console.log("****************************************");

// 16. Usa delete para eliminar una propiedad dinámica basada en una variable.
let keyToDelete = "tempData";
let session = { user: "César", tempData: "404" };
// Escribe tu código aquí:
console.log({ session });
delete session[keyToDelete];
console.log({ session });

console.log("****************************************");

/* SOLUCIÓN:
delete session[keyToDelete];
Explicación: Se usa la notación de corchetes para evaluar la variable antes del delete.
*/

// 17. Verifica si un objeto está congelado antes de intentar modificarlo.
console.log("El objeto config está protegido?: ", Object.isFrozen(config));

console.log("****************************************");

// 18. Itera sobre un objeto usando Object.entries y desestructuración en el bucle.
Object.entries(objetoNumero).forEach(([key, valor]) => {
  console.log(key, valor);
});

console.log("****************************************");

// 19. Crea un objeto que no pueda ser extendido (Object.preventExtensions) y prueba añadir propiedades.
const objNoExtend = {
  impresora: "si",
  valor: 1000,
};

console.log({ objNoExtend });
Object.preventExtensions(objNoExtend);
objNoExtend.status = "activo";

console.log("****************************************");

// 20. Usa Object.getOwnPropertyNames para contar cuántas propiedades tiene un objeto sin usar un bucle manual.
console.log({ objetoNumero });

console.log(
  "Número de propiedades: ",
  Object.getOwnPropertyNames(objetoNumero).length
);

console.log("****************************************");
// ==========================================
// SECCIÓN 3: FUNCIONES Y ARGUMENTS (21-30)
// ==========================================
console.log("****************************************");

// 21. Crea una función que sume N cantidad de argumentos usando el objeto "arguments".
function sumAll(n1, n2, n3, n4, n5) {
  // Escribe tu código aquí:
  let total = 0;

  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }

  return total;
}

console.log(sumAll(10, 20, 30, 40, 50));

console.log("****************************************");

/* SOLUCIÓN:
let total = 0;
for(let i=0; i < arguments.length; i++) { total += arguments[i]; }
return total;
Explicación: arguments es un objeto similar a un array disponible en funciones tradicionales.
*/

// 22. Convierte el objeto "arguments" en un array real usando métodos de Array.
function argsToArray(arg1, arg2, arg3) {
  let array = [...arguments];

  console.log({ arguments, array });
}

argsToArray("a", "b", "c");

console.log("****************************************");

// 23. Crea una función anónima autoejecutable (IIFE) que reciba el objeto global como parámetro.
const autoExe = ((global) => {
  global = "Hola";
  console.log(global);
})();

console.log("****************************************");

// 24. Pasa una función anónima como callback a un forEach para modificar un array externo.
let arrayExterno = ["a", "b", "c"];
console.log({ arrayExterno });
arrayExterno.forEach((item) => {
  item += "1";
  arrayExterno.push(item);
});
console.log({ arrayExterno });

console.log("****************************************");

// 25. Crea una función que retorne otra función (clausura) usando funciones anónimas.
const apertura = () => {
  let msg2 = () => {
    let msg = " Mundo!!!";
    return msg;
  };

  let msg = "Hola" + msg2();

  console.log(msg);
};

apertura();

console.log("****************************************");

// 26. Intenta acceder a "arguments" dentro de una función de flecha y explica por qué falla.
const arrowArgs = () => {
  console.log(arguments);
};
// Escribe la explicación:
// Función flecha no tiene un objeto arguments, pero heredan el del padre si existe.

/* SOLUCIÓN:
Las funciones de flecha no tienen su propio objeto 'arguments'. Heredan el del scope padre si existe.
*/

// 27. Crea una función que valide si el número de argumentos pasados coincide con los esperados.
function validaArgs(arg1, num) {
  if (arguments.length !== 2) throw new Error("Debes pasar 2 argumentos");

  console.log("Argumentos válidos");
}

validaArgs("a", 1);

console.log("****************************************");

// 28. Usa una función anónima para ordenar un array de objetos por una propiedad específica.
const obj1 = {
  id: 1,
  prioridad: 2,
  actividad: "algo",
};

const obj2 = {
  id: 2,
  prioridad: 1,
};

const obj3 = {
  id: 3,
  prioridad: 3,
};

let arrayObjetos = [obj1, obj2, obj3];

const ordenarObjetos = (objetos) => {
  console.log(
    objetos.sort((op1, op2) => {
      return op1.prioridad - op2.prioridad;
    })
  );
};

ordenarObjetos(arrayObjetos);

console.log("****************************************");

// 29. Implementa un decorador simple (función que recibe función) usando funciones tradicionales.
function tradicional() {
  return "Hola desde funcion!!!";
}

function decorador(callback) {
  console.log("Hola desde decorador " + callback());
}

decorador(tradicional);

console.log("****************************************");

// 30. Crea una función que use "arguments" para concatenar strings con un separador dinámico.
function concatenaStrings(str1, str2, separador) {
  console.log(arguments[0] + arguments[2] + arguments[1]);
}

concatenaStrings("Hola", "Mundo", "+/-");

console.log("****************************************");

// ==========================================
// SECCIÓN 4: ARROW FUNCTIONS Y THIS (31-40)
// ==========================================
console.log("****************************************");
// 31. Crea un objeto "contador" con un método que use una arrow function para mantener el contexto de "this".
const contador = {
  valor: 0,
  iniciar: function () {
    setInterval(() => {
      // Tu código aquí
      this.valor++;
      console.log(this.valor);
    }, 1000);
  },
};

//contador.iniciar();

console.log("****************************************");

/* SOLUCIÓN:
this.valor++;
Explicación: La arrow function captura el 'this' del método iniciar (que apunta a 'contador').
*/

// 32. Explica por qué un método definido como arrow function en un objeto falla al intentar acceder a propiedades del objeto.
// Porque su scope está dentro del método en sí, no dentro del objeto.

// 33. Escribe una arrow function de una sola línea que devuelva un objeto (tip: paréntesis).
const getObj = (id) => ({ id: id });

// 34. Convierte una función tradicional con múltiples retornos en una cadena de arrow functions (currying).
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;

console.log(curriedMultiply(2)(3));

console.log("****************************************");

// 35. Usa una arrow function dentro de un map para extraer solo los IDs de un array de objetos.
console.log({ arrayObjetos });
arrayObjetos.map((value) => {
  console.log(value.id);
});

console.log("****************************************");

// 36. Crea un listener de eventos (simulado) donde el 'this' sea el objeto global debido a una arrow function.
const global = () => {
  const msg = "global";
  return msg;
};

const arrowHija = (global) => {
  this.hija = global();
  console.log(this.hija);
};

arrowHija(global);

console.log("****************************************");

// 37. Demuestra que .bind() no funciona para cambiar el context de una arrow function.
/*
- Funciones Tradicionales: Una función tradicional obtiene su valor de this basándose en cómo es llamada (vinculación dinámica). Por lo tanto, .bind(), .call() y .apply() pueden modificar su contexto.

- Arrow Functions: Las funciones flecha no tienen su propio this. Heredan el valor this del ámbito circundante o padre donde fueron definidas (vinculación léxica).
*/

// 38. Usa arrow functions para filtrar números pares y elevarlos al cuadrado en una sola línea.
const evenSqr = (num) => {
  if (num % 2 === 0) num * num;
};

console.log(evenSqr(6));

console.log("****************************************");

// 39. Crea una función de flecha que reciba otra función y la ejecute tras 500ms.
const otraFun = () => {
  console.log("Función con timeout");
};

const delayArrow = (fun) => {
  setTimeout(fun, 500);
};

delayArrow(otraFun);

console.log("****************************************");

// 40. Define una arrow function que use el parámetro REST (...args) para suplir la falta de "arguments".
const restArrow = (...args) => {
  const argumentos = args;
  console.log(argumentos);
};

restArrow("a", "b", "c", "d");

console.log("****************************************");

// ==========================================
// SECCIÓN 5: DESESTRUCTURACIÓN Y OBJETOS COMPLEJOS (41-50)
// ==========================================

console.log("****************************************");
// 41. Desestructura los parámetros de una función de flecha que recibe un objeto usuario {nombre, perfil: {rol}}.
const checkAdmin = ({ perfil: { rol } }) => rol === "admin";
const usuarioAdmin = {
  nombre: "Jane Doe",
  perfil: {
    rol: "admin",
    nivel: "senior",
  },
};

console.log(checkAdmin(usuarioAdmin)); // Devuelve: true

console.log("****************************************");

// 42. Extrae el primer elemento de un array y guarda el resto en una variable usando desestructuración en una función.
console.log(arrayExterno);
const destructurarPrimerElemento = ([n1, ...resto]) => {
  console.log(n1); // Primer Elemento
  let arrayElemRestantes = resto; // Restantes
  console.log(arrayElemRestantes);
};

destructurarPrimerElemento(arrayExterno);

console.log("****************************************");

// 43. Dado un objeto complejo, extrae una propiedad y asígnale un alias (nombre diferente).
const data43 = { user_name: "César" };
// Escribe tu código aquí:
console.log({ data43 });
const { user_name: nombreUsuario } = data43; // El formato { propiedad: alias } permite renombrar durante la extracción.
console.log({ data43 });

console.log("****************************************");

/* SOLUCIÓN:
const { user_name: nombre } = data43;
Explicación: El formato { propiedad: alias } permite renombrar durante la extracción.
*/

// 44. Desestructura un array de arrays para obtener el valor interno del segundo elemento.
const arrayDeArrays = [
  ["a", "b", "c"],
  ["1", "2", "3"],
  ["+", "-", "/"],
];

const destructuraArrayDeArrays = ([e1, e2]) => {
  console.log(`Valor interno del segundo elemento del array: ${e2}`);
};

console.log(arrayDeArrays);
destructuraArrayDeArrays(arrayDeArrays);

console.log("****************************************");

// 45. Usa desestructuración con valores por defecto en una función de flecha.
const objValorDefecto = {
  clima: "frío",
  status: "activo",
};

const destructuraObjeto = ({
  clima = "sin datos",
  status = "ND",
  actividad = "poca",
}) => {
  console.log(`Clima: ${clima}, Estado: ${status}, Actividad: ${actividad}`);
};

console.log({ objValorDefecto });
destructuraObjeto(objValorDefecto);

console.log("****************************************");

// 46. Extrae datos de un objeto JSON anidado que representa una respuesta de API.
const apiRes = { data: { hits: [{ title: "JS" }] } };
// Escribe tu código aquí:
console.log({ apiRes });

const datos = ({
  data: {
    hits: [{ title }],
  },
}) => {
  //console.log(data);
  //console.log(hits);
  console.log(title);
};
datos(apiRes);

console.log("****************************************");

/* SOLUCIÓN:
const { data: { hits: [ { title } ] } } = apiRes;
Explicación: Se puede navegar por niveles de objetos y arrays simultáneamente.
*/

// 47. Intercambia los valores de dos variables usando desestructuración de arrays.
console.log(arrayExterno);
const swapVars = ([elem1, elem2, elem3]) => {
  let a = elem2;
  let b = elem3;
  console.log(`Varaibles a = ${a} y b = ${b}`);
};

swapVars(arrayExterno);

console.log("****************************************");

// 48. En una función que recibe un objeto, desestructura solo lo necesario y usa el operador rest para el resto de propiedades.
console.log(objetoNumero);

const destructuraObj = ({ b, ...rest }) => {
  console.log(`Propiedad b: ${b}`);
  console.log(`Resto de propiedades: ${rest}`);
};

destructuraObj(objetoNumero);

console.log("****************************************");

// 49. Extrae una propiedad de un objeto que podría ser undefined, asignando un valor de respaldo.
console.log(objetoNumero);
const destructuraObj2 = ({ numero = "Valor por defecto" }) => {
  console.log(`Propiedad b: ${numero}`);
};

destructuraObj2(objetoNumero);

console.log("****************************************");

// 50. Crea una función de flecha que procese un array de objetos, desestructurando cada objeto dentro del parámetro del .map().
const usuarios = [
  { id: 1, n: "A" },
  { id: 2, n: "B" },
];
// Escribe tu código aquí:
console.log(
  usuarios.map(({ id, n: nombre }) => `ID: ${id}, Nombre: ${nombre}`)
);

/* SOLUCIÓN:
usuarios.map(({ id, n: nombre }) => `ID: ${id}, Nombre: ${nombre}`);
Explicación: La desestructuración es sumamente potente dentro de métodos de iteración.
*/
