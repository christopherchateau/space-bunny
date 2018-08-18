const GamePiece = require('./GamePiece');

// extend GamePiece class
module.exports = class Obstacle extends GamePiece {
  constructor(x, y, height, width, color, borderColor) {
    // invoke parent class constructor
    super(x, y, dx, dxv, height, width, color);

    this.borderColor = borderColor;
  } 

  move() {
    this.x += this.dx * this.dxv;
    if (this.x > 710) {
      this.x -= 750;
    }
    else if (this.x < -60) {
      this.x += 750;
    }
    this.y += this.dy * this.dyv;
  }

  draw(ctx) {
    const {x, y, height, width, borderColor } = this;

    // call parent class draw function
    super.draw(ctx);

    // draw block border
    ctx.strokeStyle = borderColor;
    ctx.strokeRect(x, y, width, height);
  }
}