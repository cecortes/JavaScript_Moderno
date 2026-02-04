"use strict";

import { localHostUserToModel } from "../mappers/localhost.user.mapper";
import { User } from "../models/user";

/**
 *
 * @param {Number} page
 * @returns {Promise<User[]>} Arreglo de Usuarios
 */
export const loadUsersByPage = async (page = 1) => {
  const url = `/api-local/users?_page=${page}`;

  const res = await fetch(url);
  const data = await res.json();

  //Versión no óptima
  //const users = data.data.map((userLike) => localHostUserToModel(userLike));

  //Función como referencia
  const users = data.data.map(localHostUserToModel);

  return users;
};
