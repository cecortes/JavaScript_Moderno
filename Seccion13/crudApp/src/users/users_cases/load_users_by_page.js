"use strict";

export const loadUsersByPage = async (page = 1) => {
  const url = `/api-local/users?_page=${page}`;

  const res = await fetch(url);
  const data = await res.json();

  console.log(data);
};
