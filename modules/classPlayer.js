class Player {
  constructor(props) {
    (this.player = props.player), (this.name = props.name), (this.hp = props.hp), (this.img = props.img);
  }

  attack = () => console.log(`${this.name} Fight!`);
  changeHp = (hp) => {
    if (this.hp > 0) {
      this.hp -= hp;
    } else if (this.hp <= 0) {
      this.hp = 0;
    }
  };

  elHp = () => document.querySelector(`.player${this.player} .life`);
  renderHP = () => (this.elHp().style.width = this.hp + "%");
}
export default Player;
