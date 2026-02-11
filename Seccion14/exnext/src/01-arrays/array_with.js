"use strict";

const state = [
  {
    id: 1,
    name: "Barman",
  },
  {
    id: 2,
    name: "SuperDrogas",
  },
  {
    id: 3,
    name: "ChelaMix",
  },
  {
    id: 4,
    name: "SuperPerro",
  },
];

const index = 1;
const newName = "Droguin";

const newState = state.with(index, {
  id: 1000,
  name: newName,
});

state[0].name = "Pachamama";

console.table(newState);
