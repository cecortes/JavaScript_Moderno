"use strict";

const fetchQuote = async () => {
  try {
    // La URL final que construirá Vite será:
    // https://www.quoterism.com/api/quotes/random
    const response = await fetch("/api-remota/api/quotes/random");

    if (!response.ok) {
      throw new Error(`Error del servidor: ${response.status}`);
    }

    const data = await response.json();
    console.log("¡Por fin, César! Aquí tienes los datos:", data);
    return data;
  } catch (error) {
    console.error("Error al obtener la frase:", error.message);
  }
};

/**
 *
 * @param {HTMLDivElement} element
 */
export const BreakingApp = async (element) => {
  //Loading
  element.innerHTML = "Loading...";

  const quoteLabel = document.createElement("blockquote");
  const authorLabel = document.createElement("h3");
  const nextQuote = document.createElement("button");
  nextQuote.innerText = "Next Quote";

  nextQuote.addEventListener("click", function () {
    location.reload();
  });

  const renderQuote = (response) => {
    quoteLabel.innerText = response.text;
    authorLabel.innerText = response.author.name;

    element.replaceChildren(quoteLabel, authorLabel, nextQuote);
  };

  renderQuote(await fetchQuote());
};
