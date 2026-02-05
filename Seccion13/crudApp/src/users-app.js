"use strict";

import { renderAddButton } from "./users/presentation/render-add-button/addButton";
import { renderButtons } from "./users/presentation/render-buttons/buttons";
import { renderModal } from "./users/presentation/render-modal/modal";
import { renderTable } from "./users/presentation/render-table/table";
import usersStore from "./users/store/users-store";

export const UsersApp = async (element) => {
  element.innerHTML = "Loading...";
  await usersStore.loadNextPage();
  element.innerHTML = "";

  //console.log(usersStore.getUsers());
  renderTable(element);
  renderButtons(element);
  renderAddButton(element);
  renderModal(element);
};
