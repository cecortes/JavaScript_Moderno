"use strict";

import { User } from "../models/user";

/**
 *
 * @param {Like<User>} localhostuser
 * @returns {User} instancia del objeto User
 */
export const localHostUserToModel = (localhostuser) => {
  // Destructuramos localhostuser
  const { avatar, balance, first_name, gender, id, isActive, last_name } =
    localhostuser;

  return new User({
    avatar,
    balance,
    firstName: first_name,
    gender,
    id,
    isActive,
    lastName: last_name,
  });
};
