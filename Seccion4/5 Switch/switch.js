/**
 * EL CONDICIONAL SWITCH EN JAVASCRIPT
 *
 * 1. ¿Qué es el condicional switch?
 * El condicional 'switch' es una estructura de control que permite ejecutar diferentes
 * bloques de código basados en el valor de una expresión. Es una alternativa más
 * limpia y organizada a tener múltiples sentencias 'if-else if' cuando evaluamos
 * una sola variable contra varios valores posibles.
 *
 * 2. ¿Cuándo se utiliza el condicional switch?
 * Se recomienda usar 'switch' cuando:
 * - Tienes una sola variable o expresión que quieres comparar con muchos valores constantes.
 * - Quieres mejorar la legibilidad del código (evitar el anidamiento excesivo de if-else).
 * - Los valores a comparar son discretos (números, strings o booleanos específicos).
 *
 * 3. Estructura y Sintaxis
 * La sintaxis básica se compone de la palabra reservada 'switch', seguida de la expresión
 * entre paréntesis, y los diferentes 'case' dentro de llaves.
 *
 * switch (expresion) {
 *    case valor1:
 *        // Código a ejecutar si expresion === valor1
 *        break; // Detiene la ejecución y sale del switch
 *    case valor2:
 *        // Código a ejecutar si expresion === valor2
 *        break;
 *    default:
 *        // Código a ejecutar si no coincide con ningún caso anterior
 * }
 *
 * Nota Importante: La comparación que hace switch es de IDENTIDAD ESTRICTA (===),
 * lo que significa que el tipo de dato también debe coincidir.
 */

// --- EJEMPLOS PRÁCTICOS ---

// Ejemplo 1: Identificar el día de la semana según un número
const dia = 3;

console.log("--- Ejemplo 1: Días de la semana ---");
switch (dia) {
  case 1:
    console.log("Es Lunes");
    break;
  case 2:
    console.log("Es Martes");
    break;
  case 3:
    console.log("Es Miércoles");
    break;
  case 4:
    console.log("Es Jueves");
    break;
  case 5:
    console.log("Es Viernes");
    break;
  case 6:
  case 7:
    console.log("Es fin de semana");
    break;
  default:
    console.log("Número de día no válido");
}

/**
 * 4. Caso Default
 * El bloque 'default' es opcional pero muy importante. Se ejecuta cuando ninguno
 * de los 'case' anteriores coincide con la expresión evaluada. Actúa como el 'else' final
 * en una cadena de 'if-else' para manejar situaciones inesperadas o valores por defecto.
 */

// Ejemplo 2: Evaluación de permisos por roles de usuario
const rolUsuario = "EDITOR";

console.log("\n--- Ejemplo 2: Roles de Usuario ---");
// Usamos .toLowerCase() para asegurar que la comparación sea insensible a mayúsculas
switch (rolUsuario.toLowerCase()) {
  case "admin":
    console.log("Tienes acceso total al sistema (Crear, Editar, Eliminar).");
    break;
  case "editor":
    console.log(
      "Puedes editar contenido existente, pero no gestionar usuarios."
    );
    break;
  case "lector":
    console.log("Solo tienes permiso para leer el contenido.");
    break;
  default:
    console.log("Rol no reconocido. Acceso denegado por seguridad.");
}

/**
 * NOTA SOBRE EL "BREAK":
 * Si olvidas colocar la palabra 'break', JavaScript continuará ejecutando los siguientes casos
 * (incluso si no coinciden) hasta encontrar un 'break' o llegar al final del switch.
 * A esto se le conoce como "fall-through".
 */

// Ejemplo 3: Agrupación de casos (Aprovechando el fall-through intencional)
const mes = "Enero";

console.log("\n--- Ejemplo 3: Estaciones del año ---");
switch (mes) {
  case "Diciembre":
  case "Enero":
  case "Febrero":
    console.log("La estación actual es: INVIERNO");
    break;
  case "Marzo":
  case "Abril":
  case "Mayo":
    console.log("La estación actual es: PRIMAVERA");
    break;
  case "Junio":
  case "Julio":
  case "Agosto":
    console.log("La estación actual es: VERANO");
    break;
  case "Septiembre":
  case "Octubre":
  case "Noviembre":
    console.log("La estación actual es: OTOÑO");
    break;
  default:
    console.log("Mes no válido");
}
