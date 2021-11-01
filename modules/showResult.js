import createReloadButton from "./createReloadButton.js";
import playerWine from "./playerWine.js";
import disabledInput from "./disabledInput.js";
import generateLogs from "./generateLogs.js";

const $randomButton = document.querySelector(".button");
const $arenas = document.querySelector(".arenas");

function showResult(player1, player2) {
  if (player1.hp <= 0 || player2.hp <= 0) {
    disabledInput();
    $randomButton.disabled = true;
  }
  if (player1.hp <= 0 && player2.hp <= 0) {
    $arenas.appendChild(playerWine());
    $randomButton.appendChild(createReloadButton());
    generateLogs("draw");
  } else if (player1.hp <= 0) {
    $arenas.appendChild(playerWine(player2.name));
    $randomButton.appendChild(createReloadButton());
    generateLogs("end", player2.name, player1.name);
  } else if (player2.hp <= 0) {
    $arenas.appendChild(playerWine(player1.name));
    $randomButton.appendChild(createReloadButton());
    generateLogs("end", player1.name, player2.name);
  }
}

export default showResult;
