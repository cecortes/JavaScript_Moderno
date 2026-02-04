"use strict";

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
  throw new Error("Not implemented yet");
};
const reloadPage = async () => {
  throw new Error("Not implemented yet");
};

const onUserChanged = () => {
  throw new Error("Not implemented yet");
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
