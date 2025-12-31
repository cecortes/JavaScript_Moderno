/**
 * GUÍA AVANZADA DE ARGUMENTOS Y DESESTRUCTURACIÓN - CÉSAR LÓPEZ
 * ------------------------------------------------------------
 * César, en las funciones flecha, si intentas usar 'arguments' te dará un error.
 * La solución moderna es el operador '...' (Spread/Rest).
 */

// 1. ¿CÓMO IMPRIMIR ARGUMENTOS EN FUNCIONES FLECHA? (OPERADOR REST)
// El operador '...' cuando se usa en los parámetros se llama "Rest Parameters".
// Agrupa todos los argumentos entrantes en un Array real.

const imprimirTodo = (...args) => {
  // A diferencia de 'arguments', 'args' es un ARRAY de verdad.
  console.log("Argumentos recibidos:", args);
  console.log("¿Es un array?", Array.isArray(args)); // true
};

imprimirTodo("JavaScript", 2025, "César", true);

// 2. DESESTRUCTURAR ARGUMENTOS DESDE UN ARRAY
// Si pasas un array como argumento, puedes "descomponerlo" directamente
// en el paréntesis de la función.

const coordenadas = [10, 50, 100];

// Aquí extraemos los primeros dos elementos y el resto lo guardamos en 'otros'
const procesarCoordenadas = ([x, y, ...otros]) => {
  console.log(`César, la X es: ${x}, la Y es: ${y}`);
  console.log("Sobras del array:", otros);
};

procesarCoordenadas(coordenadas);

// 3. DESESTRUCTURAR OBJETOS Y RENOMBRAR PROPIEDADES
// A veces los nombres de las propiedades de un objeto no te gustan o chocan con otras variables.
// Puedes renombrarlas usando 'propiedad: nuevoNombre'.

const configUsuario = {
  id: 99,
  username: "clopez_dev",
  status: "active",
};

const mostrarPerfil = ({ username: nombreUsuario, status: estado }) => {
  // Ahora usamos 'nombreUsuario' en lugar de 'username'
  console.log(`Usuario: ${nombreUsuario}, Estado actual: ${estado}`);
};

mostrarPerfil(configUsuario);

// 4. DESESTRUCTURACIÓN SELECTIVA
// No tienes que usar todo el objeto. Puedes ignorar lo que no necesites
// simplemente no pidiéndolo en la definición.

const dataServer = {
  token: "ABC-123",
  timestamp: Date.now(),
  payload: { user: "César" },
  error: null,
};

// Solo nos interesa el 'payload' y el 'token'
const manejarRespuesta = ({ payload, token }) => {
  console.log(`César, token validado: ${token}`);
  console.log("Datos del usuario:", payload.user);
};

manejarRespuesta(dataServer);

// 5. COMBINACIÓN: DESESTRUCTURACIÓN + VALORES POR DEFECTO
// César, esto es muy útil para evitar errores de 'undefined'.

const configurarApp = ({ tema = "oscuro", fuente = "Arial" } = {}) => {
  console.log(`Configuración: Tema ${tema}, Fuente ${fuente}`);
};

configurarApp({ tema: "claro" }); // Fuente tomará "Arial" por defecto
configurarApp(); // Gracias al '= {}', esto no explota si no pasas nada

/**
 * NOTAS PARA CÉSAR:
 * - El operador '...' debe ser SIEMPRE el último parámetro.
 * - La desestructuración hace que tu código sea mucho más legible
 * porque documenta qué espera la función desde la primera línea.
 */

console.log(
  "¡Guía completada! Revisa los comentarios para entender el flujo, César."
);
