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

function createPlayer(player, name, hp, img) {
  const $arenas = document.querySelector(".arenas");
  const $player1 = document.querySelector(".player1");
  const $progressbar = document.querySelector(".progressbar");
  const $name = document.querySelector(".name");
  const $character = document.querySelector(".character");

  //   function div(parentDiv, classDiv) {
  //     const div = document.createElement("div");
  //     div.classList.add(classDiv);
  //     parentDiv.appendChild(div);
  //   }

  //   div($arenas, "player1");
  //   div(div($player1, "progressbar"));
  //   //   div($player1, "progressbar");
  //  console.log($arenas);
  //  console.log($player1);

  const $divPlayer1 = document.createElement("div");
  $divPlayer1.classList.add(player);
  $arenas.appendChild($divPlayer1);

  const $divProgressbar = document.createElement("div");
  $divProgressbar.classList.add("progressbar");
  $divPlayer1.appendChild($divProgressbar);

  const $divLife = document.createElement("div");
  $divLife.classList.add("life");
  $divLife.style.width = `${hp}%`;
  $divProgressbar.appendChild($divLife);

  const $divName = document.createElement("div");
  $divName.classList.add("name");
  $divName.innerHTML = name;
  $divProgressbar.appendChild($divName);

  const $divCharacter = document.createElement("div");
  $divCharacter.classList.add("character");
  $divPlayer1.appendChild($divCharacter);

  const $img = document.createElement("img");
  $img.src = img;
  $divCharacter.appendChild($img);
}
createPlayer("player1", player1.name, player1.hp, player1.img);
createPlayer("player2", player2.name, player2.hp, player2.img);
