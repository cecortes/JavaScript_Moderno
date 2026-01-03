/**
 * ==============================================================================
 * CUESTIONARIO FINAL - SECCIÓN 4: ESTRUCTURAS DE CONTROL Y CONCEPTOS BÁSICOS
 * ==============================================================================
 *
 * Este archivo contiene 50 ejercicios diseñados para reafirmar los conocimientos
 * adquiridos en la Sección 4. Los ejercicios están organizados por niveles de
 * dificultad progresiva (Medio-Bajo a Medio-Alto).
 */

// ------------------------------------------------------------------------------
// NIVEL: MEDIO-BAJO (CONCEPTOS FUNDAMENTALES)
// ------------------------------------------------------------------------------

/**
 * EJERCICIO 1: Tipos Primitivos y Valor
 *
 * Instrucciones: Crea una variable llamada 'nombre1' con el valor "Goku".
 * Luego crea una variable 'nombre2' e igualala a 'nombre1'.
 * Cambia 'nombre1' a "Vegeta" y muestra ambos en consola.
 *
 * Explicación: Los strings son primitivos y se pasan por valor (copia).
 */

// --- Resuelve aquí ---

// ---------------------

/**
 * SOLUCIÓN (EJERCICIO 1)
 * // let nombre1 = "Goku";
 * // let nombre2 = nombre1;
 * // nombre1 = "Vegeta";
 * // console.log({ nombre1, nombre2 }); // { nombre1: 'Vegeta', nombre2: 'Goku' }
 */

/**
 * EJERCICIO 2: Objetos y Referencia
 *
 * Instrucciones: Crea un objeto 'heroe1' con { nombre: "Ironman" }.
 * Crea 'heroe2' igualándolo a 'heroe1'. Cambia el nombre de 'heroe2' a "War Machine".
 * Muestra ambos en consola.
 *
 * Explicación: Los objetos se pasan por referencia. Ambos apuntan al mismo espacio en memoria.
 */

// --- Resuelve aquí ---

// ---------------------

/**
 * SOLUCIÓN (EJERCICIO 2)
 * // let heroe1 = { nombre: "Ironman" };
 * // let heroe2 = heroe1;
 * // heroe2.nombre = "War Machine";
 * // console.log({ heroe1, heroe2 }); // Ambos serán War Machine
 */

/**
 * EJERCICIO 3: Romper Referencia con Spread (Objetos)
 *
 * Instrucciones: Repite el ejercicio anterior pero esta vez usa el operador spread
 * para que 'heroe2' sea una copia independiente de 'heroe1'.
 */

// --- Resuelve aquí ---

// ---------------------

/**
 * SOLUCIÓN (EJERCICIO 3)
 * // let heroe1 = { nombre: "Ironman" };
 * // let heroe2 = { ...heroe1 };
 * // heroe2.nombre = "War Machine";
 * // console.log({ heroe1, heroe2 }); // heroe1 sigue siendo Ironman
 */

/**
 * EJERCICIO 4: Romper Referencia con Spread (Arrays)
 *
 * Instrucciones: Crea un array 'frutas' con "Manzana" y "Pera".
 * Crea 'otrasFrutas' usando spread. Agrega "Uva" a 'otrasFrutas'.
 * Muestra ambos.
 */

// --- Resuelve aquí ---

// ---------------------

/**
 * SOLUCIÓN (EJERCICIO 4)
 * // const frutas = ["Manzana", "Pera"];
 * // const otrasFrutas = [...frutas];
 * // otrasFrutas.push("Uva");
 * // console.log({ frutas, otrasFrutas });
 */

/**
 * EJERCICIO 5: Comparación Estricta vs Débil
 *
 * Instrucciones: Compara el número 5 con el string "5" usando == y luego ===.
 * Muestra los resultados en consola.
 */

// --- Resuelve aquí ---

// ---------------------

/**
 * SOLUCIÓN (EJERCICIO 5)
 * // console.log(5 == "5");  // true (coerción de tipos)
 * // console.log(5 === "5"); // false (distinto tipo)
 */

/**
 * EJERCICIO 6: If Else Básico
 *
 * Instrucciones: Crea una variable 'edad'. Si es mayor o igual a 18,
 * imprime "Puedes entrar", si no, "Acceso denegado".
 */

// --- Resuelve aquí ---

// ---------------------

/**
 * SOLUCIÓN (EJERCICIO 6)
 * // let edad = 20;
 * // if (edad >= 18) { console.log("Puedes entrar"); } else { console.log("Acceso denegado"); }
 */

/**
 * EJERCICIO 7: Operador NOT (!)
 *
 * Instrucciones: Declara 'esFinDeSemana' como false. Usa un IF con la negación
 * de esa variable para imprimir "A trabajar".
 */

// --- Resuelve aquí ---

// ---------------------

/**
 * SOLUCIÓN (EJERCICIO 7)
 * // let esFinDeSemana = false;
 * // if (!esFinDeSemana) { console.log("A trabajar"); }
 */

/**
 * EJERCICIO 8: Operador AND (&&)
 *
 * Instrucciones: Verifica si 'tieneLlave' y 'conocePassword' son true para
 * imprimir "Puerta abierta".
 */

// --- Resuelve aquí ---

// ---------------------

/**
 * SOLUCIÓN (EJERCICIO 8)
 * // let tieneLlave = true, conocePassword = true;
 * // if (tieneLlave && conocePassword) { console.log("Puerta abierta"); }
 */

/**
 * EJERCICIO 9: Operador OR (||)
 *
 * Instrucciones: Verifica si 'esSocio' o 'tieneInvitacion' es true para
 * imprimir "Bienvenido".
 */

// --- Resuelve aquí ---

// ---------------------

/**
 * SOLUCIÓN (EJERCICIO 9)
 * // let esSocio = false, tieneInvitacion = true;
 * // if (esSocio || tieneInvitacion) { console.log("Bienvenido"); }
 */

/**
 * EJERCICIO 10: Operador Ternario Simple
 *
 * Instrucciones: Usa un ternario para asignar "Aprobado" o "Reprobado" a
 * una variable 'estado' basado en una 'nota' (60 o más es aprobado).
 */

// --- Resuelve aquí ---

// ---------------------

/**
 * SOLUCIÓN (EJERCICIO 10)
 * // let nota = 75;
 * // let estado = (nota >= 60) ? "Aprobado" : "Reprobado";
 * // console.log(estado);
 */

/**
 * EJERCICIO 11: Switch Básico
 *
 * Instrucciones: Crea un switch que evalúe la variable 'color'.
 * Casos: "rojo" -> "Alto", "verde" -> "Siga", default -> "Color no válido".
 */

// --- Resuelve aquí ---

// ---------------------

/**
 * SOLUCIÓN (EJERCICIO 11)
 * // let color = "rojo";
 * // switch(color) {
 * //   case "rojo": console.log("Alto"); break;
 * //   case "verde": console.log("Siga"); break;
 * //   default: console.log("Color no válido");
 * // }
 */

/**
 * EJERCICIO 12: Ciclo While Básico
 *
 * Instrucciones: Imprime los números del 1 al 5 usando un ciclo while.
 */

// --- Resuelve aquí ---

// ---------------------

/**
 * SOLUCIÓN (EJERCICIO 12)
 * // let i = 1;
 * // while (i <= 5) { console.log(i); i++; }
 */

/**
 * EJERCICIO 13: Ciclo Do While Básico
 *
 * Instrucciones: Crea un ciclo do while que imprima "Hola" al menos una vez,
 * aunque la condición sea falsa desde el inicio.
 */

// --- Resuelve aquí ---

// ---------------------

/**
 * SOLUCIÓN (EJERCICIO 13)
 * // let con = false;
 * // do { console.log("Hola"); } while (con);
 */

/**
 * EJERCICIO 14: Ciclo For Tradicional
 *
 * Instrucciones: Recorre un arreglo de nombres ["Ana", "Luis", "Maria"]
 * e imprime cada nombre usando un for tradicional.
 */

// --- Resuelve aquí ---

// ---------------------

/**
 * SOLUCIÓN (EJERCICIO 14)
 * // const nombres = ["Ana", "Luis", "Maria"];
 * // for (let i = 0; i < nombres.length; i++) { console.log(nombres[i]); }
 */

/**
 * EJERCICIO 15: Ciclo For Of
 *
 * Instrucciones: Haz lo mismo que el ejercicio anterior pero usando For Of.
 */

// --- Resuelve aquí ---

// ---------------------

/**
 * SOLUCIÓN (EJERCICIO 15)
 * // const nombres = ["Ana", "Luis", "Maria"];
 * // for (let nombre of nombres) { console.log(nombre); }
 */

/**
 * EJERCICIO 16: Ciclo For In
 *
 * Instrucciones: Itera sobre las propiedades de un objeto carro
 * { marca: "Toyota", modelo: 2022 } usando For In e imprime llave y valor.
 */

// --- Resuelve aquí ---

// ---------------------

/**
 * SOLUCIÓN (EJERCICIO 16)
 * // const carro = { marca: "Toyota", modelo: 2022 };
 * // for (let key in carro) { console.log(`${key}: ${carro[key]}`); }
 */

/**
 * EJERCICIO 17: Valores Falsy
 *
 * Instrucciones: Verifica si un string vacío "" es evaluado como true o false
 * dentro de un bloque IF.
 */

// --- Resuelve aquí ---

// ---------------------

/**
 * SOLUCIÓN (EJERCICIO 17)
 * // if ("") { console.log("Es true"); } else { console.log("Es false"); } // Imprime false
 */

// ------------------------------------------------------------------------------
// NIVEL: MEDIO (LÓGICA Y ESTRUCTURAS COMBINADAS)
// ------------------------------------------------------------------------------

/**
 * EJERCICIO 18: Asignación con Operador OR (||=)
 *
 * Instrucciones: Declara una variable 'usuario' como null. Úsalo con ||= para
 * asignarle "Invitado" si es nulo. Muestra el resultado.
 */

// --- Resuelve aquí ---

// ---------------------

/**
 * SOLUCIÓN (EJERCICIO 18)
 * // let usuario = null;
 * // usuario ||= "Invitado";
 * // console.log(usuario);
 */

/**
 * EJERCICIO 19: Asignación con Operador AND (&&=)
 *
 * Instrucciones: Declara 'estaLogueado' como true. Úsalo con &&= para
 * cambiarlo a "Bienvenido Usuario" solo si es true.
 */

// --- Resuelve aquí ---

// ---------------------

/**
 * SOLUCIÓN (EJERCICIO 19)
 * // let estaLogueado = true;
 * // estaLogueado &&= "Bienvenido Usuario";
 * // console.log(estaLogueado);
 */

/**
 * EJERCICIO 20: If Else Anidado
 *
 * Instrucciones: Crea un sistema de calificación:
 * > 90: A, > 80: B, > 70: C, < 70: F. Usa if/else if.
 */

// --- Resuelve aquí ---

// ---------------------

/**
 * SOLUCIÓN (EJERCICIO 20)
 * // let nota = 85;
 * // if (nota > 90) { console.log("A"); }
 * // else if (nota > 80) { console.log("B"); }
 * // else if (nota > 70) { console.log("C"); }
 * // else { console.log("F"); }
 */

/**
 * EJERCICIO 21: Ternario Anidado
 *
 * Instrucciones: Determina si un número es "Positivo", "Negativo" o "Cero"
 * usando un solo operador ternario (anidado).
 */

// --- Resuelve aquí ---

// ---------------------

/**
 * SOLUCIÓN (EJERCICIO 21)
 * // let num = -5;
 * // let result = (num > 0) ? "Positivo" : (num < 0) ? "Negativo" : "Cero";
 * // console.log(result);
 */

/**
 * EJERCICIO 22: Switch con Agrupación
 *
 * Instrucciones: Crea un switch para los meses del año.
 * Enero, Febrero, Marzo -> "Trimestre 1". Resto -> "Otro".
 */

// --- Resuelve aquí ---

// ---------------------

/**
 * SOLUCIÓN (EJERCICIO 22)
 * // let mes = "Febrero";
 * // switch(mes) {
 * //   case "Enero": case "Febrero": case "Marzo": console.log("Trimestre 1"); break;
 * //   default: console.log("Otro");
 * // }
 */

/**
 * EJERCICIO 23: Break en Ciclos
 *
 * Instrucciones: Haz un for del 1 al 10, pero usa 'break' para salir
 * del ciclo cuando llegues al 6.
 */

// --- Resuelve aquí ---

// ---------------------

/**
 * SOLUCIÓN (EJERCICIO 23)
 * // for(let i=1; i<=10; i++) { if(i===6) break; console.log(i); }
 */

/**
 * EJERCICIO 24: Continue en Ciclos
 *
 * Instrucciones: Haz un for del 1 al 10, pero usa 'continue' para saltar
 * los números pares e imprimir solo los impares.
 */

// --- Resuelve aquí ---

// ---------------------

/**
 * SOLUCIÓN (EJERCICIO 24)
 * // for(let i=1; i<=10; i++) { if(i % 2 === 0) continue; console.log(i); }
 */

/**
 * EJERCICIO 25: Referencia en Funciones
 *
 * Instrucciones: Crea una función que reciba un objeto persona y cambie su edad.
 * Demuestra que el objeto original fuera de la función también cambia.
 */

// --- Resuelve aquí ---

// ---------------------

/**
 * SOLUCIÓN (EJERCICIO 25)
 * // const p = { edad: 20 };
 * // const cambiar = (obj) => { obj.edad = 30; };
 * // cambiar(p);
 * // console.log(p.edad); // 30
 */

/**
 * EJERCICIO 26: Clonación Superficial vs Profunda (Concepto)
 *
 * Instrucciones: Dado { a: 1, b: { c: 2 } }, si usas spread para clonar,
 * ¿qué pasa si cambias el valor de 'c' en el clon? Demuéstralo.
 *
 * Explicación: Spread solo clona el primer nivel.
 */

// --- Resuelve aquí ---

// ---------------------

/**
 * SOLUCIÓN (EJERCICIO 26)
 * // const original = { a: 1, b: { c: 2 } };
 * // const copia = { ...original };
 * // copia.b.c = 99;
 * // console.log(original.b.c); // 99 (La referencia interna no se rompió)
 */

/**
 * EJERCICIO 27: For Of con Strings
 *
 * Instrucciones: Itera sobre el string "JavaScript" y muestra cada letra
 * en mayúsculas usando For Of.
 */

// --- Resuelve aquí ---

// ---------------------

/**
 * SOLUCIÓN (EJERCICIO 27)
 * // for (let letra of "JavaScript") { console.log(letra.toUpperCase()); }
 */

/**
 * EJERCICIO 28: FizzBuzz Simple
 *
 * Instrucciones: Del 1 al 15: Si es divisible por 3 imprime "Fizz",
 * si es divisible por 5 "Buzz", si es por ambos "FizzBuzz".
 */

// --- Resuelve aquí ---

// ---------------------

/**
 * SOLUCIÓN (EJERCICIO 28)
 * // for(let i=1; i<=15; i++) {
 * //   if (i % 15 === 0) console.log("FizzBuzz");
 * //   else if (i % 3 === 0) console.log("Fizz");
 * //   else if (i % 5 === 0) console.log("Buzz");
 * //   else console.log(i);
 * // }
 */

/**
 * EJERCICIO 29: While con condición externa
 *
 * Instrucciones: Simula un lanzamiento de dado (1-6). Sigue lanzando
 * hasta que salga un 6 usando un while.
 */

// --- Resuelve aquí ---

// ---------------------

/**
 * SOLUCIÓN (EJERCICIO 29)
 * // let dado = 0;
 * // while (dado !== 6) {
 * //   dado = Math.floor(Math.random() * 6) + 1;
 * //   console.log(`Salió: ${dado}`);
 * // }
 */

/**
 * EJERCICIO 30: Switch con Expresiones
 *
 * Instrucciones: Aunque switch suele usar valores constantes, puedes usar
 * switch(true) para evaluar rangos. Hazlo para calificar una nota de 0 a 100.
 */

// --- Resuelve aquí ---

// ---------------------

/**
 * SOLUCIÓN (EJERCICIO 30)
 * // let n = 85;
 * // switch(true) {
 * //   case (n >= 90): console.log("Excelente"); break;
 * //   case (n >= 70): console.log("Bueno"); break;
 * //   default: console.log("Regular");
 * // }
 */

/**
 * EJERCICIO 31: For In vs For Of en Arrays
 *
 * Instrucciones: Toma el array ["a", "b"]. Úsalo en For In y For Of.
 * Explica la diferencia en la salida de consola.
 */

// --- Resuelve aquí ---

// ---------------------

/**
 * SOLUCIÓN (EJERCICIO 31)
 * // let arr = ["a", "b"];
 * // for(let i in arr) console.log(i); // Imprime 0, 1 (índices)
 * // for(let v of arr) console.log(v); // Imprime a, b (valores)
 */

/**
 * EJERCICIO 32: Operador Ternario en Arreglos
 *
 * Instrucciones: Crea un arreglo de compras. Si 'esPremium' es true,
 * incluye "Envío Gratis", si no "Costo de Envío: $10".
 */

// --- Resuelve aquí ---

// ---------------------

/**
 * SOLUCIÓN (EJERCICIO 32)
 * // let esPremium = true;
 * // const carrito = ["Laptop", esPremium ? "Envío Gratis" : "Costo de Envío: $10"];
 * // console.log(carrito);
 */

/**
 * EJERCICIO 33: Do While para validación
 *
 * Instrucciones: Simula pedir un PIN. El ciclo debe ejecutarse mientras
 * el PIN sea diferente a "1234". (Usa una variable manual para simular el PIN).
 */

// --- Resuelve aquí ---

// ---------------------

/**
 * SOLUCIÓN (EJERCICIO 33)
 * // let pinIngresado;
 * // let intentos = 0;
 * // do {
 * //   pinIngresado = (intentos === 2) ? "1234" : "0000"; // Simulación
 * //   console.log("Validando...");
 * //   intentos++;
 * // } while (pinIngresado !== "1234");
 */

/**
 * EJERCICIO 34: Lógica de Cortocircuito (AND)
 *
 * Instrucciones: Usa && para ejecutar un console.log("Hola") solo si
 * la variable 'usuarioActivo' es true, sin usar IF.
 */

// --- Resuelve aquí ---

// ---------------------

/**
 * SOLUCIÓN (EJERCICIO 34)
 * // let usuarioActivo = true;
 * // usuarioActivo && console.log("Hola");
 */

// ------------------------------------------------------------------------------
// NIVEL: MEDIO-ALTO (ALGORITMOS Y MEJORES PRÁCTICAS)
// ------------------------------------------------------------------------------

/**
 * EJERCICIO 35: Romper Referencia de Arreglos de Objetos
 *
 * Instrucciones: Tienes [{n:1}, {n:2}]. Usa map y spread para crear una
 * copia donde al modificar un objeto de la copia no afecte al original.
 */

// --- Resuelve aquí ---

// ---------------------

/**
 * SOLUCIÓN (EJERCICIO 35)
 * // const original = [{n:1}, {n:2}];
 * // const copia = original.map(obj => ({...obj}));
 * // copia[0].n = 99;
 * // console.log(original[0].n); // Sigue siendo 1
 */

/**
 * EJERCICIO 36: For anidado (Tablas de multiplicar)
 *
 * Instrucciones: Imprime la tabla del 1 y del 2 usando for anidado.
 */

// --- Resuelve aquí ---

// ---------------------

/**
 * SOLUCIÓN (EJERCICIO 36)
 * // for(let i=1; i<=2; i++) {
 * //   for(let j=1; j<=10; j++) {
 * //     console.log(`${i} x ${j} = ${i*j}`);
 * //   }
 * // }
 */

/**
 * EJERCICIO 37: Switch con ToLowerCase
 *
 * Instrucciones: Crea un switch que reciba "LUNES", "lunes" o "Lunes"
 * y siempre responda "Día de trabajo" usando una técnica de limpieza.
 */

// --- Resuelve aquí ---

// ---------------------

/**
 * SOLUCIÓN (EJERCICIO 37)
 * // let dia = "LuNeS";
 * // switch(dia.toLowerCase()) {
 * //   case "lunes": console.log("Día de trabajo"); break;
 * // }
 */

/**
 * EJERCICIO 38: Invertir un String con For
 *
 * Instrucciones: Usa un ciclo for (hacia atrás) para invertir "Hola".
 */

// --- Resuelve aquí ---

// ---------------------

/**
 * SOLUCIÓN (EJERCICIO 38)
 * // let str = "Hola", invertido = "";
 * // for(let i = str.length - 1; i >= 0; i--) { invertido += str[i]; }
 * // console.log(invertido);
 */

/**
 * EJERCICIO 39: Encontrar el mayor de un array
 *
 * Instrucciones: Usa un ciclo For Of para encontrar el número más grande
 * en [5, 12, 8, 20, 3].
 */

// --- Resuelve aquí ---

// ---------------------

/**
 * SOLUCIÓN (EJERCICIO 39)
 * // const nums = [5, 12, 8, 20, 3];
 * // let mayor = nums[0];
 * // for(let n of nums) { if(n > mayor) mayor = n; }
 * // console.log(mayor);
 */

/**
 * EJERCICIO 40: Filtrar objetos con For In
 *
 * Instrucciones: Dado un objeto de precios { pan: 1, carne: 10, soda: 2 },
 * imprime solo los que cuesten más de 5.
 */

// --- Resuelve aquí ---

// ---------------------

/**
 * SOLUCIÓN (EJERCICIO 40)
 * // const precios = { pan: 1, carne: 10, soda: 2 };
 * // for(let item in precios) {
 * //   if(precios[item] > 5) console.log(item);
 * // }
 */

/**
 * EJERCICIO 41: Factorial con While
 *
 * Instrucciones: Calcula el factorial de 5 (5*4*3*2*1) usando un while.
 */

// --- Resuelve aquí ---

// ---------------------

/**
 * SOLUCIÓN (EJERCICIO 41)
 * // let n = 5, fact = 1;
 * // while(n > 0) { fact *= n; n--; }
 * // console.log(fact);
 */

/**
 * EJERCICIO 42: Sumar propiedades de un objeto
 *
 * Instrucciones: Suma todos los valores numéricos de un objeto
 * { a: 10, b: 20, c: 30 } usando for in.
 */

// --- Resuelve aquí ---

// ---------------------

/**
 * SOLUCIÓN (EJERCICIO 42)
 * // const obj = { a: 10, b: 20, c: 30 };
 * // let suma = 0;
 * // for(let k in obj) { suma += obj[k]; }
 * // console.log(suma);
 */

/**
 * EJERCICIO 43: Romper múltiples niveles con etiquetas (Labels)
 *
 * Instrucciones: Crea dos for anidados y usa una etiqueta para que
 * el break del for interno rompa también el externo.
 */

// --- Resuelve aquí ---

// ---------------------

/**
 * SOLUCIÓN (EJERCICIO 43)
 * // principal: for(let i=0; i<3; i++) {
 * //   for(let j=0; j<3; j++) {
 * //     if(i===1) break principal;
 * //     console.log(i, j);
 * //   }
 * // }
 */

/**
 * EJERCICIO 44: Operador de Coalescencia Nula (??) vs OR (||)
 *
 * Instrucciones: Demuestra la diferencia entre ?? y || usando el valor 0.
 */

// --- Resuelve aquí ---

// ---------------------

/**
 * SOLUCIÓN (EJERCICIO 44)
 * // let puntaje = 0;
 * // console.log(puntaje || 10); // 10 (0 es falsy)
 * // console.log(puntaje ?? 10); // 0 (0 no es null ni undefined)
 */

/**
 * EJERCICIO 45: Contador de vocales
 *
 * Instrucciones: Cuenta cuántas vocales tiene el string "Hola Mundo"
 * usando For Of y un Switch.
 */

// --- Resuelve aquí ---

// ---------------------

/**
 * SOLUCIÓN (EJERCICIO 45)
 * // let frase = "Hola Mundo", count = 0;
 * // for(let l of frase.toLowerCase()) {
 * //   switch(l) {
 * //     case 'a': case 'e': case 'i': case 'o': case 'u': count++; break;
 * //   }
 * // }
 * // console.log(count);
 */

/**
 * EJERCICIO 46: Clonar con StructuredClone
 *
 * Instrucciones: Usa structuredClone para copiar un objeto con anidación
 * profunda y demuestra que ahora sí se rompió la referencia total.
 */

// --- Resuelve aquí ---

// ---------------------

/**
 * SOLUCIÓN (EJERCICIO 46)
 * // const obj = { a: { b: 1 } };
 * // const copia = structuredClone(obj);
 * // copia.a.b = 2;
 * // console.log(obj.a.b); // 1 (Referencia rota en profundidad)
 */

/**
 * EJERCICIO 47: Generar lista de IDs
 *
 * Instrucciones: Crea un array con IDs del 100 al 110 usando un ciclo for.
 */

// --- Resuelve aquí ---

// ---------------------

/**
 * SOLUCIÓN (EJERCICIO 47)
 * // let ids = [];
 * // for(let i=100; i<=110; i++) { ids.push(i); }
 * // console.log(ids);
 */

/**
 * EJERCICIO 48: Simular una búsqueda
 *
 * Instrucciones: Tienes un array de productos. Usa for of y break para
 * detener la búsqueda cuando encuentres el producto "Smartphone".
 */

// --- Resuelve aquí ---

// ---------------------

/**
 * SOLUCIÓN (EJERCICIO 48)
 * // const productos = ["TV", "Radio", "Smartphone", "Laptop"];
 * // for(let p of productos) {
 * //   console.log(`Buscando: ${p}`);
 * //   if(p === "Smartphone") { console.log("Encontrado!"); break; }
 * // }
 */

/**
 * EJERCICIO 49: Promedio de notas
 *
 * Instrucciones: Dado [10, 8, 7, 9], calcula el promedio usando for of.
 */

// --- Resuelve aquí ---

// ---------------------

/**
 * SOLUCIÓN (EJERCICIO 49)
 * // let notas = [10, 8, 7, 9], total = 0;
 * // for(let n of notas) total += n;
 * // console.log(total / notas.length);
 */

/**
 * EJERCICIO 50: Reemplazo manual de caracteres
 *
 * Instrucciones: Recorre el string "p-e-r-r-o" y crea uno nuevo cambiando
 * los guiones por espacios usando un ciclo y lógica condicional.
 */

// --- Resuelve aquí ---

// ---------------------

/**
 * SOLUCIÓN (EJERCICIO 50)
 * // let str = "p-e-r-r-o", final = "";
 * // for(let l of str) { final += (l === "-") ? " " : l; }
 * // console.log(final);
 */
