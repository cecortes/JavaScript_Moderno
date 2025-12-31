/**
 * ENTRENAMIENTO NINJA DE EXTRACCIÓN DE DATOS - CÉSAR LÓPEZ
 * -------------------------------------------------------
 * Instrucciones: Resuelve cada ejercicio en el espacio en blanco.
 * He preparado escenarios que te encontrarás en el día a día.
 */

// =========================================================================
// NIVEL 1: DESESTRUCTURACIÓN BÁSICA Y RENOMBRADO
// =========================================================================

// EJERCICIO 1: Extracción Simple
// Instrucciones: Crea una función flecha que reciba el objeto 'producto'
// y extraiga el nombre y el precio usando desestructuración en los parámetros.
const producto = { id: 101, nombre: "Teclado Mecánico", precio: 85, stock: 10 };

// --- TU CÓDIGO AQUÍ ---
const extraerProducto = ({ nombre, precio }) => {
  console.log({ nombre, precio });
};

extraerProducto(producto);

console.log("***********************************");

// SOLUCIÓN EXPLICADA:
/*
const mostrarProducto = ({ nombre, precio }) => {
    console.log(`Producto: ${nombre}, Precio: ${precio}`);
};
*/

// EJERCICIO 2: Renombrado de Propiedades
// Instrucciones: Tienes un objeto que viene de una base de datos antigua con nombres feos.
// Extrae 'u_name' como 'nombre' y 'u_mail' como 'email'.
const dbUser = { u_id: 1, u_name: "César López", u_mail: "cesar@example.com" };

// --- TU CÓDIGO AQUÍ ---
const getDbUser = ({ u_name: nombre, u_mail: email }) => {
  console.log({ nombre, email });
};

getDbUser(dbUser);

console.log("***********************************");

// SOLUCIÓN EXPLICADA:
/*
const procesarUsuario = ({ u_name: nombre, u_mail: email }) => {
    console.log(`Hola ${nombre}, enviamos correo a ${email}`);
};
*/

// =========================================================================
// NIVEL 2: ARRAYS Y VALORES POR DEFECTO
// =========================================================================

// EJERCICIO 3: El Resto de los Elementos
// Instrucciones: Dada una lista de puntuaciones, extrae la primera en una
// variable 'ganador' y el resto en un array llamado 'otrosParticipantes'.
const puntuaciones = [100, 85, 70, 60, 45];

// --- TU CÓDIGO AQUÍ ---
const getPuntuaciones = ([ganador, ...otrosParticipantes]) => {
  console.log({ ganador, otrosParticipantes });
};

getPuntuaciones(puntuaciones);

console.log("***********************************");

// SOLUCIÓN EXPLICADA:
/*
const [ganador, ...otrosParticipantes] = puntuaciones;
// César, aquí usamos el operador rest (...) en el lado izquierdo para agrupar.
*/

// EJERCICIO 4: Valores por Defecto
// Instrucciones: Crea una función que desestructure un objeto de configuración.
// Si la propiedad 'modo' no existe, debe ser "lectura" por defecto.
const config = { usuario: "César" };
const config2 = {
  modo: "escritura",
  usuario: "Roberto",
};

// --- TU CÓDIGO AQUÍ ---
const getConfig = ({ modo = "lectura", usuario }) => {
  console.log({ modo, usuario });
};

getConfig(config);
getConfig(config2);

console.log("***********************************");

// SOLUCIÓN EXPLICADA:
/*
const aplicarConfig = ({ modo = "lectura" }) => {
    console.log(`El modo actual es: ${modo}`);
};
*/

// =========================================================================
// NIVEL 3: OBJETOS COMPLEJOS Y ANIDADOS (PRO)
// =========================================================================

// EJERCICIO 5: Extracción de Segundo Nivel
// Instrucciones: Extrae la ciudad del siguiente objeto de una sola vez.
const empleado = {
  nombre: "César",
  detalles: {
    direccion: {
      ciudad: "Puebla",
      pais: "México",
    },
  },
};

// --- TU CÓDIGO AQUÍ ---
const ciudad = empleado.detalles.direccion.ciudad;
console.log(ciudad);

console.log("***********************************");

// SOLUCIÓN EXPLICADA:
/*
const { detalles: { direccion: { ciudad } } } = empleado;
// César, esto es potente pero cuidado: si 'detalles' fuera undefined, esto daría error.
*/

// EJERCICIO 6: Extracción en un Array de Objetos
// Instrucciones: Tienes un array de usuarios. Usa .forEach() y desestructuración
// para imprimir solo el 'id' de cada uno.
const usuarios = [
  { id: 1, nombre: "Juan", edo: true },
  { id: 2, nombre: "Alberto", edo: false },
  { id: 3, nombre: "Javier", edo: true },
];

// --- TU CÓDIGO AQUÍ ---
usuarios.forEach(({ id }) => {
  console.log(`ID del usuario: ${id}`);
});

console.log("***********************************");

// SOLUCIÓN EXPLICADA:
/*
usuarios.forEach(({ id }) => console.log(`ID del usuario: ${id}`));
*/

// EJERCICIO 7: Mezclando Todo (API Response)
// Instrucciones: De este objeto, extrae el 'nombre' del usuario y
// la 'calificacion' del primer comentario usando desestructuración.
const post = {
  id: 1,
  autor: { nombre: "César" },
  comentarios: [
    { id: 10, calificacion: 5, texto: "Excelente guía" },
    { id: 11, calificacion: 4, texto: "Muy bueno" },
  ],
};

// --- TU CÓDIGO AQUÍ ---
const getPost = (apiRes) => {
  console.log(`Nombre: ${apiRes.autor.nombre}`);
  console.log(`Calificacion: ${apiRes.comentarios[0].calificacion}`);
};

console.log("Objeto post: ", post);
getPost(post);

console.log("***********************************");

// SOLUCIÓN EXPLICADA:
/*
const { 
    autor: { nombre }, 
    comentarios: [{ calificacion }] 
} = post;
// Aquí estamos combinando desestructuración de objetos y de arrays al mismo tiempo.
*/

// EJERCICIO 8: El "Guardia de Seguridad" (Selectiva y Rest)
// Instrucciones: Del siguiente objeto, extrae 'password' y 'token' para
// ELIMINARLOS, y guarda todo lo demás en un objeto llamado 'perfilPublico'.
const cuentaPrivada = {
  username: "clopez",
  password: "123secretX",
  token: "JWT-999",
  seguidores: 500,
  biografia: "Junior Dev aprendiendo JS",
};

// --- TU CÓDIGO AQUÍ ---
const makeCuentaPublica = ({ password, token, ...perfilPublico }) => {
  console.log(perfilPublico);
};

makeCuentaPublica(cuentaPrivada);

console.log("***********************************");

// SOLUCIÓN EXPLICADA:
/*
const { password, token, ...perfilPublico } = cuentaPrivada;
// César, este es un truco brillante para limpiar objetos antes de enviarlos al cliente.
// 'password' y 'token' se quedan en sus variables y 'perfilPublico' tiene el resto.
*/

console.log("¡Misión cumplida, César! Has dominado la extracción de datos.");
