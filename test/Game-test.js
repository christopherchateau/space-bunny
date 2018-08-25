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
})