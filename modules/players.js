import { attack, changeHp, elHp, renderHP } from "./methodsPlayer.js";

const player1 = {
  player: 1,
  name: "Scorpion ",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: [],
  attack,
  changeHp,
  elHp,
  renderHP,
};
const player2 = {
  player: 2,
  name: "SUB-ZERO ",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
  weapon: [],
  attack,
  changeHp,
  elHp,
  renderHP,
};

export { player1, player2 };
