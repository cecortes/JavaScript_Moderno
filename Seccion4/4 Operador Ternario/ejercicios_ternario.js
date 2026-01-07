/**
 * =========================================================
 * EJERCICIOS DE PRÁCTICA: OPERADOR TERNARIO (NIVEL MEDIO-ALTO)
 * =========================================================
 *
 * Instrucciones:
 * 1. Lee cada enunciado.
 * 2. Escribe tu solución en el espacio indicado.
 * 3. Compara con la solución comentada debajo de cada espacio.
 */

/**
 * EJERCICIO 1: Validación de Acceso a Contenido
 *
 * Enunciado:
 * Tienes un objeto 'usuario' con las propiedades 'esPremium' (boolean) y 'creditos' (number).
 * El acceso a una película cuesta 10 créditos. Los usuarios Premium tienen acceso gratuito.
 * Crea una variable 'puedeVerPelicula' que sea true si el usuario es premium O si tiene
 * al menos 10 créditos. Muestra el resultado en consola.
 */

const usuario1 = {
  esPremium: false,
  creditos: 15,
};

// --- Escribe tu solución aquí ---
console.log("EJERCICIO 1: Validación de Acceso a Contenido");
let puedeVerPelicula =
  usuario1.esPremium || usuario1.creditos >= 10 ? true : false;
console.log({ puedeVerPelicula });

console.log("*********************************************");

// --- Solución Explicada ---
/*
const puedeVerPelicula = usuario1.esPremium ? true : (usuario1.creditos >= 10 ? true : false);
// O de forma más simplificada combinando lógica:
const puedeVerPeliculaSimplificada = (usuario1.esPremium || usuario1.creditos >= 10) ? true : false;

console.log('¿Puede ver la película?:', puedeVerPeliculaSimplificada); // Resultado: true
*/

/**
 * EJERCICIO 2: Clasificación de Rendimiento Académico (Anidación)
 *
 * Enunciado:
 * Basado en una variable 'puntaje' (0-100), asigna una 'calificacion' siguiendo esta lógica:
 * - 90 o más: 'A'
 * - 80 a 89: 'B'
 * - 70 a 79: 'C'
 * - Menos de 70: 'F'
 * Usa ternarios anidados y muestra el resultado en consola.
 */

const puntaje = 60;

// --- Escribe tu solución aquí ---
console.log("EJERCICIO 2: Clasificación de Rendimiento Académico (Anidación)");
const calificacion =
  puntaje < 70 ? "F" : puntaje < 80 ? "C" : puntaje < 90 ? "B" : "A";
console.log({ calificacion });

console.log("*********************************************");

// --- Solución Explicada ---
/*
const calificacion = puntaje >= 90 ? 'A' 
                   : puntaje >= 80 ? 'B' 
                   : puntaje >= 70 ? 'C' 
                   : 'F';

console.log('Tu calificación es:', calificacion); // Resultado: B
*/

/**
 * EJERCICIO 3: Configuración de Notificaciones (Lógica de Negocio)
 *
 * Enunciado:
 * Queremos determinar el 'estadoNotificacion' de un pedido.
 * Las variables son: 'entregado' (boolean), 'enCamino' (boolean) y 'cancelado' (boolean).
 * Prioridad:
 * 1. Si está cancelado -> 'Pedido Cancelado'
 * 2. Si está entregado -> 'Pedido Entregado'
 * 3. Si está en camino -> 'Pedido en Ruta'
 * 4. De lo contrario -> 'Procesando Pedido'
 */

const pedido = {
  entregado: false,
  enCamino: true,
  cancelado: false,
};

// --- Escribe tu solución aquí ---
console.log("EJERCICIO 3: Configuración de Notificaciones (Lógica de Negocio)");
let estadoNotificacion = pedido.cancelado
  ? "Pedido Cancelado"
  : pedido.entregado
  ? "Pedido Entregado"
  : pedido.enCamino
  ? "Pedido en Ruta"
  : "Procesando Pedido";
console.log({ estadoNotificacion });

console.log("*********************************************");

// --- Solución Explicada ---
/*
const estadoNotificacion = pedido.cancelado ? 'Pedido Cancelado'
                         : pedido.entregado ? 'Pedido Entregado'
                         : pedido.enCamino   ? 'Pedido en Ruta'
                         : 'Procesando Pedido';

console.log('Estado del pedido:', estadoNotificacion); // Resultado: Pedido en Ruta
*/

/**
 * EJERCICIO 4: Formateo de Precios con Descuento
 *
 * Enunciado:
 * Tienes un 'precioBase' y un 'tipoCliente'.
 * - Si el tipo es 'VIP', aplica un 20% de descuento.
 * - Si el tipo es 'REGULAR', aplica un 5% de descuento.
 * - Si es cualquier otro, no hay descuento.
 * Calcula el 'precioFinal' usando ternarios y muéstralo con el formato "$XX.XX".
 */

const precioBase = 100;
const tipoCliente = "VIP";

// --- Escribe tu solución aquí ---
console.log("EJERCICIO 4: Formateo de Precios con Descuento");
const precioFinal =
  tipoCliente === "VIP"
    ? precioBase * 0.8
    : tipoCliente === "REGULAR"
    ? precioBase * 0.95
    : precioBase;
console.log(`Precio final: $${precioFinal.toFixed(2)}`);

console.log("*********************************************");

// --- Solución Explicada ---
/*
const descuento = tipoCliente === 'VIP' ? 0.20 
                : tipoCliente === 'REGULAR' ? 0.05 
                : 0;

const precioFinal = precioBase * (1 - descuento);

console.log(`Precio Final: $${precioFinal.toFixed(2)}`); // Resultado: $80.00
*/

/**
 * EJERCICIO 5: Manejo de Datos de API (Seguridad y Fallbacks)
 *
 * Enunciado:
 * Recibes una variable 'datosAPI' que puede ser un Array de productos, un objeto de error
 * {error: string} o null.
 * Crea una variable 'mensajeUsuario' que:
 * - Si es Array y tiene elementos: `Tienes ${datosAPI.length} productos`.
 * - Si es Array y está vacío: "No hay productos disponibles".
 * - Si es un objeto con propiedad error: `Error: ${datosAPI.error}`.
 * - Si es null: "Cargando...".
 * Pista: Usa Array.isArray() y ternarios anidados.
 */

const datosAPI = { error: "No autorizado" };
//const datosAPI = ["Manzana", "Pera", "Jamón"];
//const datosAPI = [];
//const datosAPI = {};

// --- Escribe tu solución aquí ---
console.log("EJERCICIO 5: Manejo de Datos de API (Seguridad y Fallbacks)");
const mensajeUsuario = Array.isArray(datosAPI)
  ? datosAPI.length > 0
    ? `Tienes ${datosAPI.length} productos`
    : "No hay productos disponibles"
  : Object.hasOwn(datosAPI, "error")
  ? `Error: ${datosAPI.error}`
  : "Cargando...";
console.log({ mensajeUsuario });

console.log("*********************************************");

// --- Solución Explicada ---
/*
const mensajeUsuario = (Array.isArray(datosAPI)) 
    ? (datosAPI.length > 0 ? `Tienes ${datosAPI.length} productos` : "No hay productos disponibles")
    : (datosAPI && datosAPI.error) 
        ? `Error: ${datosAPI.error}` 
        : "Cargando...";

console.log('Mensaje para el usuario:', mensajeUsuario); // Resultado: Error: No autorizado
*/
