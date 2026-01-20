import html from "./app.html?raw";

/**
 * App
 * @description Funciona como un renderizador o un factory app,
 * Auto invoca a la función que crea un elemento y lo inyecta
 * en elementId que recibe como parámetro.
 * @param {String} elementId
 * @returns {void} None
 */
export const App = (elementId) => {
  // Patrón module, función autoinvoke cuando se carga App
  (() => {
    const app = document.createElement("div");
    app.innerHTML = html;
    document.querySelector(elementId).append(app);
  })();
};
