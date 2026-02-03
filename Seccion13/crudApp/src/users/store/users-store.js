"use strict";

import { loadUsersByPage } from "../users_cases/load_users_by_page";

const state = {
  currentPage: 0,
  users: [],
};

const loadNextPage = async () => {
  await loadUsersByPage(state.currentPage + 1);
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

  getUser: () => [...state.users],
  getCurrentPage: () => state.currentPage,
};
