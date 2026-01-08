/**
 * ==============================================================================
 * EJERCICIOS DE PRÁCTICA: CICLOS FOR, FOR IN, FOR OF
 * Nivel: Medio - Alto
 * ==============================================================================
 */

/**
 * EJERCICIO 1: EL FILTRO DE FIBONACCI (Ciclo For)
 *
 * Instrucciones:
 * Genera los primeros 15 números de la secuencia de Fibonacci.
 * Durante la generación, filtra y guarda en un nuevo arreglo solo aquellos números
 * que sean IMPARES.
 * Imprime el arreglo resultante en la consola.
 */

// --- Espacio para tu solución ---
console.log("EJERCICIO 1: EL FILTRO DE FIBONACCI (Ciclo For)");
let arrayFibo = [0, 1];
let arrayImp = [];

for (let i = 0; i < 13; i++) {
  let numA = arrayFibo[arrayFibo.length - 2];
  let numB = arrayFibo[arrayFibo.length - 1];

  arrayFibo.push(numA + numB);

  // Check if odds
  !((numA + numB) % 2)
    ? console.log(`${numA + numB} Es par`)
    : arrayImp.push(numA + numB);
}

console.log({ arrayFibo, arrayImp });

console.log("****************************************************");

// --- Fin del espacio ---

/**
 * SOLUCIÓN EXPLICADA:
 * Utilizamos un ciclo 'for' tradicional porque necesitamos un control exacto
 * del número de iteraciones (15 veces). La lógica interna maneja la suma de
 * los dos anteriores y el condicional '%' determina si es impar.
 */
/*
const fib = [0, 1];
const impares = [];

for (let i = 2; i < 15; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
}

for (let i = 0; i < fib.length; i++) {
    if (fib[i] % 2 !== 0) {
        impares.push(fib[i]);
    }
}
console.log('Ejercicio 1 - Impares de Fibonacci:', impares);
// Resultado esperado: [1, 1, 3, 5, 13, 21, 55, 89, 233, 377]
*/

/**
 * EJERCICIO 2: CONTADOR DE TIPOS EN OBJETOS ANIDADOS (Ciclo For In)
 *
 * Instrucciones:
 * Dado el objeto 'inventario', utiliza 'for...in' para recorrerlo.
 * El objeto tiene categorías y cada categoría tiene productos con precios.
 * Debes contar cuántos productos en TOTAL tienen un precio mayor a 100.
 */

const inventario = {
  electronica: { pc: 1200, mouse: 25, teclado: 80 },
  hogar: { lampara: 40, sillon: 450, mesa: 150 },
  deportes: { balon: 15, pesas: 120, cuerda: 10 },
};

// --- Espacio para tu solución ---
console.log(
  "EJERCICIO 2: CONTADOR DE TIPOS EN OBJETOS ANIDADOS (Ciclo For In)"
);
let contador = 0;

for (let categoria in inventario) {
  for (let producto in inventario[categoria]) {
    inventario[categoria][producto] > 100
      ? contador++
      : console.log(inventario[categoria][producto]);
  }
}

console.log({ contador });

console.log("*****************************************");

// --- Fin del espacio ---

/**
 * SOLUCIÓN EXPLICADA:
 * Usamos un 'for...in' anidado. El primero recorre las categorías (electronica, hogar, etc.)
 * y el segundo recorre los productos dentro de cada categoría para acceder a su valor numérico.
 */
/*
let productosCaros = 0;

for (let categoria in inventario) {
    for (let producto in inventario[categoria]) {
        if (inventario[categoria][producto] > 100) {
            productosCaros++;
        }
    }
}
console.log('Ejercicio 2 - Productos > 100:', productosCaros);
// Resultado esperado: 5
*/

/**
 * EJERCICIO 3: ANALIZADOR DE TEXTO (Ciclo For Of)
 *
 * Instrucciones:
 * Dada una cadena de texto, conviértela en un arreglo de palabras.
 * Utiliza 'for...of' para iterar las palabras y determinar cuál es la más larga.
 * Ignora puntos y comas.
 */

const texto =
  "Programar en JavaScript es asombroso, pero requiere mucha práctica y constancia";

// --- Espacio para tu solución ---
console.log("EJERCICIO 3: ANALIZADOR DE TEXTO (Ciclo For Of)");
let palabra = "";
let largo = 0;
const arrayWords = texto.split(" ");
console.log({ arrayWords });

for (word of arrayWords) {
  if (word.length > largo) {
    palabra = word;
    largo = word.length;
  }
}

console.log(`${palabra} tiene longuitud de ${largo}`);

console.log("*********************************************");

// --- Fin del espacio ---

/**
 * SOLUCIÓN EXPLICADA:
 * 'for...of' es ideal aquí porque queremos el valor (la palabra) directamente.
 * Primero limpiamos el texto con split y replace para no contar signos de puntuación.
 */
/*
const palabras = texto.replace(/[.,]/g, "").split(" ");
let palabraMasLarga = "";

for (let palabra of palabras) {
    if (palabra.length > palabraMasLarga.length) {
        palabraMasLarga = palabra;
    }
}
console.log('Ejercicio 3 - Palabra más larga:', palabraMasLarga);
// Resultado esperado: "JavaScript" (o "asombroso", ambos tienen 10 letras)
*/

/**
 * EJERCICIO 4: TRANSPOSICIÓN DE MATRIZ (Ciclo For)
 *
 * Instrucciones:
 * Tienes una matriz de 3x3 (un arreglo de arreglos).
 * Debes crear una nueva matriz que sea la "transpuesta" de la original
 * (convertir filas en columnas).
 * Ejemplo: [[1,2], [3,4]] -> [[1,3], [2,4]]
 */

const matrizOriginal = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// --- Espacio para tu solución ---
const transpuesta = [[], [], []];

for (let i = 0; i < matrizOriginal.length; i++) {
  for (let j = 0; j < matrizOriginal[i].length; j++) {
    transpuesta[j][i] = matrizOriginal[i][j];
  }
}
console.log("Ejercicio 4 - Matriz Transpuesta:");
console.table(transpuesta);

console.log("********************************************");

// --- Fin del espacio ---

/**
 * SOLUCIÓN EXPLICADA:
 * Requerimos dos ciclos 'for' tradicionales anidados. El índice 'i' representará
 * las nuevas filas y 'j' las nuevas columnas, intercambiando las posiciones
 * originales [i][j] por [j][i].
 */
/*
const transpuesta = [[], [], []];

for (let i = 0; i < matrizOriginal.length; i++) {
    for (let j = 0; j < matrizOriginal[i].length; j++) {
        transpuesta[j][i] = matrizOriginal[i][j];
    }
}
console.log('Ejercicio 4 - Matriz Transpuesta:');
console.table(transpuesta);
// Resultado esperado: Columnas se vuelven filas.
*/

/**
 * EJERCICIO 5: FUSIÓN DE DATOS (For In + For Of)
 *
 * Instrucciones:
 * Tienes un objeto 'ventas' donde las llaves son meses y los valores son arreglos de montos.
 * Crea un nuevo objeto que contenga el promedio de ventas por cada mes.
 */

const ventas = {
  enero: [100, 200, 300],
  febrero: [500, 10],
  marzo: [100, 100, 100, 100],
};

// --- Espacio para tu solución ---
console.log("EJERCICIO 5: FUSIÓN DE DATOS (For In + For Of)");

let counter = 1;
const newVentas = {
  enero: 0,
  febrero: 0,
  marzo: 0,
};

for (let mes in ventas) {
  let promedio = 0;
  for (let venta of ventas[mes]) {
    promedio += venta;
  }
  newVentas[mes] = promedio / ventas[mes].length;
}

console.log(newVentas);

console.log("********************************************");

// --- Fin del espacio ---

/**
 * SOLUCIÓN EXPLICADA:
 * Combinamos ciclos: 'for...in' para iterar sobre los nombres de los meses (llaves)
 * y 'for...of' para sumar los montos dentro de cada arreglo (valores).
 */
/*
const promedios = {};

for (let mes in ventas) {
    let suma = 0;
    for (let monto of ventas[mes]) {
        suma += monto;
    }
    promedios[mes] = suma / ventas[mes].length;
}
console.log('Ejercicio 5 - Promedios mensuales:', promedios);
// Resultado esperado: { enero: 200, febrero: 255, marzo: 100 }
*/

/**
 * EJERCICIO 6: BÚSQUEDA DE DUPLICADOS (Ciclo For Of)
 *
 * Instrucciones:
 * Dado un arreglo con elementos duplicados, encuentra cuáles se repiten
 * y guárdalos en un nuevo arreglo (sin repetir el duplicado en el resultado).
 * No puedes usar el objeto 'Set'.
 */

const duplicadosInput = [1, 2, 3, 2, 4, 5, 1, 6, 1, 7, 8, 2];

// --- Espacio para tu solución ---
console.log("EJERCICIO 6: BÚSQUEDA DE DUPLICADOS (Ciclo For Of)");
const conteo = {};
const repetidos = [];

for (let num of duplicadosInput) {
  conteo[num] = (conteo[num] || 0) + 1;
  if (conteo[num] === 2) {
    repetidos.push(num);
  }
}

console.log({ conteo }, repetidos);

// --- Fin del espacio ---

/**
 * SOLUCIÓN EXPLICADA:
 * Usamos 'for...of' para recorrer el arreglo. Llevamos el control en un objeto
 * auxiliar para contar apariciones. Si la cuenta llega a 2, lo añadimos al
 * arreglo de resultados.
 */
/*
const conteo = {};
const repetidos = [];

for (let num of duplicadosInput) {
    conteo[num] = (conteo[num] || 0) + 1;
    if (conteo[num] === 2) {
        repetidos.push(num);
    }
}
console.log('Ejercicio 6 - Elementos que se repiten:', repetidos);
// Resultado esperado: [2, 1]
*/
