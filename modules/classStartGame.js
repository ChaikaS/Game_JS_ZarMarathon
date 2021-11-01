import { playerAttack } from "./attacksPlayers.js";
import generateLogs from "./generateLogs.js";
import showResult from "./showResult.js";
import createPlayer from "./createPlayer.js";
import Player from "./classPlayer.js";

const $arenas = document.querySelector(".arenas");
const $formFight = document.querySelector(".control");
let player1;
let player2;
class Game {
  getPlayers = async () => {
    const body = await fetch("https://reactmarathon-api.herokuapp.com/api/mk/players").then((responce) => responce.json());
    return body;
  };
  getRandomPlayers = async () => {
    const body = await fetch("https://reactmarathon-api.herokuapp.com/api/mk/player/choose").then((responce) => responce.json());
    return body;
  };
  getFight = async ({ hit, defence } = playerAttack()) => {
    const body = await fetch("http://reactmarathon-api.herokuapp.com/api/mk/player/fight", {
      method: "POST",
      body: JSON.stringify({
        hit,
        defence,
      }),
    });
    let result = await body.json();
    return result;
  };
  start = async () => {
    player1 = await JSON.parse(localStorage.getItem("player1"));
    player2 = await this.getRandomPlayers();

    player1 = new Player({
      ...player1,
      player: 1,
    });
    player2 = new Player({
      ...player2,
      player: 2,
    });

    $arenas.appendChild(createPlayer(player1));
    $arenas.appendChild(createPlayer(player2));
    generateLogs("start", player1, player2);
  };
  fight = async () => {
    const {
      player1: { hit: hitPlayer, defence: defencePlayer, value: valuePlayer },
      player2: { hit: hitEnemy, defence: defenceEnemy, value: valueEnemy },
    } = await this.getFight();

    if (hitPlayer !== defenceEnemy) {
      player2.changeHp(valuePlayer);
      player2.renderHP();
      generateLogs("hit", player1, player2, valuePlayer, player2.hp);
    }
    if (defencePlayer !== hitEnemy) {
      player1.changeHp(valueEnemy);
      player1.renderHP();
      generateLogs("hit", player2, player1, valueEnemy, player1.hp);
    }
    if (defencePlayer == hitEnemy) {
      generateLogs("defence", player2, player1);
    }
    if (hitPlayer == defenceEnemy) {
      generateLogs("defence", player1, player2);
    }
    showResult(player1, player2);
  };
}

$formFight.addEventListener("submit", function (e) {
  e.preventDefault();
  const game = new Game();
  game.fight();
});
export default Game;
