/**
 * EJERCICIOS DE PRÁCTICA: CONDICIONAL SWITCH
 *
 * En este archivo encontrarás retos para poner en práctica lo aprendido sobre el condicional switch.
 */

// =========================================================================
// EJERCICIO 1: Clasificación de Calificaciones
// =========================================================================
/**
 * Instrucciones:
 * Crea un programa que evalúe una letra de calificación (A, B, C, D, F).
 * Dependiendo de la letra, imprime los siguientes mensajes:
 * - 'A': "Excelente trabajo"
 * - 'B': "Buen trabajo"
 * - 'C': "Puedes mejorar"
 * - 'D': "Apenas aprobado"
 * - 'F': "Reprobado"
 * - Cualquier otro valor: "Calificación no válida"
 *
 * Pista: Asegúrate de que el programa funcione aunque la letra se ingrese en minúscula.
 */

// --- TU CÓDIGO AQUÍ ---

// --- SOLUCIÓN COMENTADA ---
/**
 * switch (nota.toUpperCase()) { // Convertimos a mayúsculas para manejar 'a' o 'A'
 *     case 'A':
 *         console.log('Excelente trabajo');
 *         break;
 *     case 'B':
 *         console.log('Buen trabajo');
 *         break;
 *     case 'C':
 *         console.log('Puedes mejorar');
 *         break;
 *     case 'D':
 *         console.log('Apenas aprobado');
 *         break;
 *     case 'F':
 *         console.log('Reprobado');
 *         break;
 *     default:
 *         console.log('Calificación no válida');
 * }
 */

// =========================================================================
// EJERCICIO 2: Calculadora de Operaciones Básicas
// =========================================================================
/**
 * Instrucciones:
 * Declara tres variables: dos números y un string llamado 'operacion'.
 * El string 'operacion' puede ser: 'sumar', 'restar', 'multiplicar' o 'dividir'.
 * Usa un switch para evaluar la variable 'operacion' y realizar el cálculo
 * correspondiente con los dos números, mostrando el resultado en consola.
 *
 * Si la operación no es ninguna de las anteriores, muestra un mensaje de error.
 */

// --- TU CÓDIGO AQUÍ ---

// --- SOLUCIÓN COMENTADA ---
/**
 * const n1 = 10;
 * const n2 = 5;
 * const operacion = 'multiplicar';
 *
 * switch (operacion) {
 *     case 'sumar':
 *         console.log(`Resultado: ${n1 + n2}`);
 *         break;
 *     case 'restar':
 *         console.log(`Resultado: ${n1 - n2}`);
 *         break;
 *     case 'multiplicar':
 *         console.log(`Resultado: ${n1 * n2}`);
 *         break;
 *     case 'dividir':
 *         console.log(`Resultado: ${n1 / n2}`);
 *         break;
 *     default:
 *         console.log('Error: Operación no permitida');
 * }
 */

// =========================================================================
// EJERCICIO 3: Selector de Idiomas
// =========================================================================
/**
 * Instrucciones:
 * Imagina que tienes una aplicación que soporta varios idiomas.
 * Crea un switch que reciba un código de idioma (es, en, fr, it)
 * y muestre un saludo en el idioma correspondiente:
 * - 'es': "Hola, bienvenido"
 * - 'en': "Hello, welcome"
 * - 'fr': "Bonjour, bienvenue"
 * - 'it': "Ciao, benvenuto"
 * - Otros: "Idioma no soportado / Language not supported"
 */

// --- TU CÓDIGO AQUÍ ---

// --- SOLUCIÓN COMENTADA ---
/**
 * const codigoIdioma = 'es';
 *
 * switch (codigoIdioma) {
 *     case 'es':
 *         console.log('Hola, bienvenido');
 *         break;
 *     case 'en':
 *         console.log('Hello, welcome');
 *         break;
 *     case 'fr':
 *         console.log('Bonjour, bienvenue');
 *         break;
 *     case 'it':
 *         console.log('Ciao, benvenuto');
 *         break;
 *     default:
 *         console.log('Idioma no soportado / Language not supported');
 * }
 */
