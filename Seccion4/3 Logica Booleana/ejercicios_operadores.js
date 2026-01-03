// ==========================================
// Ejercicios de Lógica Booleana (Nivel Medio)
// ==========================================

// ------------------------------------------
// 1. OPERADORES BOOLEANOS
// ------------------------------------------

// EJERCICIO 1: Evaluación de Identidad y Tipo
// Instrucciones: Crea una variable llamada 'esValido' que sea true solo si
// el valor de 'a' es estrictamente igual a 10 y el tipo de 'b' es un string.
/* 
    Pista: Usa typeof para verificar el tipo.
    
    // TU CÓDIGO AQUÍ:
    
*/

/*
// SOLUCIÓN EXPLICADA:
// Se utiliza la comparación estricta (===) para el valor y el operador typeof para validar el tipo de dato antes de unir ambos resultados booleanos con el operador AND.
const a = 10;
const b = "Hola";
const esValido = (a === 10) && (typeof b === 'string');
console.log('Ejercicio 1.1 - ¿Es válido?:', esValido); // true
*/

// EJERCICIO 2: Lógica de Rango
// Instrucciones: Determina si un número 'n' está fuera del rango [10, 20] (es decir, menor a 10 o mayor a 20).
/* 
    // TU CÓDIGO AQUÍ:
    
*/

/*
// SOLUCIÓN EXPLICADA:
// Evaluamos dos condiciones independientes con el operador OR (||); si cualquiera de las dos se cumple (menor que el límite inferior o mayor que el superior), el resultado global es true.
const n = 25;
const estaFueraDeRango = n < 10 || n > 20;
console.log('Ejercicio 1.2 - ¿Está fuera de rango?:', estaFueraDeRango); // true
*/

// ------------------------------------------
// 2. OPERADOR NOT (!)
// ------------------------------------------

// EJERCICIO 1: Inversor de Estado (Toggle)
// Instrucciones: Tienes una variable 'estaCargando'. Crea una lógica que cambie su estado al valor opuesto.
/* 
    // TU CÓDIGO AQUÍ:
    
*/

/*
// SOLUCIÓN EXPLICADA:
// El operador NOT (!) toma el valor booleano actual y lo invierte. Es la forma más eficiente de alternar (toggle) estados booleanos.
let estaCargando = true;
estaCargando = !estaCargando;
console.log('Ejercicio 2.1 - Estado de carga:', estaCargando); // false
*/

// EJERCICIO 2: Verificación de Contenido
// Instrucciones: Usa el operador NOT para verificar si un string NO es nulo y NO está vacío.
/* 
    // TU CÓDIGO AQUÍ:
    
*/

/*
// SOLUCIÓN EXPLICADA:
// Usar el operador ! una vez convierte el valor a su opuesto booleano. Al usarlo dos veces (!!), convertimos cualquier valor a su valor booleano real (coerción de tipo). Un string con texto es "truthy".
const mensaje = "Hola Mundo";
const tieneContenido = !!mensaje; 
console.log('Ejercicio 2.2 - ¿Tiene contenido?:', tieneContenido); // true
*/

// ------------------------------------------
// 3. OPERADOR AND (&&)
// ------------------------------------------

// EJERCICIO 1: Acceso Multi-Condición
// Instrucciones: Un usuario puede descargar un archivo si tiene suscripción Y no tiene deudas pendientes.
/* 
    // TU CÓDIGO AQUÍ:
    
*/

/*
// SOLUCIÓN EXPLICADA:
// Ambas condiciones deben evaluarse como true para que el resultado final sea true. Invertimos 'tieneDeudas' con el operador NOT para que 'false' (no debe tener deudas) se convierta en 'true' para la validación.
const tieneSuscripcion = true;
const tieneDeudas = false;
const puedeDescargar = tieneSuscripcion && !tieneDeudas;
console.log('Ejercicio 3.1 - ¿Puede descargar?:', puedeDescargar); // true
*/

// EJERCICIO 2: Validación de Datos en Objeto
// Instrucciones: Verifica si el objeto 'usuario' tiene las propiedades 'nombre' Y 'email' definidas (que no sean falsy).
/* 
    // TU CÓDIGO AQUÍ:
    
*/

/*
// SOLUCIÓN EXPLICADA:
// El operador && evalúa si el primer operando es truthy; si lo es, pasa al segundo. En este caso, si ambos existen en el objeto, el resultado será el valor del último operando, que evaluamos como booleano con !!.
const usuario = { nombre: 'Ana', email: 'ana@dev.com' };
const datosCompletos = !!(usuario.nombre && usuario.email);
console.log('Ejercicio 3.2 - ¿Datos completos?:', datosCompletos); // true
*/

// ------------------------------------------
// 4. OPERADOR OR (||)
// ------------------------------------------

// EJERCICIO 1: Selección de Idioma
// Instrucciones: Define una variable 'idiomaElegido'. Si el 'idiomaUsuario' es falsy (null o undefined), debe usar 'Español' por defecto.
/* 
    // TU CÓDIGO AQUÍ:
    
*/

/*
// SOLUCIÓN EXPLICADA:
// El operador OR (||) devuelve el primer valor que sea "truthy". Como el primer operando es null, JavaScript toma el segundo operando (el valor por defecto).
let idiomaUsuario = null;
const idiomaElegido = idiomaUsuario || 'Español';
console.log('Ejercicio 4.1 - Idioma:', idiomaElegido); // 'Español'
*/

// EJERCICIO 2: Permisos de Seguridad
// Instrucciones: Una acción es permitida si el usuario es 'admin' O si es el 'autor' del post.
/* 
    // TU CÓDIGO AQUÍ:
    
*/

/*
// SOLUCIÓN EXPLICADA:
// Basta con que una de las dos condiciones se cumpla (sea true) para que el resultado final sea verdadero. Es la lógica clásica de "cualquiera de estas condiciones me sirve".
const esAdmin = false;
const esAutor = true;
const permiteEditar = esAdmin || esAutor;
console.log('Ejercicio 4.2 - ¿Permite editar?:', permiteEditar); // true
*/

// ------------------------------------------
// 5. ASIGNACIONES CON OPERADORES AND (&&=)
// ------------------------------------------

// EJERCICIO 1: Actualización de Perfil Activo
// Instrucciones: Tienes un objeto 'perfil'. Solo si el perfil está 'activo' (true), cambia su nombre a 'Anónimo' usando el operador de asignación AND.
/* 
    // TU CÓDIGO AQUÍ:
    
*/

/*
// SOLUCIÓN EXPLICADA:
// El operador de asignación lógica AND (&&=) solo realiza la asignación del valor de la derecha si la variable de la izquierda es actualmente "truthy".
let perfil = { activo: true, nombre: 'Juan' };
perfil.activo &&= (perfil.nombre = 'Anónimo');
console.log('Ejercicio 5.1 - Perfil:', perfil); // { activo: 'Anónimo', nombre: 'Anónimo' }
*/

// EJERCICIO 2: Control de Logs
// Instrucciones: Una variable 'debug' controla si se muestran mensajes. Si 'debug' es true, asígnale el mensaje 'Sistema Iniciado' usando el operador &&=
/* 
    // TU CÓDIGO AQUÍ:
    
*/

/*
// SOLUCIÓN EXPLICADA:
// Este operador es una forma abreviada de 'if (debug) { debug = "Sistema Iniciado"; }'. Es ideal para sobreescribir flags de estado solo cuando están habilitados.
let debug = true;
debug &&= 'Sistema Iniciado';
console.log('Ejercicio 5.2 - Estado Debug:', debug); // 'Sistema Iniciado'
*/

// ------------------------------------------
// 6. ASIGNACIONES CON OPERADORES OR (||=)
// ------------------------------------------

// EJERCICIO 1: Configuración de Servidor
// Instrucciones: Si la variable 'puerto' no tiene un valor definido (es falsy), asígnale el puerto 8080 por defecto usando el operador ||=
/* 
    // TU CÓDIGO AQUÍ:
    
*/

/*
// SOLUCIÓN EXPLICADA:
// El operador de asignación lógica OR (||=) solo asigna el valor de la derecha si la variable de la izquierda es "falsy" (como undefined, null, 0, etc.). Es perfecto para inicializar configuraciones.
let puerto;
puerto ||= 8080;
console.log('Ejercicio 6.1 - Puerto:', puerto); // 8080
*/

// EJERCICIO 2: Inicialización de Contador
// Instrucciones: Crea un objeto 'stats'. Si la propiedad 'intentos' es 0 (falsy), inicialízala en 1 usando el operador de asignación OR.
/* 
    // TU CÓDIGO AQUÍ:
    
*/

/*
// SOLUCIÓN EXPLICADA:
// Dado que el número 0 se evalúa como falso en contextos booleanos, el operador ||= detecta que debe aplicar el valor de respaldo (1) para inicializar el contador.
let stats = { intentos: 0 };
stats.intentos ||= 1;
console.log('Ejercicio 6.2 - Intentos:', stats.intentos); // 1
*/
