const GamePiece = require('./GamePiece');

// extend GamePiece class
module.exports = class Obstacle extends GamePiece {
  constructor(x, y, src, dx, dxv, width) {
    // invoke parent class constructor
    super(x, y, src, dx, dxv, width);
  } 

  move() {
    this.x += this.dx * this.dxv;
    if (this.x > 560) {
      this.x -= 1240;
    }
    else if (this.x < -80) {
      this.x += 640;
    }
  }

  draw(ctx) {
    super.draw(ctx);
  }
}