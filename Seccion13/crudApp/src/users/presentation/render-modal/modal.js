"use strict";
// IMPORTACION DE HTML EN VITE
import modalHtml from "./modal.html?raw";
import "./modal.style.css";

let modal, form;

// TODO: Cargar usuario por id
export const showModal = () => {
  modal?.classList.remove("hide-modal");
};

export const hideModal = () => {
  modal?.classList.add("hide-modal");
  //TODO Reset del formulario
};

/**
 *
 * @param {HTMLDivElement} element
 */
export const renderModal = (element) => {
  if (modal) return;

  modal = document.createElement("div");
  modal.innerHTML = modalHtml;
  modal.className = "modal-container hide-modal";

  form = modal.querySelector("form");

  element.append(modal);

  //Event listener al contenedor del modal
  modal.addEventListener("click", (event) => {
    // Con target podemos obtener el elemento donde se hizo el click
    //console.log(event.target);
    if (event.target.className !== "modal-container") {
      return;
    }
    hideModal();
  });

  //EventListener para prevenir el default del formulario
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });
};
