"use strict";

import { localHostUserToModel } from "../mappers/localhost.user.mapper";
import { User } from "../models/user";

/**
 *
 * @param {String|Number} id
 * @returns {Promise<User>} Arreglo de Usuarios
 */
export const getUserById = async (id) => {
  const url = `/api-local/users/${id}`;

  const res = await fetch(url);
  const data = await res.json();

  //Versión no óptima
  //const users = data.data.map((userLike) => localHostUserToModel(userLike));

  //Función como referencia
  const user = localHostUserToModel(data);

  return user;
};
