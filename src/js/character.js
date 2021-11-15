export default class Character {
  set stoned(value) {
    this.isStoned = value;
  }

  get stoned() {
    return this.isStoned;
  }

  set isAttack(distance) {
    this.distance = distance;
    const distanceFactor = (100 - ((this.distance - 1) * 10)) / 100;

    if (this.stoned === true) {
      this.newAttack = Math.floor((this.attack * distanceFactor) - Math.log2(this.distance) * 5);
    } else {
      this.newAttack = this.attack * distanceFactor;
    }
  }

  get isAttack() {
    return this.newAttack;
  }
}
