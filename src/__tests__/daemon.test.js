import Daemon from '../js/daemon';

test('Make Daemon', () => {
  const daemon = new Daemon();
  daemon.stoned = true;
  daemon.isAttack = 3;

  expect(daemon).toEqual({
    attack: 60,
    isStoned: true,
    distanceAttack: 40,
  });
});

test('Attack Distance', () => {
  const daemon = new Daemon();
  daemon.isAttack = 5;

  expect(daemon.distanceAttack).toBe(36);
});

test('Stoned Attack', () => {
  const daemon = new Daemon();
  daemon.stoned = true;
  daemon.isAttack = 2;

  expect(daemon.distanceAttack).toBe(49);
});
