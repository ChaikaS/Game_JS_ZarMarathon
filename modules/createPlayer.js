import createDomElement from "./createDomElement.js";

function createPlayer({ player, hp, name, img }) {
  const $player = createDomElement("div", `player${player}`);
  const $progressbar = createDomElement("div", "progressbar");
  const $character = createDomElement("div", "character");
  const $life = createDomElement("div", "life");
  const $name = createDomElement("div", "name");
  const $img = createDomElement("img");

  $player.appendChild($progressbar);

  $life.style.width = hp + "%";
  $progressbar.appendChild($life);

  $name.innerHTML = name;
  $progressbar.appendChild($name);

  $player.appendChild($character);

  $img.src = img;
  $character.appendChild($img);

  return $player;
}
export default createPlayer;
