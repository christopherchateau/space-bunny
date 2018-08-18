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

  isCollidingWith(object) {
    return (
      this.x < object.x + object.width && 
      this.x + this.width > object.x &&
      this.y < object.y + object.height &&
      this.y + this.height > object.y
    );
  }

  isCollidingWithWall(canvasWidth, canvasHeight) {
    return (
      this.x < 0 ||
      this.x + this.width > canvasWidth 
      // this.y < 0 || 
      // this.y + this.height > canvasHeight
    )
  }

  changeDirection(e) {
    e.preventDefault();
    // if (e.key === 'ArrowRight') {
    //   this.dx = 1;

    // } else if (e.key === 'ArrowLeft') {
    //   this.dx = -1;

    // } else if (e.key === 'ArrowDown') {
    //   this.dy = 1;

    // } else if (e.key === 'ArrowUp') {
    //   this.dy = -1;
    // } 

    let userInput = e.key;
    console.log(userInput)
    console.log(this.x)
    switch(userInput){
      case 'ArrowRight': if (this.x < 520) { this.x += 40; this.direction = 'right'} break;
      case 'ArrowLeft': if (this.x > 0) { this.x += 40; this.direction = 'left'} break;
      case 'ArrowDown': if (this.y < 0) { this.y += 40; this.direction = 'down'} break;
      case 'ArrowUp': if (this.y > 480) { this.y += 40; this.direction = 'up'} break;
    }
  }
}