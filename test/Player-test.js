const { assert } = require('chai');
const Player = require('../lib/player');
const Obstacle = require('../lib/obstacle');

describe('player', () => {
  let player;

  it('should take properties', () => {
    player = new Player(280, 480, './assets/images/bunny.png');
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
      score: 0,
    })
  })

  beforeEach( () => {
    player = new Player(280, 480, './assets/images/bunny.png');
    player.playHopSound = () => {};
    player.playDeathSound = () => {};
  });


  it('should collide with an obstacle that occupies the same space', () => {
    const obstacle = new Obstacle(290, 480, `./assets/images/racecar.png`, 1, 1, 80);
    obstacle.move();

    const collisionResult = player.isCollidingWith(obstacle);

    assert.isTrue(collisionResult);
  });

  it('should not collide with a second player that does not occupy the same space', () => {
    let obstacle = new Obstacle(290, 440, `./assets/images/racecar.png`, 1, 1, 80)
    const collisionResult = player.isCollidingWith(obstacle);

    assert.isFalse(collisionResult);

  });

  it('should be able to take a new speed and direction', () => {
    let obstacle = new Obstacle(290, 440, `./assets/images/racecar.png`, 1, 1, 80)

    assert.equal(player.x, 280);
    assert.equal(player.y, 480);
    assert.equal(player.dx, 0);
    assert.equal(player.dxv, 0);

    player.move({key: 'ArrowUp', preventDefault: () => {} });
    player.rideAsteriod(obstacle);

    assert.equal(player.x, 281);
    assert.equal(player.y, 440);
    assert.equal(player.dx, 1);
    assert.equal(player.dxv, 1);

    player.rideAsteriod(obstacle);
    player.rideAsteriod(obstacle);
    player.rideAsteriod(obstacle);

    assert.equal(player.x, 284);
    assert.equal(player.y, 440);

  });

  it('should be able to score based on advanced position', () => {
    assert.equal(player.x, 280);
    assert.equal(player.y, 480);
    assert.equal(player.score, 0);
    assert.equal(player.farthest, 480);

    player.move({key: 'ArrowUp', preventDefault: () => {} });
    player.move({key: 'ArrowUp', preventDefault: () => {} });
    player.move({key: 'ArrowUp', preventDefault: () => {} });

    assert.equal(player.x, 280);
    assert.equal(player.y, 360);
    assert.equal(player.score, 30);
    assert.equal(player.farthest, 360);

    player.move({key: 'ArrowDown', preventDefault: () => {} });

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
      player.move({key: 'ArrowRight', preventDefault: () => {} });
    }

    assert.equal(player.x, 520);

    for (let i = 0; i < 11; i++) {
      player.move({key: 'ArrowUp', preventDefault: () => {} });
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
    player.move({key: 'ArrowUp', preventDefault: () => {} });
    const afterPosition = [player.x, player.y];

    assert.notDeepEqual(beforePosition, afterPosition);
  })

  it('should not be able to move outside the gamespace', () => {

    assert.equal(player.x, 280);
    assert.equal(player.y, 480);

    player.move({key: 'ArrowDown', preventDefault: () => {}});

    assert.equal(player.y, 480);

    for (let i = 0; i < 20; i++) {
      player.move({key: 'ArrowRight', preventDefault: () => {} });
    }

    assert.equal(player.x, 520);

    for (let i = 0; i < 20; i++) {
      player.move({key: 'ArrowUp', preventDefault: () => {} });
    }

    assert.equal(player.y, 40);
    
    for (let i = 0; i < 20; i++) {
      player.move({key: 'ArrowLeft', preventDefault: () => {} });
    }

    assert.equal(player.x, 0);
  });

  it('should be able to move into win space', () => {
    assert.equal(player.x, 280);
    assert.equal(player.y, 480);

    for (let i = 0; i < 12; i++) {
      player.move({key: 'ArrowUp', preventDefault: () => {} });
    }

    assert.equal(player.x, 280);
    assert.equal(player.y, 0);
  });

  it('should snap back to grid if it gets displaced', () => {
    const player2 = new Player(234, 440, './assets/images/bunny.png');
    player2.playHopSound = () => {};
    player2.playDeathSound = () => {};

    assert.equal(player2.y, 440);
    assert.equal(player2.x, 234);

    player2.move({key: 'ArrowUp', preventDefault: () => {} });

    assert.equal(player2.y, 400);
    assert.equal(player2.x, 240);
  });

  it('should return bunny to starting spot', () => {
    assert.equal(player.x, 280);
    assert.equal(player.y, 480);

    player.move({key: 'ArrowUp', preventDefault: () => {} });
    player.move({key: 'ArrowUp', preventDefault: () => {} });
    player.move({key: 'ArrowUp', preventDefault: () => {} });

    assert.equal(player.x, 280);
    assert.equal(player.y, 360);

    player.bunnyDeath();

    assert.equal(player.x, 280);
    assert.equal(player.y, 480);
  });
});