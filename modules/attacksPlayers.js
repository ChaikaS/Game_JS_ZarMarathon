import getRandom from "./getRandom.js";
const $formFight = document.querySelector(".control");
const HIT = {
  head: 30,
  body: 20,
  foot: 10,
};

const ATTACK = ["head", "body", "foot"];

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
export { enemyAttack, playerAttack };
