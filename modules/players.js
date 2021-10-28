import Player from "./classPlayer.js";

const player1 = new Player({
  player: 1,
  name: "Scorpion ",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: [],
});

const player2 = new Player({
  player: 2,
  name: "SUB-ZERO ",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
  weapon: [],
});

export { player1, player2 };
