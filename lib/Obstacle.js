const GamePiece = require('./GamePiece');

// extend GamePiece class
module.exports = class Obstacle extends GamePiece {
  constructor(x, y, width, src, dx, dxv) {
    // invoke parent class constructor
    super(x, y, width, src, dx, dxv);
    this.height = 40;
  } 

  move() {
    this.x += this.dx * this.dxv;
    if (this.x > 560) {
      this.x -= 640;
    }
    else if (this.x < -40) {
      this.x += 640;
    }
    this.y += this.dy * this.dyv;
  }

  draw(ctx) {
    super.draw(ctx);
  }
}