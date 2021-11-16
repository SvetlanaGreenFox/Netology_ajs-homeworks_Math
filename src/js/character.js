export default class Character {
  set stoned(value) {
    this.isStoned = value;
  }

  get stoned() {
    return this.isStoned;
  }

  set isAttack(distance) {
    const distFactor = (100 - ((distance - 1) * 10)) / 100;

    if (this.stoned === true) {
      this.distanceAttack = Math.floor((this.attack * distFactor) - Math.log2(distance) * 5);
    } else {
      this.distanceAttack = this.attack * distFactor;
    }
  }

  get isAttack() {
    return this.distanceAttack;
  }
}
