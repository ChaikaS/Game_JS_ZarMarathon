const $arenas = document.querySelector(".arenas");

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
  name: "SUB-ZERO ",
  hp: 80,
  img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
  weapon: [],
  attack() {
    console.log(player1.name + "Fight");
  },
};

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
