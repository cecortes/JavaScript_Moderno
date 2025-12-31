// ==========================================================
// GUÍA DE OBJETOS LITERALES EN JAVASCRIPT
// Preparado para: César López
// ==========================================================

// 1. ¿QUÉ ES UN OBJETOS LITERAL?
// Es una colección de propiedades (clave: valor) envueltas en llaves {}.
// Imagina que es un "diccionario" donde buscas una palabra (clave)
// para obtener su significado (valor).

const programador = {
  nombre: "César López",
  lenguajeFavorito: "JavaScript",
  experienciaAños: 1,
  estaAprendiendo: true,
};

// 2. CÓMO ACCEDER A LAS PROPIEDADES
// Existen dos formas principales que debes conocer, César:

// A. Notación de Punto (La más usada):
console.log("--- Acceso con punto ---");
console.log("Nombre:", programador.nombre);
console.log("Lenguaje:", programador.lenguajeFavorito);

// B. Notación de Corchetes (Útil para variables dinámicas):
console.log("\n--- Acceso con corchetes ---");
const key = "experienciaAños";
console.log("Años de experiencia:", programador[key]);

// 3. MÉTODOS Y OBJETOS ANIDADOS
// Un objeto puede contener funciones (métodos) y otros objetos.

const proyecto = {
  titulo: "Sistema de Inventario",
  tecnologías: ["Node.js", "React"],
  detalles: {
    dificultad: "Media",
    tiempoEstimado: "3 semanas",
  },
  presentar: function () {
    return `Iniciando el proyecto: ${this.titulo}`;
  },
};

console.log("\n--- Objetos complejos ---");
console.log("Dificultad:", proyecto.detalles.dificultad); // Acceso en cadena
console.log(proyecto.presentar()); // Ejecución de método

// 4. MANIPULACIÓN (MUTABILIDAD)
// Los objetos en JS se pueden modificar después de ser creados.

console.log("\n--- Modificación de objetos ---");

// Cambiar un valor
proyecto.titulo = "E-Commerce Pro";

// Agregar una propiedad nueva
proyecto.completado = false;

// Eliminar una propiedad
delete proyecto.tecnologías;

console.log("Proyecto actualizado:", proyecto);

// 5. EJERCICIO RÁPIDO PARA TI, CÉSAR:
// Intenta descomentar la siguiente línea para ver qué pasa si accedes
// a una propiedad que no existe:
// console.log(programador.sueldo); // Resultado: undefined
