const $arenas = document.querySelector(".arenas");
const $randomButton = document.querySelector(".button");
const $chat = document.querySelector(".chat");

const $formFight = document.querySelector(".control");
const HIT = {
  head: 30,
  body: 20,
  foot: 10,
};

const ATTACK = ["head", "body", "foot"];

const logs = {
  start: "Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.",
  end: ["Результат удара [playerWins]: [playerLose] - труп", "[playerLose] погиб от удара бойца [playerWins]", "Результат боя: [playerLose] - жертва, [playerWins] - убийца"],
  hit: ["[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.", "[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.", "[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.", "[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.", "[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.", "[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.", "[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.", "[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.", "[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.", "[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.", "[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.", "[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.", "[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.", "[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.", "[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.", "[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.", "[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.", "[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага."],
  defence: ["[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.", "[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.", "[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.", "[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.", "[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.", "[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.", "[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.", "[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение."],
  draw: "Ничья - это тоже победа!",
};

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
    $wineTitle.innerHTML = "draw";
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

function playerAttack() {
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
  return attack;
}

function disabledInput() {
  const input = document.querySelectorAll("input");
  for (let i of input) {
    i.disabled = true;
  }
  return input;
}

function showResult() {
  if (player1.hp <= 0 && player2.hp <= 0) {
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

function showTime() {
  const data = new Date();
  return `${data.getHours()}:${data.getMinutes()} `;
}

function generateLogs(type, player1, player2, value, hp) {
  switch (type) {
    case "start":
      const textStart = logs[type].replace("[player1]", player1.name).replace("[player2]", player2.name).replace("[time]", showTime());
      const elStart = `<p> ${textStart}</p>`;
      $chat.insertAdjacentHTML("afterbegin", elStart);
      break;
    case "hit":
      const textHit = showTime() + logs[type][getRandom(logs.hit.length - 1)].replace("[playerKick]", player1.name).replace("[playerDefence]", player2.name) + `-${value} ` + `[${hp} / 100]`;
      const elHit = `<p> ${textHit}</p>`;
      $chat.insertAdjacentHTML("afterbegin", elHit);
      break;
    case "defence":
      const textDefence = showTime() + logs[type][getRandom(logs.defence.length - 1)].replace("[playerKick]", player1.name).replace("[playerDefence]", player2.name);
      const elDefence = `<p> ${textDefence}</p>`;
      $chat.insertAdjacentHTML("afterbegin", elDefence);
      break;
    case "end":
      const textEnd = logs[type][getRandom(logs.end.length - 1)].replace("[playerWins]", player1).replace("[playerLose]", player2);
      const elEnd = `<p> ${textEnd}</p>`;
      $chat.insertAdjacentHTML("afterbegin", elEnd);
      break;
    case "draw":
      const textDraw = logs[type];
      const elDraw = `<p> ${textDraw}</p>`;
      $chat.insertAdjacentHTML("afterbegin", elDraw);
      break;
  }
}
generateLogs("start", player1, player2);

$formFight.addEventListener("submit", function (e) {
  e.preventDefault();
  const enemy = enemyAttack();
  const player = playerAttack();

  console.log(player1.hp);
  console.log(player2.hp);
  console.log(player);
  console.log(enemy);
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
