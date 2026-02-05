"use strict";
import { showModal } from "../render-modal/modal";
import "./addButton.style.css";

/**
 *
 * @param {HTMLDivElement} element
 * @param {() => void} callback
 */
export const renderAddButton = (element) => {
  const fabButton = document.createElement("button");
  fabButton.innerText = "+";
  fabButton.classList.add("fab-button");

  element.append(fabButton);

  fabButton.addEventListener("click", () => {
    // if (!callback) return;
    // callback();
    showModal();
  });
};
