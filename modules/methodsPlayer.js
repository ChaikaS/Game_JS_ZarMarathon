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
function elHp() {
  return document.querySelector(".player" + this.player + " .life");
}
function renderHP() {
  return (this.elHp().style.width = this.hp + "%");
}
export { attack, changeHp, elHp, renderHP };
