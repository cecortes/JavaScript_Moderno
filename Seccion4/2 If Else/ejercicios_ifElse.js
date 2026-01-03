// ==========================================
// EJERCICIOS DE ESTRUCTURAS DE CONTROL
// ==========================================

// -------------------------------------------------------------------------
// BLOQUE 1: IF, ELSE IF, ANIDAMIENTO
// -------------------------------------------------------------------------

/**
 * EJERCICIO 1: Sistema de Calificaciones
 * Instrucciones:
 * - Si la nota es menor a 60: "Reprobado"
 * - Si la nota es entre 60 y 74: "Suficiente"
 * - Si la nota es entre 75 y 89: "Bien"
 * - Si la nota es 90 o más: "Excelente"
 * - Si la nota es exactamente 100, añadir un mensaje extra: "¡Puntaje Perfecto!"
 */

// --- Tu solución aquí ---
let nota = 45;
let mensaje = "";
console.log("Ejercicio 1:");
console.log({ nota });
if (nota === 100) {
  console.log("Excelente - ¡Puntaje Perfecto!");
} else if (nota >= 90) {
  console.log("Excelente");
} else if (nota >= 75) {
  console.log("Bien");
} else if (nota >= 60) {
  console.log("Suficiente");
} else {
  console.log("Reprobado");
}

console.log("********************************");

// --- Solución Explicada ---
/*
const nota = 100;

if ( nota === 100 ) {
    console.log('Excelente - ¡Puntaje Perfecto!');
} else if ( nota >= 90 ) {
    console.log('Excelente');
} else if ( nota >= 75 ) {
    console.log('Bien');
} else if ( nota >= 60 ) {
    console.log('Suficiente');
} else {
    console.log('Reprobado');
}
// Nota: El orden en los 'else if' es vital. Si evaluamos nota >= 60 primero, 
// un 100 entraría ahí y no llegaría al 'Excelente'.
*/

/**
 * EJERCICIO 2: Acceso a Discoteca (Anidamiento)
 * Instrucciones:
 * - Si tiene menos de 18 años: "Acceso denegado".
 * - Si tiene 18 o más:
 *    - Si tiene entrada: "Bienvenido".
 *    - Si no tiene entrada: "Debe comprar una entrada".
 */

// --- Tu solución aquí ---
let edad = 17;
let entrada = false;
console.log("Ejercicio 2:");
console.log({ edad });
if (edad < 18) {
  console.log("Acceso denegado");
} else if (entrada === false) {
  console.log("Debe comprar una entrada");
} else {
  console.log("Bienvenido");
}

console.log("********************************");

// --- Solución Explicada ---
/*
const edad = 20;
const tieneEntrada = false;

if ( edad >= 18 ) {
    if ( tieneEntrada ) {
        console.log('Bienvenido');
    } else {
        console.log('Debe comprar una entrada');
    }
} else {
    console.log('Acceso denegado');
}
// Explicación: El anidamiento permite filtrar primero por edad y luego 
// realizar una validación secundaria solo si la primera fue exitosa.
*/

/**
 * EJERCICIO 3: Control de Clima Complejo
 * Instrucciones:
 * - Si temperatura > 30: "Hace calor"
 *    - Si ademas hay humedad > 80: "Ambiente sofocante"
 * - Si temperatura entre 15 y 30: "Clima agradable"
 * - Si temperatura < 15: "Hace frío"
 */

// --- Tu solución aquí ---
let temp = 32;
let humedad = 90;
console.log("Ejercicio 3:");
console.log({ temp, humedad });
if (temp > 30) {
  if (humedad > 80) {
    console.log("Ambiente sofocante");
  } else {
    console.log("Hace calor");
  }
} else if (temp > 14) {
  console.log("Clima agradable");
} else {
  console.log("Hace frío");
}

console.log("********************************");

// --- Solución Explicada ---
/*
const temp = 35;
const humedad = 85;

if ( temp > 30 ) {
    console.log('Hace calor');
    if ( humedad > 80 ) {
        console.log('Ambiente sofocante');
    }
} else if ( temp >= 15 ) {
    console.log('Clima agradable');
} else {
    console.log('Hace frío');
}
*/

// -------------------------------------------------------------------------
// BLOQUE 2: ESTRUCTURAS SIN IF/ELSE (USANDO OBJETOS)
// -------------------------------------------------------------------------
// Tip: Los objetos pueden actuar como "tablas de búsqueda" (Maps).

/**
 * EJERCICIO 4: Días de la semana
 * Instrucciones: Dado un número del 0 al 6, retornar el nombre del día.
 * Usa un objeto para evitar el switch o if/else.
 */

// --- Tu solución aquí ---
let dia = 3;
const diasSemana = {
  0: "Domingo",
  1: "Lunes",
  2: "Martes",
  3: "Miércoles",
  4: "Jueves",
  5: "Viernes",
  6: "Sábado",
};

console.log("Ejercicio 4:");
console.log(`Dia: ${dia} es ${diasSemana[dia]}`);

console.log("********************************");

// --- Solución Explicada ---
/*
const diaNumero = 3;
const diasSemana = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miércoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sábado',
};

console.log( diasSemana[diaNumero] || 'Día no válido' );
// Explicación: Accedemos a la propiedad del objeto usando la llave. 
// El operador || maneja el caso por defecto.
*/

/**
 * EJERCICIO 5: Traductor de Colores
 * Instrucciones: Traducir 'red', 'blue', 'green' a español usando un objeto.
 */

// --- Tu solución aquí ---
let color = "green";
let colores = {
  red: "Rojo",
  blue: "Azul",
  green: "Verde",
};

console.log(`El color ${color} es ${colores[color]}`);

console.log("********************************");

// --- Solución Explicada ---
/*
const colorIngles = 'blue';
const colores = {
    red: 'Rojo',
    blue: 'Azul',
    green: 'Verde'
};

console.log( colores[colorIngles] || 'Color desconocido' );
*/

/**
 * EJERCICIO 6: Tipos de Usuario y Permisos
 * Instrucciones: Retornar el permiso según el rol: 'ADMIN', 'EDITOR', 'USER'.
 */

// --- Tu solución aquí ---
let rol = "USER";
const permisos = {
  ADMIN: "Acceso Total",
  EDITOR: "Solo editar",
  USER: "Solo ver",
};

console.log(`El rol ${rol}, tiene: ${permisos[rol]}`);

console.log("********************************");

// --- Solución Explicada ---
/*
const rol = 'ADMIN';
const permisos = {
    'ADMIN': 'Acceso total al sistema',
    'EDITOR': 'Puede editar contenido',
    'USER': 'Solo lectura'
};

console.log( permisos[rol] || 'Sin acceso' );
*/

// -------------------------------------------------------------------------
// BLOQUE 3: ESTRUCTURAS SIN IF/ELSE (USANDO ARRAYS)
// -------------------------------------------------------------------------
// Tip: Los arrays son ideales cuando los índices son numéricos y secuenciales.

/**
 * EJERCICIO 7: Meses del año
 * Instrucciones: Dado un número del 0 al 11, retornar el nombre del mes.
 */

// --- Tu solución aquí ---
let mes = 11;
const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

console.log(`No de mes ${mes} es ${meses[mes]}`);

console.log("********************************");

// --- Solución Explicada ---
/*
const mesIndice = 0;
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

console.log( meses[mesIndice] || 'Mes no válido' );
*/

/**
 * EJERCICIO 8: Semáforo de Prioridades
 * Instrucciones: Dado un nivel de urgencia (0=Baja, 1=Media, 2=Alta), retornar el color.
 */

// --- Tu solución aquí ---
let prioridad = 2;
let coloresPrioridad = ["Verde", "Amarillo", "Rojo"];

console.log({ prioridad }, coloresPrioridad[prioridad]);

console.log("********************************");

// --- Solución Explicada ---
/*
const urgencia = 2;
const coloresPrioridad = ['Verde', 'Amarillo', 'Rojo'];

console.log( coloresPrioridad[urgencia] || 'Prioridad desconocida' );
*/

/**
 * EJERCICIO 9: Clasificación de Medallas (Posición)
 * Instrucciones: Dado el puesto (1, 2, 3), retornar 'Oro', 'Plata' o 'Bronce'.
 */

// --- Tu solución aquí ---
let puesto = 1;
const posiciones = [null, "Oro", "Plata", "Bronce"];

console.log({ puesto }, posiciones[puesto]);

console.log("********************************");

// --- Solución Explicada ---
/*
const puesto = 1;
// Usamos un array donde el índice 1 sea Oro, etc. (O ajustamos el índice)
const medallas = [null, 'Oro', 'Plata', 'Bronce'];

console.log( medallas[puesto] || 'Sigue intentando' );
*/
