import Magician from '../js/magician';

test('Make Daemon', () => {
  const magician = new Magician();
  magician.stoned = false;
  magician.isAttack = 3;

  expect(magician).toEqual({
    attack: 40,
    isStoned: false,
    distanceAttack: 32,
  });
});

test('Attack Distance', () => {
  const magician = new Magician();
  magician.isAttack = 5;

  expect(magician.distanceAttack).toBe(24);
});

test('Stoned Attack', () => {
  const magician = new Magician();
  magician.isStoned = true;
  magician.isAttack = 2;

  expect(magician.distanceAttack).toBe(31);
});
