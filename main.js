const $arenas = document.querySelector(".arenas");
const $randomButton = document.querySelector(".button");

const player1 = {
  player: 1,
  name: "Scorpion ",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: [],
  attack() {
    console.log(player1.name + "Fight");
  },
  changeHp: changeHp,
  elHp: elHp,
  renderHP: renderHP,
};
const player2 = {
  player: 2,

  name: "SUB-ZERO ",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
  weapon: [],
  attack() {
    console.log(player1.name + "Fight");
  },
  changeHp: changeHp,
  elHp: elHp,
  renderHP: renderHP,
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

function changeHp(hp) {
  if (this.hp > 0) {
    this.hp -= hp;
  } else if (this.hp <= 0) {
    this.hp = 0;
  }
}

function getRandom(hp) {
  return hp;
}

function elHp() {
  return document.querySelector(".player" + this.player + " .life");
}

function renderHP() {
  return (this.elHp().style.width = this.hp + "%");
}

function playerWine(name) {
  const $wineTitle = createDomElement("div", "wineTitle");
  if (name) {
    $wineTitle.innerHTML = name + " wine";
  } else {
    $wineTitle.innerHTML = name + "draw";
  }

  return $wineTitle;
}

function createReloadButton() {
  const $div = createDomElement("div", "reloadWrap");
  const $button = createDomElement("button", "button");
  $button.innerHTML = "Restart";
  $div.appendChild($button);
  $button.addEventListener("click", function () {
    window.location.reload();
  });
  return $div;
}

$randomButton.addEventListener("click", function () {
  player1.changeHp(getRandom(20));
  player2.changeHp(getRandom(10));
  player1.renderHP();
  player2.renderHP();

  if (player1.hp <= 0) {
    $arenas.appendChild(playerWine(player2.name));
    $randomButton.appendChild(createReloadButton());
    player1.hp = "0";
    $randomButton.disabled = true;
  } else if (player2.hp <= 0) {
    $arenas.appendChild(playerWine(player1.name));
    player2.hp = "0";
    $randomButton.disabled = true;
  } else if (player1.hp === player2.hp) {
    $arenas.appendChild(playerWine());
    $randomButton.disabled = true;
  }
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
