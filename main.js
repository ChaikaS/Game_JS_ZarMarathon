import { enemyAttack, playerAttack } from "./modules/attacksPlayers.js";
import generateLogs from "./modules/generateLogs.js";
import showResult from "./modules/showResult.js";
import { player1, player2 } from "./modules/players.js";
import createPlayer from "./modules/createPlayer.js";
const $formFight = document.querySelector(".control");
generateLogs("start", player1, player2);

$formFight.addEventListener("submit", function (e) {
  e.preventDefault();
  const enemy = enemyAttack();
  const player = playerAttack();

  if (player.hit !== enemy.defence) {
    player2.changeHp(player.value);
    player2.renderHP();
    generateLogs("hit", player1, player2, player.value, player2.hp);
  }
  if (player.defence !== enemy.hit) {
    player1.changeHp(enemy.value);
    player1.renderHP();
    generateLogs("hit", player2, player1, enemy.value, player1.hp);
  }
  if (player.defence == enemy.hit) {
    generateLogs("defence", player2, player1);
  }
  if (player.hit == enemy.defence) {
    generateLogs("defence", player1, player2);
  }
  showResult();
});
