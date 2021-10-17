const $arenas = document.querySelector(".arenas");

const $randomButton = document.querySelector(".button");

const player1 = {
  player: 1,
  name: "Scorpion ",
  hp: 100,


const player1 = {
  name: "Scorpion ",
  hp: 50,

  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: [],
  attack() {
    console.log(player1.name + "Fight");
  },
};
const player2 = {

  player: 2,

  name: "SUB-ZERO ",
  hp: 100,

  name: "SUB-ZERO ",
  hp: 80,

  img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
  weapon: [],
  attack() {
    console.log(player1.name + "Fight");
  },
};


function createDomElement(element, className) {
  const $element = document.createElement(element);
  if (className) {
    $element.classList.add(className);
  }
  return $element;
}

function createPlayer(playerObject) {
  const $player = createDomElement("div", "player" + playerObject.player);
  const $progressbar = createDomElement("div", "progressbar");
  const $character = createDomElement("div", "character");
  const $life = createDomElement("div", "life");
  const $name = createDomElement("div", "name");
  const $img = createDomElement("img");

  $player.appendChild($progressbar);

  $life.style.width = `${playerObject.hp}%`;
  $progressbar.appendChild($life);

  $name.innerHTML = playerObject.name;
  $progressbar.appendChild($name);

  $player.appendChild($character);

  $img.src = playerObject.img;
  $character.appendChild($img);

  return $player;
}

function changeHp(player) {
  const $playerLife = document.querySelector(".player" + player.player + " .life");
  player.hp -= Math.ceil(Math.random() * 20);
  $playerLife.style.width = player.hp + "%";
}

function playerWine(name) {
  const $wineTitle = createDomElement("div", "wineTitle");
  $wineTitle.innerHTML = name + " wine";
  return $wineTitle;
}

$randomButton.addEventListener("click", function () {
  changeHp(player1);
  changeHp(player2);

  if (player1.hp <= 0) {
    $arenas.appendChild(playerWine(player2.name));
    player1.hp = "0";
    $randomButton.disabled = true;
  } else if (player2.hp <= 0) {
    $arenas.appendChild(playerWine(player1.name));
    player2.hp = "0";
    $randomButton.disabled = true;
  }
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

function createPlayer(name, object) {
  const $divPlayer1 = document.createElement("div");
  $divPlayer1.classList.add(name);
  $arenas.appendChild($divPlayer1);

  const $divProgressbar = document.createElement("div");
  $divProgressbar.classList.add("progressbar");
  $divPlayer1.appendChild($divProgressbar);

  const $divLife = document.createElement("div");
  $divLife.classList.add("life");
  $divLife.style.width = `${object.hp}%`;
  $divProgressbar.appendChild($divLife);

  const $divName = document.createElement("div");
  $divName.classList.add("name");
  $divName.innerHTML = object.name;
  $divProgressbar.appendChild($divName);

  const $divCharacter = document.createElement("div");
  $divCharacter.classList.add("character");
  $divPlayer1.appendChild($divCharacter);

  const $img = document.createElement("img");
  $img.src = object.img;
  $divCharacter.appendChild($img);
}
createPlayer("player1", player1);
createPlayer("player2", player2);

