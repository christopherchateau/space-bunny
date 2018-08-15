const { assert } = require('chai');
const GamePiece = require('../lib/GamePiece');

describe('GamePiece', () => {
  let gamepiece;

  beforeEach( () => {
    gamepiece = new GamePiece(50, 50, 10, 10, 'red', 'black');

  });

  it('should take properties', () => {
    assert.deepEqual(gamepiece, {
      x: 50,
      y: 50,
      height: 10,
      width: 10,
      color: 'red',
      dx: 1,
      dy: 0,
      dxv: 1,
      dyv: 1
    })
  })

  it.skip('should collide with a second gamepiece that occupies the same space', () => {
    const gamepiece2 = new GamePiece(30, 30, 10, 10, 'red');

    const collisionResult = gamepiece.isCollidingWith(gamepiece2);

    assert.isTrue(collisionResult);
  });

  it('should not collide with a second gamepiece that does not occupy the same space', () => {
    const gamepiece2 = new GamePiece(130, 130, 10, 10, 'red');
    const collisionResult = gamepiece.isCollidingWith(gamepiece2);

    assert.isFalse(collisionResult);

  })

  it('should collide with walls', () => {


  })

  it('should be able to move', () => {
    const gamepiece2 = new GamePiece(50, 50, 10, 10, 'red', 'black');
    assert.deepEqual(gamepiece, gamepiece2);
    gamepiece2.move();
    assert.notDeepEqual(gamepiece, gamepiece2);
  })

  it.skip('should be able to changeDirection', () => {})
})