const $arenas = document.querySelector(".arenas");
const $randomButton = document.querySelector(".button");

const $formFight = document.querySelector(".control");
const HIT = {
  head: 30,
  body: 20,
  foot: 10,
};

const ATTACK = ["head", "body", "foot"];

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

function attack() {
  console.log(this.name + " " + "Fight");
}

function changeHp(hp) {
  if (this.hp > 0) {
    this.hp -= hp;
  } else if (this.hp <= 0) {
    this.hp = 0;
  }
}

function getRandom(n) {
  return Math.ceil(Math.random() * n);
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
  $arenas.appendChild($div);
  $div.appendChild($button);
  $button.addEventListener("click", function () {
    window.location.reload();
  });
  return $div;
}

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

function enemyAttack() {
  const hit = ATTACK[getRandom(3) - 1];
  const defence = ATTACK[getRandom(3) - 1];
  return {
    value: getRandom(HIT[hit]),
    hit,
    defence,
  };
}

function disabledInput() {
  const input = document.querySelectorAll("input");
  for (let i of input) {
    i.disabled = true;
  }
  return input;
}

$formFight.addEventListener("submit", function (e) {
  e.preventDefault();
  const enemy = enemyAttack();
  const attack = {};

  for (let i of $formFight) {
    if (i.checked && i.name === "hit") {
      attack.value = getRandom(HIT[i.value]);
      attack.hit = i.value;
    }
    if (i.checked && i.name === "defence") {
      attack.value = getRandom(HIT[i.value]);
      attack.defence = i.value;
    }

    i.checked = false;
  }

  player2.changeHp(attack.value);
  player2.renderHP();
  player1.changeHp(enemy.value);
  player1.renderHP();

  if (player1.hp <= 0) {
    $arenas.appendChild(playerWine(player2.name));
    $randomButton.appendChild(createReloadButton());
    player1.hp = "0";
    disabledInput();
    $randomButton.disabled = true;
  } else if (player2.hp <= 0) {
    $arenas.appendChild(playerWine(player1.name));
    $randomButton.appendChild(createReloadButton());
    disabledInput();
    $randomButton.disabled = true;

    player2.hp = "0";
  } else if ((player1.hp === player2.hp) === 0) {
    $arenas.appendChild(playerWine());
    $randomButton.appendChild(createReloadButton());
    disabledInput();
    $randomButton.disabled = true;
  }

  console.log(player1.hp);
  console.log(player2.hp);
  console.log($formFight);
  console.dir($formFight);
  console.log("####: enemy", enemy);
  console.log("#### attack:", attack);
});

// $randomButton.addEventListener("click", function () {
//   player1.changeHp(getRandom(20));
//   player2.changeHp(getRandom(20));
//   player1.renderHP();
//   player2.renderHP();

//   if (player1.hp <= 0) {
//     $arenas.appendChild(playerWine(player2.name));
//     $randomButton.appendChild(createReloadButton());
//     player1.hp = "0";
//     $randomButton.disabled = true;
//   } else if (player2.hp <= 0) {
//     $arenas.appendChild(playerWine(player1.name));
//     $randomButton.appendChild(createReloadButton());
//     player2.hp = "0";
//     $randomButton.disabled = true;
//   } else if ((player1.hp === player2.hp) === 0) {
//     $arenas.appendChild(playerWine());
//     $randomButton.appendChild(createReloadButton());
//     $randomButton.disabled = true;
//   }
// });
