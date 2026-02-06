"use strict";

import { userModelToLocalHost } from "../mappers/user.localhost.mapper";
import { User } from "../models/user";

/**
 *
 * @param {Like<User>} userLike
 */
export const saveUser = async (userLike) => {
  const user = new User(userLike);

  if (!user.firstName || !user.lastName || !user.balance) {
    throw "Campos obligatorios no completados!!!";
  }

  //Mapper para preparar el objeto como lo espera el backend
  const userToSave = userModelToLocalHost(user);

  //Validamos id del usuario para Update o Create
  if (user.id) {
    throw "Not implemented yet";
    return;
  }

  const updatedUser = await createUser(userToSave);
  return updatedUser;
};

/**
 *
 * @param {Like<User>} user
 */
const createUser = async (user) => {
  const url = `/api-local/users`;
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const newUser = await res.json();
  console.log({ newUser });
  return newUser;
};
