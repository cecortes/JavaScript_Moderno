"use strict";

import { localHostUserToModel } from "../mappers/localhost.user.mapper";
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
  let userUpdated;

  //Validamos id del usuario para Update o Create
  if (user.id) {
    userUpdated = await updateUser(userToSave);
  } else {
    userUpdated = await createUser(userToSave);
  }

  return localHostUserToModel(userUpdated);
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

/**
 *
 * @param {Like<User>} user
 */
const updateUser = async (user) => {
  const url = `/api-local/users/${user.id}`;
  const res = await fetch(url, {
    method: "PATCH",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const updatedUser = await res.json();
  console.log({ updatedUser });
  return updatedUser;
};
