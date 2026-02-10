"use strict";

import { User } from "../models/user";
import { loadUsersByPage } from "../users_cases/load_users_by_page";

const state = {
  currentPage: 0,
  users: [],
};

const loadNextPage = async () => {
  const users = await loadUsersByPage(state.currentPage + 1);
  //Valida que existan usuarios en la página
  if (users.length === 0) return;

  state.currentPage += 1;
  state.users = users;
};
const loadPrevPage = async () => {
  if (state.currentPage === 1) return;

  const users = await loadUsersByPage(state.currentPage - 1);
  state.currentPage -= 1;
  state.users = users;
};
const reloadPage = async () => {
  const users = await loadUsersByPage(state.currentPage);
  //Valida que existan usuarios en la página
  if (users.length === 0) {
    await loadPrevPage();
    return;
  }
  state.users = users;
};

/**
 *
 * @param {User} updatedUser
 */
const onUserChanged = (updatedUser) => {
  let wasFound = false;

  state.users = state.users.map((user) => {
    if (user.id === updatedUser.id) {
      wasFound = true;
      return updatedUser;
    }

    return user;
  });

  if (state.users.length < 10 && !wasFound) {
    state.users.push(updatedUser);
  }
};

export default {
  loadNextPage,
  loadPrevPage,
  reloadPage,
  onUserChanged,

  /**
   *
   * @returns {User[]}
   */
  getUsers: () => [...state.users],
  /**
   *
   * @returns {Number}
   */
  getCurrentPage: () => state.currentPage,
};
