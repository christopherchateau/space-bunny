const GamePiece = require('./GamePiece');

// extend GamePiece class
module.exports = class Player extends GamePiece {
  constructor(x, y, height, width, src) {
    // invoke parent class constructor
    super(x, y, height, width, src);
    this.direction = 'up';
  } 

  move(event) {
  }

  draw(ctx) {
    const {x, y, height, width, borderColor } = this;

    // call parent class draw function
    super.draw(ctx);

    // draw block border
    ctx.strokeStyle = borderColor;
    ctx.strokeRect(x, y, width, height);
  }

  changeDirection(e) {
    console.log('asdf')
    if (e.key === 'ArrowRight') {
      this.dx = 1;

    } else if (e.key === 'ArrowLeft') {
      this.dx = -1;

    } else if (e.key === 'ArrowDown') {
      this.dy = 1;

    } else if (e.key === 'ArrowUp') {
      this.dy = -1;
    } 
  }
}