"use strict";
// IMPORTACION DE HTML EN VITE
import modalHtml from "./modal.html?raw";
import { User } from "../../models/user";
import "./modal.style.css";
import { getUserById } from "../../users_cases/get_user_by_id";

let modal, form;
let loadedUser = {};

// TODO: Cargar usuario por id
/**
 *
 * @param {String|/Number} id
 */
export const showModal = async (id) => {
  modal?.classList.remove("hide-modal");
  loadedUser = {};

  if (!id) return;

  const user = await getUserById(id);
  setFormValues(user);
};

export const hideModal = () => {
  modal?.classList.add("hide-modal");

  //Reset del formulario
  form?.reset();
};

/**
 *
 * @param {User} user
 */
const setFormValues = (user) => {
  form.querySelector(`[name="firstName"]`).value = user.firstName;
  form.querySelector(`[name="lastName"]`).value = user.lastName;
  form.querySelector(`[name="balance"]`).value = user.balance;
  form.querySelector(`[name="isActive"]`).checked = user.isActive;
  loadedUser = user;
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

    const userLike = { ...loadedUser };

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
