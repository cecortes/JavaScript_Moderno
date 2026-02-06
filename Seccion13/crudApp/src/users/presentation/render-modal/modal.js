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

  //Reset del formulario
  form?.reset();
};

/**
 *
 * @param {HTMLDivElement} element
 * @param {(userLike) => Promise<void>} saveUserCallback
 */
export const renderModal = (element, saveUserCallback) => {
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
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    //Uso de la clase FormData implícita en JS.
    const formData = new FormData(form);

    const userLike = {};

    //Barremos todos los campos del formulario con for off
    //Y Destructuramos el par key,value
    for (const [key, value] of formData) {
      if (key === "balance") {
        userLike[key] = +value;
        continue;
      }

      if (key === "isActive") {
        userLike[key] = value === "on" ? true : false;
        continue;
      }

      userLike[key] = value;
    }
    // console.log(userLike);
    // TODO: Guardar usuarios
    await saveUserCallback(userLike);

    hideModal();
  });
};
