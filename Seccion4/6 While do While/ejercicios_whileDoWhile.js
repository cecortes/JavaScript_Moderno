// ==========================================
// EJERCICIOS DE PRÁCTICA: WHILE Y DO WHILE
// Nivel: Medio - Alto
// ==========================================

/**
 * EJERCICIO 1: EL CAJERO AUTOMÁTICO (While)
 *
 * Enunciado: Crea un programa que simule un retiro de efectivo.
 * Tienes un saldo inicial de 500 dólares. El usuario puede retirar montos de 100 en 100.
 * El ciclo debe continuar mientras el saldo sea mayor a 0.
 * Si el saldo llega a 200, debe imprimir un mensaje de "Saldo bajo, use con cuidado"
 * pero continuar. Si el saldo es 0, debe salir y decir "Cuenta vacía".
 * Utiliza 'break' si se intenta retirar más de lo que hay.
 */

// --- Tu solución aquí ---
console.log("EJERCICIO 1: EL CAJERO AUTOMÁTICO (While)");
const cajero = () => {
  let saldo = 500;
  const retiro = 25;

  while (saldo > 0) {
    if (saldo <= 0) {
      console.log("Cuenta vacía");
      break;
    } else if (saldo <= 200) {
      console.log("Saldo bajo, use con cuidado");
    }
    saldo -= retiro;
    console.log({ saldo });
  }
};

cajero();

console.log("**********************************");

// --- Solución Explicada ---
/*
console.log('--- Solución Ejercicio 1 ---');
let saldo = 500;
const retiro = 100;

while (saldo >= 0) {
    if (saldo === 0) {
        console.log("Cuenta vacía");
        break;
    }
    
    if (saldo === 200) {
        console.log("Saldo bajo, use con cuidado");
    }

    console.log(`Retirando ${retiro}. Saldo restante: ${saldo - retiro}`);
    saldo -= retiro;
}
*/

/**
 * EJERCICIO 2: VALIDACIÓN DE DATOS ROBUSTA (Do While)
 *
 * Enunciado: Simula la validación de una clave de acceso secreta.
 * La clave correcta es "JS_Master_2024".
 * El ciclo debe ejecutarse al menos una vez para pedir la clave.
 * Debe contar el número de intentos. Si el usuario falla 3 veces,
 * debe mostrar "Acceso bloqueado" y salir del ciclo con un break.
 * Si acierta, debe mostrar "Acceso concedido en el intento X".
 * (Nota: Como no tenemos prompt en Node/Consola directa, simula la entrada con un array de intentos).
 */

// --- Tu solución aquí ---
console.log("EJERCICIO 2: VALIDACIÓN DE DATOS ROBUSTA (Do While)");

const clave = "JS_Master_2024";
const arrayTry = ["asd", "dafda", "word", "adsfad", "jijiji"];
let intento = 0;

do {
  console.log({ intento });
  if (arrayTry[intento] === clave) {
    console.log(`Acceso concedido en el intento: ${intento}`);
    break;
  } else if (intento === 2) {
    console.log("Acceso bloqueado");
    break;
  }
  intento++;
} while (arrayTry.length - 1);

console.log("******************************************");

// --- Solución Explicada ---
/*
console.log('\n--- Solución Ejercicio 2 ---');
const claveCorrecta = "JS_Master_2024";
const intentosDelUsuario = ["1234", "admin", "JS_Master_2024"]; // Simulación de entradas
let contadorIntentos = 0;
let claveIngresada;

do {
    claveIngresada = intentosDelUsuario[contadorIntentos];
    contadorIntentos++;
    
    if (claveIngresada === claveCorrecta) {
        console.log(`Acceso concedido en el intento ${contadorIntentos}`);
        break;
    }

    if (contadorIntentos === 3) {
        console.log("Acceso bloqueado");
        break;
    }

    console.log(`Intento ${contadorIntentos} fallido...`);

} while (claveIngresada !== claveCorrecta);
*/

/**
 * EJERCICIO 3: SERIE FIBONACCI LIMITADA (While)
 *
 * Enunciado: Genera la serie de Fibonacci (0, 1, 1, 2, 3, 5, 8, 13...)
 * utilizando un ciclo while.
 * El ciclo debe detenerse cuando el siguiente número de la serie sea mayor a 100.
 * Muestra cada número generado en la consola.
 */

// --- Tu solución aquí ---
console.log("EJERCICIO 3: SERIE FIBONACCI LIMITADA (While)");
let arrayFibo = [0, 1];

while (true) {
  const fiboA = arrayFibo[arrayFibo.length - 1];
  const fiboB = arrayFibo[arrayFibo.length - 2];
  if (fiboA + fiboB > 100) break;
  arrayFibo.push(fiboA + fiboB);
}
console.log({ arrayFibo });

console.log("***********************************");

// --- Solución Explicada ---
/*
console.log('\n--- Solución Ejercicio 3 ---');
let a = 0;
let b = 1;
let siguiente = 0;

console.log(a); // Imprimimos el primer 0
console.log(b); // Imprimimos el primer 1

while (true) {
    siguiente = a + b;
    if (siguiente > 100) break; // Límite de la serie
    
    console.log(siguiente);
    a = b;
    b = siguiente;
}
*/

/**
 * EJERCICIO 4: FILTRADO DE NÚMEROS PRIMOS (While + Continue)
 *
 * Enunciado: Dado un rango de números del 1 al 20, utiliza un ciclo while
 * para encontrar y mostrar solo los números que NO son primos.
 * Si un número es primo, utiliza 'continue' para saltar la impresión.
 * (Recordatorio: Un número primo solo es divisible por 1 y por sí mismo).
 */

// --- Tu solución aquí ---
console.log("EJERCICIO 4: FILTRADO DE NÚMEROS PRIMOS (While + Continue)");
let num = 1;
while (num <= 20) {
  //Evaluar si es primo
  let esPrimo = true;

  if (num <= 1) esPrimo = false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      esPrimo = false;
      break;
    }
  }

  if (esPrimo) {
    num++;
    continue; // Si es primo, saltamos al siguiente sin imprimir
  }

  console.log(`${num} no es un número primo.`);
  num++;
}

console.log("***********************************");

// --- Solución Explicada ---
/*
console.log('\n--- Solución Ejercicio 4 ---');
let num = 1;

while (num <= 20) {
    let esPrimo = true;
    
    if (num <= 1) esPrimo = false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            esPrimo = false;
            break;
        }
    }

    if (esPrimo) {
        num++;
        continue; // Si es primo, saltamos al siguiente sin imprimir
    }

    console.log(`${num} no es un número primo.`);
    num++;
}
*/

/**
 * EJERCICIO 5: BUSCADOR DE ELEMENTOS EN MATRIZ (While Anidado)
 *
 * Enunciado: Tienes un inventario representado por un array bidimensional (matriz).
 * [["manzana", "pera"], ["botas", "camisa"], ["libro", "pluma"]].
 * Utiliza ciclos while para recorrer la matriz y buscar el elemento "camisa".
 * Cuando lo encuentres, muestra "Elemento encontrado en la categoría X, posición Y"
 * y utiliza un break para detener AMBOS ciclos (puedes usar una bandera/booleano).
 */

// --- Tu solución aquí ---
console.log("EJERCICIO 5: BUSCADOR DE ELEMENTOS EN MATRIZ (While Anidado)");

const inventario = [
  ["manzana", "pera"],
  ["botas", "camisa"],
  ["libro", "pluma"],
];

let fila = 0;
let encontrado = false;

while (fila < inventario.length && !encontrado) {
  let columna = 0;
  while (columna < inventario[fila].length) {
    if (inventario[fila][columna] === "camisa") {
      console.log(
        `Elemento encontrado en la categoría (fila) ${fila}, posición ${columna}`
      );
      encontrado = true;
      break; // Rompe el ciclo interno
    }
    columna++;
  }
  fila++;
}

console.log("*******************************************");

// --- Solución Explicada ---
/*
console.log('\n--- Solución Ejercicio 5 ---');
const inventario = [
    ["manzana", "pera"],
    ["botas", "camisa"],
    ["libro", "pluma"]
];

let fila = 0;
let encontrado = false;

while (fila < inventario.length && !encontrado) {
    let columna = 0;
    while (columna < inventario[fila].length) {
        if (inventario[fila][columna] === "camisa") {
            console.log(`Elemento encontrado en la categoría (fila) ${fila}, posición ${columna}`);
            encontrado = true;
            break; // Rompe el ciclo interno
        }
        columna++;
    }
    fila++;
}
*/

/**
 * EJERCICIO 6: SIMULADOR DE DESCARGA (Do While)
 *
 * Enunciado: Simula el progreso de una descarga de archivo de 0% a 100%.
 * La descarga avanza en pasos aleatorios de entre 5% y 25% en cada iteración.
 * El ciclo do while debe asegurar que se muestre al menos el inicio de la descarga.
 * Cuando el progreso llegue o supere el 100%, muestra "Descarga completa"
 * y asegura que no se imprima un valor superior a 100.
 */

// --- Tu solución aquí ---
console.log("EJERCICIO 6: SIMULADOR DE DESCARGA (Do While)");

let progreso = 0;

do {
  // Generar avance aleatorio entre 5 y 25
  let avance = Math.floor(Math.random() * (25 - 5 + 1)) + 5;
  progreso += avance;

  if (progreso > 100) progreso = 100;

  console.log(`Progreso de descarga: ${progreso}%`);
} while (progreso < 100);

console.log("¡Archivo listo para usar!");

console.log("**********************************");

// --- Solución Explicada ---
/*
console.log('\n--- Solución Ejercicio 6 ---');
let progreso = 0;

do {
    // Generar avance aleatorio entre 5 y 25
    let avance = Math.floor(Math.random() * (25 - 5 + 1)) + 5;
    progreso += avance;
    
    if (progreso > 100) progreso = 100;
    
    console.log(`Progreso de descarga: ${progreso}%`);

} while (progreso < 100);

console.log("¡Archivo listo para usar!");
*/
