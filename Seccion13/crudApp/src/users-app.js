"use strict";

import { renderAddButton } from "./users/presentation/render-add-button/addButton";
import { renderButtons } from "./users/presentation/render-buttons/buttons";
import { renderModal } from "./users/presentation/render-modal/modal";
import { renderTable } from "./users/presentation/render-table/table";
import usersStore from "./users/store/users-store";
import { saveUser } from "./users/users_cases/save_user";

export const UsersApp = async (element) => {
  element.innerHTML = "Loading...";
  await usersStore.loadNextPage();
  element.innerHTML = "";

  //console.log(usersStore.getUsers());
  renderTable(element);
  renderButtons(element);
  renderAddButton(element);
  renderModal(element, async (userLike) => {
    const user = await saveUser(userLike);
    usersStore.onUserChanged(user);
    renderTable();
  });
};
