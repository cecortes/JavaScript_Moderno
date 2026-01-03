// ==========================================
// Explicación de Lógica Booleana para Juniors
// ==========================================

// 1. Operadores Booleanos
// Los booleanos son el tipo de dato más simple: true (verdadero) o false (falso).
// Son la base de la toma de decisiones en programación.

console.log("--- 1. Operadores Booleanos ---");
const esVerdadero = true;
const esFalso = false;

console.log({ esVerdadero }); // true
console.log({ esFalso }); // false

// 2. Operador NOT (!)
// El operador de negación invierte el valor booleano.
// Si es true, lo convierte en false, y viceversa.

console.log("\n--- 2. Operador NOT (!) ---");
console.log(!true); // false
console.log(!false); // true

const soyJunior = true;
console.log("¿No soy junior?", !soyJunior); // false

// 3. Operador AND (&&)
// El operador AND devuelve true SOLO si TODAS las condiciones son verdaderas.
// Si encuentra un false, se detiene y devuelve ese valor (short-circuit).

console.log("\n--- 3. Operador AND (&&) ---");
console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false

// Ejemplo práctico:
const tieneUsuario = true;
const tienePassword = true;
const puedeLoguear = tieneUsuario && tienePassword;
console.log("¿Puede loguear?", puedeLoguear); // true

// 4. Operador OR (||)
// El operador OR devuelve true si AL MENOS UNA de las condiciones es verdadera.
// Solo devuelve false si todas son falsas.

console.log("\n--- 4. Operador OR (||) ---");
console.log(true || true); // true
console.log(true || false); // true
console.log(false || false); // false

// Ejemplo práctico:
const esAdmin = false;
const esEditor = true;
const tienePermisoEscritura = esAdmin || esEditor;
console.log("¿Tiene permiso de escritura?", tienePermisoEscritura); // true

// 5. Asignaciones con Operadores AND (&&=)
// Este operador asigna un valor a una variable SOLO SI la variable es actualmente "truthy".
// Es una forma corta de escribir: if (a) { a = b; }

console.log("\n--- 5. Asignación con AND (&&=) ---");
let activo = true;
activo &&= "Usuario en línea"; // Como 'activo' es true, se asigna el nuevo valor
console.log({ activo }); // 'Usuario en línea'

let inactivo = false;
inactivo &&= "No se verá"; // Como 'inactivo' es false, NO se asigna nada
console.log({ inactivo }); // false

// 6. Asignaciones con Operadores OR (||=)
// Este operador asigna un valor a una variable SOLO SI la variable es actualmente "falsy" (false, null, undefined, 0, "").
// Es extremadamente útil para establecer valores por defecto.

console.log("\n--- 6. Asignación con OR (||=) ---");
let configuracion = null;
configuracion ||= "Configuración por defecto"; // Como era null (falsy), se asigna el valor
console.log({ configuracion }); // 'Configuración por defecto'

let tema = "Oscuro";
tema ||= "Claro"; // Como 'tema' ya tenía un valor (truthy), se mantiene el original
console.log({ tema }); // 'Oscuro'
