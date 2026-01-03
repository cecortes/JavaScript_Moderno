// ==========================================
// 1. Estructura de Control: IF ELSE
// ==========================================
// El "if" es la base de la toma de decisiones.
// Imaginalo como un camino que se bifurca: "Si pasa esto, haz aquello; si no, haz esto otro".

let lluvia = true;

if (lluvia) {
  // Este bloque se ejecuta solo si la condición es verdadera (true)
  console.log("Lleva un paraguas");
} else {
  // Este bloque se ejecuta si la condición es falsa (false)
  console.log("Disfruta el sol");
}

// Tip: En JS, valores como 0, '', null, undefined son considerados "falsy" (evalúan a falso).

// ==========================================
// 2. Diferencias entre == y ===
// ==========================================
// Esta es una de las preguntas clásicas en entrevistas para Juniors.

let a = 10;
let b = "10";

// == (Igualdad débil): Compara el valor, pero ignora el tipo de dato.
// JS intenta convertir los tipos para que coincidan (coerción).
console.log(a == b); // true, porque el valor "parece" el mismo.

// === (Igualdad estricta): Compara TANTO el valor COMO el tipo de dato.
// Es la que DEBES usar por defecto para evitar errores inesperados.
console.log(a === b); // false, porque uno es Number y el otro es String.

// Tip: Usa siempre === a menos que tengas una razón muy específica para no hacerlo.

// ==========================================
// 3. Anidar IF
// ==========================================
// A veces, una decisión depende de otra decisión previa. A esto le llamamos anidamiento.

let puntuacion = 85;
let tieneDiploma = false;

if (puntuacion >= 60) {
  console.log("Aprobaste el examen");

  if (puntuacion >= 90) {
    console.log("Excelente trabajo, tienes una medalla");
  } else {
    console.log("Buen trabajo, pero no alcanzaste medalla");
  }
} else {
  console.log("Lo siento, debes estudiar más");
}

// Tip: Evita anidar demasiados niveles (el "infierno de los if").
// Si tienes más de 3 niveles, quizás necesites refactorizar.

// ==========================================
// 4. Estructura ELSE IF
// ==========================================
// Se usa cuando tienes múltiples condiciones que son mutuamente excluyentes.
// Solo se ejecutará el primer bloque cuya condición sea verdadera.

let hora = 14;

if (hora < 12) {
  console.log("Buenos días");
} else if (hora < 18) {
  console.log("Buenas tardes");
} else if (hora < 24) {
  console.log("Buenas noches");
} else {
  console.log("Hora no válida");
}

// Tip: El bloque "else" final es opcional y sirve como un caso por defecto
// si ninguna de las condiciones anteriores se cumplió.
