"use strict";

import { User } from "../models/user";

/**
 *
 * @param {User} user
 */
export const userModelToLocalHost = (user) => {
  const { avatar, balance, id, gender, firstName, lastName, isActive } = user;

  return {
    avatar,
    balance,
    id,
    gender,
    first_name: firstName,
    last_name: lastName,
    isActive,
  };
};
