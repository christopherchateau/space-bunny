const GamePiece = require('./GamePiece');

module.exports = class Obstacle extends GamePiece {
  constructor(x, y, src, dx, dxv, width) {
    super(x, y, src, dx, dxv, width);
  } 

  move() {
    this.x += this.dx * this.dxv;
    if (this.x > 560 && this.dx === 1) {
      this.x -= 900;
    }
    else if (this.x < -80 && this.dx === -1) {
      this.x += 700;
    }
  }

  draw(ctx) {
    super.draw(ctx);
  }
}