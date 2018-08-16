const { assert } = require('chai');
const Game = require('../lib/Game');

const ctx = {
  canvas: {
    width: 700,
    height: 700
  }
}

describe('Game', () => {
  let game;

  beforeEach( () => {
    game = new Game(ctx);
  });

  // it.skip('should end game if block collides with wall', () => {

  //   const game = new Game(ctx);
  //   const block = game.blocks[0];
  //   block.x = ctx.canvas.width;
  //   game.handleBlock(block);
  //   assert.isTrue(game.gameOver());
  // });

  it('should take properties', () => {
    // console.log(game)
    // assert.deepEqual(gamepiece, {
    //   x: 50,

    // })
  })

  it.skip('should end game', () => {})

})