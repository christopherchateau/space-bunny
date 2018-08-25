const { assert } = require('chai');
const Player = require('../lib/player');
const Obstacle = require();

describe('player', () => {
  let player;

  beforeEach( () => {
    player = new Player(280, 480, './assets/images/bunny.png');
  });

  it('should take properties', () => {
    assert.deepEqual(player, {
      x: 280,
      y: 480,
      height: 40,
      width: 40,
      src: './assets/images/bunny.png',
      dx: 0,
      dxv: 0,
      isDead: false,
      isRiding: false,
      lives: 7,
      farthest: 480,
      score: 0
    })
  })

  it('should collide with a second player that occupies the same space', () => {
    const player2 = new Player(290, 480, './assets/images/bunny.png');

    const collisionResult = player.isCollidingWith(player2);

    assert.isTrue(collisionResult);
  });

  it('should not collide with a second player that does not occupy the same space', () => {
    const player2 = new Player(320, 520, './assets/images/bunny.png');
    const collisionResult = player.isCollidingWith(new);

    assert.isFalse(collisionResult);

  });

  it('should be able to take a new speed and direction', () => {
    assert.equal(player.x, 280);
    assert.equal(player.y, 480);
    assert.equal(player.dx, 0);
    assert.equal(player.dxv, 0);

    player.dx = 1;
    player.dxv = 10;

    assert.equal(player.x, 280);
    assert.equal(player.y, 480);
    assert.equal(player.dx, 1);
    assert.equal(player.dxv, 10);

    player.ride();

    assert.equal(player.x, 290);
    assert.equal(player.y, 480);

    player.ride();
    player.ride();
    player.ride();

    assert.equal(player.x, 320);
    assert.equal(player.y, 480);

  });

  it('should be able to score based on advanced position', () => {
    assert.equal(player.x, 280);
    assert.equal(player.y, 480);
    assert.equal(player.score, 0);
    assert.equal(player.farthest, 480);

    player.move({key: 'ArrowUp', preventDefault: () => {}});
    player.move({key: 'ArrowUp'});
    player.move({key: 'ArrowUp'});

    assert.equal(player.x, 280);
    assert.equal(player.y, 360);
    assert.equal(player.score, 30);
    assert.equal(player.farthest, 360);

    player.move({key: 'ArrowDown'});

    assert.equal(player.x, 280);
    assert.equal(player.y, 400);
    assert.equal(player.score, 30);
    assert.equal(player.farthest, 360);
  });

  it('should be able to die painfully', () => {
    assert.equal(player.x, 280);
    assert.equal(player.y, 480);
    assert.equal(player.lives, 7);
    assert.equal(player.farthest, 480);

    for (let i = 0; i < 6; i++) {
      player.move({key: 'ArrowRight'});
    }

    assert.equal(player.x, 520);

    for (let i = 0; i < 11; i++) {
      player.move({key: 'ArrowUp'});
    }

    assert.equal(player.y, 40);

    assert.equal(player.farthest, 40);

    player.bunnyDeath();

    assert.equal(player.x, 280);
    assert.equal(player.y, 480);
    assert.equal(player.lives, 6);
    assert.equal(player.farthest, 480);
  });

  it('should be able to move', () => {
    const beforePosition = [player.x, player.y];
    player.move({key: 'ArrowUp'});
    const afterPosition = [player.x, player.y];

    assert.notDeepEqual(beforePosition, afterPosition);
  })

  it('should not be able to move outside the gamespace', () => {
    assert.equal(player.x, 280);
    assert.equal(player.y, 480);

    player.move({key: 'ArrowDown'});

    assert.equal(player.y, 480);

    for (let i = 0; i < 20; i++) {
      player.move({key: 'ArrowRight'});
    }

    assert.equal(player.x, 520);

    for (let i = 0; i < 20; i++) {
      player.move({key: 'ArrowUp'});
    }

    assert.equal(player.y, 40);
    
    for (let i = 0; i < 20; i++) {
      player.move({key: 'ArrowLeft'});
    }

    assert.equal(player.x, 0);
  });

  it('should be able to move into win space', () => {
    assert.equal(player.x, 280);
    assert.equal(player.y, 480);

    for (let i = 0; i < 12; i++) {
      player.move({key: 'ArrowUp'});
    }

    assert.equal(player.x, 280);
    assert.equal(player.y, 0);
  });

  it('should snap back to grid if it gets displaced', () => {
    const player2 = new Player(234, 440, './assets/images/bunny.png');

    assert.equal(player2.y, 440);
    assert.equal(player2.x, 234);

    player2.move({key: 'ArrowUp'});

    assert.equal(player2.y, 400);
    assert.equal(player2.x, 240);
  });
})